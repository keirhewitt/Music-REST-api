import React, { Component } from "react";

// @ts-ignore
import { LP__ROUTES } from "./urls";

import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteLPProps {
    id: number
}

export default class DeleteLP extends Component<DeleteLPProps> {

    handleDelete = (id: number) => { LP__ROUTES.deleteLP(id); };

    deleteLP = (event: { preventDefault: () => void; }) => {
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