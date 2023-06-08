import Image from 'next/image';
import React from 'react';

export const LocationCard = ({ location }) => {
  const {
    businessName,
    addressLine1,
    locality,
    administrativeArea,
    countryRegion,
    primaryPhone,
    website,
    primaryCategory,
    sundayHours,
    mondayHours,
    tuesdayHours,
    wednesdayHours,
    thursdayHours,
    fridayHours,
    saturdayHours,
    logoPhoto,
  } = location;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{businessName}</h2>
        </div>
        <p className="text-gray-600 mb-2">{addressLine1}</p>
        <p className="text-gray-600 mb-2">
          {locality}, {administrativeArea} {countryRegion}
        </p>
        <p className="text-gray-600 mb-2">{primaryPhone}</p>
        <p className="text-gray-600 mb-2">{website}</p>
        <p className="text-gray-600 mb-4">{primaryCategory}</p>
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-2">Opening Hours:</h3>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-600">
              Sunday: <span className="font-semibold">{sundayHours}</span>
            </p>
            <p className="text-gray-600">
              Monday: <span className="font-semibold">{mondayHours}</span>
            </p>
            <p className="text-gray-600">
              Tuesday: <span className="font-semibold">{tuesdayHours}</span>
            </p>
            <p className="text-gray-600">
              Wednesday: <span className="font-semibold">{wednesdayHours}</span>
            </p>
            <p className="text-gray-600">
              Thursday: <span className="font-semibold">{thursdayHours}</span>
            </p>
            <p className="text-gray-600">
              Friday: <span className="font-semibold">{fridayHours}</span>
            </p>
            <p className="text-gray-600">
              Saturday: <span className="font-semibold">{saturdayHours}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
