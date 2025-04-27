import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mv5830c', 'template_syt29tn', form.current, 'vK3bW9jrVep9Nmpsh')
      .then((result) => {
        console.log(result.text);
        alert('Thanks for reaching out! 🚀 Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong. ❌ Please try again.');
      });
  };

  return (
    <section className="py-10 px-4 bg-gradient-to-r from-pink-100 to-purple-100 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
  Contact Me
</h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded font-semibold transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
