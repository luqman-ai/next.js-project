// pages/index.js
import Hero from './(component)/heroSection/hero';
import About from './(component)/about/about';
import Contact from './(component)/contact/contact';
import SocialMediaLinks from './(component)/links/links';

const Home = () => (
  <div>
    <Hero />
    <About />
    <Contact />
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex items-center justify-center">
        <SocialMediaLinks />
      </div>
    </div>
  </div>
);

export default Home;
