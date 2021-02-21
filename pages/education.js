import styles from "../styles/Home.module.css";

export default function Education() {
  return (
    <section className={styles.education}>
      <h2 style={{ marginTop: "8%" }} className={styles.h2}>EDUCATION</h2>
      <h3 className={styles.h3}>Full Stack Web Development in HackYourFuture - Copenhagen</h3>
      <p>
        <i>2020</i>
      </p>
      <p>
        The curriculum includes HTML/ CSS/ Git/ CLI/ Javascript/ NodeJS/
        ExpressJS/ React etc.
      </p>
      <h3 className={styles.h3}>Ph.d. in Psychology V. N. Karazin Kharkiv National University.</h3>
      <p>
        <i>2008 – 2012</i>
      </p>
    </section>
  );
}
