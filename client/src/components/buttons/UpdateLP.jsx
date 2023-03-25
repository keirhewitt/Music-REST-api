import { Component } from "react";

export class UpdateLP extends Component {

    updateLP = event => {
        event.preventDefault();
        window.location.href = `/music/lp/update/${this.props.id}`;
    }

    render() {
        return <button id="update-lp-btn" onClick={() => this.updateLP}>Update</button>
    }
}