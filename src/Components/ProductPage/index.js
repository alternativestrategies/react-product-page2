import React, {Component} from "react";
import Product from './Product';
import Menu from './Menu';
import Products from '../../Data.json';

class ProductList extends Component {
  state = {
    type: "",
    selectedOption: ""
  }

  handleChange = (selectedOption) => {
    this.setState({
      type: selectedOption.value,
      selectedOption: selectedOption.label
    })
  }

  render() {
    let results = [];

    Products.filter(p => {
      if (this.state.type  === "All" || this.state.type === ""){
        results.push(<Product name={p.product_name} price={p.price} photos={p.product_img} description={p.product_description}/>);
      } 
      if (this.state.type === p.category){
         results.push(<Product name={p.product_name} price={p.price} photos={p.product_img} description={p.product_description}/>);
      }
     return results;
    }
)

      return (
        <div className="no-bg ">
          <Menu 
      selectedOption={this.state.selectedOption}
      toggleCheck={this.toggleCheck}
      category={this.category}
      handleChange={this.handleChange}/>
        <div className="grid">
        {results}
        </div>
        </div>
      );
    }
}
export default ProductList;


// import React, {Component} from "react";
// import Product from './Product';
// import Menu from './Menu';

// //we are going to use the api to generate content
// class ProductPage extends Component {
//   state = {
//     type: "",
//     selectedOption: "",
//     error: null,
//     isLoaded: false,
//     products: []
//   }

//   //this function sets in state the selected user category
//   //it also makes an API call to fetch category
//   handleChange = (selectedOption) => {
//     this.setState({
//       type: selectedOption.value,
//       selectedOption: selectedOption.value
//     }, () => {
//         this.fetchCategory()
//     })
//   }

//   //callback that fetches api endpoint
//   fetchCategory = () => {
//     let endpoint;
//     if (this.state.type === "All" || this.state.type === ""){
//        endpoint = `/api/products`
//     } else {
//       endpoint = `/api/productfilter?category=${this.state.selectedOption}`
//     }
//     fetch(endpoint)
//     .then(res => res.json())
//     .then((data)=>{
//         this.setState({
//           products: data
//       });
//     },
//     (error) => 
//         this.setState({
//           isLoaded: true,
//           error
//         })
    
//     )
//   }

//   //will fetch products from the api and then set it in state
//   componentDidMount(){
//     this.fetchCategory();
//   }
//   render(){
//     return(
//       <React.Fragment>
//       <Menu 
//       selectedOption={this.state.selectedOption}
//       toggleCheck={this.toggleCheck}
//       checked={this.state.checked}
//       category={this.category}
//       handleChange={this.handleChange}/>
//       <div className="grid">
//          {this.state.products.map(item => 
//          <Product key={item.product_id}
//           name={item.product_name}
//           photos={item.product_img}
//           description={item.product_description}
//           price={item.price}/>)
//          }
//       </div>
//       </React.Fragment>
      
//     );
//   }
// }

// export default ProductPage;