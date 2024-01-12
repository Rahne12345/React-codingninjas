import { Component } from "react";

class MovieCard extends Component {
 

  render() {
    const {movies:data}=this.props;
    const { title, plot, price, rating, star, fav, isInCart,poster } = data;
    const {movies,addStar,decStar,favToggleBtn,cartToggleBtn}=this.props;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                alt="poster"
                src={poster}
              />
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs.{price}</div>
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    alt="decrese"
                    src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                    className="str-btn"
                    onClick={()=>{decStar(movies)}}
                  />
                  <img
                    alt="star"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    className="stars"
                  />
                  <img
                    alt="increase"
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    className="str-btn"
                    onClick={()=>{addStar(movies)}}
                  />
                  <span className="starCount">{star}</span>
                </div>
                <button
                  onClick={()=>{favToggleBtn(movies)}}
                  className={fav ? "unfavourite-btn" : "favourite-btn"}
                >
                  {fav ? "Un-favourite" : "Favourite"}
                </button>
                <button
                  onClick={()=>{cartToggleBtn(movies)}}
                  className={isInCart? "unfavourite-btn" : "cart-btn"}
                >
                  {isInCart? "Remove to cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCard;
