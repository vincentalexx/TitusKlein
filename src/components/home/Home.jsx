import arrowbot from '../../assets/images/arrowbot.svg';
import '../../App.css'
import Layout from '../Layout';
import Content from './Content';
import Meeting from './Meeting';
import Footer from '../Footer'

function Home() {

  function revealhome() {
    const revealhome = document.querySelectorAll('.reveal-home');

    for (let i = 0; i < revealhome.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = revealhome[i].getBoundingClientRect().top;
      let revealPoint = 200;

      if (revealTop < windowHeight - revealPoint && revealTop > -200) {
        revealhome[i].classList.add('active-home');
        console.log('reveal-home');
      }
    }
  }
  window.addEventListener('scroll', revealhome);

  return (
    <Layout>
      <div className="home">
        <div className="title">
          <h1 className="title-home text-white" style={{ letterSpacing: "-1px" }}>
            DESIGN + BRANDING.
          </h1>
          <p className="desc">
            Titus Klein is a B2B branding and design agency with a B2C look and
            feel. We help your large tech company or startup unlock the revenue
            potential of your ideas.
          </p>
          <a href="#content">
            <img src={arrowbot} alt="" style={{ width: "30px" }} />
          </a>
        </div>
      </div>
      <Content />
      <Meeting />
      <Footer />
    </Layout>

  );
};

export default Home;