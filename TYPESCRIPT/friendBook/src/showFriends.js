
class ShowFriends extends Component{

    render(){

        const {
            currentFriend
        } = this.props;

        return(

            <div className="friendInfo">

                <div>
                    <img 
                        alt={currentFriend.firstName}
                        src={currentFriend.imageURL}
                        width={500}
                    />
                </div>

                <div className="formatFriend">
                    <p className="friendName">{currentFriend.firstName + " " + currentFriend.lastName}</p>
                    <p className="currentFriend">Phone Number: {currentFriend.phoneNumber}</p>
                    <p className="currentFriend">Address: {currentFriend.addressLine1}</p>
                    <p className="currentFriend">{currentFriend.addressLine2}</p>
                    <p className="currentFriend">Birthday: {currentFriend.birthday}</p>
                </div>

            </div>

        );

    }

}

export default ShowFriends;