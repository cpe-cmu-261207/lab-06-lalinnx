import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import History from './components/History';
import HResult from './components/HResult';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/current'>
          <Current></Current>
        </Route>

        <Route path='/history/select'>
        <History></History>
        </Route>

        <Route path='/history/result'>
          <HResult></HResult>
        </Route>

        <Route path='/about'>
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Lalinthorn Pholnaruk 630610758</p>
            </div>
        </Route>

        <Route path='/' exact>
          <Current></Current>
        </Route>

      </Switch>


    </Router>
  );
}

export default App;