import React, { useState, useEffect } from 'react';
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

  const saveMemos = (updateFn) => {
    setMemos((prevMemos) => {
      const newMemos = updateFn(prevMemos);
      localStorage.setItem("memos", JSON.stringify(newMemos));
      return newMemos;
    });
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
      <List memos={memos} onAddClick={handleAddClick} onMemoClick={handleMemoClick} />
      {isFormVisible && (
        <Form
          setIsFormVisible={setIsFormVisible}
          selectedMemo={selectedMemo}
          saveMemos={saveMemos}
        />
      )}
    </div>
  );
}
