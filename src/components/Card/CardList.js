import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="max-w-md w-full  cursor-pointer">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full sm:h-100 object-cover" />
                {/* <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div> */}
            </div>
        </div>
    );
};

const CardList = () => {
    const cardData = [
        {
            image: 'https://img8.hkrtcdn.com/30508/bnr_3050767_o.jpg',
            title: 'Card 1',
            description: 'Description for Card 1',
        },
        {
            image: 'https://img8.hkrtcdn.com/30508/bnr_3050767_o.jpg',
            title: 'Card 2',
            description: 'Description for Card 2',
        },
        {
            image: 'https://img8.hkrtcdn.com/30508/bnr_3050767_o.jpg',
            title: 'Card 3',
            description: 'Description for Card 3',
        },
        {
            image: 'https://img8.hkrtcdn.com/30508/bnr_3050767_o.jpg',
            title: 'Card 3',
            description: 'Description for Card 3',
        },
        {
            image: 'https://img8.hkrtcdn.com/30508/bnr_3050767_o.jpg',
            title: 'Card 3',
            description: 'Description for Card 3',
        },  

    ];

    return (
        <div className="container  m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardList;
