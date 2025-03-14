
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <meta name="description" content="Little Lemon Restaurant website description"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="Little Lemon Restaurant website description"/>
      <meta name="og:image" content="./assets/img/logo.jpg"/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
