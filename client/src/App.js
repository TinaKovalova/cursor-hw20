import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Nav} from "./components/navigation/Nav";
import {UserLIst} from "./components/usersList/UserLIst";
import {UserForm} from "./components/userForm/UserForm";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUsersAction} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsersAction());
  }, [])
  return (
      <div className="App">
        <Router>
          <header className='App-header '>
            <Nav/>
          </header>
          <main>
            <Routes>
              {/*<Route path='/' exact />*/}
              <Route path='/users' element={<UserLIst/>}/>
              <Route path='/addUser' element={<UserForm title='Creating'/>}/>
              <Route path='/editUser' element={<UserForm title='Editing'/>}/>
            </Routes>
          </main>
        </Router>
      </div>
  );
}

export default App;
