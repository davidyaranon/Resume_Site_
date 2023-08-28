import './Page.css';

import { useMyContext } from '../../../my-context';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import HTML from '../../../assets/HTML-logo.png';
import Javascript from '../../../assets/JavaScript-logo.png';
import Php from '../../../assets/php-logo.png';
import Sketchfab from '../../../assets/sketchfab-logo.png';
import Metshape from '../../../assets/metashape-logo.png';
import Blender from '../../../assets/blender-logo.png';

import usePageVisibility from '../../hooks/usePageVisibility';
import { handleClick } from './Click';

const CPHHA: React.FC = () => {

  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('CPHHA');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='CPHHA'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>3D Digital Herbarium</h1>
              <br />
              <p>
                My other position is a Student Programming Assistant with Cal Poly Humboldt Library Administration as a part of the CPH 3D Digital Herbarium project.
              </p>
              <br />
              <p>
                Here I am using photogrammetry techniques to model local Humboldt plants and have built an accompanying website to display the corresponding information. Check out one of the models I built on the embedded model viewer!
              </p>
              <br />
              <p className='p-title'>Tools used:</p>
              <div className='stack-logos' >
                <ul>
                  <li>
                    <a role='button' href='https://www.blender.org' target='_blank' rel="noopener noreferrer">
                      <img alt='Sourcetree Logo' src={Blender} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.agisoft.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Powershell Logo' src={Metshape} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://sketchfab.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='Bitbucket Logo' src={Sketchfab} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='' target='_blank' rel="noopener noreferrer">
                      <img id='html-logo' alt='HTML Logo' src={HTML} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='' target='_blank' rel="noopener noreferrer">
                      <img alt='JavaScript Logo' src={Javascript} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='' target='_blank' rel="noopener noreferrer">
                      <img id='php-logo' alt='PHP Logo' src={Php} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <p>
                <a className={'CPHHA'} href="https://nrs-projects.humboldt.edu/~ab632/src/html/" target='_blank' rel="noopener noreferrer">Visit Beta Site</a>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <a className={'CPHHA'} href="https://cph-3d-digital-herbarium.firebaseapp.com/" target='_blank' rel="noopener noreferrer">Visit Responsive Site</a>
              </p>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="cphha-iframe">
                <iframe frameBorder="0" height='100%' width='100%' id="model-viewer" title={"Model Viewer"}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
                  allowFullScreen src="https://sketchfab.com/models/ae64a3739dfc4fa1a86171e120f18494/embed"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </FadeIn>
      <div className="next-page-button" id='cphha-arrow-buttons-container'>
        <button className='cphha-arrow-buttons' onClick={(e) => { handleClick(e, 'Kratos') }}>&larr; Kratos</button>
        <button className='cphha-arrow-buttons' onClick={(e) => { handleClick(e, 'tellU') }}>Projects &rarr;</button>
      </div>
    </>
  )
};

export default CPHHA;