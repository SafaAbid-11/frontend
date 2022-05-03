import styles from "./Section2.module.scss"
import {ArrowButton} from "../../../buttons/Buttons"
import Carousel from "../../../Carousel/Carousel"
import { SwiperSlide } from "swiper/react";
import Card from "../../../Card/Card";
import { useQuery,gql } from "@apollo/client";
import { useEffect } from "react";

const CARD_DATA = gql`
  query GET_CARDS {
  houses(
    filters: { categories: { Category: { contains: "Buy" } } }
    pagination: { limit: 6 }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              City
            }
          }
        }
        Preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        price
        Rent
        Short_Adress
        Neiberhood
      }
    }
  }
}`;

const Section3 = () => {
  useEffect(()=>{
    setTimeout(() => {
      console.log("ahaya ", data.houses.data[0].attributes.Preview_Image.data[0].attributes.url);
    }, 500);
  })

  const {loading, data,error} = useQuery(CARD_DATA);
  return (
    <section className={styles.section_3}>
        <div className={styles.section_3_title}>
            <h1>Best Houses</h1>
            <ArrowButton text="See More" path="buy"/>
        </div>
        {/* CARDS /CAROUSEL */}
        <div className={styles.cards}>
          <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card/>
              </SwiperSlide>
            </>
          ):(
            <>
            {data.houses.data.map((house, index)=>(
              <SwiperSlide key={index}>
                <Card
                info={{
                  id: house.id,
                  category:"Buy",
                  imageSource:`http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,//problem here 
                  city: `${house.attributes.location.data.attributes.City}`,
                  neighbourhood: `${house.attributes.Neighbourhood}`,
                  street: `${house.attributes.Street}`,
                  rooms: `${house.attributes.Rooms}`,
                  bedrooms: `${house.attributes.Bedrooms}`,
                  bathrooms: `${house.attributes.Bathrooms}`,
                  shortAndress: `${house.attributes.Short_Adress}`,
                  price: `${house.attributes.price}`}}
                />
              </SwiperSlide>
            ))}
            </>
          )}
          </Carousel>
          
        </div>
    </section>
  )
}  

export default Section3;