import React from 'react';

//component to loop slide images through
const SlideItem = (props) => {
    return(    
    <div className="item-slide">
      <img src={props.img} alt={props.alt}/>
    </div>
    );
}

export default SlideItem;