import React, { Component } from 'react';
import ReactTable from 'react-table';
import { lp_urls } from 'api/api';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class AllLPs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lps: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await lp_urls.getAllLPs().then(lp => {
            this.setState({
                lp: lp.data,
                isLoading: false,
            });
        })
    }

    render() {
        const { lps, isLoading } = this.state;

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Artist',
                accessor: 'artist',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Release Date',
                accessor: 'release',
                Cell: props => <span>{props.releaseDate}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteLP id={props._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateLP id={props._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true;
        if (!lps.length) {
            showTable = false;
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={lps}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default AllLPs;