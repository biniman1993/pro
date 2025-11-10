import React, { useState, useEffect, useRef } from "react";
import "./CompanyStats.css";

const CompanyStats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const started = useRef(false);

  const stats = [
    { id: 1, target: 1000, suffix: "+", title: "Suppliers & Clients", description: "Trusted Supplier to Government & Non-Government Organizations", color: "#667eea" },
    { id: 2, target: 500, suffix: "+", title: "Awards & Recognition", description: "Awarded by Leading Companies Worldwide", color: "#f5576c" },
    { id: 3, target: 50, suffix: "+", title: "International Partners", description: "Global Partnership Network", color: "#4facfe" },
    { id: 4, target: 15, suffix: "+", title: "Years of Excellence", description: "Years of Industry Leadership", color: "#43e97b" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setVisible(true);
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.target;
      const duration = 2000;
      const step = Math.ceil(end / 90);

      const counter = setInterval(() => {
        start += step;

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = start >= end ? end : start;
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, duration / (end / step));
    });
  };

  return (
    <section className={`company-stats ${visible ? "section-visible" : ""}`} ref={sectionRef}>
      <div className="stats-header">
        <h2 className="stats-title">Our Achievements</h2>
        <p className="stats-subtitle">Trusted by organizations worldwide</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className={`stat-card ${visible ? "card-visible" : ""}`}
            style={{ "--card-color": stat.color, animationDelay: `${i * 0.15}s` }}
          >
            <div className="stat-number">
              <span className="number">{counts[i]}</span>
              <span className="suffix">{stat.suffix}</span>
            </div>

            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
