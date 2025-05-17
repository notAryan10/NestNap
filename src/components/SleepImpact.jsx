import React from 'react';

function SleepImpact({ infoSectionRef }) {
  return (
    <section ref={infoSectionRef} className="sleep-impact-section">
      <h2 className="animate-on-scroll">The Impact of Sleep on Your Health</h2>
      <div className="impact-grid">
        <div className="impact-card animate-on-scroll">
          <h3>Physical Health</h3>
          <p>Quality sleep is essential for physical recovery, immune function, and maintaining a healthy weight. It helps regulate hormones and supports muscle growth and repair.</p>
        </div>
        <div className="impact-card animate-on-scroll">
          <h3>Mental Well-being</h3>
          <p>Sleep plays a crucial role in emotional regulation, stress management, and cognitive function. It helps process emotions and consolidate memories.</p>
        </div>
        <div className="impact-card animate-on-scroll">
          <h3>Daily Performance</h3>
          <p>Proper rest improves focus, productivity, and decision-making abilities. It enhances reaction time and reduces the risk of accidents.</p>
        </div>
      </div>
    </section>
  );
}

export default SleepImpact; 