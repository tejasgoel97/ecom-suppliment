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

const CardList = ({value}) => {
    const cardData1 = [
        {
            image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-TopOnTheCharts-1-Crocs-Upto40.jpg',
            title: 'Card 1',
            description: 'Description for Card 1',
        },
        {
            image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-TopOnTheCharts-2-DNMX-Teamspirit-Min50.jpg',
            title: 'Card 2',
            description: 'Description for Card 2',
        },
        {
            image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-TopOnTheCharts-3-M&S-GAP-Min30.jpg',
            title: 'Card 3',
            description: 'Description for Card 3',
        },
        {
            image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-TopOnTheCharts-4-Avaasa-Gulmohar-Min40.jpg',
            title: 'Card 3',
            description: 'Description for Card 3',
        },
    ];

        const cardData2 = [
            {
                image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Ethnicwear-Sectionheader.jpg',
                title: 'Card 1',
                description: 'Description for Card 1',
            },
            {
                image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Kidswear-Sectionheader.jpg',
                title: 'Card 2',
                description: 'Description for Card 2',
            },
            {
                image: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Footwear-Sectionheader.jpg',
                title: 'Card 3',
                description: 'Description for Card 3',
            },
            
        ];
        let cardData = [];
        if(value ===1) cardData = cardData1
        if(value ===2) cardData = cardData2
    return (
        <div className="container  m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardList;
