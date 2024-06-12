import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import SearchCourse from './components/SearchCourse';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCourse/>}/>
        <Route path='/search' element={<SearchCourse/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
