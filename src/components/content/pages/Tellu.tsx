import './Page.css';

import tellULogo from '../../../assets/tellU.png';
import TypescriptLogo from '../../../assets/typescript-logo.png';
import ReactLogo from '../../../assets/react-logo.png';
import SwiftLogo from '../../../assets/swift-logo.svg';
import FirebaseLogo from '../../../assets/firebase-logo.svg';
import CapacitorLogo from '../../../assets/capacitorjs-logo.svg';
import IonicLogo from '../../../assets/ionic_loho.avif';

import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import usePageVisibility from '../../hooks/usePageVisibility';
import { handleClick } from './Click';

const Tellu: React.FC = () => {

  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('tellU');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='tellU'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>tellU Mobile App</h1>
              <br />
              <p>
                tellU is a social media app for university students, available on iOS and Android.
                The tellU app puts students into chat rooms with their fellow university students.
                Post about nearby campus events or sightings, or just chat with new friends!
              </p>
              <br />
              <p>tellU acts as any other social media app would, with features
                like account creation/deletion, direct chat messaging, text and image posting functionalities,
                profile customization, and more! The app has over 100 active users at Humboldt!
              </p>
              <br />
              <p className='p-title'>Built With:</p>
              <div className='stack-logos'>
                <ul>
                  <li>
                    <a role='button' href='https://react.dev/' target='_blank' rel="noopener noreferrer">
                      <img alt='React Logo' src={ReactLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://firebase.google.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Firebase Logo' src={FirebaseLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.typescriptlang.org/' target='_blank' rel="noopener noreferrer">
                      <img alt='Typescript Logo' src={TypescriptLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://ionicframework.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Ionic Logo' src={IonicLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://capacitorjs.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Capacitor Logo' src={CapacitorLogo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.swift.org/' target='_blank' rel="noopener noreferrer">
                      <img alt='Swift Logo' src={SwiftLogo} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                <p><a className={'tellU'} href="https://tellu-app.com" target='_blank' rel="noopener noreferrer">About Site</a></p>
                <p> <a className={'tellU'} href="https://apps.apple.com/us/app/tellu/id6443764288?ign-itscg=30200&ign-itsct=apps_box_link" target='_blank' rel="noopener noreferrer">iOS App Store Listing</a></p>
                <p><a className={'tellU'} href="https://github.com/davidyaranon/tellU" target='_blank' rel="noopener noreferrer">Github</a></p>
              </div>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="tellu-page-iframe-wrapper">
                <img style={{ borderRadius: '7.5px' }} draggable={false} src={tellULogo} alt="tellU App Logo" />
              </div>
            </div>
          </div>
        </div>
        <br />

      </FadeIn>
      <div className="next-page-button" id="tellu-arrow-buttons-container">
        <button className='tellu-arrow-buttons' onClick={(e) => { handleClick(e, 'CPHHA') }}>&larr; Experience</button>
        <button className='tellu-arrow-buttons' onClick={(e) => { handleClick(e, 'HumboldtHill') }}>More &rarr;</button>
      </div>
    </>
  )
};

export default Tellu;