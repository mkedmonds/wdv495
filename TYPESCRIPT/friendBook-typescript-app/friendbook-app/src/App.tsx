import React, { Component } from 'react';
import ShowFriends from './showFriends';
import './index.css';


class App extends Component {


  render(){   

    return (

      <div>

        <div className="heading">Friends Contact Book</div>

        <ShowFriends 
        
          imgURL = "cody.jpg"
          phoneNumber = "(333)333-3333"
          addressLine1 = "028 Hersey St., Austin, Texas 56230"
          addressLine2 = "House"
          city = "Austin"
          state = "Texas"
          zipCode = "56230"
          birthday = "02-01-1998"
        
        />

        
      </div>  
    );
  }
}

export default App;




