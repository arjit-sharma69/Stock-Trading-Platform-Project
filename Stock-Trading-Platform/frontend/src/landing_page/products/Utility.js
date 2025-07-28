import React from 'react';

function Utility(
    {imageURL,
    text}
) {
    return ( 
      
            <div className='row col-4 p-3 mt-5'>
                <img src={imageURL} alt='image' style={{width:"60%"}} className='mx-auto d-block'/>
                <p className='text-muted text-small'>{text}</p>
            </div>
      
    );
}

export default Utility;