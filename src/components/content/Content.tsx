import './Content.css';

import Home from './pages/Home';
import Kratos from './pages/Kratos';
import CPHHA from './pages/CPHHA';
import Tellu from './pages/Tellu';
import HumboldtHill from './pages/HumboldtHill';

const Content: React.FC = () => {

  return (
    <div className='main-body'>
      <div className='scroll-container' id='scroll-container-'>
        <div id='homePage'>
          <Home />
        </div>
        <br />
        <div id='kratosPage'>
          <Kratos />
        </div>
        <br />
        <div id='cphhaPage'>
          <CPHHA />
        </div>
        <br />
        <div id='telluPage'>
          <Tellu />
        </div>
        <br />
        <div id='HumboldtHillPage'>
          <HumboldtHill />
        </div>
        <br />
      </div>
    </div>
  )
};

export default Content;