import './Content.css';

import Home from './pages/Home';
import Tellu from './pages/Tellu';

// import { useMyContext } from '../../my-context';
import Kratos from './pages/Kratos';
import CPHHA from './pages/CPHHA';

const Content: React.FC = () => {

  return (
    <div className='main-body'>
      <div className='scroll-container'>
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
      </div>
    </div>
  )
};

export default Content;