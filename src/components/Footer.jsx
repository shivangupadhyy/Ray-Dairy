import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { CONTACT_INFO, NAVIGATION_LINKS, COMPANY_NAME } from '../data/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-charcoal via-charcoal to-primary/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
              Ray Dairy
            </h3>
            <p className="text-gray-300 mb-4 font-medium">{COMPANY_NAME}</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering freshness, quality, and trust in every drop since 2023.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div className="text-gray-300 text-sm">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <span className="text-gray-300 text-sm">
                  {CONTACT_INFO.factoryAddress}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/17dDM3JQ71/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-charcoal transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/realraydairy?igsh=ZnBmMWpwZGJpZ2t3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-charcoal transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/realraydairy?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-charcoal transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_NAME}. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {/* Replace these with real pages before launch; left as plain text to avoid broken links in production */}
              <span className="text-gray-400">Privacy Policy</span>
              <span className="text-gray-400">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}