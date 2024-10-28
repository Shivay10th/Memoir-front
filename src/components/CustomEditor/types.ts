import { Node } from "slate";

export type NodeWithType = Node & {
  type: string | null;
};
