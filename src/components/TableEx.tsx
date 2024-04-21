import React from 'react'

const TableEx = () => {
    return (
            <table className="border-spacing-1 table-auto bg-[#D9D9D9] border-2">
                <thead className='text-center'>

                    <tr className=' text-center p-2 w-full'>
                        <td colSpan={3} className='text-xl font-medium p-3'>
                            Deberían estar actualizados
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>

                    <tr className='font-medium text-center'>
                        <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Técnico</td>
                        <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Pendientes</td>
                        <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Pencierres</td>
                    </tr>
                </thead>
                <tbody>

                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Javi</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Juanito</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Pepito</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Matheus</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Jhoanna</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>German</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Abrunhosa</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>
                    <tr className='font-medium'>
                        <td className='border border-[#ABABAB] text-[#505153] p-2'>Luisito</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
                        <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>2</td>
                    </tr>

                </tbody>
            </table>
    )
}

export default TableEx