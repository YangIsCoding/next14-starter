import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return(
  <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={ styles.title}>
         Y.Dynamics
        </h1>
        <p className={ styles.description}>
        We are a group of professionals who are passionate about technology and its potential to transform businesses. We are committed to helping our clients achieve their goals by providing them with the best possible solutions.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={ styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brand.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.webp" alt="" fill className={styles.heroImg}/>
    </div>
    </div>
  );
};

export default Home;