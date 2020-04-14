import React, {Component} from 'react';

class FriendsPreview extends Component {
    render() {
        const {
            friends,
            setCurrentFriendFunction
        } = this.props;

        return (
            <div className="friendPreviewBackground">
                {
                    friends.map((friend) =>
                        <button
                            className="friend"
                            key={friend.lastName}
                            onClick={() => setCurrentFriendFunction(friend)}
                        >
                            <div>{friend.firstName}</div>
                            <div>{friend.state}</div>
                            {/* <img
                                alt={friend.firstName}
                                src={friend.imageURL}
                                height={250}
                            /> */}
                        </button>
                    )
                }
            </div>
        );
    }
}

export default FriendsPreview;