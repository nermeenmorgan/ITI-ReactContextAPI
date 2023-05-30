import React, { useEffect, useContext, useState } from 'react';
import { MoviesContext } from '../Modules/UsersModule';
import { useNavigate } from 'react-router-dom';

const AddMoviePage = () => {
  const { imageUrl, handleImageChange,setImage, disable, setMovieData, movieData, handleSubmit } = useContext(MoviesContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  // const [imageUrl, setImageUrl] = useState('');

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   if (selectedImage) {
  //     const imageUrl = URL.createObjectURL(selectedImage);
  //     setImageUrl(imageUrl);
  //     setMovieData({ ...movieData, image: imageUrl }); // Store the URL in movieData
  //   }
  // };

  return (
    <form  style={{textAlign:"center", marginTop:160}} onSubmit={handleSubmit}>
      <h2>Title</h2>
      <input style={{padding:20,fontSize:30,color:"black",width:900, height:50, borderRadius:50}} type="text" name="original_title" value={movieData.original_title} onChange={handleChange} />
      <br />
      <h2>Overview</h2>
      <input style={{padding:20,fontSize:30,color:"black",width:900, height:50, borderRadius:50}} type="text" name="overview" value={movieData.overview} onChange={handleChange} />
      <br />
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" onChange={handleImageChange} />
      <input style={{fontSize:30, fontWeight:"bold",marginTop:50, backgroundColor:"lightgrey", color:"black", height:70, width:200}}  type='submit' value="Add Movie" />
    </form>
  );
};

export default AddMoviePage;
