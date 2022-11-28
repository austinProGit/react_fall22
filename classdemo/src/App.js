import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar"



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <MainBody></MainBody>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
