import AppStyle from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  return (
    <>
      <div className={`${AppStyle} `}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
