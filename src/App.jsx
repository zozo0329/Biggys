import AppStyle from "./App.module.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SilogModal from "./Components/UI/Modal/SilogModal/SilogModal";
function App() {
  return (
    <>
      <div className={`${AppStyle} `}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
