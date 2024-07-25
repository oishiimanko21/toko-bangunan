import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Service from './components/Service';
import Isiservice from './components/Isiservice';
import TextService from './components/TextService';
import About from './components/About';
import DescAbout from './components/DescAbout';
import VMSAbout from './components/VMSAbout';
import ContactUs from './components/ContactUs';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      {/* end of intro */}

      {/* service section */}
      <div className="serviceBG">
        <Service/>
        <Isiservice/>
        <TextService/>
      </div>
      {/* end of service */}

      {/* about section */}
      <div className="aboutBG">
        <About/>
        <DescAbout/>
        <VMSAbout/>
      </div>
      {/* end of about */}

      {/* contact section */}
      <div className="contactBG">
          <ContactUs />
      </div>
      {/* end of contact */}
    </div>
  );
}

export default App;