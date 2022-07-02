#!/usr/bin/env bash

if [[ -z "${1}" ]]; then
  echo "no function name given"
  exit 1
fi

SNIPPETS_PATH=src/snippets
FUNCTION_PATH="${SNIPPETS_PATH}/${1}"
FUNCTION_FILE="${FUNCTION_PATH}/${1}.ts"
FUNCTION_TEST="${FUNCTION_PATH}/${1}.test.ts"

mkdir "$FUNCTION_PATH"

echo -e "import { ${1} } from './${1}';\n" >> "$FUNCTION_TEST"
echo -e "describe('${1}', () => {\n  test('should ', () => {\n    expect(${1}(null)).toEqual(null);\n  });\n});" >> "$FUNCTION_TEST"

echo -e "/**\n * ${1}\n * \n * \n */" >> "$FUNCTION_FILE"
echo -e "export function ${1}<T>(value: T): T {\n  return value;\n}" >> "$FUNCTION_FILE"

code "$FUNCTION_FILE" "$FUNCTION_TEST"