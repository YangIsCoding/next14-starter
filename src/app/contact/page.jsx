// src/app/contact/page.jsx
import Image from "next/image";
import styles from "./contact.module.css";
import ContactForm from "@/components/form/contactForm";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/*<div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>*/}
      <div className={styles.formContainer}>
        <ContactForm /> {/* 使用 Client Component */}
      </div>
    </div>
  );
};

export default ContactPage;
