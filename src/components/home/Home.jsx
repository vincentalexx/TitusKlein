import arrowbot from '../../assets/images/arrowbot.svg';
import '../../App.css'
import Layout from '../Layout';
import Content from './Content';
import Meeting from './Meeting';

function Home() {

  return (
    <Layout>
      <div className="home">
        <div className="title">
          <h1 className="h1 text-white" style={{ letterSpacing: "-1px" }}>
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
    </Layout>

  );
};

export default Home;