import React from 'react';

const FaceRecognition  = ({imageUrl})=>{
    return(
        <div className='center'>
            <img src={imageUrl} alt='face recognition'/>
        </div>
    );
}

export default FaceRecognition;