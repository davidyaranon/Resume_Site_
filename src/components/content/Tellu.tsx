import David from '../../assets/david.png';
import tellULogo from '../../assets/tellU.png';
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
      <div ref={pageRef} className="component-container" id='HomeTwo'>
        <div className="content-wrapper">
          <div className="text-area">
            <h1>tellU Mobile App</h1>
            <p>
              tellU is a social media app for university students, available on iOS and Android.
              The tellU app puts students into chat rooms with their fellow university students.
              Post about nearby campus events or sightings, or just chat with new friends!
            </p>
            <br />
            <p><a href="https://tellu-app.com" target='_blank' rel="noopener noreferrer">Visit Site</a>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/tellUapp/tellU" target='_blank' rel="noopener noreferrer">Github</a></p>

          </div>
          <div className="image-area">
            <img style={{ borderRadius: '7.5px' }} src={tellULogo} alt="Image of David" />
          </div>
        </div>
      </div>
    </FadeIn>
  )
};

export default Tellu;