import Navbar from "../../../navbar/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Card from "../../../Card/Card";
import styles from './Property.module.scss';
import { ID_CARDS } from "../../../../utils/Queries";


const Property = ()=>{

    let params=useParams();

    const {loading , data, error} = useQuery(ID_CARDS, {
        variables:{id:params.propertyId},
    });

    const queryHandler =() =>{
        if (loading) return <h1>loading</h1>
        if(error) return <h1></h1>
        if(data) {
            if (data.house.data.length){
                let house = data.house.data[0];
                return(<div className={styles.house}>

                <Card
                info={{
                  id: house.id,
                  category:"Buy/Rent",
                  imageSource:`http://localhost:1337${house.attributes.Preview_Image}`,//problem here 
                  city: `${house.attributes.location.data.attributes.City}`,
                  neighbourhood: `${house.attributes.Neighbourhood}`,
                  street: `${house.attributes.Street}`,
                  description: `${house.attributes.Description}`,
                  rooms: `${house.attributes.Rooms}`,
                  bedrooms: `${house.attributes.Bedrooms}`,
                  bathrooms: `${house.attributes.Bathrooms}`,
                  shortAndress: `${house.attributes.Short_Adress}`,
                  price: `${house.attributes.price}`}
                  
                  }
                />
                <div style={{margingTop:"2rem",margingBottom:"2rem", color:'#333' }}></div>
                  <span>Description</span>
                  <p>{house.attributes.Description}</p>

                </div>
                );
            }
            return <h1>Property Not Found</h1>
        }
    }



    return (
        <main>
            <Navbar/>
            <div className={styles.center}>{queryHandler()}</div>
        </main>
    )
}

export default Property;