import React, { useState, useEffect } from "react";

export default function Form({ setIsFormVisible, selectedMemo, saveMemos }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedMemo) {
      setContent(selectedMemo.content);
    }
  }, [selectedMemo]);

  const handleSaveClick = () => {
    if (selectedMemo) {
      saveMemos((prevMemos) => {
        const updatedMemos = prevMemos.map((memo) =>
          memo.id === selectedMemo.id ? { ...memo, content } : memo,
        );
        return updatedMemos;
      });
    } else {
      saveMemos((prevMemos) => {
        const newMemo = { id: Date.now(), content };
        const updatedMemos = [...prevMemos, newMemo];
        return updatedMemos;
      });
    }
    setIsFormVisible(false);
  };

  const handleDeleteClick = () => {
    if (selectedMemo) {
      saveMemos((prevMemos) => {
        const updatedMemos = prevMemos.filter(
          (memo) => memo.id !== selectedMemo.id,
        );
        return updatedMemos;
      });
    }
    setIsFormVisible(false);
  };

  const handleCloseClick = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="memo">
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSaveClick} disabled={!content.trim()}>
        {selectedMemo ? "更新" : "保存"}
      </button>
      {selectedMemo && <button onClick={handleDeleteClick}>削除</button>}
      <button onClick={handleCloseClick}>{"閉じる"}</button>
    </div>
  );
}
