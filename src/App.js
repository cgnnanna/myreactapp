import logo from "./images/logo.svg";
import mockUp from "./images/illustration-mockups.svg";
import './App.css';

function App() {

  return (
    <>
      <header>
        <img src={logo} alt="Header Logo"/>
      </header>
      <main>
        <img src={mockUp} alt="Mockup Logo"/>
        <div className="content">
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience. 
            Create connections with your users and engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </main>
      <footer>
        <div className="footer-icon-wrapper">
          <div className="icon-block"><i className="fab fa-facebook-f icon-white"></i></div>
          <div className="icon-block"><i className="fab fa-twitter icon-white"></i></div>
          <div className="icon-block"><i className="fab fa-instagram icon-white"></i></div>
        </div>
      </footer>
    </>
  );
}

export default App;
