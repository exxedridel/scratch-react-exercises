/*
1.-Call to api https://catfact.ninja/fact to get a random 'cat fact string'. 
2.-Then, take the 3 first words of the array
3.-and do a search call to api https://api.giphy.com/v1/gifs/search with them (API_KEY: FpimVNooJI0i8Fk99twHUkJcqNtjgSpd)
    to get the gif from the object returned. 
4.-To end, place the gif to the left and the full cat fact to the 
    right within the dom, vertically aligned.

Giphy docs: https://developers.giphy.com/docs/api/endpoint/#search
*/
import { useEffect, useState } from 'react';

const GIPHY_API_KEY = "FpimVNooJI0i8Fk99twHUkJcqNtjgSpd"

const ServicesFetch = () => {
    
    const [catFact, setCatFact] = useState("");
    const [catGif, setCatGif] = useState("");


    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                setCatFact(data.fact || "Catfact fall back");
                const threeWords = data.fact.split(" ").slice(0, 3).join(' ');
                fetch(`https://api.giphy.com/v1/gifs/search?q=${threeWords}&api_key=${GIPHY_API_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        const gifUrl = data.data[0].images.original.url;
                        setCatGif(gifUrl);
                    })
            });

    }, []);

    return (
        <div className='component'>
            <img className='img-gif' src={catGif} alt="cat gif" />
            <p>{catFact}</p>
        </div>
    )
};

export default ServicesFetch;