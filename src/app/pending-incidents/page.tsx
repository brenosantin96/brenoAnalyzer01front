import React from 'react'

const PendingIncidents = () => {
    return (
        <div>
            <table className="m-5  border-spacing-1 table-auto bg-slate-200 border-2">
                <thead>
                    <tr>
                        <th className='border border-slate-400 font-semibold p-3'>Song</th>
                        <th className='border border-slate-400 font-semibold p-3'>Artist</th>
                        <th className='border border-slate-400 font-semibold p-3'>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-400 p-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='border border-slate-400 p-2'>Malcolm Lockyer</td>
                        <td className='border border-slate-400 p-2'>1961</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-400 p-2'>Witchy Woman</td>
                        <td className='border border-slate-400 p-2'>The Eagles</td>
                        <td className='border border-slate-400 p-2'>1972</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-400 p-2'>Shining Star</td>
                        <td className='border border-slate-400 p-2'>Earth, Wind, and Fire</td>
                        <td className='border border-slate-400 p-2'>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PendingIncidents