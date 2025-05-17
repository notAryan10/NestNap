import './App.css';
import SleepHealthWebsite from './components/SleepHealthWebsite';
import BlurText from './components/BlurText';
import DecryptedText from './components/DecryptedText';
import ScrollFloat from './components/ScrollFloat';
import ThemeToggle from './components/ThemeToggle';
import { useEffect } from 'react';

function App() {
  const scrollToTracker = () => {
    const trackerSection = document.getElementById('tracker-section');
    if (trackerSection) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = trackerSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const elementsToObserve = document.querySelectorAll(
      '.left-bg img, .right-bg img, .core-service-card img, ' +
      '.quality-sleep-right img, .quote-image-right img, ' +
      '.impact-card, .tracker-card'
    );

    elementsToObserve.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">NapNest</div>
        <ThemeToggle />
      </header>
      <main className="main-section">
        <div className="center-title">
          <BlurText
            text="SLEEP WELL WITH NAPNEST"
            delay={50}
            animateBy="letters"
            direction="top"
            className="center-title-text"
          />
        </div>
        <div className="split-bg">
          <div className="left-bg">
            <img src="https://images.theconversation.com/files/453020/original/file-20220318-13-ulamgg.jpg?ixlib=rb-4.1.0&rect=44%2C0%2C4901%2C3257&q=45&auto=format&w=926&fit=clip" alt="Person sleeping in bed" />
            <div className="card">
              <p>Start tracking your sleep journey today.</p>
              <button onClick={scrollToTracker}>Explore More</button>
            </div>
          </div>
          <div className="right-bg">
            <img src="https://www.plushbeds.com/cdn/shop/articles/dreams-that-feel-real-lucid-dreaming-206029_1024x1024.jpg?v=1660284982" alt="Lucid dreaming illustration" />
          </div>
        </div>
        <section className="quality-sleep-section">
          <div className="quality-sleep-left">
            <div style={{ marginTop: '4rem', fontSize: '1.6rem', fontWeight: 'bold' }}>
              <DecryptedText
                text="Why Quality Sleep Matters?"
                animateOn="view"
                sequential={true}
                speed={50}
                revealDirection="start"
              />
            </div>
            <DecryptedText
              text="Sleep plays a vital role in your physical health, mental clarity, and emotional well-being. Tracking your rest helps identify patterns, improve habits, and lead a more energized life. Let's help you build a better bedtime routine."
              animateOn="view"
              sequential={true}
              speed={5}
              maxIterations={20}
              revealDirection="start"
            />
          </div>
          <div className="quality-sleep-right">
            <img src="https://sleepsolutions.health/wp-content/uploads/2023/11/Why-Sleep-Matters-Sleep-Solutions-Westborough-MA-980x1523.jpg" alt="Why sleep matters infographic" />
          </div>
        </section>
        <section className="core-services-section">
          <h2 className="core-services-title">OUR CORE SERVICES</h2>
          <div className="core-services-cards">
            <div className="core-service-card">
              <img src="https://static.vecteezy.com/system/resources/previews/051/182/511/large_2x/smartphone-login-page-text-only-membership-sign-in-vector.jpg" alt="Smartphone login page" />
              <h3>Log</h3>
              <p>Enter the time you went to bed and the time you woke up. We'll calculate your total sleep and display it in your progress chart.</p>
            </div>
            <div className="core-service-card">
              <img src="https://cdn.dribbble.com/userupload/12493505/file/original-a93e48399978c4e609ea115513f22cb7.png?resize=752x&vertical=center" alt="Sleep app UI illustration" />
              <h3>Track</h3>
              <p>See how much rest you're getting over the past week. Spot trends, stay accountable, and keep your sleep goals in sight.</p>
            </div>
            <div className="core-service-card">
              <img src="https://i.pcmag.com/imagery/articles/02Xkt5sp3fVl5rGUtk3DXMi-7.fit_lim.size_1600x900.v1569485349.jpg" alt="Sleep data visualization on device" />
              <h3>Visualize</h3>
              <p>Visualize your sleep data through interactive and informative charts.</p>
            </div>
          </div>
        </section>
        <section className="quote-image-section">
          <div className="quote-image-left">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=10%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              "A good laugh and a long sleep are the best cures in the doctor's book."
            </ScrollFloat>
          </div>
          <div className="quote-image-right">
            <img src="https://images.alphacoders.com/121/1211418.jpg" alt="Peaceful night sky with stars" />
          </div>
        </section>
        <SleepHealthWebsite />
      </main>
      <footer className="footer-section">
          <div className="footer-center">NapNest</div>
      </footer>
    </div>
  );
}

export default App;
