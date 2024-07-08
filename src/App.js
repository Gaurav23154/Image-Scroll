import { useState } from 'react';
import Images from './Images';
import './App.css';

function App() {
   
   const [currentImages,setCurrentImages]=useState(0);
  
   const handleOnRight=()=>{
    if(currentImages < Images.length-1){
      console.log(currentImages);
      setCurrentImages(currentImages+1);
    }
    else{console.log(currentImages);
      setCurrentImages(0);
      
    }
   }
   const handleOnLeft=()=>{
    if(currentImages===0){console.log(currentImages);
       setCurrentImages(Images.length-1);
       
    }
    else{console.log(currentImages);
      setCurrentImages(currentImages-1);
      
    }
   }
  return (
    <div className="app">
    <button onClick={handleOnLeft}>left</button>
    {/* <div className='button-container' > */}
      <img src={Images[currentImages]} style={{height:"500px" ,width:"500px"}}  alt='images'></img>
    {/* </div> */}
    <button onClick={handleOnRight}>right</button>
    </div>
  );
}

export default App;
