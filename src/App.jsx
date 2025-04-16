import Header from "./Header.jsx";
import Footer from "./Footert.jsx";
import Content from "./Contenttemp.jsx";
import ExtraCards from "./ExtraCards.jsx";

function App() {
  return (
    <>
      <Header />

     
      <ExtraCards />

      
      <div className="content-container flex justify-center items-center p-6">
        <Content
          name="Pikachu"
          para="An Electric-type Pokémon, full of energy!"
          age={90} 
          Gender={true}
          isgood={true} 
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
