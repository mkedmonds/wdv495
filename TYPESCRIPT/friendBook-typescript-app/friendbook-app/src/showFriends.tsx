import React from 'react';

interface IProps {
    imgURL: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    birthday: string;
}

interface IState{
    firstName: string;
    lastName: string;
}

export default class ShowFriends extends React.Component<IProps, IState> {

    state:IState = {
        firstName: "",
        lastName: ""
    }

    public render() {

        const {imgURL} = this.props;

        return(
            <div>

                <div>{imgURL}</div>

            </div>
        );
    }
}