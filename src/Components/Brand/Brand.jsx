import { ArrowRight } from 'lucide-react';
import './Brand.css';


const Brand = () => {
  const brands = [
    { id: 1, name: 'Apple', color: '#555555' },
    { id: 2, name: 'Microsoft', color: '#00A4EF' },
    { id: 3, name: 'Google', color: '#4285F4' },
    { id: 4, name: 'Dell', color: '#0066B2' },
    { id: 5, name: 'HP', color: '#0096D6' },
    { id: 6, name: 'Lenovo', color: '#E10000' },
    { id: 7, name: 'Cisco', color: '#1BA0D7' },
    { id: 8, name: 'IBM', color: '#002B55' },
    { id: 9, name: 'Amazon', color: '#FF9900' },
    { id: 10, name: 'Intel', color: '#0071C5' },
    { id: 11, name: 'NVIDIA', color: '#76B900' },
    { id: 12, name: 'AMD', color: '#ED1C24' },
    { id: 13, name: 'Oracle', color: '#F80000' },
    { id: 14, name: 'Vmware', color: '#3D80B3' },
    { id: 15, name: 'Red Hat', color: '#EE0000' },
    { id: 16, name: 'Ubuntu', color: '#DD4814' },
    { id: 17, name: 'Fortinet', color: '#EE3124' },
    { id: 18, name: 'Palo Alto', color: '#1F7BA0' },
    { id: 19, name: 'Cloudflare', color: '#F6821F' },
    { id: 20, name: 'MongoDB', color: '#10AA50' },
    { id: 21, name: 'Docker', color: '#2496ED' },
    { id: 22, name: 'Kubernetes', color: '#326CE5' },
    { id: 23, name: 'Salesforce', color: '#00A1DF' },
    { id: 24, name: 'Adobe', color: '#FF0000' },
    { id: 25, name: 'Autodesk', color: '#0696D7' },
    { id: 26, name: 'SAP', color: '#00A4EF' },
    { id: 27, name: 'Tableau', color: '#E97627' },
    { id: 28, name: 'Atlassian', color: '#0052CC' },
    { id: 29, name: 'Jira', color: '#0052CC' },
    { id: 30, name: 'Slack', color: '#E01E5A' }
  ];

  return (
    <div className="brand-page">
     
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Our Brands</h1>
          <p className="hero-description">
            MBUZZ has developed long-lasting partnerships with leading technology vendors, allowing us to provide best-in-class products and services to our clients. Spanning the entire technology spectrum, our vendors are market trailblazers in information technology, mobile, security, and networking solutions. We drive partner success through our expert on-the-ground vendor knowledge, leveraging our specialized pre-sales solution teams, as well as access to programs and resources.
          </p>
        </div>
      </section>

      <section className="brands-section">
        <div className="brands-container">
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-card">
                <div className="brand-logo" style={{ borderColor: brand.color }}>
                  <span className="logo-text" style={{ color: brand.color }}>
                    {brand.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="brand-name">{brand.name}</p>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-gradient-blob blob-1"></div>
          <div className="cta-gradient-blob blob-2"></div>
          <div className="cta-gradient-blob blob-3"></div>
        </div>

        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together & Boost Your Technology Success!</h2>
          <button className="cta-button">
            <span className="button-text">Get Started</span>
            <ArrowRight className="button-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brand;
