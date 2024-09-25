const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>

        <p>the paragraph</p>

        <div className="hero-button">
          <button className="primary-btn">button one</button>

          <button className="secondary-btn">button two</button>
        </div>

        <div className="shopping">
          <p>Also available on</p>

          <div className="brand-icons">
            <img src="" alt="logo1" />
            <img src="" alt="logo2" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/egg.pn" alt="logo 3" />
      </div>
    </main>
  );
};

export default HeroSection;
