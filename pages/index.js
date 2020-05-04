import Head from "next/head";
import Age from "../components/age.component";
import Experience from "../components/experience.component";
import Contacts from "../components/contacts.component";
import "../static/scss/style.scss";
import Projects from "../components/projects.component";

const App = () => (
  <>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-165434864-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; function gtag(){" "}
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-165434864-1');
      `,
        }}
      ></script>
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
        href="/static/images/favicon.png"
      ></link>
    </Head>
    <div className="content-container">
      <div className="content">
        <div className="content-header">
          <div className="header-image-wrapper">
            <img
              className="header-image"
              src="/static/images/avatar.jpg"
              alt="Karimov Dima avatar"
            ></img>
          </div>
          <div className="header-caption">
            <h1>Karimov Dima</h1>
            <h1>web developer</h1>
          </div>
        </div>

        <section className="content-section-bio">
          <Age />
          <Experience />
          <p>
            I am currently working as Angular developer at{" "}
            <a
              className="right-align-links"
              target="_blank"
              href="https://www.aitarget.com"
            >
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
      <script type="text/javascript" src="/static/scripts/parallax.js"></script>
    </div>
  </>
);

export default App;
