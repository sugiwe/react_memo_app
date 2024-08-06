import React from "react";
import Memo from "./Memo";

export default function List({ memos, onAddClick, onMemoClick }) {
  const items = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onClick={onMemoClick} />
  ));

  return (
    <div className="list">
      <h1>メモ一覧</h1>
      <ul>{items}</ul>
      <button onClick={onAddClick}>＋</button>
    </div>
  );
}
