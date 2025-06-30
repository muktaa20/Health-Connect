import React, { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch from API; replace with real API endpoint
    const fetchNews = async () => {
      // Mock API delay
      await new Promise((res) => setTimeout(res, 500));

      setNewsData([
        {
          id: 1,
          date: "2025-06-15",
          title: "Health Connect Launches AI‑Powered Symptom Checker",
          description:
            "Our new AI-symptom checker helps users triage their symptoms instantly. Trained on thousands of anonymized cases, this tool increases accuracy by over 90%.",
          image:
            "https://img.freepik.com/free-photo/modern-technology-healthcare_53876-105734.jpg?w=740",
        },
        {
          id: 2,
          date: "2025-06-01",
          title: "Mental Health Week: Free Teletherapy Sessions",
          description:
            "In recognition of Mental Health Awareness Month, Health Connect offers complimentary teletherapy sessions with licensed psychologists for all registered users.",
          image:
            "https://img.freepik.com/free-photo/therapist-consultation-mental-health_1194-318.jpg?w=740",
        },
        {
          id: 3,
          date: "2025-05-20",
          title: "New Cardiac Care Wing Certified with JCI Accreditation",
          description:
            "Our upgraded Cardiac Care department received JCI accreditation, meeting global safety and quality standards. Enhanced patient workflows and modern EHR integration now live.",
          image:
            "https://img.freepik.com/free-photo/cardiac-care-unit-hospital_1232-5688.jpg?w=740",
        },
        {
          id: 4,
          date: "2025-05-10",
          title: "Health Connect Integrates with Apple Health",
          description:
            "Users can now sync step count, heart rate, and sleep data with Apple Health. This integration enables more personalized care and real-time monitoring.",
          image:
            "https://img.freepik.com/free-photo/smartphone-health-app-heartbeat_1232-6781.jpg?w=740",
        },
        {
          id: 5,
          date: "2025-04-30",
          title: "Diabetes Awareness Webinar with Top Endocrinologists",
          description:
            "Join our free webinar featuring leading endocrinologists discussing prevention strategies, dietary tips, and continuous glucose monitoring technologies.",
          image:
            "https://img.freepik.com/free-photo/online-webinar-health_1232-3456.jpg?w=740",
        },
        {
          id: 6,
          date: "2025-04-15",
          title: "24/7 Virtual Care Now Available",
          description:
            "We’ve expanded our virtual care service to round-the-clock availability. Connect with certified providers anytime via video or chat—at no added cost.",
          image:
            "https://img.freepik.com/free-photo/telemedicine-video_call_1232-9876.jpg?w=740",
        },
        {
          id: 7,
          date: "2025-03-25",
          title: "Health Connect Partners with Local Pharmacies",
          description:
            "Facilitating home delivery of prescriptions – now available in 100+ partner pharmacies across your region. Convenient and compliant with e-prescriptions.",
          image:
            "https://img.freepik.com/free-photo/pharmacy-prescription-delivery_1232-1123.jpg?w=740",
        },
        {
          id: 8,
          date: "2025-03-10",
          title: "New Maternal Care Dashboard for Expecting Mothers",
          description:
            "Our web dashboard helps expecting moms track nutrition, fetal development, and connect with OB-GYNs seamlessly.",
          image:
            "https://img.freepik.com/free-photo/pregnancy-app-dashboard_1232-3344.jpg?w=740",
        },
      ]);

      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading latest news...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Real‑Time Health Updates
      </h2>
      <div className="space-y-8">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;


