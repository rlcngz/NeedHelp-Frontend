import React, { useState } from "react";

import "./styles.css";

function CommentBox() {
  // const [setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };
  const onClose = () => {
    setCommentValue("");
    // setIsExpanded(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("send the form data somewhere");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="comment">What are your thoughts?</label>
        <textarea
          onChange={onChange}
          className="comment-field"
          placeholder="What are your thoughts?"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Respond
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
