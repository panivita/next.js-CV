import Head from "next/head";
import MetaTags from "./meta-tags";
import Header from "./header";
import ProfileExperience from "./profile-experience";
import Skills from "./skills";
import Education from "./education";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <MetaTags />
      </Head>

      <Header />
      <div className={styles.mainColumn}>
        <div className={styles.skills}>
          <Skills />
        </div>
        <div className={styles.experience}>
          <ProfileExperience />
          <Education />
        </div>
      </div>
      <footer className={styles.footer}>
        <section className={styles.copyright}>© 2020 Victoria Kush</section>
      </footer>
    </div>
  );
}
