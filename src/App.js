import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/nav';
import First from './components/section/first';
import Hero3 from './components/section/fourth';
import Banner from './components/section/banner';
import Footer from './components/section/footer';
import News from './components/section/newsletter';
import Last from './components/section/last';

function App() {
  return (
    <>
    <Banner></Banner>
    <Nav></Nav>
    <First></First>
    <Hero3></Hero3>
    <Last></Last>
    <News></News>
    <Footer></Footer>
    </>
  );
}

export default App;
