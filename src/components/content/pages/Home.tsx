import './Page.css';

import David from '../../../assets/david.png';

import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import usePageVisibility from '../../hooks/usePageVisibility';
import { handleClick } from './Click';

const Home: React.FC = () => {

  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('Home');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='Home'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>Hello, I'm David ✋🏽</h1>
              <br />
              <p>
               Computer Science graduate from Cal Poly Humboldt and current Master's student in Computer Engineering at San Diego State. I find myself immersed in the world of React and mobile application development, but enjoy all aspects of software engineering.
                My goal is to build tangible applications that can influence and help users around the world. You can view my current resume <a target='_blank' rel="noopener noreferrer" className="Home" href="David_Y__Resume.pdf">here</a>.
              </p>
              <br />
              <p>
                Outside of work and school I have a passion for photography and filmmaking. My current camera is a Panasonic Lumix S5 📸
                Checkout my <a className={'Home'} href="https://www.youtube.com/@davidyaranon" target='_blank' rel="noopener noreferrer">YouTube</a> channel!
              </p>
              <br />
              <p>
                Let's build something great together! Please don't hesitate to reach out to me at <a className={'Home'} href='mailto:dyaranon4754@sdsu.edu' target="_top">dyaranon4754@sdsu.edu</a>
              </p>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="home-page-iframe-wrapper">
                <img src={David} draggable={false} alt="Image of David Yaranon" />
              </div>
            </div>
          </div>
        </div>
        <br />
      </FadeIn>
      <div className="next-page-button">
        <button className='home-arrow-buttons' onClick={(e) => { handleClick(e, 'Kratos') }}>Experience &rarr;</button>
      </div>
    </>
  )
};

export default Home;