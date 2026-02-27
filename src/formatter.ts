const INDENT = "  ";

export function formatJavaStyleKV(input: string): string {
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    return "";
  }

  let depth = 0;
  let result = "";
  let i = 0;

  while (i < trimmed.length) {
    const ch = trimmed[i];

    if (ch === "[" || ch === "{") {
      result += ch;
      depth++;
      result += "\n" + INDENT.repeat(depth);
      i++;
    } else if (ch === "]" || ch === "}") {
      depth--;
      result += "\n" + INDENT.repeat(depth) + ch;
      i++;
    } else if (ch === "," && i + 1 < trimmed.length && trimmed[i + 1] === " ") {
      result += ",\n" + INDENT.repeat(depth);
      i += 2; // skip the comma and the space
    } else {
      result += ch;
      i++;
    }
  }

  return result;
}
