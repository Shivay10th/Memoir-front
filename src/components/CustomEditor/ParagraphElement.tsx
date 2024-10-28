const ParagraphElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>;
};
export default ParagraphElement;
