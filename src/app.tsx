import { useEffect } from 'preact/hooks';
import { Toaster } from 'react-hot-toast';
import useLocalStorage from './utils/useLocalStorage';
import usePlacanStore from './usePlacanStore';
import Router, { Route } from 'preact-router';

import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import Form from './routes/Form';

import './app.css'
import "./media-size.css"

export function App() {

  const { updateFormSubmitedTimes } = usePlacanStore();

  const { getData } = useLocalStorage();

  useEffect(() => {
    const data = getData("formJobDataCollected");
    updateFormSubmitedTimes(data ? data : 0);
  }, []);

  return (
    <div id="app" class={"colFlex"}>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <h1 class={"defMouse"}>ePlačan</h1>

      <Router>

        <Route path="/" component={EPlacan} />
        <Route path="/piratska-stranka" component={ONas} />
        <Route path="/obrazec" component={Form} />

        <div default>
          <h3>Ta stran na tej domeni ne obstaja.</h3>
          <p>Poskusite "/" ali "/piratska-stranka"</p>
        </div>

      </Router>

    </div>
  )
}
