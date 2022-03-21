import Navbar from '../../../navbar/Navbar';
import styles from "./Section1.module.scss";
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'
import { Link } from 'react-router-dom';
import { useState  } from 'react';

const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");
  return (
    <section className={styles.Section_1}>
        {/* NAVBAR */}
        <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"}/>
        </div>
      

      {/* SECTION 1 CONTENT */}
     
      <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search and find your dream house at affordable prices , but with best quality , only available in ESTATEPlan </p>
              
        {/* SearchBox */}
          <div className={styles.search_container}>
            
        <form className='search'>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* Price Range */}
            <div className={styles.price_container}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>
            
                  {/* Search Button*/}
                  <Link to="search">
                  <button type='submit'>
                    <AiOutlineSearch className='icon'/>
                  </button>
                  </Link>
               
                </form>
                </div>
          </div>
        </div> 
        </section>
  )
}
export default Section1;