import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BackBtn } from "../atoms/BackBtn";
import { AddPostTemplate } from "../template/AddPostTemplate";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { validateName } from "../helper/helpers";
import { InputCommon } from "../atoms/InputCommon";
import { sendPostAction } from "../../core";

export const AddPost = memo(() => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lessonNum, setLessonNum] = useState("");
  const [images, setImages] = useState<ImageListType>([]);

  const isValidTitle = validateName(title);
  const isValidText = validateName(text);
  const isValidLessonNum = validateName(lessonNum);

  const isValid =
    isValidTitle && isValidText && isValidLessonNum && Boolean(images.length);

  const sendPost = () => {
    dispatch(
      sendPostAction({
        title,
        text,
        image: images[0],
        lesson_num: Number(lessonNum),
      })
    );
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex?: Array<number>
  ) => {
    // data for submit

    console.log({ imageList, addUpdateIndex });
    setImages(imageList);
  };

  const history = useHistory();
  const addImg = () => {
    history.push("/");
  };
  const backBtn = () => {
    history.push("/all-posts");
  };

  return (
    <div className="add-post-wrapper">
      <AddPostTemplate
        titleBlock={
          <div className="add-post-title">
            <BackBtn text={"< Back"} onClick={backBtn} />
            <div className="add-new-post-title">
              <h2>{"Add new post"}</h2>
            </div>
          </div>
        }
        mainBlock={
          <>
            <div className="add-post-inputs">
              <div>
                <InputCommon
                  value={title}
                  onChangeHandler={(text: string) => setTitle(text.trim())}
                  title={"Title"}
                  isValid={isValidTitle}
                />
                <InputCommon
                  value={text}
                  onChangeHandler={(text: string) => setText(text.trim())}
                  title={"Text"}
                  isValid={isValidText}
                />
                <InputCommon
                  value={lessonNum}
                  onChangeHandler={(text: string) => setLessonNum(text.trim())}
                  title={"Lesson number"}
                  isValid={isValidLessonNum}
                />
              </div>
              <div className="add-post-inputs-img">
                <h4>Image</h4>
              </div>
              <div className="add-post-inputs-img">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
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
                    <div className="upload__image-wrapper">
                      {!images.length && (
                        <button
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                      )}
                      &nbsp;
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img
                            src={image["data_url"]}
                            alt=""
                            width="400"
                            height="400"
                          />
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
            </div>
            <div className="add-post-main-input">
              <Button text={"Add"} isValid={isValid} onClick={sendPost} />
            </div>
          </>
        }
      />
    </div>
  );
});
