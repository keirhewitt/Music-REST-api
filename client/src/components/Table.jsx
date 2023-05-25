/** 
	Export a React-Table
*/

import React from 'react';

/* IMPORT BUTTON COMPONENTS */
import UpdateLP from './buttons/UpdateLP';
import DeleteLP from './buttons/DeleteLP';

/* STYLES */
const tdStyle = `p-3 border-t-[0.5px] overflow-hidden text-ellipsis`;

function Table({ columns, data }) {
  return (
  	<table className='overflow-hidden border-collapse table-fixed rounded-md whitespace-nowrap w-full overflow-x-auto'>
		<thead className='bg-[#ccc] text-[#222]'>
			<tr>
				<th className='p-3 w-2/6'>{columns[0].Header}</th>
				<th className='p-3 w-2/5'>{columns[1].Header}</th>
				<th className='p-3 w-1/6'>{columns[2].Header}</th>
				<th className='p-3 w-1/12'>{columns[3].Header}</th>
			</tr>
		</thead>
		<tbody>
			{data.map((row) => (
				<>
					<tr className=' hover:bg-slate-200'>
						<td className={`${tdStyle}`}>{row.artist}</td>
						<td className={`${tdStyle}`}>{row.title}</td>
						<td className={`${tdStyle}`}>{row.releaseDate}</td>
						<td className={`${tdStyle}`}>
							<span className='flex w-full justify-around'>
								<UpdateLP id={row._id}/>
								<DeleteLP id={row._id}/>
							</span>
						</td>
					</tr>
				</>
			))}	
		</tbody>
	</table>
  )
}

export default function CreateTable({ data, columns }) {
    return (
		<div className='flex justify-center p-4'>
			<Table columns={columns} data={data}/>
		</div>
	)
}
