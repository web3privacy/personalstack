type User = {
  name: string;
  avatar: string;
  company: string;
};

type StackItem = {
  category: string;
  name: string;
  logo: string;
};

type Stack = {
  user: User;
  items: StackItem[];
};

export type { Stack, User, StackItem };
