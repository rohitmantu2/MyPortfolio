import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const contactDetails = [
    {
      icon: <Mail size={20} className="text-blue-600" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={20} className="text-blue-600" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin size={20} className="text-blue-600" />,
      label: 'Location',
      value: 'Available for Remote Work',
      href: null,
    },
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-5" />
          <p className={`max-w-xl mx-auto text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm interested in freelance opportunities and full-time positions. If you have a project that needs my expertise or any questions, don't hesitate to contact me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            {contactDetails.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-700'
                    : 'bg-gray-50 border-gray-100 hover:border-blue-200'
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  darkMode ? 'bg-blue-900/40' : 'bg-blue-50'
                }`}>
                  {item.icon}
                </div>
                <div>
                  <p className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm font-semibold hover:text-blue-600 transition-colors ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`text-sm font-semibold ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'
            }`}>
              <p className={`text-sm font-semibold mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Follow Me
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? 'border-gray-600 text-gray-300 hover:border-blue-600 hover:text-blue-400'
                      : 'border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? 'border-gray-600 text-gray-300 hover:border-blue-600 hover:text-blue-400'
                      : 'border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`p-8 rounded-2xl border ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'
          }`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
