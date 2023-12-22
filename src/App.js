import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">ỨNG DỤNG QUẢN LÝ BỆNH NHÂN CỦA HUY (BV)</h1>
      </header>
      <main>
        <div className="form-container">
          <Form />
        </div>
        <div className="user-list-container">
          <UserList />
        </div>
      </main>
    </div>
  );
}

export default App;
