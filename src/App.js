import logo from "./logo.svg";
import img from "./img.webp"
import "./App.css";
import ChatBot from "./ChatBot";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
        </header>
      </div>
      <ChatBot />
    </>
  );
}

export default App;
