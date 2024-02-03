import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Wrapper from "./Wrapper";

function App() {
    return (
        <>
            <Wrapper>
                <Navbar />
                <Outlet />
                <Footer />
            </Wrapper>
        </>
    );
}

export default App;
