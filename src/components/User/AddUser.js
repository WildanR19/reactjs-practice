import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [error, setError] = useState()

    const addUserHandler = e => {
        e.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Username or age is empty!'
            })
            return setInvalid(true)
        }
        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Age must be greater than 0'
            })
            return setInvalid(true)
        }
        console.log(username, age)
        props.onAddUser(username, age)
        setAge('')
        setUsername('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={e => setAge(e.target.value)}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;