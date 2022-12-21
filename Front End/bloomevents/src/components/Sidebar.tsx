import React from 'react'

function Sidebar() {
  return (
    <div className='bg-[#fff] w-3/12 border-2 rounded-xl p-4 drop-shadow-lg'>
        <h1 className='text-[#ffa537] text-xl'>Filter</h1>
          
        <div className="w-full col-span-6 my-2 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Sort result by</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>Date : Newest on top</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-full col-span-6 my-2 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Type of poster</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>All</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-full col-span-6 my-2 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">District</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>Colombo</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-full col-span-6 my-2 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>Photography</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-full col-span-6 my-10 sm:col-span-3">
        <button
            type="submit"
            className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Filter
        </button>

        </div>

        

    </div>
  )
}

export default Sidebar