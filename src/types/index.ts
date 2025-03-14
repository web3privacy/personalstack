// type User = {
//   name: string;
//   avatar: string;
//   company: string;
// };

// type StackItem = {
//   category: string;
//   name: string;
//   logo: string;
// };

// type Stack = {
//   user: User;
//   items: StackItem[];
// };

// types.ts

export interface ToolDetail {
  name: string;
  url: string;
  image?: string;
}

export interface ToolCategory {
  [key: string]: ToolDetail;
}

export interface Tools {
  [category: string]: ToolCategory;
}

export interface StackTools {
  [category: string]: string;
}

export interface Stack {
  id: string;
  name: string;
  org: string;
  avatar: string;
  tools: StackTools;
}

export interface Stacks {
  [person: string]: Stack;
}

export interface DataSchema {
  tools: Tools;
  stacks: Stacks;
}
