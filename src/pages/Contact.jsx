import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { CONTACT_INFO, SOCIAL_LINKS } from '../data/constants';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Initialize EmailJS (do this once in your app, preferably in main.jsx)
  // emailjs.init('YOUR_PUBLIC_KEY');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Read values directly from the form and send explicit template params
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const fd = new FormData(form.current);
    const templateParams = {
      // canonical keys used in this codebase
      user_name: fd.get('user_name') || '',
      user_email: fd.get('user_email') || '',
      phone_number: fd.get('phone_number') || '',
      message: fd.get('message') || '',

      // aliases: include shorter/common variable names so templates that
      // expect {{name}}, {{email}}, {{phone}} continue to work without edits.
      name: fd.get('user_name') || '',
      email: fd.get('user_email') || '',
      phone: fd.get('phone_number') || '',

      // add subject and reply_to to improve deliverability and make replies easy
      subject: `New Contact Form Submission – ${fd.get('user_name') || 'Website'}`,
      reply_to: fd.get('user_email') || '',
    };

    // Debug: uncomment to inspect params in console
    // console.log('EmailJS templateParams:', templateParams);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current?.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.log('FAILED...', error);
          setTimeout(() => setSubmitStatus('idle'), 5000);
        }
      );
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Get in Touch"
          subtitle="We'd love to hear from you. Contact us for any inquiries or partnership opportunities."
          backgroundImage="/contactus.png"
        />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 font-heading">
                  Send Us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green/10 border border-green rounded-lg">
                    <p className="text-green font-semibold">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-500 rounded-lg">
                    <p className="text-red-600 font-semibold">
                      Failed to send message. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-semibold text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone_number" className="block text-sm font-semibold text-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 font-heading">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6" style={{ color: 'var(--color-slate)' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">Phone</h3>
                        {CONTACT_INFO.phones.map((phone, index) => (
                          <p key={index} className="text-slate">
                            <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                              {phone}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6" style={{ color: 'var(--color-slate)' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">Email</h3>
                        <p className="text-slate">
                          <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {CONTACT_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6" style={{ color: 'var(--color-slate)' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">Factory Address</h3>
                        <p className="text-slate">{CONTACT_INFO.factoryAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6" style={{ color: 'var(--color-slate)' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">Office Address</h3>
                        <p className="text-slate">{CONTACT_INFO.officeAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-vanilla rounded-2xl p-8 border border-gray/20">
                  <h3 className="text-xl font-semibold text-charcoal mb-4 font-heading">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {SOCIAL_LINKS.map((link) => {
                      const IconComponent =
                        link.platform === 'Facebook'
                          ? FaFacebook
                          : link.platform === 'Instagram'
                          ? FaInstagram
                          : FaXTwitter;
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                          aria-label={link.platform}
                        >
                          <IconComponent size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-8 text-center font-heading">
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px] border border-gray/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114284.89697154893!2d79.31426842343748!3d27.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzI0LjQiTiA3OcKwMjcnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Morning Milk Products Factory Location - Karhal, Mainpuri"
              />
            </div>
            <p className="text-center text-slate mt-6 text-sm">
              Factory: Mauza Gopalpur, Paragna, Karhal , Uttar Pradesh – 205284
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}