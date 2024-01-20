// components/HeroSection.js
const Hero = () => (
    <section className="bg-blue-800 text-white p-8">
      <div className="container mx-auto flex items-center justify-center">
        <img
          src="/abc.png" // Replace with your image path
          alt="Profile Image"
          className="rounded-full h-20 w-20 mr-4"
        />
        <div>
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-lg">Muhammad Luqman Asghar</p>
        </div>
      </div>
    </section>
  );
  
  export default Hero;
  