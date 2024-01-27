import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <Form />
      </main>
    </div>
  );
}

export default App;
