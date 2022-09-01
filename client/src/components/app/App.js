import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {Nav} from "../navigation/Nav";
import {UserLIst} from "../usersList/UserLIst";
import {UserForm} from "../userForm/UserForm";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUsersAction} from "../../redux/actions";
import {HomePage} from "../homePage/HomePage";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
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
                        <Route path='/' exact element={<HomePage/>}/>
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
