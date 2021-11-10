import React,{useState} from "react";
import './NavBar.css';

const NavBar = (props) => {
    const [clickPage, setClickPage] = useState('home');

    const newPage = clickPage;
    props.onPage(newPage);

    return (
        <div className='navbar'>
            <ul>
                <li><a className="title">IDKFLIX</a></li>
                <li><a className="hover" onClick={() => {setClickPage('home')}}>HOME</a></li>
                <li><a className="hover" onClick={() => {setClickPage('wishlist')}}>WISHLIST</a></li>
            </ul>
        </div>
    );
};

export default NavBar; 