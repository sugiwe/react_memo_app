import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function Form({
  setIsFormVisible,
  selectedMemo,
  onSave,
  onDelete,
}) {
  const [content, setContent] = useState("");
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (selectedMemo) {
      setContent(selectedMemo.content);
    }
  }, [selectedMemo]);

  const handleSaveClick = () => {
    if (content.trim()) {
      onSave(content);
      setIsFormVisible(false);
    }
  };

  const handleDeleteClick = () => {
    if (selectedMemo) {
      onDelete(selectedMemo.id);
    }
    setIsFormVisible(false);
  };

  const handleCloseClick = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="memo">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={!isLoggedIn}
      />
      {isLoggedIn && (
        <button onClick={handleSaveClick} disabled={!content.trim()}>
          {selectedMemo ? "更新" : "保存"}
        </button>
      )}
      {isLoggedIn && selectedMemo && (
        <button onClick={handleDeleteClick}>削除</button>
      )}
      <button onClick={handleCloseClick}>{"閉じる"}</button>
    </div>
  );
}
