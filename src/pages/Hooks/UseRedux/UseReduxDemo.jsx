import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../../redux/reducers/fakebookAppReducer";
export default function UseReduxDemo() {
  const { arrComment } = useSelector((state) => state.fakebookAppReducer);
  const dispatch = useDispatch();
  const userCommentRef = useRef({
    username: "",
    content: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    userCommentRef.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     *
     */
    //Dung dispatch tu useDispatch de gui du lieu lenr redux
    let newComment = { ...userCommentRef.current };
    dispatch(addComment(newComment));
  };
  console.log(arrComment);
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Fake Book App</h3>
      <div className="card">
        <div className="card-header bg-dark text-white">User Chat</div>
        <div className="card-body">
          {arrComment.map((comment, index) => {
            return (
              <div className="d-flex" key={index}>
                <div style={{ width: "100px" }}>
                  <img
                    src={`https://i.pravatar.cc?u=${comment.username}`}
                    alt="..."
                    className="w-100"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-danger">{comment.username}</h3>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="form-group">
        <p>User Name</p>
        <input
          className="form-control"
          type="text"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-2">
        <p>Content</p>
        <input
          className="form-control"
          type="text"
          id="content"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">
          Comment
        </button>
      </div>
    </form>
  );
}
