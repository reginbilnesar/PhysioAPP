import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.p1}>
          <Link href={"/"}> About Agency</Link>
        </div>
        <div className={styles.title}>
          <h1>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
        </div>
        <div className={styles.p2}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            perspiciatis voluptates aut ad nemo eveniet temporibus aliquid
            necessitatibus placeat ullam dignissimos quaerat a eius, molestiae
            neque, modi magni amet consectetur.
          </p>
        </div>
        <div className={styles.end}>
          <div className={styles.one}>
            <div className={styles.ten}>10K+</div>
            <div className={styles.year}>year of experience</div>
          </div>
          <div className={styles.two}>
            <div className={styles.twothree}>234K+</div>
            <div className={styles.people}>people rreached</div>
          </div>
          <div className={styles.three}>
            <div className={styles.twothree}>234K+</div>
            <div className={styles.people}>people rreached</div>
          </div>
        </div>
      </div>
      <div className={styles.imgcontainer}>
        <Image
          src="/about.png"
          alt=""
          width={500}
          height={500}
          className="img"
        />
      </div>
    </div>
  );
};

export default AboutPage;
