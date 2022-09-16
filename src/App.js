import React, {useState} from 'react';
import AddUser from "./components/User/AddUser";
import './index.css'
import UserList from "./components/User/UserList";

const App = () => {
    const [usersList, setUsersList] = useState([])

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevState) => {
            return [...prevState, {
                name: uName,
                age: uAge,
                id: Math.random().toString()
            }]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList}/>
        </div>
    );
};

export default App;