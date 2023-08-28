import David from '../../../assets/david.png';
import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import './Page.css';
import { useRef, useEffect } from 'react';

const Home: React.FC = () => {

  const context = useMyContext();

  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      observer;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          context.setCurrPage('Home');
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
      <div ref={pageRef} className="component-container" id='Home'>
        <div className="content-wrapper">
          <div className="text-area">
            <h1>Hello, I'm David ✋🏽</h1>
            <br />
            <p>
              I am currently a Computer Science major at <strong>Cal Poly Humboldt</strong>. I find myself immersed in the world of React and mobile application development, but enjoy all aspects of software engineering. My goal is to build tangible applications that can influence and help users around the world.
            </p>
            <br />
            <p>
              Outside of work and school I have a passion for photography and filmmaking. My current camera is a Panasonic Lumix S5 📸
              Checkout my <a className={context.currPage} href="https://www.youtube.com/@neonglowproductions_" target='_blank' rel="noopener noreferrer">YouTube</a> channel!
            </p>
            <br />
            <p>
              Let's build something great together! Please don't hesitate to reach out to me at <a className={context.currPage} href='mailto:dy45@humboldt.edu' target="_top">dy45@humboldt.edu</a>
            </p>
          </div>
          <div className="image-area">
            <img src={David} draggable={false} alt="Image of David" />
          </div>
        </div>

      </div>
    </FadeIn>
  )
};

export default Home;