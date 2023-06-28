import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name}, this is a 'class' Component</h1>
    }
}

export default Welcome