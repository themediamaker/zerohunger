import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const tableData = [
        { id: 1, name: 'Any'},
        { id: 2, name: 'Friend'},
        { id: 3, name: 'Parents'},
        { id: 4, name: 'Relative'},
        { id: 5, name: 'Self'},
        { id: 6, name: 'Sibling'},
      ];
      const filteredData = tableData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return (
        <div className="max-w-xl mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div class="p-4">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

    <tbody>
      {filteredData.map((item) => (
        <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id={`checkbox-table-search-${item.id}`}
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for={`checkbox-table-search-${item.id}`} class="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {item.name}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>
        
      )
  
}

export default Search