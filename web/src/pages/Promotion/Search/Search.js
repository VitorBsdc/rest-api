import React, { useEffect, useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import axios from 'axios';
import './Search.css';

const PagesPromotionSearch = () => {

  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
       <h1 className="title-main">Nexus Group - Rest API</h1>

      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}

    </div>
  );
};

export default PagesPromotionSearch;
