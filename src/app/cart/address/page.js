'use client'

import React, { useState } from 'react';

const AddressSelector = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAddressData, setNewAddressData] = useState({
    name: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [addresses, setAddresses] = useState([
    {
        id: 1,
        name: 'John Doe',
        phoneNumber: '123-456-7890',
        addressLine1: '123 Main St',
        addressLine2: 'Apt 4',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
      },
      {
        id: 2,
        name: 'Jane Smith',
        phoneNumber: '987-654-3210',
        addressLine1: '456 Elm St',
        addressLine2: '',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94101',
      },
  ]);

  const handleRadioChange = (event) => {
    setSelectedAddress(parseInt(event.target.value, 10));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateAddress = (event) => {
    event.preventDefault();
    const newAddress = {
      id: addresses.length + 1,
      ...newAddressData,
    };

    setAddresses([...addresses, newAddress]);

    setSelectedAddress(newAddress.id);

    setShowCreateForm(false);
    setNewAddressData({
      name: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Choose an Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <label
            key={address.id}
            className={`block bg-white p-4 rounded border cursor-pointer ${
              selectedAddress === address.id ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <input
              type="radio"
              value={address.id}
              checked={selectedAddress === address.id}
              onChange={handleRadioChange}
              className="hidden"
            />
            <div>
              <span className="text-lg font-semibold">{address.name}</span>
              <div>{address.addressLine1}</div>
              {address.addressLine2 && <div>{address.addressLine2}</div>}
              <div>
                {address.city}, {address.state} - {address.postalCode}
              </div>
              <div>Phone: {address.phoneNumber}</div>
            </div>
          </label>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">Create a New Address</h2>
      {showCreateForm ? (
        <form onSubmit={handleCreateAddress} className="mt-4">
        <div className="mb-4">
          <label className="block font-bold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={newAddressData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={newAddressData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Address Line 1:</label>
          <input
            type="text"
            name="addressLine1"
            value={newAddressData.addressLine1}
            onChange={handleInputChange}
            placeholder="Address Line 1"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Address Line 2:</label>
          <input
            type="text"
            name="addressLine2"
            value={newAddressData.addressLine2}
            onChange={handleInputChange}
            placeholder="Address Line 2"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">City:</label>
          <input
            type="text"
            name="city"
            value={newAddressData.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">State:</label>
          <input
            type="text"
            name="state"
            value={newAddressData.state}
            onChange={handleInputChange}
            placeholder="State"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={newAddressData.postalCode}
            onChange={handleInputChange}
            placeholder="Postal Code"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Save
        </button>
      </form>
      ) : (
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-green-500 text-white rounded mt-4"
        >
          Create New Address
        </button>
      )}
    </div>
  );
};

export default AddressSelector;
