import fs from "fs";
import path from "path";

/* eslint-disable @typescript-eslint/no-explicit-any */
// PUBLIC_INTERFACE
export function getJSONContent<T = unknown>(fileName: string): T {
  "use server";
  const filePath = path.join(process.cwd(), "src/content", fileName);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

// PUBLIC_INTERFACE
export function getFrontmatter<T = unknown>(fileName: string, field: string): T {
  "use server";
  const filePath = path.join(process.cwd(), "src/content", fileName);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  // Simple frontmatter YAML extract
  const frontmatterRegEx = /^---\s*([\s\S]+?)---/;
  const match = rawContent.match(frontmatterRegEx);
  if (!match) throw new Error("No frontmatter found");
  const yamlPart = match[1];
  // Convert YAML to JS object (very basic, for demo)
  const lines = yamlPart.split("\n").filter(Boolean);
  const result: Record<string, object[]> = {};
  let currentKey: string | null = null;
  let currentArr: Record<string, string>[] = [];
  for (const line of lines) {
    const matchArr = line.match(/^(\w+):\s*$/);
    if (matchArr) {
      // New key with list
      if (currentKey) result[currentKey] = currentArr;
      currentKey = matchArr[1];
      currentArr = [];
    } else if (currentKey && line.trim().startsWith("-")) {
      // List item for current key
      // E.g., - title: "X" ...
      const obj: Record<string, string> = {};
      const props = line
        .replace(/^-/, "")
        .trim()
        .split(", ")
        .map((kv) => kv.split(":").map((x) => x.trim()));
      for (const [k, v] of props) {
        if (k && v) obj[k] = v.replace(/^"|"$/g, "");
      }
      currentArr.push(obj);
    }
  }
  if (currentKey) result[currentKey] = currentArr;
  return result[field] as T;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
