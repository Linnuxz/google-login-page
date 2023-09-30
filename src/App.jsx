import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-center m-0 items-center text-['arial']">
            <div>
                <Card />
                <div className="mt-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
