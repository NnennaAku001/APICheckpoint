import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const UserList = () => {
    const[ userList, setUserList ] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then( result => setUserList(result.data) )
    }, [])

    return (
        <div className='container mt-5 col-sm-9' >
        <h1>COMPANIES' DATABASE</h1>
            { userList.map(user => 
                <Card key = {user.id} className='mt-5'>
                    <Card.Header><h2>Company Name:</h2> <b>{user.company.name}</b></Card.Header>
                    <Card.Body>
                        <Card.Title> <h2>Username: </h2>{user.username}</Card.Title>
                        <Card.Text> <h2>Website: </h2>{user.website}</Card.Text>
                        <Card.Text> <h2>Email Address: </h2>{user.email} </Card.Text>
                        <Card.Text> <h2>Phone Number: </h2> {user.phone} </Card.Text>
                        <Card.Text> <h2>Zipcode: </h2>{user.address.zipcode}</Card.Text>
                    </Card.Body>
                </Card> )}
        </div>
    )
}

export default UserList;