import React, { Children, createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
// import UserDetails from '../pages/UserDetails';
// import UsersPage from '../pages/Users';
// import AddUserPage from '../pages/AddUser';
// import NotFound from '../pages/NotFound';
// import HomePage from '../pages/Home';
// import MovieListComponent from '../components/movies';
import SimpleBackdrop from '../helpers/spinner';
import { v4 as uuid } from 'uuid';
export const  MoviesContext = createContext();
const UsersModule = ({children}) => {
  console.log(children)
  // const [imageUrl, setImageUrl] = useState('');
  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   if (selectedImage) {
  //     const imageUrl = URL.createObjectURL(selectedImage);
  //     setImageUrl(imageUrl);
  //   }
  // };

  // const contextVlue = {}
     const navigate = useNavigate();
    const [movies, setMovies] = useState(null);
    useEffect(() => {
      axios.get("http://localhost:3000/results")
      .then(response => {
        setMovies(response.data);
        console.log(response.data);
        console.log("after fetching dataaaaaaaaaaa")
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        // Handle the error if needed
      });
    }, []);
    

    // const [image, setImage] = useState(null);
    const baseUrl = "http://localhost:3000/results";
    // const[counter,setCouner]=useState(0)
    // const [disable,setDisable]= useState(false);
    const [movieData, setMovieData]=useState({original_title:"",overview:"", id:uuid()});

    // const addMovie = (movieData) => {
    //   const newMovie = { ...movieData, id: uuid() };
    //   setMovies((prevMovies) => [...prevMovies, newMovie]);
    // };

    const addMovie = (MovieData)=>{
      setMovies([...movies,{...MovieData, id:uuid()}])
    }

    const handleSubmit=(event)=>{
      event.preventDefault();
      // setMovieData({original_title:"", overview:"", id:uuid()})
      addMovie(movieData);

navigate('/movies');
  }

    const [updatedData, setupdatedData]=useState({ original_title: '', overview: '' });
    // useEffect(() => {
    //   if (!updatedData) {
    //     // Set default values for updatedData object
    //     setupdatedData({ original_title: '', overview: '' });
    //   }
    // }, [updatedData, setupdatedData]);

    const handleDelete = (id) => {
      movies.map((movie)=>{if (id === movie.id){
        axios.delete(`http://localhost:3000/results/${id}`) .then(response => {
          alert('Data deleted successfully');
          setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
          navigate("/");
        })
        .catch(error => {
          console.error('Error deleting data:', error);
          // Handle the error if needed
        });
      }}
      
      )

   
};

// if (!updatedData) {
//   return null; // or show a loading state
// }

    if(!movies){return <SimpleBackdrop></SimpleBackdrop>}
    const handleUpdate = (id, updatedData) => {
      axios
        .put(`http://localhost:3000/results/${id}`, updatedData)
        .then(response => {
          alert('Data updated successfully');
          const updatedMovies = movies.map(movie => {
            if (movie.id === id) {
              return {
                ...movie,
                ...updatedData
              };
            }
            return movie;
          });
          setMovies(updatedMovies);
          navigate("/");
        })
        .catch(error => {
          console.error('Error updating data:', error);
          // Handle the error if needed
        });
    };


    return (
<div className='App'>
       <MoviesContext.Provider value={{setMovies,navigate, setupdatedData, updatedData,movies, handleDelete,handleUpdate ,addMovie,movieData,handleSubmit,setMovieData}}>
        {/* <Routes>
            <Route  path="/" element={<MovieListComponent></MovieListComponent>} ></Route>
            <Route path=":id" element={<UserDetails></UserDetails>} ></Route>
            <Route path="add" element={<AddUserPage></AddUserPage>} ></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route> */}
            {/* <Route path="/" element={} ></Route> */}
        {/* </Routes> */}
        {children}
        
      
        </MoviesContext.Provider>
        </div>
       
    );
};

export default UsersModule;
