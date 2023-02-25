import React from 'react';
import { About, Skills, Footer, Header, Work, Testimonials } from './container';
import { Navbar } from "./components";
const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
};

export default App;