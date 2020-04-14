import React from 'react';
import friends from "./friends";
import ShowFriends from "./showFriends";
import FriendsPreview from "./friendsPreview";
import './style.css';


class App extends React.Component {

  _setCurrentFriend = (friend) => 
    this.setState({
      currentFriend: friend
    });

  constructor(props){
    super(props);

    this.setCurrentFriend = this._setCurrentFriend.bind(this);

    this.state = {
      currentFriend:null
    };
  }

  render(){   

    return (

      <div>

        <div className="heading">Friends Contact Book</div>

        <div className="container"> 
      

          <FriendsPreview
            friends={friends}
            setCurrentFriendFunction = {this.setCurrentFriend}
          />

          <div>          

            {

              this.state.currentFriend ?

              <div>
                <button
                  className="clearFriend"
                  onClick={()=> this._setCurrentFriend(null)}
                >

                  x
                </button>

                <ShowFriends
                  currentFriend = {this.state.currentFriend}
                />

                
              </div>

              :

              <div className="selection">
                <p>Please select a friend</p>
              </div>

            }

          </div>

          

        </div>
      </div>  
    );
  }
}

export default App;



