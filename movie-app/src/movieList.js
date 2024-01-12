import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
 
  render() {
    // const { title, plot, price, rating, star, fav, isIncat } =
    //   this.state.movies;
    const { movies,addStar,decStar,favToggleBtn,cartToggleBtn} = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard  movies={movie} 
                      addStar={addStar} 
                      decStar={decStar}
                      favToggleBtn={favToggleBtn} 
                      cartToggleBtn={cartToggleBtn}/>
        ))}
      </>
    );
  }
}

export default MovieList;
