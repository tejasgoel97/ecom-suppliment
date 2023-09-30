import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mocked suggestion list for demonstration purposes
  const suggestionList = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0); // Show suggestions only if the input has some text
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false); // Hide suggestions after selecting one
  };

  return (
    <div className="relative w-full">
        <div className='flex items-center max-h-10 bg-white' onFocus={()=>console.log("hi there")}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={()=> setShowSuggestions(true)}
        onBlur={()=> setShowSuggestions(false)}
        className="py-2 px-2 rounded-lg flex-1 focus:outline-none"
        />
        <MagnifyingGlassIcon  className=" h-6 w-6 text-white-200 hover:text-gray-900"/>
        </div>
      {showSuggestions && (
        <ul className="absolute top-10 left-0 right-0 z-10 bg-white border border-gray-300 shadow">
          {suggestionList
            .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
