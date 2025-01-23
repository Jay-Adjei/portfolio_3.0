import './Features.css';
import Button1 from '../../components/Buttons/Button1';


const Card = ({ src, title, description, className, buttonClass, buttonHref, isGif }) => (
    <div className={`card-wrapper ${className}`}>
      {isGif ? (
        <img src={src} alt={title} className="card-video" />
      ) : (
        <video src={src} loop muted className="card-video" />
      )}
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        {description && <p className="card-description">{description}</p>}
        <Button1 className={buttonClass} href={buttonHref} />
      </div>
    </div>
  );
  

  const Features = () => (
    <section className="features-section">
      <div className="featurecontainer">







        <div className="grid-largecontainer">
          <Card
            src="/assets/videos/video8.mp4"
            title="Interactive 3D Portfolio"
            description="Offer personalized workout plans with video tutorials and AI form correction."
            className="card-large"
            buttonClass="button-style-feature-project"
            buttonHref="/project1"
          />
        </div>
  






        <div className="grid-featurecontainer">
          <Card
            src="/assets/videos/video8.mp4"
            title="AI-Powered Mood-Based Music Recommendation"
            description="Recommend songs based on the user&lsquo;s mood using AI and sentiment analysis."
            className="card-long"
            buttonClass="button-style-1"
            buttonHref="/project2"
          />
          <Card
            src="/assets/videos/video6.mp4"
            title="Interactive Data Visualization Dashboard"
            description="Develop a branching narrative game where choices affect the outcome."
            className="card-medium"
            buttonClass="button-style-1"
            buttonHref="/portfolio"
          />
           <Card
            src="/assets/videos/video7.mp4"
            title="Augmented Reality (AR) Shopping App"
            description="Let users try products in AR before purchasing, such as furniture or clothes."
            className="card-small"
            buttonClass="button-style-1"
            buttonHref="/project4"
            />
        </div>





  
        <div className="grid-special-container">
          <Card
            src="/assets/videos/video8.mp4"
            title="Virtual Fitness Coach"
            description="Offer personalized workout plans with video tutorials and AI form correction."
            className="card-xsmall"
            buttonClass="button-style-1"
            buttonHref="/project5"
          />
          <Card
            src="/assets/gifs/japanworld.gif"
            title="Your Title"
            description="Your Description"
            className="card-video"
            buttonClass="button-style-feature-project"
            buttonHref="/project1"
            isGif={true}
          />
        </div>
      </div>









    </section>
  );
  

export default Features;
