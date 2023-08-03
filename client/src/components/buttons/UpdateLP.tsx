import { Component } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { ObjectId } from "mongoose";

interface UpdateLPProps {
    id: number | ObjectId;
}

export default class UpdateLP extends Component<UpdateLPProps> {

    updateLP = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = `/music/lp/update/${this.props.id}`;
    }

    render() {
        return <button className='border-none bg-transparent' onClick={this.updateLP}>
            <EditIcon className='fill-slate-600 hover:cursor-pointer hover:fill-blue-500' />
        </button>
    }
}