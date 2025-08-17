import AppStyle from "./App.module.css";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <div className={`${AppStyle} `}>
        <Header />
        <div></div>
      </div>
    </>
  );
}

export default App;
