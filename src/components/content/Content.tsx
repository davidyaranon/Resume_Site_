import "./Content.css";

import Home from "./pages/Home";
import Kratos from "./pages/Kratos";
import CPHHA from "./pages/CPHHA";
import Tellu from "./pages/Tellu";
import Humspot from "./pages/Humspot";
import Sculoo from "./pages/Sculoo";

const Content: React.FC = () => {
  return (
    <div className="main-body">
      <div className="scroll-container" id="scroll-container-">
        <div id="homePage">
          <Home />
        </div>
        <br />
        <div id="kratosPage">
          <Kratos />
        </div>
        <br />
        <div id="cphhaPage">
          <CPHHA />
        </div>
        <br />
        <div id="sculooPage">
          <Sculoo />
        </div>
        <br />
        <div id="telluPage">
          <Tellu />
        </div>
        <br />
        <div id="HumspotPage">
          <Humspot />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Content;
