import styles from "./Section2.module.scss"
import {ArrowButton} from "../../../buttons/Buttons"
import Carousel from "../../../Carousel/Carousel"
import { SwiperSlide } from "swiper/react"
const Section3 = () => {
  return (
    <section className={styles.section_3}>
        <div className={styles.section_3_title}>
            <h1>Best Houses</h1>
            <ArrowButton text="See More" path="buy"/>
        </div>
        {/* CARDS /CAROUSEL */}
        <div className={styles.cards}></div>
    </section>
  )
}  

export default Section3