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
                        <li key={anime["mal_id"]} name={anime["title"]}>
                            <Modal 
                                styles="animeimg"
                                imgwidth="248px"
                                imgheight="350px" 
                                image={anime["image_url"]}
                                title={anime["title"]}
                                jpTitle={anime["title_japanese"]}
                                aniType={anime["type"]}
                                source={anime["source"]}
                                episodes={anime["episodes"]}
                                status={anime["status"]}
                                aired={anime["aired"]["string"]}
                                year={anime["aired"]["prop"]["from"]["year"]}
                                duration={anime["duration"]}
                                rate={anime["rating"]}
                                url={anime["url"]}
                                genre={anime["genres"]}
                                studio={anime["studios"][0]["name"]} 
                                opening={anime["opening_themes"]}
                                ending={anime["ending_themes"]}
                                wishvalue={anime["title"]} 
                                synopsis={anime["synopsis"]}
                                rating={anime["score"]} 
                            />
                            <h4>{anime["title"]}</h4>
                            <p>{anime["aired"]["prop"]["from"]["year"]}</p>
                                <button className="button-34" role="button" value={anime["title"]} key={anime["mal_id"]} onClick={toggleWishlist}>{wishlist.includes(anime["title"]) ? "Remove from Wishlist" : "Add to Wishlist"}</button>
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
                        if (wish === Movies[i]["title"]) {
                            return (
                                <li key={Movies[i]["mal_id"]} name={Movies[i]["title"]}>
                                    <button className="button-3 button-vertical-center" role="button" value={wish} onClick={removeWishlist}>Remove</button>
                                    <h4 className='text-center'>{Movies[i]["title"]}</h4>  
                                    <div className='vertical-center'>
                                    <Modal 
                                        styles="wishimg"
                                        imgwidth="85px"
                                        imgheight="120px" 
                                        image={Movies[i]["image_url"]}
                                        title={Movies[i]["title"]}
                                        jpTitle={Movies[i]["title_japanese"]}
                                        aniType={Movies[i]["type"]}
                                        source={Movies[i]["source"]}
                                        episodes={Movies[i]["episodes"]}
                                        status={Movies[i]["status"]}
                                        aired={Movies[i]["aired"]["string"]}
                                        year={Movies[i]["aired"]["prop"]["from"]["year"]}
                                        duration={Movies[i]["duration"]}
                                        url={Movies[i]["url"]}
                                        studio={Movies[i]["studios"][0]["name"]}
                                        genre={Movies[i]["genres"]}
                                        rate={Movies[i]["rating"]}   
                                        opening={Movies[i]["opening_themes"]}
                                        ending={Movies[i]["ending_themes"]}
                                        synopsis={Movies[i]["synopsis"]}
                                        rating={Movies[i]["score"]} 
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