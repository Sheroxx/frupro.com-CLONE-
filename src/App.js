import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import 'typeface-poppins';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
    return (
        <div className="App">
            <NavbarComp />
        </div>
    );
}

export default App;