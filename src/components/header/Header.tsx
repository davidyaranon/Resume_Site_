import './Header.css';

import Github from '../../assets/github-mark-dark.png';
import LinkedIn from '../../assets/LinkedIn.png';
import Gmail from '../../assets/gmail.png';
import DLogo from '../../assets/d-logo-blue.png';
import DLogoTellU from '../../assets/d-logo-tellu.png';
import DLogoKratos from '../../assets/d-logo-red.png';
import DLogoCphha from '../../assets/d-logo-cphha.png';
import DLogoCart from '../../assets/d-logo-cart.png';

import FadeIn from '@rcnoverwatcher/react-fade-in-react-18/src/FadeIn';

import { useMyContext } from '../../my-context';

const logos: Record<string, string> = {
  'Home': DLogo, 'tellU': DLogoTellU, 'Kratos': DLogoKratos, 'CPHHA': DLogoCphha, 'HumboldtHill': DLogoCart
};

const Header: React.FC = () => {

  const context = useMyContext();

  const getLogo = (): string => {
    const currPage = context.currPage;
    return logos[currPage];
  };

  const handleMainLogoClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    e.preventDefault();
    const homeSlide: HTMLElement | null = document.getElementById('Home');
    homeSlide && homeSlide.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  return (
    <section id='site-header'>
      <header className='header'>
        <div className='header-content'>

          <section id='site-logo'>
            <FadeIn delay={500}>
              <div className='logo'>
                <a role='button' aria-label='David Logo'>
                  <img role='button' src={getLogo()} alt="David logo" draggable={false} onClick={handleMainLogoClick} />
                </a>
              </div>
            </FadeIn>
          </section>

          <section id='site-nav-bar'>
            <nav className='nav-bar'>
              <ul>
                <FadeIn delay={750}>
                  <li>
                    <a role='button' href='https://github.com/telluapp' target='_blank' aria-label="Visit my Github">
                      <img src={Github} alt='Github logo' id='github-logo' draggable={false} />
                    </a>
                  </li>
                </FadeIn>
                <FadeIn delay={1000}>
                  <li>
                    <a role='button' href='https://www.linkedin.com/in/david-michael-59652a248/' target='_blank' aria-label="Visit my LinkedIn">
                      <img src={LinkedIn} alt='LinkedIn Logo' id='linkedin-logo' draggable={false} />
                    </a>
                  </li>
                </FadeIn>
                <FadeIn delay={1250}>
                  <li>
                    <a role='button' href='mailto:dy45@humboldt.edu' target='_blank' aria-label="Contact me">
                      <img src={Gmail} alt='Gmail logo' id='gmail-logo' draggable={false} />
                    </a>
                  </li>
                </FadeIn>
              </ul>
            </nav>
          </section>

        </div>
      </header>
    </section>
  );
};

export default Header;