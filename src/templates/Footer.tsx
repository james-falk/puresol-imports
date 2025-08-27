import Link from 'next/link';

import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="text-center">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <nav className="mt-5">
          <ul className="flex flex-row justify-center text-xl font-medium text-gray-800">
            <li className="mx-4">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="mt-8 space-y-2 text-gray-600">
          <p>(555) 123-4567</p>
          <p>info@puresolimports.com</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm">
          <FooterCopyright />
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
