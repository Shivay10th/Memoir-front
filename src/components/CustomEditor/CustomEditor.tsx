import { useCallback, useState } from "react";
import { createEditor, Editor, Transforms, Element } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import CodeElement from "./CodeElement";
import ParagraphElement from "./ParagraphElement";
import Helper from "./Helper";

const Leaf = (props: any) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

const CustomEditor = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];

  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <ParagraphElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: any) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <button onClick={() => Helper.toggleBoldMark(editor)}>B</button>
      <button onClick={() => Helper.toggleCodeBlock(editor)}>C</button>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              Helper.toggleCodeBlock(editor);
              break;
            }

            case "b": {
              event.preventDefault();

              Helper.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

export default CustomEditor;
