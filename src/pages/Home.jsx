
import React, { useEffect } from 'react';
import MovieListComponent from '../components/movies';
import ErrorBoundary from '../components/error';
import { v4 as uuid } from 'uuid';
// import React from 'react';
// import { MoviesContext } from '../Modules/UsersModule';
import SimpleBackdrop from '../helpers/spinner';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
// import { useContext } from 'react';
// import MovieContaxt from '../components/movies';
// import  MoviesContext from '../Modules/UsersModule';
import { MoviesContext } from '../Modules/UsersModule';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';




const HomePage = () => {
  // const { imageUrl } = useContext(MoviesContext);
  const navigate = useNavigate()
//     useEffect(()=>{console.log("object")
// return ()=>{
//     console.log("el page unmounteddddddd")
// }
// }, [])
const {movies,handleDelete} = useContext(MoviesContext)
console.log(movies,handleDelete)

    return (
    
      
    <div>
<h1 style={{textAlign:"center"}}>Movies</h1>
<div style={{ display: 'flex', flexWrap: 'wrap', marginLeft:160}}>
    {movies?movies.map((movie) => (
    <Card style={{border:"solid black 2px", margin:20}} key={movie.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={movie.poster_path? 'https://image.tmdb.org/t/p/w500'+ movie.poster_path :"./assets/images/blank.jpg"}
        title="green iguana"
      />
      <CardContent style={{ backgroundColor:"lightgrey",borderRadius:20, margin:30, height:290}}>
        <Typography gutterBottom variant="h5" component="div">
        {movie.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Link to="/update">
    <Button size="small">Update</Button>
  </Link> */}
   <Button style={{ backgroundColor:"lightgrey"}} size="small" onClick={() => navigate(`/update/${movie.id}`)}>
          Update
        </Button>
        <Button style={{ backgroundColor:"lightgrey"}} size="small" onClick={() => navigate(`/movies/${movie.id}`)}>
          Details
        </Button>
        {/* <Button size="small" onClick={() => navigate('/movies/:id')}>
          Details
        </Button> */}
    {/* <Link to= "/update"> <button size="small" >Update</button> </Link>  */}
<Button style={{ backgroundColor:"lightgrey"}} size="small" onClick={() => handleDelete(movie.id)}>Delete</Button>


      </CardActions>
    </Card>
    )):<SimpleBackdrop></SimpleBackdrop>}





    {/* {movieData?
    <Card  key={uuid()} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {movieData.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {movieData.overview}
        </Typography>
      </CardContent>
      <CardActions>
   <Link to="/update" >  <button size="small">Update</button> </Link>
<button size="small" onClick={() => handleDelete(movieData.id)}>Delete</button>

      </CardActions>
    </Card>
    :<SimpleBackdrop></SimpleBackdrop>} */}
    </div>
    </div>)
            {/* <ErrorBoundary> */}
        {/* <MovieListComponent></MovieListComponent> */}
        {/* </ErrorBoundary> */}
    
};

export default HomePage;