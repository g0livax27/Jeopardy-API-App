import { useState, useEffect } from "react";
import Header from "./components/Header";
import ShowPage from "./pages/ShowPage";

export default function App() {
    return(
        <div className="App">
            <Header/>
            <ShowPage/>
        </div>
    )
};