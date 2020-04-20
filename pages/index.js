import ContactForm from '../components/ContactForm';

const Index = () => (
  <>
    <div className="section-container light flex-container-col top-content">
      <section id="banner">
        <h1>Hello!</h1>
        <p>I'm Shohei Shibata, a freelance web developer based in Dayton, Ohio USA.<a className="thick-underline" href="/about.html">More About Me</a></p>
      </section>
    </div>
    <div className="transition-light-dark">
      <div className="triangle-bottom-right"></div>
    </div>
    <div className="section-container dark flex-container-col">
      <div className="spacer"></div>
      <section id="services">
        <p>Summary text</p>
        <a className="thick-underline" href="/services.html">Learn More</a>
      </section>
      <hr/>
      <section id="projects">
        <h1>Examples</h1>
        <div className="project-subsection flex-container-row">
          <h5>Project Title</h5>
          <div className="project-subsection-img-container">
            <a href="/">
              <img className="project-subsection-img" src="/img/" />
            </a>
          </div>
          <div className="project-subsection-description">
            <p>some text</p>
          </div>
          <a className="project-subsection-btn-container" href="/"><button className="btn btn-small">More Info</button></a>
        </div>
      </section>
      <hr/>
      <section id="contact">
        <h1>Contact Me</h1>
        <p>Please use the form below to get in touch!</p>
        <ContactForm />
      </section>
    </div>
  </>
);

export default Index;
