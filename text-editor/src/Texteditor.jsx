import React from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const TextEditor = () => {
  var modules = {};
  var formats = [
    "headers",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];
  const onContentChange = (content) => {
    console.log("content-->", content);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Text Editor using React</h1>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Start writing your blog..."
          onChange={onContentChange}
          style={{ height: "350px", width: "720px" }}
        ></ReactQuill>
      </div>
    </div>
  );
};

export default TextEditor;
