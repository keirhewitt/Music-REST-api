import React, { Component } from 'react';
import ReactTable from 'react-table';
import styled from 'styled-components';
import { lp_urls } from "../../api/api";

/* Import Buttons */
import { DeleteLP } from "../../components/buttons/DeleteLP";
import { UpdateLP } from "../../components/buttons/UpdateLP";

import LPTable from "../../components/Table";


class AllLPs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }

    // Wait for page to load all LPs and then update state
    componentDidMount = () => {
        this.setState({ isLoading: true });
    }

    render() {
        return (
            <LPTable />
        )
    }
}

export default AllLPs;