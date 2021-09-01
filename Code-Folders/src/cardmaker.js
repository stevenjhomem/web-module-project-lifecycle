
import React, { Component } from 'react';
import fetchFollower from './fetchfollower';

    
class CardMaker extends Component {

    constructor(props){
        super(props);
        this.state = {
            followersObjectArray : []
        }
    }


   componentDidMount(){
       fetchFollower(this.props.followersURL)
       .then(response => {
           this.setState({
               followersObjectArray : response.data
               });
       })
    };

    render(){
        return(
            <div>
                <ul>
                    {this.state.followersObjectArray.map(followerObject => {
                        return <li key = {followerObject.id} >{followerObject.login}</li>
                    })}
                </ul> 
            </div>
        )
    }
}

export default CardMaker;