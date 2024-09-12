import React, { useState, useEffect } from "react";
import "./MemoApp.css";
import List from "./List";
import Form from "./Form";

const loadMemosFromLocalStorage = () => {
  const savedMemos = localStorage.getItem("memos");
  return savedMemos ? JSON.parse(savedMemos) : [];
};

export default function MemoApp() {
  const [memos, setMemos] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    const initialMemos = loadMemosFromLocalStorage();
    setMemos(initialMemos);
  }, []);

  const saveMemos = (newMemos) => {
    setMemos(newMemos);
    localStorage.setItem("memos", JSON.stringify(newMemos));
  };

  const handleSave = (content) => {
    if (selectedMemo) {
      saveMemos(
        memos.map((memo) =>
          memo.id === selectedMemo.id ? { ...memo, content } : memo,
        ),
      );
    } else {
      const newMemo = { id: Date.now(), content };
      saveMemos([...memos, newMemo]);
    }
  };

  const handleDelete = (id) => {
    saveMemos(memos.filter((memo) => memo.id !== id));
  };

  const showForm = (memo = null) => {
    setSelectedMemo(memo);
    setIsFormVisible(true);
  };

  const handleMemoClick = (memo) => {
    showForm(memo);
  };

  const handleAddClick = () => {
    showForm();
  };

  return (
    <div className="MemoApp">
    <header>
      <div className="header-left">
        <p>MeMoo!!</p>
      </div>
      <div className="header-right">
        <button>ログイン</button>
      </div>
    </header>
      <List
        memos={memos}
        onAddClick={handleAddClick}
        onMemoClick={handleMemoClick}
      />
      {isFormVisible && (
        <Form
          setIsFormVisible={setIsFormVisible}
          selectedMemo={selectedMemo}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
