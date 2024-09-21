import React from "react";
import Memo from "./Memo";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function List({ memos, onAddClick, onMemoClick }) {
  const { isLoggedIn } = useContext(LoginContext);

  const items = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onClick={onMemoClick} />
  ));

  return (
    <div className="list">
      <h1>メモ一覧</h1>
      <ul>{items}</ul>
      {isLoggedIn && <button onClick={onAddClick}>＋</button>}
    </div>
  );
}
