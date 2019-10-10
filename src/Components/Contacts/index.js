// import React, {useState} from 'react';
import React from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

class Contacts extends React.Component{
  state = {
    first_name: "",
    last_name: "",
    email: "",
    product_id: 0,
    comments: "",
    error: null,
    contacts: []
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      product_id: e.target.value
    })
  }

  //will capture form data on submit and post to database
  onSubmit = () => {
    const {first_name, last_name, email, comments, product_id} = this.state;
    axios.post('/api/newcontacts', {first_name, last_name, email, product_id, comments  })
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      comments: "",
      product_id: 0
    })
  }

  //allows me to get contacts from api
  componentDidMount = () => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            contacts: data
          });
        },
        (error) => 
        this.setState({
          error
        })
    )
  }

  render(){
  return(
    <React.Fragment>
      <ContactForm
    onChange={this.onChange}
    onSubmit={this.onSubmit}
    first_name={this.state.first_name}
    last_name={this.state.last_name}
    email={this.state.email}
    product_id={this.state.product_id}
    comments={this.state.comments}
    />
    </React.Fragment>

    )
  }
}



export default Contacts;