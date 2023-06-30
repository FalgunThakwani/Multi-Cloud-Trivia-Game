import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProfileDetails(){
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

  }, [userId]);

  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <div className='my-card'>
        <Card>
        <CardContent className="my-card-content">
            <Button onClick={()=>{
                navigate(-1);
            }}>Go Back</Button>
            {/* <h1>Bio:</h1> */}
            <div className="bio">
                <div className="p1">
                    <Avatar src={user.picture}/>
                    <Typography variant="h5" component="div">
                    {user.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Age: {user.age}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Gender: {user.gender}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Eye Color: {user.eyeColor}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Favorite Fruit: {user.favoriteFruit}
                    </Typography>
                    </div>
                <hr className='divider'/>
                <div className="p2">
                <hr />
                    <Typography color="text.secondary" gutterBottom>
                    Email: {user.email}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Company: {user.company}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Balance: {user.balance}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Phone: {user.phone}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Address: {user.address}
                    </Typography>
                    <hr />
                    <Typography color="text.secondary" gutterBottom>
                    About: {user.about}
                    </Typography>
                    <hr />
                    <Typography color="text.secondary" gutterBottom>
                    Friends: 
                    <ol>
                        {user.friends.map((friend) => (
                        <li key={friend.id}>{friend.name}</li>
                        ))}
                    </ol>
                    </Typography>
                </div>
            </div>
        </CardContent>
        </Card>
    </div>
  );
};

export default ProfileDetails;

