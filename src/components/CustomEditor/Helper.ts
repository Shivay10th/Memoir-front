import { Editor, BaseEditor, Transforms, Element } from "slate";
import { ReactEditor } from "slate-react";
import { NodeWithType } from "./types";

const Helper = {
  isBoldMarkActive(editor: BaseEditor & ReactEditor) {
    const marks = Editor.marks(editor) as Record<string, any>;
    console.log(marks);

    return marks ? !!marks["bold"] : false;
  },
  isCodeBlockActive(editor: BaseEditor & ReactEditor) {
    const [match] = Editor.nodes<NodeWithType>(editor, {
      match: (n: any) => n.type === "code",
    });
    console.log(match);

    return !!match;
  },

  toggleBoldMark(editor: BaseEditor & ReactEditor) {
    const isActive = this.isBoldMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor: BaseEditor & ReactEditor) {
    const isActive = this.isCodeBlockActive(editor);
    console.log(isActive);

    Transforms.setNodes<NodeWithType>(
      editor,
      { type: isActive ? null : "code" },
      { match: (n: any) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },
};

export default Helper;
