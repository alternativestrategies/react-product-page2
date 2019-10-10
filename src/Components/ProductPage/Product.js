import React from 'react';
import {Button} from 'react-bootstrap';

const Product = (props) => {
    return(
        <React.Fragment>
            <div className="grid-item">
            <img className="grid-image" src={`/assets/img/${props.photos}`} alt="{props.name}"/>
            <p className="grid-item-name">
            { props.name }
            </p>
            <p className="grid-description">
            { props.description}
            </p>
            <Button className="price">
            ${props.price}
            </Button>
            </div>
        </React.Fragment>
    );
}

export default Product;

// import React from 'react';
// import {Button} from 'react-bootstrap';

// //this is the product component
// const Product = (props) => {
//     return(
//         <React.Fragment>
//             <div className="grid-item">
//             <img className="grid-image" src={`assets/img/${props.photos}`} alt="{props.name}"/>
//             <p className="grid-item-name">
//             { props.name }
//             </p>
//             <p className="grid-description">
//             { props.description}
//             </p>
//             <Button className="price">
//             ${props.price}
//             </Button>
            
//             </div>
//         </React.Fragment>
//     );
// }

// export default Product;