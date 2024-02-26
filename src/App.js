import "./App.css";
import Header from "./components/Header";
import States from "./components/States";
import CheckNumber from "./components/Condition";
import Ilyas from "./components/Ilyas";
import Keys from "./components/keys/Keys";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products/Products";
import { Container } from 'react-bootstrap';
import Effects from "./components/Effects/Effects";

function App() {
  const states=[{name:"kerala",language:"Malayalam"},
  {name:"goa",language:"English"},
  
]


  return (
    <div className="App">
      {/* <Header/> */}
      {/* <States name={"kerala"} lang={"malayalam"} />
      <States name={"karnataka"} lang={"kannada"}/> */}
      {/* <States states={states}/>
      <CheckNumber/>
      <Ilyas/> */}
      {/* <Keys/> */}
      <Container>
      {/* <Products/> */}
      {<Effects/>}
      </Container>
    </div>
  );
}

export default App;
