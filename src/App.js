import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PageOne from "./PageOne";
import {useState} from "react";
import PageTwo from "./PageTwo";

function App() {
    const [text, setText] = useState('');
    const [value, setValue] = useState('')
    const submit = () => {
        setText(value);
    }
  return (

    <div className="App">
     <Routes>
         <Route path='/' element={<PageOne submit={submit}
                                           text={text}
                                           value={value}
                                           setValue={setValue}
         />}/>
         <Route path='two' element={<PageTwo text={text}/>}/>
     </Routes>
    </div>
  );
}

export default App;
