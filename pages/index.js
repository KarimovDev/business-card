import Head from 'next/head'
import Age from '../components/age';
import Experience from '../components/experience';
import '../static/scss/style.scss';

const App = () => (
    <>
        <Head>
            <title>Karimov Dima</title>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
            <link rel="icon" type="image/png" href="/static/images/favicon.png"></link>
        </Head>
        <div id="parallax-container">
            <div className="content">
                <div className="content-header">
                    <div className="header-image-wrapper">
                        <img className="header-image" src="/static/images/avatar.jpg" alt="Karimov Dima"></img>
                    </div>
                    <div className="header-caption">
                        <h1>Karimov Dima</h1>
                        <h1>web developer</h1>
                    </div>
                </div>
                
                <section className="content-section-bio">

                    <Age></Age> 
                    <Experience></Experience>
                    <p>    
                        I am currently working as Angular developer at <a className="right-align-links" target="_blank" href="https://www.mts.ru">MTS</a> company.
                    </p>
                    <p>
                        MTS is the largest mobile provider in Russia.
                    </p>

                </section>

                <section className="content-section-projects">

                    <h2>My pet projects</h2>
                    <ul className="projects">
                        <li>
                            <a href="movie/">Movie rental</a>
                            <a className="right-align-links" target="_blank" href="https://github.com/KarimovDev/movie-rental">GitHub Movie rental</a>
                        </li>
                        <li>
                            <a href="nym/">Note your mind</a>
                            <a className="right-align-links" target="_blank" href="https://github.com/KarimovDev/note-your-mind">GitHub Note your mind</a>
                        </li>
                    </ul>

                </section>

                <section className="content-section-contacts">

                    <h2>Contacts</h2>
                    <ul className="contacts">
                        <li>
                            <span>GitHub</span>
                            <a className="right-align-links" target="_blank" href="https://github.com/KarimovDev/">GitHub KarimovDev</a>
                        </li>
                        <li>
                            <span>Telegram</span>
                            <a className="right-align-links" target="_blank" href="https://t.me/karimovdev">@KarimovDev</a>
                        </li>
                        <li>
                            <span>E-Mail</span>
                            <a className="right-align-links" href="mailto:kardimail@gmail.com">kardimail@gmail.com</a>
                        </li>
                        <li>
                            <span>Phone</span>
                            <a className="right-align-links" href="tel:+79121767252">+7 (912) 176 72 52</a>
                        </li>
                        <li>
                            <span>LinkedIn</span>
                            <a className="right-align-links" target="_blank" href="https://www.linkedin.com/in/karimov-dima">LinkedIn Karimov Dima</a>
                        </li>
                    </ul>

                </section>
                
            </div>
            <script type="text/javascript" src="/static/scripts/parallax.js"></script>
        </div>
    </>
);

export default App;
