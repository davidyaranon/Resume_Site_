import './Page.css';

import FadeIn from "@rcnoverwatcher/react-fade-in-react-18/src/FadeIn";
import { useMyContext } from "../../../my-context";

import KratosLogo from '../../../assets/Kratos.webp';
import cplusplus_logo from '../../../assets/c++-logo.png';
import Visualstudio_Logo from '../../../assets/visualstudio_logo.png';
import Matlab_Logo from '../../../assets/matlab-logo.png';
import Bitbucket_Logo from '../../../assets/bitbucket-logo.png';
import Sourcetree_Logo from '../../../assets/sourcetree-logo.svg';
import Powershell_Logo from '../../../assets/powershell-logo.png';
import XQ58_Logo from '../../../assets/xq58-logo.png';
import Jira_Logo from '../../../assets/jira-logo.png';

import usePageVisibility from "../../hooks/usePageVisibility";
import { handleClick } from './Click';

const Kratos = () => {
  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage('Kratos');
    }
  }
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id='Kratos'>
          <div className="content-wrapper">
            <div className="text-area">
              <h1>Kratos Defense & Security Solutions</h1>
              <br />
              <p>
                One of my current positions is at Kratos Defense as a software engineering intern. Some of my tasks include
                <br /><br />
              </p>
              <ul>
                <li className='task-list'>Working with static analysis tool to debug C/C++ embedded software</li>
                <li className='task-list'>Writing unit tests for C++ vehicle code using catch2 framework and incorporated into Microsoft Visual Studio</li>
                <li className='task-list'>Writing Bash/PowerShell scripts to automate testing of flight code and incorporated into Bamboo</li>
                <li className='task-list'>Leading sprint meetings for multiple teams and projects; handled other DevOps tasks.</li>
                <li className='task-list'>Using MATLAB to perform flight simulations</li>
              </ul>
              <br />
              <p className='p-title'>Tools used:</p>
              <div className='stack-logos' >
                <ul>
                  <li>
                    <a role='button' href='https://cplusplus.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - C++ Logo' src={cplusplus_logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://visualstudio.microsoft.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Visual Studio Logo' src={Visualstudio_Logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.mathworks.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Matlab Logo' src={Matlab_Logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.sourcetreeapp.com/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Sourcetree Logo' src={Sourcetree_Logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://www.atlassian.com/software/jira' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Jira Logo' src={Jira_Logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://bitbucket.org/product' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Bitbucket Logo' src={Bitbucket_Logo} />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='https://learn.microsoft.com/en-us/powershell/' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Powershell Logo' src={Powershell_Logo} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              {/* <p>
              <a className={'KratosLink'} href="https://www.kratosdefense.com/" target='_blank' rel="noopener noreferrer">Visit Company Site</a>
            </p> */}
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="kratos-page-iframe-wrapper">
                <a href='https://www.kratosdefense.com/' target='_blank' rel="noopener noreferrer">
                  <img className='small-width' draggable={false} id='kratosLogo' style={{ borderRadius: '7.5px' }} src={KratosLogo} alt="David Yaranon - Kratos Logo" />
                </a>
                <div style={{ height: "5vh" }} />
                <a href='https://www.kratosdefense.com/' target='_blank' rel="noopener noreferrer">
                  <img className='small-width' draggable={false} id='kratosLogo' style={{ borderRadius: '7.5px' }} src={XQ58_Logo} alt="David Yaranon - Kratos Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </FadeIn>
      <div className="next-page-button" id="kratos-arrow-buttons-container">
        <button className='kratos-arrow-buttons' onClick={(e) => { handleClick(e, 'Home') }}>&larr; About</button>
        <button className='kratos-arrow-buttons' onClick={(e) => { handleClick(e, 'CPHHA') }}>More &rarr;</button>
      </div>
    </>
  )
};

export default Kratos;