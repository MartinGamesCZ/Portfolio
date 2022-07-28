import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return <div className="header">
        <div className="title">Martin<div>Games</div></div>
        <div className="links">
            <div className="link"><a href="#about">About me</a></div>
            <div className="link"><a href="#skills">Skills</a></div>
            <div className="link"><a href="#projects">Projects</a></div>
            <div className="link"><a href="#contact">Contact</a></div>
            <div className="link"><a href="#support">Support me</a></div>
        </div>
    </div>
}

export default Header;