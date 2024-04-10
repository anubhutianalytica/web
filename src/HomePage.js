import logo from "./logo.png";
import "./HomePage.css";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-page-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You will be seeing more soon...</p>
      </div>
    </>
  );
}