import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import './App.css';
import SleepImpact from './SleepImpact';

const LOCAL_STORAGE_KEY = "sleepData";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(formatDate(d));
  }
  return days;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <strong>{label}</strong>
        <br />
        Sleep: {payload[0].value} hours
      </div>
    );
  }
  return null;
};

export default function SleepHealthWebsite() {
  const [sleepData, setSleepData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [date, setDate] = useState(formatDate(new Date()));
  const [hours, setHours] = useState("");
  const [error, setError] = useState("");
  const infoSectionRef = useRef(null);
  const trackerSectionRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sleepData));
    } catch (error) {
      console.error('Failed to save sleep data:', error);
    }
  }, [sleepData]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll, .animate-fade-in');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const validateInput = (date, hours) => {
    if (!date) return "Date is required.";
    const h = parseFloat(hours);
    if (isNaN(h)) return "Hours must be a number.";
    if (h < 0 || h > 24) return "Hours must be between 0 and 24.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput(date, hours);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSleepData((prev) => ({
      ...prev,
      [date]: parseFloat(hours),
    }));
    setHours("");
  };

  const last7Days = getLast7Days();
  const chartData = last7Days.map((d) => ({
    date: d,
    hours: sleepData[d] || 0,
  }));

  return (
    <div className="website-container">
      <SleepImpact infoSectionRef={infoSectionRef} />

      {/* Sleep Tracker Section */}
      <section id="tracker-section" ref={trackerSectionRef} className="tracker-section">
        <div className="tracker-card animate-fade-in">
          <h2>Sleep Tracker</h2>
          <p className="tracker-description">Track your sleep patterns over time to understand your sleep health better</p>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-row">
              <input
                id="dateInput"
                type="date"
                value={date}
                max={formatDate(new Date())}
                onChange={(e) => setDate(e.target.value)}
                required
                aria-required="true"
                aria-label="Date"
              />
              <input
                id="hoursInput"
                type="number"
                step="0.1"
                min="0"
                max="12"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="e.g. 7.5"
                required
                aria-required="true"
                aria-label="Hours Slept"
              />
              <button type="submit" aria-label="Log sleep hours">Log Sleep</button>
            </div>
          </form>

          <button
            type="button"
            className="reset-btn"
            onClick={() => {
              setSleepData({});
              localStorage.removeItem(LOCAL_STORAGE_KEY);
            }}
            style={{ marginTop: '12px', background: '#f5f5f5', color: '#764ba2', border: '1.5px solid #b8c6d1', borderRadius: '6px', padding: '10px 24px', fontSize: '1em', cursor: 'pointer', fontWeight: 500 }}
          >
            Reset Data
          </button>

          {error && <p className="error-msg" role="alert">{error}</p>}

          <h3>Last 7 Days Sleep Hours</h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="date" stroke="#4b3f72" />
              <YAxis domain={[0, 12]} stroke="#4b3f72" />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="url(#colorUv)"
                strokeWidth={4}
                dot={{ r: 5, strokeWidth: 2, fill: "#764ba2" }}
                activeDot={{ r: 8 }}
                animationDuration={800}
                animationEasing="ease-in-out"
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
} 