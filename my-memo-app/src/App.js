import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;
