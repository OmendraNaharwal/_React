import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Displaycounter from './Components/Displaycounter';
import Container from './Components/Container';
import Controls from './Components/Controls';
import { useSelector } from 'react-redux';
import Privacymsg from './Components/privacymsg';

function App() {

  const count = useSelector(store=>store.counter);
  const privacy = useSelector(store=>store.privacy);


  return (
         <center className="px-4 py-5 my-5 text-center">
          <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacymsg /> : <Displaycounter count={count} />}
            <Controls />
          </div>
          </Container>
        </center>
  )
}

export default App
