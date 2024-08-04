/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import Img from "next/image";
import Age from "../components/age.component";
import Experience from "../components/experience.component";
import Contacts from "../components/contacts.component";
import Projects from "../components/projects.component";

const App = () => (
  <>
    <Head>
      <title>Karimov Dima</title>
      <meta charSet="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      <meta
        name="description"
        content="I'm a web developer. And this is my business-card"
      ></meta>
      <meta name="robots" content="index, follow"></meta>
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon.png"
      ></link>
    </Head>
    <div className="content-container">
      <div className="content">
        <div className="content-header">
          {/* <Img
            width={150}
            height={150}
            className="header-image"
            src="/images/avatar.webp"
            alt="Karimov Dima avatar"
          ></Img> */}
          <img
            className="header-image"
            src="/images/avatar.webp"
            alt="Karimov Dima avatar"
          ></img>
          <div className="header-caption">
            <h1 className="header-caption-name">Karimov Dima</h1>
            <h1>software engineer</h1>
          </div>
        </div>

        <section className="content-section-bio">
          {/* <Age /> */}
          <Experience />
          <p>
            My tech stack is Angular, React, Node.js, NestJS, MongoDB,
            PostgreSQL, Redis, Kafka, Docker.
          </p>
          <p>
            I am currently working as Angular developer at{" "}
            <a target="_blank" rel="noreferrer" href="https://www.aitarget.com">
              Aitarget
            </a>{" "}
            company.
          </p>
          <p>
            Aitarget is a single solution for the full scope of advertising
            tasks on Facebook and Youtube — from making creatives to campaign
            optimization.
          </p>
        </section>

        {/* <section className="content-section-projects">
          <h2>My pet projects</h2>
          <ul className="projects">
            <Projects />
          </ul>
        </section> */}

        <section className="content-section-contacts">
          <h2>Contacts</h2>
          <ul className="contacts">
            <Contacts />
          </ul>
        </section>
      </div>
      <Script type="text/javascript" src="/scripts/parallax.js"></Script>
    </div>
  </>
);

// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=10, stale-while-revalidate=59"
//   );

//   return {
//     props: {
//       time: new Date().toISOString(),
//     },
//   };
// }

export default App;
