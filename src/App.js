import AdoptPet from "./components/AdoptPet";
import PetlyFooter from "./components/PetlyFooter";
import PetlyNavbar from "./components/PetlyNavbar";
import PetlyUpdate from "./components/PetlyUpdate";
import AdoptLuna from "./page/AdoptLuna";





function App() {
  return (
    <>
     <PetlyNavbar/>
     <AdoptPet/>
     <PetlyUpdate/>
     <PetlyFooter/>
     <AdoptLuna/>
    </>
  );
}

export default App;
