import React from 'react'
import Navbar from '../../../navbar/Navbar';
import styles from './buy.module.scss';
import Card from '../../../Card/Card';
import { useQuery } from '@apollo/client';
import { BUY_CARDS } from '../../../../utils/Queries';

 

 const Buy = () => {

  const {loading , data, error} = useQuery(BUY_CARDS);


  return (
  <main> 
      <Navbar/>
      <div className={styles.content}>
        <h1>Houses For Sale</h1>
        {/* card*/}
          <div className={styles.card}>
            {loading || error ? (<h1 style={{color:"#333"}}>loading...</h1>
            ):(
                <div className={styles.cards}>{data.houses.data.map((house, index)=>(
                <Card
                key={index}
                secondClass={styles.card}
                info={{
                  id: house.id,
                  category:"Buy",
                  imageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",//problem here 
                  city: `${house.attributes.location.data.attributes.City}`,
                  neighbourhood: `${house.attributes.Neighbourhood}`,
                  street: `${house.attributes.Street}`,
                  rooms: `${house.attributes.Rooms}`,
                  bedrooms: `${house.attributes.Bedrooms}`,
                  bathrooms: `${house.attributes.Bathrooms}`,
                  shortAndress: `${house.attributes.Short_Adress}`,
                  price: `${house.attributes.price}`}}
                />
                ))}
                </div>
                )}
          </div>
        </div>
  </main>
  );
};

export default Buy;