import React from 'react'

function Searchbar() {
  return (
    <div className='flex justify-around w-full py-3 pb-5 my-3 bg-[#ffa537]'>
        <div className="w-3/12 col-span-6 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">District</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>District</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-3/12 col-span-6 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category</label>
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    
                <option>Category</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
        </div>

        <div className="w-3/12 col-span-6 sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Search</label>
            <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            placeholder='Search'
            className="pl-4 mt-2 input-fld"
            />
        </div>

        
    </div>
  )
}

export default Searchbar