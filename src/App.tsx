import React, {ReactElement} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App(): ReactElement {
    return (
        <div className="flex flex-col w-screen min-h-screen justify-between bg-black font-main">
            <Header/>
            <AnimatedRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
