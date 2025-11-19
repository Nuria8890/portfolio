import "@/styles/App.scss";
import Wip from "@/components/wip/Wip";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <div className="screen">
      <main>
        <Wip />
      </main>
      <Footer />
    </div>
  );
}

export default App;
