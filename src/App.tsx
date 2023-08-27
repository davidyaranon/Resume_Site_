import './App.css'

import Glow from './components/glow/Glow';
import Header from './components/header/Header';
import Content from './components/content/Content';


function App() {  
  console.log('App');
  return (
    <>
      <Glow /> {/* Background Glow effect */}
      <Header />
      <Content />
    </>
  );
};

export default App;
