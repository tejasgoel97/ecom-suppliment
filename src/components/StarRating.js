import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const StarRating = ({ rating }) => {
  // Ensure rating is within the range 0 to 5
  const clampedRating = Math.min(5, Math.max(0, rating));
  
  const stars = [];

  // Calculate the number of full stars
  const fullStars = Math.floor(clampedRating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon key={i} className="h-5 w-5 text-primary" />
    );
  }

  // Calculate the number of half stars (if any)
  const hasHalfStar = clampedRating % 1 !== 0;
  if (hasHalfStar) {
    stars.push(
        <StarIcon className="h-5 w-5 text-gray-300" />
    );
  }

  // Calculate the number of empty stars
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
    );
  }

  return (
    <div className="flex">
      {stars}
      <h1>{rating} ratings</h1>
    </div>
  );
};

export default StarRating;
