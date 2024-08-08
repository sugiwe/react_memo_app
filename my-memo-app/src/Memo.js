import React from "react";

export default function Memo({ memo, onClick }) {
  const title = memo.content.split("\n")[0];

  return <li onClick={() => onClick(memo)}>{title}</li>;
}
