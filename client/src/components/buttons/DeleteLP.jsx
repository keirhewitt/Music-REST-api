import React, { Component } from "react";
import { LP__ROUTES } from "./urls";

import DeleteIcon from '@mui/icons-material/Delete';

export default class DeleteLP extends Component {

    handleDelete = (id) => { LP__ROUTES.deleteLP(id); };

    deleteLP = event => {
        event.preventDefault();

        if (window.confirm(`Delete LP ${this.props.id}?`)) {
            this.handleDelete(this.props.id);
            window.location.reload();
        }
    }

    render() {
        return <button className='border-none bg-transparent' onClick={this.deleteLP}>
            <DeleteIcon className='fill-red-700 hover:cursor-pointer hover:fill-red-600' />
        </button>
    }
}