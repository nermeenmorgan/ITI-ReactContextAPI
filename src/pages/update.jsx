import React, { useContext, useState, useEffect } from 'react';
import { MoviesContext } from '../Modules/UsersModule';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const UpdatePage = () => {
  const { movies, setMovies, navigate, handleUpdate, updatedData, setupdatedData } = useContext(MoviesContext);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setupdatedData({ ...updatedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/results/" + +id, updatedData).then(() => {
      axios.get("http://localhost:3000/results")
        .then((res) => {
          setMovies([...res.data]);
          navigate("/movies");
        });
    });
  };

  return (
    <form style={{ textAlign: "center", marginTop: 160 }} onSubmit={handleSubmit}>
      <h2>Title</h2>
      <input style={{ padding: 20, fontSize: 30, color: "black", width: 900, height: 50, borderRadius: 50 }} type="text" name="original_title" value={updatedData.original_title} onChange={handleChange} />
      <br />
      <h2>Overview</h2>
      <input style={{ padding: 20, fontSize: 30, color: "black", width: 900, height: 50, borderRadius: 50 }} type="text" name="overview" value={updatedData.overview} onChange={handleChange} />
      <br />
      <Button style={{ marginTop: 50, backgroundColor: "lightgrey", color: "black", height: 70, width: 200 }} type="submit">Update</Button>
    </form>
  );
};

export default UpdatePage;
