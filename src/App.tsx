import './App.css'

import Glow from './components/glow/Glow';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


function App() {  
  console.log('App');
  return (
    <>
      <Glow /> {/* Background Glow effect */}
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
