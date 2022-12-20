import {Route, Routes} from "react-router-dom";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path='/'
                element={<PageOne />}/>
         <Route path='two'
                element={<PageTwo />}/>
     </Routes>
    </div>
  );
}

export default App;
