import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Landing_page from './Landing_page';
import Signup from './Signup';
import Login from './Login';
import EntranceExams from './EntranceExam';
import Copy from './Copy'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing_page/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/exams' element={<EntranceExams/>}></Route>
          <Route path='/copy' element={<Copy/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
