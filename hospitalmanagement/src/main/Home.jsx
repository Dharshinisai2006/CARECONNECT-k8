import { FaUserMd, FaCalendarAlt, FaFileInvoiceDollar, FaHospital } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import image from '../assets/hms1.png';
import "./css/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container"> {/* <-- important wrapper */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content row">
          <div className="hero-text col">
            <h1>Welcome to CareConnect 🩺</h1>
       
            <p className="hero-description">
              Efficiently manage patients, appointments, and billing processes. Doctors can access medical histories,
              schedule consultations, and manage prescriptions. Administrators handle staff and resources for smooth operations.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/patient/login")}
              >
                Login as Patient
              </button>
              <button
                className="secondary-btn"
                onClick={() => navigate("/doctor/login")}
              >
                Login as Doctor
              </button>
            </div>
          </div>

          <div className="hero-image col">
            <img
              src={image}
              alt="Hospital Management"
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why CareConnect is Right for You?</h2>
        <div className="features-grid row">
          <div className="feature-card col">
            <FaUserMd className="feature-icon" />
            <h3>Patient Care</h3>
            <p>Doctors can manage patient records and prescriptions with ease</p>
          </div>
          <div className="feature-card col">
            <FaCalendarAlt className="feature-icon" />
            <h3>Appointments</h3>
            <p>Schedule and track consultations seamlessly</p>
          </div>
          <div className="feature-card col">
            <FaFileInvoiceDollar className="feature-icon" />
            <h3>Billing</h3>
            <p>Automated billing and payment tracking</p>
          </div>
          <div className="feature-card col">
            <FaHospital className="feature-icon" />
            <h3>Administration</h3>
            <p>Manage staff, schedules, and hospital resources efficiently</p>
          </div>
        </div>
      </section>
    </div>
  );
}
