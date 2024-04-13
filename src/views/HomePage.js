import logo from "../assets/logos/logo.png";
import "../styles/HomePage.css";
import Navbar from "./navigation/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-page-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}