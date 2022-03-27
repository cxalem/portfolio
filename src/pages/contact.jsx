import Devam from "@SVGComponents/Devam";
import Mail from "@SVGComponents/Mail";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import contactStyles from "../styles/ContactStyles/ContactStyles.module.css";
import Link from "next/link";
import lottie from "lottie-web";

export default function Contact() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const contactImg = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: contactImg.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("@images/contact-lottie.json"),
    });
  }, [])

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className={contactStyles.contactContainer}>
      <h3>Contact me!</h3>
      <div className={contactStyles.contactItems}>
        <Link href="https://t.me/cxalem" passHref>
          <a target="_blank">
            <div
              className={`${contactStyles.telegram} ${contactStyles.contactItem}`}
            >
              <Image
                loader={myLoader}
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19f1e10a-23ee-4c39-abbe-8cfb275aedd9%2Flogos_telegram.svg?table=block&id=4f7e3090-168c-46d4-9bb5-60cbe81e92f8&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2"
                alt="telegram"
                width="50px "
                height="50px  "
              />
              <span className={contactStyles.span}>Telegram</span>
            </div>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/alejandro-jose-mena/" passHref>
          <a target="_blank">
            <div
              className={`${contactStyles.linkedIn} ${contactStyles.contactItem}`}
            >
              <Image
                loader={myLoader}
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F44cc8644-8222-4a98-9944-c55a1c5e5478%2Flinkedin.svg?table=block&id=8417d5f1-71ef-4855-8215-f73d66acf12b&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2"
                alt="email"
                width="50px "
                height="50px  "
              />
              <span className={contactStyles.span}>LinkedIn</span>
            </div>
          </a>
        </Link>
      </div>

      <div className={contactStyles.formSection}>
        <div ref={contactImg}  className={contactStyles.contactImg}>

        </div>
        <form onSubmit={handleSubmit}>
          <div className={contactStyles.formHeader}>
            <Devam fill="#F9FBFF" />
            <Mail />
          </div>
          <label htmlFor="name"></label>
          <input
            className={contactStyles.input}
            autoComplete="off"
            placeholder="Your name..."
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="email"></label>
          <input
            className={contactStyles.input}
            autoComplete="off"
            placeholder="Your Email..."
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="message"></label>
          <textarea
            className={`${contactStyles.input} ${contactStyles.textArea}`}
            placeholder="Your message..."
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button className={contactStyles.submitBtn} type="submit">
            Submit 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
