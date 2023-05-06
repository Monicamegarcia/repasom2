import './App.css';
import Landing from "./components/Landing";
import {Routes, Route} from "react-router-dom";
import Form from "./components/Form";
import Characters from "./components/Characters";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Landing/>}/>
        <Route path="/login" element={<Form/>} />
        <Route path="/home" element={<Characters/>} />
        <Route path="/detail/:id" element={<Detail/>} />

      </Routes>
    
    </div>
  );
}

export default App;
