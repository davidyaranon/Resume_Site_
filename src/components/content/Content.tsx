import './Content.css';

import Home from './pages/Home';
import Tellu from './pages/Tellu';

// import { useMyContext } from '../../my-context';
import Kratos from './pages/Kratos';
import CPHHA from './pages/CPHHA';


const Content: React.FC = () => {

  console.log('Content')
  // const context = useMyContext();

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   const slide2: HTMLElement | null = document.getElementById('HomeTwo');
  //   if (!slide2) return;
  //   slide2.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest',
  //     inline: 'start'
  //   });
  // };

  return (
    <div className='main-body'>
      <div className='scroll-container'>
        <Home />
        <br />
        <Kratos />
        <br />
        <CPHHA />
        <br />
        <Tellu />
      </div>
    </div>
  )
};

export default Content;