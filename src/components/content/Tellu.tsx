import tellULogo from '../../assets/tellU.png';
import TypescriptLogo from '../../assets/typescript-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import SwiftLogo from '../../assets/swift-logo.svg';
import FirebaseLogo from '../../assets/firebase-logo.svg';
import CapacitorLogo from '../../assets/capacitorjs-logo.svg';

import { useMyContext } from '../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import './Page.css';
import { useEffect, useRef } from 'react';

const Tellu: React.FC = () => {

  const context = useMyContext();

  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          context.setCurrPage('tellU');
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) observer.unobserve(pageRef.current);
    };
  }, []);

  return (
    <FadeIn delay={1500} transitionDuration={750}>
      <div ref={pageRef} className="component-container" id='tellU'>
        <div className="content-wrapper">
          <div className="text-area">
            <h1>tellU Mobile App</h1>
            <p>
              tellU is a social media app for university students, available on iOS and Android.
              The tellU app puts students into chat rooms with their fellow university students.
              Post about nearby campus events or sightings, or just chat with new friends!
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
            <p><a className={context.currPage} href="https://tellu-app.com" target='_blank' rel="noopener noreferrer">Visit Site</a>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <a className={context.currPage} href="https://github.com/tellUapp/tellU" target='_blank' rel="noopener noreferrer">Github</a></p>
          </div>
          <div className="image-area">
            <img style={{ borderRadius: '7.5px' }} draggable={false} src={tellULogo} alt="tellU App Logo" />
          </div>
        </div>
      </div>
    </FadeIn>
  )
};

export default Tellu;