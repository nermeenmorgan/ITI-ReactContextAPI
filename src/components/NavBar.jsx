import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NavBar = () => {

    return (
        <div style={{display:"flex", backgroundColor:"lightgrey", height:"150px", justifyContent:"space-evenly",alignItems: "center"}}>
          <Button style={{backgroundColor:"black"}}>
           <Link style={{margin: "10px", fontSize:"30px", fontWeight:"bold" }} to="/">Home</Link>
            </Button>
            <Button style={{backgroundColor:"black",  width:90}}>
            <Link  style={{margin: "10px", fontSize:"30px",fontWeight:"bold" }} to="/movies/add">Add</Link>
            {/* <Link  style={{margin: "10px", fontSize:"30px",fontWeight:"bold" }} to="/movies">Users</Link> */}
           
            </Button>
        </div>
    );
};

export default NavBar;





















