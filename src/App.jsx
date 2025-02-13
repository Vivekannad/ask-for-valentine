import React, { useState } from 'react'
import "./app.scss"
import cute from "./assets/images/cute.gif"
import image1 from "./assets/images/image1.gif";
import image2 from "./assets/images/image2.gif";
import image3 from "./assets/images/image3.gif";
import image4 from "./assets/images/image4.gif";
import image5 from "./assets/images/image5.gif";
import image6 from "./assets/images/image6.gif";
import image7 from "./assets/images/image7.gif";
import image8 from "./assets/images/hi-waving.gif";
import image9 from "./assets/images/die.gif";
import acceptedImg from "./assets/images/accepted.gif"

const App = () => {
  const [noOfRejections , setNoOfRejections] = useState(0);
  const [accepted , setAccepted] = useState(false);
  const [image , setImage] = useState(cute);

  const noTexts = [
    "No" ,
    "Are You Sure?",
    "What If I asked really nicely?",
    "Pretty please" , 
    "With a chocolate rice cake on top" , 
    "What about a matcha frostie" , 
    "PLEASE POOKIE" , 
    "But :))" , 
    "I am going to die" , 
    "Yep , I am dead." , 
    "Ok , You are talking to a ghost" , 
    "please babe" , 
    ":((("
  ]

  const images = [ cute, image1 , image2 , image3 , image4 , image5 , image6 , image7 , image8 , image9]

  const rejectionHandler = () => {
    setNoOfRejections(prev => prev + 1);
    console.log(noOfRejections , images.length)
    setImage(images[noOfRejections >= images.length-1 ? 0 : noOfRejections+1]);
  } 

  const acceptionHandler = () => {
    setAccepted(true);
    setImage(acceptedImg);
  }

  return (
    <>
    
      <div className="container">
        <div className="emotion-image">
          <img src={image} alt="" />
        </div>
        <div className="ask-out">
          {!accepted ?
          <>
          <h1>Will You be my Valentine?</h1>
          <div className="buttons">
            <button
             className='yes'
             style={{"padding" : `${(noOfRejections+1)}rem 15px`, "fontSize" : `${(noOfRejections+1) * 15}px`}}
             onClick={acceptionHandler}
             >Yes</button>
            <button className='no' onClick={rejectionHandler}>
              { noOfRejections >= noTexts.length  ? "No" : noTexts[noOfRejections]}
              </button>
          </div>
          </>
          :
          <h1>Wooooo!! , I love you Pookie!! ;))</h1>
        }
        </div>
      </div>
 
    </>
  )
}

export default App