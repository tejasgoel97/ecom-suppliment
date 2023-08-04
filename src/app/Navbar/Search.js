import React, { useState } from 'react';

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
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="py-2 px-4 rounded-lg bg-gray-200 focus:outline-none w-full"
      />
      {showSuggestions && (
        <ul className="absolute top-10 left-0 right-0 z-10 bg-white border border-gray-300 rounded-lg shadow">
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
