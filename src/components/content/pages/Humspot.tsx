

import './Page.css';

import TypescriptLogo from '../../../assets/typescript-logo.png';
import ReactLogo from '../../../assets/react-logo.png';
import AWSLogo from '../../../assets/aws-loho.png';
import AWSLambdaLogo from '../../../assets/lambda.png';
import XCodeLogo from '../../../assets/xcode_logo.png';
import CapacitorLogo from '../../../assets/capacitorjs-logo.svg';
import IonicLogo from '../../../assets/ionic_loho.avif';
import HumspotLogo from '../../../assets/Humspot.png';

import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import usePageVisibility from '../../hooks/usePageVisibility';
import { handleClick } from './Click';

const Humspot: React.FC = () => {

  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('Humspot');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='Humspot'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>Humspot App</h1>
              <br />
              <p>
                Welcome to Humspot, your ultimate guide to all things exciting in Humboldt County!
                This app is your digital passport to discovering and exploring the best events,
                most intriguing places, and must-see attractions.
              </p>
              <br />
              <p>
                Dive into a rich collection of experiences, from vibrant festivals and events to breathtaking
                natural sites and cultural landmarks. Humspot brings Humboldt County to your fingertips!
              </p>
              <br />
              <p className='p-title'>Built With:</p>
              <div className='stack-logos'>
                <ul>
                  <li>
                    <a role='button' href='https://react.dev/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - React Logo' src={ReactLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.typescriptlang.org/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Typescript Logo' src={TypescriptLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://ionicframework.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Ionic Logo' src={IonicLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://capacitorjs.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Capacitor Logo' src={CapacitorLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://developer.apple.com/xcode/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Xcode Logo' src={XCodeLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://aws.amazon.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - AWS Logo' src={AWSLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://aws.amazon.com/lambda/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - AWS Lambda Logo' src={AWSLambdaLogo} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                <p><a className={'Humspot'} href="https://humspotapp.com" target='_blank' rel="noopener noreferrer">About Site (In Progress) </a></p>
                <p><a className={'Humspot'} /* href="https://tellu-app.com" target='_blank' rel="noopener noreferrer" */ style={{ opacity: 0.5 }}>iOS App Store Listing</a></p>
                <p><a className={'Humspot'} href="https://github.com/Humspot/Humspot/tree/HUMSPOT-68-iOS-version-of-app" target='_blank' rel="noopener noreferrer">Github</a></p>
              </div>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="tellu-page-iframe-wrapper">
                <img style={{ borderRadius: '7.5px' }} draggable={false} src={HumspotLogo} alt="David Yaranon - Humspot App Logo" />
              </div>
            </div>
          </div>
        </div>
        <br />

      </FadeIn>
      <div className="next-page-button" id="humspot-arrow-buttons-container">
        <button className='humspot-arrow-buttons' onClick={(e) => { handleClick(e, 'tellU') }}>&larr; tellU</button>
        <button className='humspot-arrow-buttons' disabled={true} style={{ opacity: "0.5" }} onClick={(e) => { handleClick(e, 'MORE') }}>More &rarr;</button>
      </div>
    </>
  )
};

export default Humspot;