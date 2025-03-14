// loadYaml.ts

import fs from "node:fs";
import yaml from "js-yaml";
import type { DataSchema } from "../types/index";

// Function to load and parse YAML
export const loadYamlData = (filePath: string): DataSchema => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.load(fileContents) as DataSchema;
};
