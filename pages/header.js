import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.photo}>
        <Image
          src="/images/profile-photo.jpg"
          height={150}
          width={150}
          alt="Victoria Kush"
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.h1}>Victoria Kush</h1>
        <ul className={styles.contacts}>
          <li>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:71465372" title="nummer of the phone">
              71 46 53 72
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a
              href="mailto:victoria.v.kush@gmail.com?"
              title="e-mail"
              subject="subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              victoria.v.kush@gmail.com
            </a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/victoria-kush-4a0455155"
              title="profil of the linkedin account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin account
            </a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/panivita"
              title="profil of the github account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github account
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
