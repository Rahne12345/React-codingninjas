import { Component } from "react";
import styled from "./Navbar.module.css";

class Navbar extends Component{

    render(){
        const {cartCount}=this.props;
        return(
            <>
            <div className={styled.cantainer}>
                <div className={styled.title}>
Movie-App
                </div>
                <div className={styled.cartIcon}>
                    <img alt="Cart-icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    <span className={styled.cartCount}>{cartCount}</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;