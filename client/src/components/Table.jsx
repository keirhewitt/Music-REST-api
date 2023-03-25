/** 
	Export a React-Table
*/

import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import { lp_urls } from "../api/api";

const Wrapper = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
  	<>
	    <table {...getTableProps()}>
	      <thead>
	        {headerGroups.map(headerGroup => (
	          <tr {...headerGroup.getHeaderGroupProps()}>
	            {headerGroup.headers.map(column => (
	              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
	            ))}
	          </tr>
	        ))}
	      </thead>
	      <tbody {...getTableBodyProps()}>
	        {rows.map((row, i) => {
	          prepareRow(row)
	          return (
	            <tr {...row.getRowProps()}>
	              {row.cells.map(cell => {
	                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
	              })}
	            </tr>
	          )
	        })}
	      </tbody>
	    </table>
    </>
  )
}

export default function CreateTable() {

	const [lpdata, setLPData] = useState()
	const [payload, setPayload] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getLPData()
	}, [])

	const getLPData = async () => {
		await lp_urls.getAllLPs(payload).then((res) => {
			setLPData(res.data)
			setLoading(false)
		})
	}

    const columns = React.useMemo(
		() => [
		  {
		    Header: 'ID',
		    accessor: '_id',
		  },
		  {
		  	Header: 'Artist',
		  	accessor: 'artist',
		  	filterable: true
		  },
		  {
		  	Header: 'Title',
		  	accessor: 'title',
		  	filterable: true
		  },
		  {
		  	Header: 'Release Date',
		  	accessor: 'releaseDate',
		  	filterable: true
		  },
		],
		[]
	)

    if (loading) {
    	return <div className="loading-div">Loading...</div>
    }
    return (
		<Wrapper>
			<Table columns={columns} data={lpdata} />
		</Wrapper>
	)
}
