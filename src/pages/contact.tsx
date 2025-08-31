import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
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
    business_name: '',
    phone_number: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.business_name.trim()) return 'Business name is required';
    if (!formData.message.trim()) return 'Message is required';

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return 'Please enter a valid email address';

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        'pure_sol_gmail', // Service ID
        'pure_sol_contact_us', // Template ID
        {
          user_name: formData.name,
          business_name: formData.business_name,
          phone_number: formData.phone_number || 'Not provided',
          message: formData.message,
          business_email: formData.email,
        },
        '2WBunC5iMomxgAL_X', // Public Key (User ID)
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          business_name: '',
          phone_number: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or contact us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-neutral-700 antialiased">
      <Meta
        title={`Contact Us - ${AppConfig.site_name}`}
        description="Get in touch with PureSol Imports for premium fruit sourcing and importing services. We're here to help with your fresh fruit needs."
      />

      {/* Navigation */}
      <Background color="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <Section yPadding="py-4">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link
                href="/"
                className="font-medium tracking-wide text-neutral-900 transition-all duration-200 hover:underline hover:underline-offset-4"
                style={{ textDecorationColor: '#FFC107' }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="tracking-wide text-neutral-900 transition-all duration-200 hover:underline hover:underline-offset-4"
                style={{ textDecorationColor: '#FFC107' }}
              >
                Contact
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary-50 to-white">
                          {/* Background Image */}
         <div
           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
           style={{ backgroundImage: 'url(/farm-background.jpg)' }}
         ></div>
         {/* Overlay for better text readability */}
         <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 to-white/40"></div>

        <Section yPadding="pt-16 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="md:text-7xl animate-fadeInUp mb-8 text-6xl font-bold leading-tight tracking-tight text-neutral-900">
              <span className="heading-shadow-intense">Get in Touch</span>
            </h1>
            <div className="mx-auto mb-8 h-1 w-16 bg-neutral-800"></div>
          </div>
        </Section>
      </div>

      {/* Contact Form Section */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-shadow-intense mb-6 text-3xl font-bold tracking-tight">
                  Contact Information
                </h2>
                <div className="mb-8 h-1 w-16 bg-neutral-800"></div>
                <p className="mb-8 text-lg text-neutral-600">
                  We&apos;re committed to providing exceptional service and the
                  highest quality fruits. Reach out to us for inquiries,
                  partnerships, or any questions about what we do.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg
                      className="size-6 text-primary-500"
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
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Phone
                    </h3>
                    <p className="text-neutral-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg
                      className="size-6 text-primary-500"
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
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Email
                    </h3>
                    <p className="text-neutral-600">info@puresolimports.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="heading-shadow-intense mb-6 text-3xl font-bold tracking-tight">
                Send us a Message
              </h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex">
                    <div className="shrink-0">
                      <svg
                        className="size-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Message Sent Successfully!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Thank you for contacting us. You will receive a
                          confirmation email shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                  <div className="flex">
                    <div className="shrink-0">
                      <svg
                        className="size-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error Sending Message
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business_name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Your company or business name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone_number"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="(555) 123-4567"
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
                    placeholder="Tell us about your company and fruit sourcing needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block w-full rounded-md bg-neutral-600 px-6 py-4 text-center transition-all duration-200 hover:scale-105 hover:bg-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  <span className="heading-shadow-intense text-xl font-extrabold">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
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
