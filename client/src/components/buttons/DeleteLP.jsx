import { Component } from "react";


export class DeleteLP extends Component {
    deleteLP = event => {
        event.preventDefault();

        if (window.confirm('Are you sure you want to delete this LP?')) {
            lp_urls.deleteLP(this.props.id);
            window.location.reload();
        }
    }

    render() {
        return <Delete onClick={this.deleteLP}>Delete</Delete>
    }
}