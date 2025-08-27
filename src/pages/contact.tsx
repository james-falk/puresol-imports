import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`Contact Us - ${AppConfig.site_name}`}
        description="Get in touch with PureSol Imports for premium fruit sourcing and importing services. We're here to help with your fresh fruit needs."
      />

      {/* Header */}
      <Background color="bg-white border-b border-neutral-200">
        <Section yPadding="py-4">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="/"
                className="tracking-wide transition-colors hover:text-primary-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-medium tracking-wide text-primary-700"
              >
                Contact
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      <Background color="bg-gradient-to-b from-primary-50 to-white">
        <Section yPadding="pt-24 pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="md:text-7xl mb-8 text-6xl font-bold leading-tight tracking-tight text-neutral-900">
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-primary-500"></div>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-neutral-600 md:text-2xl">
              Ready to source the finest fruits for your business? We&apos;re
              here to help you every step of the way.
            </p>
          </div>
        </Section>
      </Background>

      {/* Contact Form Section */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  We&apos;re committed to providing exceptional service and the
                  highest quality fruits. Reach out to us for inquiries,
                  partnerships, or any questions about what we do.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary-100">
                    <svg
                      className="size-6 text-secondary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary-100">
                    <svg
                      className="size-6 text-secondary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600">info@puresolimports.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your fruit sourcing needs, volume requirements, or any questions you have..."
                  />
                </div>

                <Button
                  xl
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-200 hover:scale-105 hover:from-primary-600 hover:to-secondary-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
