import React from "react";
import MovieList from "./movieList";
import "./index.css"
import Navbar from "./Navbar";
import { movies } from "./Moviedata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount:0
    };
  }
  handleInStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].star>=5){
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      movies: movies
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].star<=0){
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies: movies
    });
  };
  handleToggleBtn = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies
    });
  };
  handleCartBtn = (movie) => {
    let { movies,cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    // console.log(movies[mid].isInCart);
    if(movies[mid].isInCart){
cartCount+=1;
    }else{
      cartCount-=1;
    }
    this.setState({
      movies,
      cartCount
    });
  };
  render() {
    const {movies,cartCount}=this.state;
    return (
      <>
      <Navbar cartCount={cartCount}/>
       <MovieList movies={movies}
       addStar={this.handleInStar} 
       decStar={this.handleDecStar}
       favToggleBtn={this.handleToggleBtn} 
       cartToggleBtn={this.handleCartBtn}/>
      </>
    );
  }
}
export default App;
