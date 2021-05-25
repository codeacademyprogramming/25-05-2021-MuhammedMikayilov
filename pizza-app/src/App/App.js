import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Pizzas from "../components/Products/Pizza";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Pizzas />
      <Footer />
    </div>
  );
}

export default App;
