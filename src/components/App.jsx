import "@/styles/App.scss";
import Header from "@/components/header/Header";
import Wip from "@/components/wip/Wip";
import Footer from "@/components/wip/Footer";

function App() {
  return (
    <div className="screen">
      {/* <Header /> */}
      <main>
        <Wip />
      </main>
      <Footer />
    </div>
  );
}

export default App;
