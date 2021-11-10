import React,{useState, useEffect} from "react";
import './MovieBox.css';
import Modal from "../Modal";
import Movies from "../MovieList/MovieList";

const LOCAL_STORAGE_KEY = 'wishlistSave.wishlist';

const MovieBox = (props) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedWishlist) {
            setWishlist(storedWishlist)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlist))
    }, [wishlist])


    const toggleWishlist = ({target}) => {

        const clickedWishlist = target.value;
        setWishlist((prev) => {
            if (prev.includes(clickedWishlist)) {
                return prev.filter(t => t !== clickedWishlist);
            } else {
                return [clickedWishlist, ...prev];
            }
        })
    }

    const removeWishlist = ({target}) => {
        const removedWishlist = target.value;
        setWishlist((prev) => {
            return prev.filter(t => t !== removedWishlist);
        })
    }

    let textWishlist;
    if (wishlist.length !== 1) {
        textWishlist = <p>You have {wishlist.length} wishlists</p>;
    } else {
        textWishlist = <p>You have 1 wishlist</p>;
    }
    

    let removeAllWishlist;
    if (wishlist[0]) {
        removeAllWishlist = <button className="button-3" role="button" onClick={() => setWishlist([])}>Remove All Wishlist</button>;
    } else {
        removeAllWishlist = null;
    }

    if (props.pageCont === 'home') {
        return (
        <div className="contentBox">
            <ul>
                {Movies.map((anime) => {
                    return (
                        <li key={anime.id} name={anime.name}>
                            <Modal 
                                styles="animeimg"
                                imgwidth="248px"
                                imgheight="350px" 
                                image={anime.img}
                                title={anime.name} 
                                wishvalue={anime.name} 
                                synopsis={anime.desc}
                                rating={anime.rate} 
                            />
                            <h4>{anime.name}</h4>
                            <p style={{fontSize: 'small'}}>{anime.genre}</p>
                                <button className="button-34" role="button" value={anime.name} key={anime.id} onClick={toggleWishlist}>{wishlist.includes(anime.name) ? "Remove from Wishlist" : "Add to Wishlist"}</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )}
    return (
        <div className="contentWishlist">
            {textWishlist}
            {removeAllWishlist}
            <hr/>
            <ul>
                {wishlist.map((wish) => {
                    for (let i = 0; i < Movies.length; i++) {
                        if (wish === Movies[i].name) {
                            return (
                                <li key={Movies[i].id} name={Movies[i].name}>
                                    <button className="button-3 button-vertical-center" role="button" value={wish} onClick={removeWishlist}>Remove</button>
                                    <h4 className='text-center'>{Movies[i].name}</h4>  
                                    <div className='vertical-center'>
                                    <Modal 
                                        styles="wishimg"
                                        imgwidth="85px"
                                        imgheight="120px" 
                                        image={Movies[i].img}
                                        title={Movies[i].name} 
                                        synopsis={Movies[i].desc}
                                        rating={Movies[i].rate} 
                                    /></div>
                                    
                                </li>
                            )
                        }
                    }
                })}
            </ul>

        </div>
    )
}

export default MovieBox;