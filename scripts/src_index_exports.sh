#!/usr/bin/env bash

# Shared lib index.ts exports
#
# This script automatically handles exporting all the required exports
# in

MAIN_INDEX_DIR="${1:-src}"

TS_SUFIXES=(
  fn
  function
  interface
  enum
  type
  const
  class
)

function regex_group_ors() {
  ORS=''
  for i in $@; do
    ORS="$ORS\\|$i"
  done
  echo "$ORS"
}

EXPORT_FILE_SUFIX_REGEX=".*\\.\\($(regex_group_ors ${TS_SUFIXES[@]})\\)\\.ts\$"
export EXPORT_FILE_SUFIX_REGEX

function contains_exportable() {
  [[ "$(find "$1" -mindepth "${3:-2}" -maxdepth "${2:-2}" -regex "$EXPORT_FILE_SUFIX_REGEX" | sed '/^$/d' | wc -l)" -gt '0' ]]
}

function cut_dir_sub() { dirname "$1" | cut -d '/' -f "${2:-2}"; }
function is_dir_dot() { [[ "$1" == "./"* ]]; }
function is_dir_dot_pwd() { [[ "$(cut_dir_sub "$1")" = '.' ]]; }
function is_dir_pwd() { [[ "$(cut_dir_sub "$1" 1)" = '.' ]]; }
function add_dot_prefix() {
  if is_dir_dot "$1"; then
    echo "$1"
  else
    echo "./$1"
  fi
}
function first_path_level() {
  if is_dir_dot "$1" && ! is_dir_dot_pwd "$1"; then
    add_dot_prefix "$(cut_dir_sub "$1" 2)"
  elif ! is_dir_dot "$1" && ! is_dir_pwd "$1"; then
    add_dot_prefix "$(cut_dir_sub "$1" 1)"
  else
    add_dot_prefix "$1"
  fi
}

function filter_exportable() {
  EXPORTABLE_FILE_PATHS=''
  while read -r subdir_exports; do
    EXPORTABLE_FILE_PATHS="${EXPORTABLE_FILE_PATHS} $(first_path_level "$subdir_exports")"
  done <<<"$(find "$3" -mindepth "$2" -maxdepth "$1" -regex "$EXPORT_FILE_SUFIX_REGEX" -exec dirname {} \; | uniq)"
  tr ' ' "\n" <<<"$EXPORTABLE_FILE_PATHS" | sort | uniq | sed '/^$/d'
}

function subdir_export() {
  SUBDIRS_FIND="$(filter_exportable '4' '2' '.')"
  if [[ "$(wc -l <<<"$SUBDIRS_FIND")" -gt '0' ]]; then
    while read -r export_sub_dir; do
      echo "export * from '$(add_dot_prefix "$export_sub_dir")';" >>"index.ts"
      index_exports_for_dir "$export_sub_dir"
    done <<<"$SUBDIRS_FIND"
  else
    echo "no exportable subdirs found in $(pwd)"
  fi
}

function index_exports_for_dir() {
  if contains_exportable "$1" '5' '2'; then
    (
      cd "$1" && subdir_export
    )
  fi
  while read -r current_dir_export_file; do
    if [[ -n "$current_dir_export_file" ]]; then
      echo "export * from '$(add_dot_prefix "$(basename -s '.ts' "$current_dir_export_file")")';" >>"${1}/index.ts"
    fi
  done <<<"$(find "$1" -maxdepth 1 -regex "$EXPORT_FILE_SUFIX_REGEX")"
}

echo -e "Remove these files first:"
while read -r delete_index; do
  grep -o "${MAIN_INDEX_DIR}/.*" <<<"$delete_index"
  rm "$delete_index"
done <<<"$(find "${MAIN_INDEX_DIR}" -name 'index.ts' | sort -d)"
echo -e "\nRun the recursive exporter"
index_exports_for_dir "$MAIN_INDEX_DIR"

echo -e "\nSort and pretify the generated files:"
while read -r beautify_index; do
  grep -o 'src/.*' <<<"$beautify_index"
  echo -e "$(sort -d "$beautify_index")" >"$beautify_index"
done <<<"$(find "${MAIN_INDEX_DIR}" -name 'index.ts' | sort -d)"
node_modules/.bin/prettier -w "${MAIN_INDEX_DIR}/"**/index.ts
