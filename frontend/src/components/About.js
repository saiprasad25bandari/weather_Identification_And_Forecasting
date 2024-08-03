import "./About.css";
// import './Aboutus_image.jpg';
export const About = () => {
  return (
    <div class="section">
      <div class="container">
        <div class="title">
          <h1>About Us</h1>
        </div>
        <div class="article">
          <h2>ABOUT SkyView</h2>
          <p>
           SkyView is your ultimate destination for advanced weather image
            detection and accurate weather prediction. We leverage the power of
            Convolutional Neural Networks (CNNs) to analyze weather images and
            provide you with real-time insights into weather conditions. Our
            state-of-the-art CNN models are trained to recognize various weather
            patterns and phenomena with exceptional accuracy. By processing
            weather images we extract valuable information to enhance your
            understanding of the current weather conditions.
            <br />
            <p>
              We have designed WeatherNet with simplicity and usability in mind.
              Our intuitive interface makes it easy for you to interact with
              weather images, view predictions, and explore weather trends.
              Whether you're a weather enthusiast, outdoor adventurer, or
              planning an event, SkyCast has you covered.
            </p>
          </p>
          <h2>OUR VISION</h2>
          <p>
            1. Empowering Users: Our project empowers users with advanced
            weather image detection and prediction capabilities, enabling
            informed decisions for daily activities, outdoor plans, and safety.
            <br />
            2.Accurate Weather Analysis: We utilize state-of-the-art CNNs for
            precise weather pattern identification from various sources.
            <br />
            3.Real-time Insights: Our project delivers up-to-date weather
            information through prompt processing of images for effective
            activity planning
          </p>
          <br />
          <br />
          <br />
        </div>
        <div class="image">
          <img src="https://i.pinimg.com/736x/56/2b/a6/562ba63070941bf2769e0ef7250f0db1.jpg" alt="about_us_img" />
        </div>
      </div>
    </div>  
  );
};