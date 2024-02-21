"use client"
import Image from "next/image";
import styles from "./contact.module.css";
import { useState } from "react";


const ContactForm = () => {

    const initialFormState = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  // 使用 useState 鉤子來處理表單輸入
  const [formData, setFormData] = useState(initialFormState);
    const [messageSent, setMessageSent] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // 更新表單數據的函數
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 處理表單提交的函數
  const handleSubmit = async (event) => {
      event.preventDefault(); // 阻止表單的默認提交行為
      setIsButtonDisabled(true);

    // 使用 fetch API 發送 POST 請求到你的 API 路由
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    if (response.ok) {
        setMessageSent(true);
        setFormData(initialFormState);
        //console.log('Contact information saved successfully');
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        console.error('Failed to save contact information');
        // 處理錯誤情況
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
      setTimeout(() => setIsButtonDisabled(false), 10000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Name and Surname" name="name" value={formData.name} onChange={handleChange} />
          <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange}/>
          <input type="text" placeholder="Phone Number (Optional)" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
            <button type="submit" disabled={isButtonDisabled}>Send</button>
                  {messageSent && <p className={styles.messageReceived}>I have received your message!
                      Can only send again after 10 seconds.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

