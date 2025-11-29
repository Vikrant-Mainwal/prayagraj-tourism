import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Tourism Information Center",
        "Civil Lines",
        "Prayagraj, Uttar Pradesh 211001",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 532 2460930", "+91 532 2460931", "Toll Free: 1800-180-5555"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@prayagraj-tourism.in", "helpdesk@prayagraj-tourism.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We'd love to help you plan your perfect trip to Prayagraj.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl border shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.details.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 className="font-semibold mb-3 text-gray-900">Before You Visit</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Check weather & river conditions</li>
                <li>• Book hotels in advance during peak seasons</li>
                <li>• Carry valid ID for monument entry</li>
                <li>• Dress modestly at religious places</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl border shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
