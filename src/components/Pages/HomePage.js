import Header from "../Header/Header";
import classes from './HomePage.module.css'
import Footer from "../Footer/Footer";


const HomePage = () => {
   return <div>
   <Header></Header>
   <div className={classes.yo}>
   <button className={classes.mid_button}>GET OUR LETEST ALBUM</button>
   </div>
    <button className={classes.icon}>▶</button>
    <section className={classes.section}>
   <h1 className={classes.h1}>Tours</h1>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MARS</span>
      <span className={classes.stage}>MOUNTAIN</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>AUG 19</span>
      <span className={classes.city}>SATURN</span>
      <span className={classes.stage}>TITAN</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span  className={classes.date} >JULY 9</span>
      <span className={classes.city}>SATURN</span>
      <span className={classes.stage}>TETHIS</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>PLUTO</span>
      <span className={classes.stage}>NEIGHBOURHOOD</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MURCURY</span>
      <span className={classes.stage}>VOLCANO</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MURCURY</span>
      <span className={classes.stage}>VOLCANO</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MURCURY</span>
      <span className={classes.stage}>VOLCANO</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MURCURY</span>
      <span className={classes.stage}>VOLCANO</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   <div className={classes.tour}>
      <span className={classes.date}>JULY 9</span>
      <span className={classes.city}>MURCURY</span>
      <span className={classes.stage}>VOLCANO</span>
      <button className={classes.button}>BUY TICKETS</button>
   </div>
   </section>
   <Footer />
   </div>
};

export default HomePage;