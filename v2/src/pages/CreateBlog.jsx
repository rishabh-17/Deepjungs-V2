import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import ImageUploading from "react-images-uploading";

export default function CreateBlog() {
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = React.useState([]);
  const [title, settitle] = React.useState("");
  const [author, setauthor] = React.useState("");
  const maxNumber = 1;
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };
  var formats = [
    "header",
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

  const handleProcedureContentChange = (content) => {
    setContent(content);
  };

  const handleSave = () => {
    if (content && images?.[0]) {
      axios
        .post("/api/v1/blog/create", {
          blog: content,
          thumbnail: images?.[0],
          title: title,
          author: author,
        })
        .then(() => {
          alert("Success");
        })
        .catch((err) => {
          alert("Error: ");
        });
    }
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <h1 className="my-4 font-bold text-2xl" style={{ textAlign: "center" }}>
        Create your blog here
      </h1>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          width: "100%",
          height: "1100px",
        }}
      >
        <div className="flex justify-between h-12">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-[45%] h-12 rounded-xl"
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            className="w-[45%] h-12 rounded-xl"
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="write your content ...."
          onChange={handleProcedureContentChange}
          style={{ height: "650px", width: "1250px", marginTop: "2px" }}
        />
        <div className="block">
          <h2 className="font-bold">Upload Thumbnail</h2>
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper my-5 p-5 border rounded-xl">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item grid">
                    <img src={image["data_url"]} alt="" width="150" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full h-10"
          style={{ color: "white" }}
          onClick={handleSave}
        >
          save
        </button>
      </div>
    </div>
  );
}
