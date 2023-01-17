import React from "react";
import iconMeme from "../icon-memes.png";
import "../styles/MemeGenerator.css";
// import memesData from "../memesData.js";  used when non API call

const MemeGenerator = () => {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []); //dont needs second argument since API recall is not needed2

  /**   SAME AS ABOVE BUT WITH ASYNC
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
  // React.useEffect(() => {
  //   async function getMemes() {
  //     const res = await fetch("https://api.imgflip.com/get_memes");
  //     const data = await res.json();
  //     setAllMemeImages(data.data.memes);
  //   }
  //   getMemes();

  //   return () => {};
  // }, []);

  function getMemeImage() {
    // const memeArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemeImages[randomNumber].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="header">
        <img src={iconMeme} alt="icon-title" className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </div>
      <main>
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img
            src={meme.randomImage}
            alt="form--image"
            className="meme--image"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </div>
  );
};

export default MemeGenerator;
