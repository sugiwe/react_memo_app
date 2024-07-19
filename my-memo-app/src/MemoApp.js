import './MemoApp.css';

function MemoApp() {
  return (
    <div className="MemoApp">
      <div className="list">
        <ul>
          <li>メモ1</li>
          <li>メモ2</li>
          <li>メモ3</li>
          <li>＋</li>
        </ul>
      </div>
      <div className="memo">
        <textarea />
        <button>更新</button>
        <button>削除</button>
      </div>
    </div>
  );
}

export default MemoApp;
