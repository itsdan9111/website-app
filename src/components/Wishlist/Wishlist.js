import React, {useState} from "react";
import Modal from "../Modal";
import './Wishlist.css';

function Wishlist() {
    //const [wishlist, setWishlist] = useState([]);

    //const handleWishlist = (wish) => {
    //    setWishlist(wish,...wishlist);
    //  }
    return (
        <div className='contentBoxWishlist'>
            <ul>
                <li>
                <Modal />
                </li>
            </ul>
        
        </div>
    )
}

export default Wishlist;