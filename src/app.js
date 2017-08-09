import React, { Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class Tabs extends Component {
    // 挂载
    constructor (props) {
        super(props);
        this.state = {
            name: 'Tabs'
        }
    }
    render () {
        return (
            <div className="ui-tabs">12</div>
        )
    }
    componentDidMount () {
        console.log(22)
    }
}

ReactDOM.render(
    <Tabs/>,
    document.getElementById("container")
);