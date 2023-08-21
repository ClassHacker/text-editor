import React from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const TextEditor = () => {
  var modules = {
    toolbar: [
        [{ size: ["small", false, "large", "huge"]}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        ["link", "image"],
        [
            {list: "ordered"}, 
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"},
            {align: []}
        ],
        [{"color": ["#000000", "#e6000000", "#ff9900", "#ffff00"]}]
    ]
  };
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
