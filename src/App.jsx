import './App.css';
import SleepHealthWebsite from './SleepHealthWebsite';
import BlurText from './BlurText';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const scrollToTracker = () => {
    const trackerSection = document.getElementById('tracker-section');
    if (trackerSection) {
      trackerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">NapNest</div>
      </header>
      <main className="main-section">
        <div className="center-title">
          <BlurText
            text="SLEEP WELL WITH NAPNEST"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="center-title-text"
          />
        </div>
        <div className="split-bg">
          <div className="left-bg">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Person in bed" />
            <div className="card">
              <p>Start tracking your sleep journey today.</p>
              <button onClick={scrollToTracker}>Explore More</button>
            </div>
          </div>
          <div className="right-bg">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Bed and clock" />
          </div>
        </div>
        <section className="quality-sleep-section">
          <div className="quality-sleep-left">
            <h2>Why Quality Sleep Matters?</h2>
            <p>
              Sleep plays a vital role in your physical health, mental clarity, and emotional well-being. Tracking your rest helps identify patterns, improve habits, and lead a more energized life. Let's help you build a better bedtime routine.
            </p>
          </div>
          <div className="quality-sleep-right">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Smiling woman" />
          </div>
        </section>
        <section className="core-services-section">
          <h2 className="core-services-title">OUR CORE SERVICES</h2>
          <div className="core-services-cards">
            <div className="core-service-card">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="Log sleep" />
              <h3>Log</h3>
              <p>Enter the time you went to bed and the time you woke up. We'll calculate your total sleep and display it in your progress chart.</p>
            </div>
            <div className="core-service-card">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Track sleep" />
              <h3>Track</h3>
              <p>See how much rest you're getting over the past week. Spot trends, stay accountable, and keep your sleep goals in sight.</p>
            </div>
            <div className="core-service-card">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Visualize data" />
              <h3>Visualize</h3>
              <p>Visualize your sleep data through interactive and informative charts.</p>
            </div>
          </div>
        </section>
        <section className="quote-image-section">
          <div className="quote-image-left">
            <blockquote>
              "A good laugh and a long sleep are the best cures in the doctor's book."
            </blockquote>
            <cite>–Irish Proverb</cite>
          </div>
          <div className="quote-image-right">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80" alt="Sleeping child illustration" />
          </div>
        </section>
        <SleepHealthWebsite />
      </main>
      <footer className="footer-section">
        <div className="footer-row footer-centered">
          <div className="footer-center">Stay Connected with NapNest</div>
          <div className="footer-contact">
            <div>123-456-7890</div>
            <div>xyz@gmail.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
