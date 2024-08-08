import './App.css'
import tik from '/src/img/Check.png'
import trash from '/src/img/TrashSimple.png'
import plus from '/src/img/Plus.png'

function App() {
  return (
    <div className="container">
    <form className="todoForm" autocomplete="off">
      <input type="text" name="todo" placeholder="Yeni bir görev ekle" id="todoTxt" required />
      <button id="ekleBtn"><img src={plus} /></button>
    </form>
    <div className="todoText">
      <h5>Yapılacak görevler - <span className="activeTodoCount">0</span></h5>
      <ul className="todoList">
        <li>To study React fundamentals <p><TikButton /><TrashButton /></p></li>
      </ul>
    </div>
  </div>
  )
  function TikButton() {
    return (
      <button><img src={tik} /></button>
    );
  }
  function TrashButton() {
    return (
      <button><img src={trash} /></button>
    );
  }
}

export default App
