// import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./components/Home/index"
import AirportInfo from "./components/AirportInfo/index"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/airport/" Component={AirportInfo}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;