import ClassComponent from "./components/ClassComponent";
import FunctionalComponents from "./components/FunctionalComponents";

function App() {
  const objetoRandom = {
    randomClase: "Soy un prop de clase pasado a Mock",
    randomFuncional: "Soy un prop funcional pasado a Mock",
  }
  return (
    <>
      <ClassComponent objeto={objetoRandom.randomClase}/>
      <FunctionalComponents objeto={objetoRandom.randomFuncional}/>
    </>
  )
}

export default App
