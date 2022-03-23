import Head from "next/head";
import AboutMe from "src/components/AboutMe";
import Hero from "src/components/Hero";
import MySkills from "src/components/MySkills/";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Skill from "@models/Skill";
import Project from "@models/Project"
import { dbConnect } from "@lib/dbConnect";
import Projects from "src/components/Projects";

export default function Home({ skills, projects }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alejandro Mena Portfolio | Devam</title>
        <meta name="description" content="Alejandro Mena Portfolio" />
        <link rel="icon" href="../../images/devam-isotipo.svg" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <AboutMe />
        <MySkills skills={skills} />
        <Projects projects={projects} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const skillRes = await Skill.find({});
    const projectRes = await Project.find({})

    const projects = projectRes.map((item) => {
      const project = item.toObject();
      project._id = `${project._id}`;
      return project
    })

    const skills = skillRes.map((item) => {
      const skill = item.toObject();
      skill._id = `${skill._id}`;
      return skill;
    });

    return { props: { skills, projects } };
  } catch (error) {
    console.log(error);
  }
}


