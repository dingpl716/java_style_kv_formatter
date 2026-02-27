import { formatJavaStyleKV } from "./formatter";
import * as assert from "assert";

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`  PASS: ${name}`);
  } catch (e: any) {
    console.error(`  FAIL: ${name}`);
    console.error(`    ${e.message}`);
    process.exitCode = 1;
  }
}

console.log("Running formatter tests...\n");

test("empty input", () => {
  assert.strictEqual(formatJavaStyleKV(""), "");
  assert.strictEqual(formatJavaStyleKV("   "), "");
});

test("single map entry", () => {
  const input = "{key=foo, value=bar}";
  const expected = [
    "{",
    "  key=foo,",
    "  value=bar",
    "}",
  ].join("\n");
  assert.strictEqual(formatJavaStyleKV(input), expected);
});

test("nested structure", () => {
  const input = "{key=foo, value={values=[1, 2]}}";
  const expected = [
    "{",
    "  key=foo,",
    "  value={",
    "    values=[",
    "      1,",
    "      2",
    "    ]",
    "  }",
    "}",
  ].join("\n");
  assert.strictEqual(formatJavaStyleKV(input), expected);
});

test("list of maps", () => {
  const input = "[{key=a, value=1}, {key=b, value=2}]";
  const expected = [
    "[",
    "  {",
    "    key=a,",
    "    value=1",
    "  },",
    "  {",
    "    key=b,",
    "    value=2",
    "  }",
    "]",
  ].join("\n");
  assert.strictEqual(formatJavaStyleKV(input), expected);
});

test("values with slashes and spaces", () => {
  const input = "{key=user_iab, value={values=[Credit and Debt Repair/Credit Reporting_2, Construction_5]}}";
  const expected = [
    "{",
    "  key=user_iab,",
    "  value={",
    "    values=[",
    "      Credit and Debt Repair/Credit Reporting_2,",
    "      Construction_5",
    "    ]",
    "  }",
    "}",
  ].join("\n");
  assert.strictEqual(formatJavaStyleKV(input), expected);
});

test("sample from README", () => {
  const input = "[{key=user_format_imp_30d, value={values=[8308485221174584350]}}, {key=user_type_imp_7d, value={values=[-8654208465021176385, 8539309223978587676]}}]";
  const expected = [
    "[",
    "  {",
    "    key=user_format_imp_30d,",
    "    value={",
    "      values=[",
    "        8308485221174584350",
    "      ]",
    "    }",
    "  },",
    "  {",
    "    key=user_type_imp_7d,",
    "    value={",
    "      values=[",
    "        -8654208465021176385,",
    "        8539309223978587676",
    "      ]",
    "    }",
    "  }",
    "]",
  ].join("\n");
  assert.strictEqual(formatJavaStyleKV(input), expected);
});

console.log("\nDone.");
