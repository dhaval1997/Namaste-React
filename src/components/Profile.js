import React from "react";
import { GIT_API } from "../utils/constants";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userName: "Dummy Name",
        userLocation: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GIT_API);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h3>twitter: {this.state.userInfo.twitter_username}</h3>

      </>
    );
  }
}

export default Profile;
