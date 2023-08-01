import React, { Component, useState, useEffect } from 'react';

/* LPTable Component */
import LPTable from "../../components/Table";

/* API Route imports */
import { LP__ROUTES } from '../../api/api';

/* Loading Icon */
import { TailSpin } from 'react-loading-icons';

const AllLPs = () => {

    const [lpdata, setLPData] = useState<Object>({})
	const [payload, setPayload] = useState<Object>({})
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		getLPData()
	}, [])

    const columns: Array<Object> = 
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