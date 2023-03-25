import React, { Component } from "react";
import { lp_urls } from "./urls";


export class DeleteLP extends Component {

    handleDelete = (id) => {
        lp_urls.deleteLP(id);
    };

    deleteLP = event => {
        event.preventDefault();

        if (window.confirm('Are you sure you want to delete this LP?')) {
            this.handleDelete(this.props.id);
            window.location.reload();
        }
    }

    render() {
        return <button id="delete-lp-btn" onClick={() => this.deleteLP}>Delete</button>
    }
}