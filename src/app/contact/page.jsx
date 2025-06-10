import styles from "./Contact.module.css";
import Image from "next/image";

const Contactpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className="form">
          <input type="text" placeholder="Name " required />

          <input type="text" placeholder="Phone no" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <button className="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
