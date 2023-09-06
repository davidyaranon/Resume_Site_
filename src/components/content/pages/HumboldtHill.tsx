

import './Page.css';

import TypescriptLogo from '../../../assets/typescript-logo.png';
import ReactLogo from '../../../assets/react-logo.png';
import MongoDb from '../../../assets/mongodb_logo.png';
import Cplusplus from '../../../assets/c++-logo.png';
import HillLogo from '../../../assets/hill-logo.png';
import Crow from '../../../assets/crow_logo.png';
import ViteLogo from '../../../assets/vite-logo.png';
import AWSLogo from '../../../assets/aws-loho.png';

import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import usePageVisibility from '../../hooks/usePageVisibility';
import { handleClick } from './Click';

const HumboldtHill: React.FC = () => {

  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('HumboldtHill');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='HumboldtHill'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>Humboldt Hill Country Club Site</h1>
              <br />
              <p>
                Welcome to the official digital home of Humboldt Hill Country Club—a sanctuary where luxury meets natural beauty, providing an unparalleled leisure experience for our exclusive members.
              </p>
              <br />
              <p>
                Browse through our array of world-class amenities, read testimonials from our esteemed members, and stay updated with our exclusive events and offerings. Hosted on AWS using a MongoDB C++ backend, React frontend.
              </p>
              <br />
              <p className='p-title'>Built With:</p>
              <div className='stack-logos'>
                <ul>
                  <li>
                    <a role='button' href='https://capacitorjs.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='C++ Logo' src={Cplusplus} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.mongodb.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='MongoDB Logo' src={MongoDb} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://crowcpp.org/master/' target='_blank' rel="noopener noreferrer">
                      <img alt='Crow Logo' src={Crow} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://react.dev/' target='_blank' rel="noopener noreferrer">
                      <img alt='React Logo' src={ReactLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.typescriptlang.org/' target='_blank' rel="noopener noreferrer">
                      <img alt='Typescript Logo' src={TypescriptLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://vitejs.dev/' target='_blank' rel="noopener noreferrer">
                      <img alt='Vite Logo' src={ViteLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://aws.amazon.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Amazon AWS Logo' src={AWSLogo} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <p><a className={'HumboldtHill'} href="https://tellu-app.com" target='_blank' rel="noopener noreferrer">View Site</a>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <a className={'HumboldtHill'} href="https://github.com/tellUapp/Humboldt_Hill_Country_Club/tree/master" target='_blank' rel="noopener noreferrer">Github</a></p>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="humboldt-hill-page-iframe-wrapper">
                <img className='small-width' id='humboldtHillLogo' style={{ borderRadius: '7.5px' }} draggable={false} src={HillLogo} alt="Humboldt Hill Country Club Logo" />
              </div>
            </div>
          </div>
        </div>
        <br />

      </FadeIn>
      <div className="next-page-button" id="humboldt-hill-arrow-buttons-container">
        <button className='humboldt-hill-arrow-buttons' onClick={(e) => { handleClick(e, 'tellU') }}>&larr; tellU</button>
        <button className='humboldt-hill-arrow-buttons' onClick={(e) => { handleClick(e, 'MORE') }}>More &rarr;</button>
      </div>
    </>
  )
};

export default HumboldtHill;