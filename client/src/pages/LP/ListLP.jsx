import React, { Component, useState, useEffect } from 'react';

/* LPTable Component */
import LPTable from "../../components/Table";

import { LP__ROUTES } from 'api/api';

import { TailSpin } from 'react-loading-icons';

const AllLPs = () => {

    const [lpdata, setLPData] = useState()
	const [payload, setPayload] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getLPData()
	}, [])

    const columns = 
	[{ Header: 'Artist' },
	 { Header: 'Title' },
	 { Header: 'Release Date' },
	 { Header: 'Actions' }]

	const getLPData = async () => {
		setLoading(true)
		await LP__ROUTES.getAllLPs(payload)
		.then((res) => {
			setLPData(res.data)
			setLoading(false)
		})
	}
    return (
        <div className='w-5/6 flex m-auto h-screen'>
            { loading ? 
                <TailSpin stroke="#ccc" className='m-auto h-20 w-20'/>  
            :
                <LPTable data={lpdata} columns={columns}/> 
            }       
        </div>
    )
}

export default AllLPs;