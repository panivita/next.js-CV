import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitSquare,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/fontawesome-free-brands";
import styles from "../styles/Home.module.css";
import { faDatabase } from "@fortawesome/fontawesome-free-solid";

export default function Skills() {
  return (
    <>
      <section className={styles.personal}>
        <h2 className={styles.h2}>PROFESSIONAL SKILLS</h2>
        <ul>
          <li>
            Great problem-solving skills, strategic thinking and technical
            skills.
          </li>
          <li>
            Effective oral communication skills, organizational skills and
            attention to detail.
          </li>
          <li>
            Excellent interpersonal, communication and cross-group collaboration
            skills.
          </li>
          <li>
            Proficient understanding of web markup, including knowledge of
            modern <FontAwesomeIcon icon={faHtml5} /> HTML/{" "}
            <FontAwesomeIcon icon={faCss3Alt} />
            CSS.
          </li>
          <li>
            Responsive design skills, knowledge of how to mix of flexible grids
            and layouts, images and how to use of{" "}
            <FontAwesomeIcon icon={faCss3Alt} /> CSS media queries.
          </li>
          <li>
            Fair understanding of <FontAwesomeIcon icon={faJs} /> JavaScript
            programming and DOM manipulation.{" "}
          </li>
          <li>Experience in TypeScript.</li>
          <li>Coding in ES6 standards for readability, maintainability.</li>
          <li>
            <FontAwesomeIcon icon={faGitSquare} /> Git. Experience keep the
            track of modifications with a comment, merging and branching
            strategies, managing merge conflicts.
          </li>
          <li>
            Good understanding of <FontAwesomeIcon icon={faReact} /> React.js
            and its core principles. Experience with React Hook Form, React
            Hooks.
          </li>
          <li>
            Experience in creating user validation forms and sending data to
            server using RESTful services.
          </li>
          <li>
            Adequate knowledge how servers work as well as APIs, MySQL, the{" "}
            <FontAwesomeIcon icon={faDatabase} /> database.
          </li>
          <li>
            Understanding how core <FontAwesomeIcon icon={faNodeJs} /> Node.js
            works. Experience deploying my <FontAwesomeIcon icon={faNodeJs} />{" "}
            application to a cloud platform Heroku.
          </li>
        </ul>
      </section>
      <section className={styles.motivation}>
        <h2 className={styles.h2}>CERTIFICATES</h2>
        <div className={styles.learning}>
          <ul className={styles.column}>
            <li>Responsive Web Design Certification by freeCodeCamp</li>
            <li>
              JavaScript Algorithms and Data Structures Certification by
              freeCodeCamp
            </li>
            <li>
              HackerRank profile (
              <a
                href="https://www.hackerrank.com/victoria_v_kush"
                title="HackerRank profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                link below
              </a>
              )
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
