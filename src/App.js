import "./App.css";
import Header from "./components/Header";
import States from "./components/States";
import CheckNumber from "./components/Condition";
import Changecolor from "./components/Changecolor";
import Keys from "./components/keys/Keys";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products/Products";
import { Container } from 'react-bootstrap';
import Effects from "./components/Effects/Effects";
import Counter from "./components/counter/Counter";
import Form from "./components/Forms";
import Main from "./components/pages/Main";
import OpenModal from "./components/openmodal";


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
      <Changecolor/> */}
      {/* <Keys/> */}
      <Container>
      <Products/>
      {/* {<Effects/>} */}
      </Container>
      {/* {<Counter/>}
      {<Form/>} */}
      {/* <Main/>
      <OpenModal/> */}
    </div>
  );
}

export default App;
