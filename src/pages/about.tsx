import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const About = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`About Us - ${AppConfig.site_name}`}
        description="Learn about PureSol Imports' mission to deliver the world's finest fruits. Discover our story, values, and commitment to quality and sustainability."
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
                href="/about"
                className="font-medium tracking-wide text-primary-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="tracking-wide transition-colors hover:text-primary-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/showcase"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text font-medium tracking-wide text-transparent transition-colors hover:text-primary-600"
              >
                Showcase ✨
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      <Background color="bg-gradient-to-b from-primary-50 to-white">
        <Section yPadding="pt-24 pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="md:text-7xl mb-8 text-6xl font-light leading-tight tracking-tight text-neutral-900">
              Our Story
            </h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-primary-500"></div>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-neutral-600 md:text-2xl">
              Bringing the world&apos;s finest fruits through sustainable
              sourcing, exceptional quality, and unwavering commitment to
              freshness.
            </p>
          </div>
        </Section>
      </Background>

      {/* Company Story */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Founded on <span className="text-primary-500">Passion</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  PureSol Imports was born from a simple belief: everyone
                  deserves access to the world&apos;s most delicious and
                  nutritious fruits, regardless of where they live. Founded in
                  2010 by Maria Rodriguez, a former agricultural engineer with a
                  passion for sustainable farming.
                </p>
                <p>
                  What started as a small operation importing exotic fruits from
                  Maria&apos;s native Colombia has grown into a trusted global
                  network, connecting premium fruit growers from over 25
                  countries with discerning customers worldwide.
                </p>
                <p>
                  Today, we&apos;re proud to be one of the leading premium fruit
                  importers, known for our rigorous quality standards,
                  sustainable sourcing practices, and commitment to supporting
                  small-scale farmers around the globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="from-fruit-orange/20 to-fruit-mango/20 flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br p-8">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🌍</div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Global Network
                  </h3>
                  <p className="text-gray-600">Sourcing from 25+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Background color="bg-gray-50">
        <Section yPadding="py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Our Mission & <span className="text-secondary-500">Values</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                We&apos;re driven by core values that guide every decision we
                make and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Quality */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="bg-fruit-apple/20 mb-6 flex size-16 items-center justify-center rounded-full">
                  <div className="text-3xl">🍎</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Uncompromising Quality
                </h3>
                <p className="text-gray-600">
                  Every fruit undergoes rigorous quality checks at multiple
                  stages. We never compromise on freshness, taste, or
                  nutritional value.
                </p>
              </div>

              {/* Sustainability */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-secondary-100">
                  <div className="text-3xl">🌱</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Sustainable Sourcing
                </h3>
                <p className="text-gray-600">
                  We partner with farms that prioritize environmental
                  stewardship, fair labor practices, and sustainable growing
                  methods.
                </p>
              </div>

              {/* Community */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="bg-fruit-orange/20 mb-6 flex size-16 items-center justify-center rounded-full">
                  <div className="text-3xl">🤝</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  We believe in building long-term partnerships with farmers,
                  ensuring fair prices and supporting local communities.
                </p>
              </div>

              {/* Innovation */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="bg-fruit-grape/20 mb-6 flex size-16 items-center justify-center rounded-full">
                  <div className="text-3xl">💡</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  From cold-chain logistics to packaging technology, we
                  continuously innovate to deliver fruits at peak freshness.
                </p>
              </div>

              {/* Transparency */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="bg-fruit-lime/20 mb-6 flex size-16 items-center justify-center rounded-full">
                  <div className="text-3xl">🔍</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Complete traceability from farm to table. Know exactly where
                  your fruits come from and how they were grown.
                </p>
              </div>

              {/* Excellence */}
              <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                <div className="bg-fruit-banana/20 mb-6 flex size-16 items-center justify-center rounded-full">
                  <div className="text-3xl">⭐</div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our business, from
                  sourcing to customer service, setting the industry standard.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Background>

      {/* Stats Section */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our <span className="text-primary-500">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary-500">
                25+
              </div>
              <div className="text-gray-600">Countries</div>
              <div className="text-sm text-gray-500">Sourcing Partners</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary-500">
                500+
              </div>
              <div className="text-gray-600">Farmers</div>
              <div className="text-sm text-gray-500">Direct Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-fruit-orange mb-2 text-4xl font-bold">
                1M+
              </div>
              <div className="text-gray-600">Tons</div>
              <div className="text-sm text-gray-500">Fruits Imported</div>
            </div>
            <div className="text-center">
              <div className="text-fruit-apple mb-2 text-4xl font-bold">
                98%
              </div>
              <div className="text-gray-600">Satisfaction</div>
              <div className="text-sm text-gray-500">Customer Rating</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Background color="bg-gradient-to-r from-fruit-kiwi/10 to-fruit-lime/10">
        <Section yPadding="py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Meet Our <span className="text-secondary-500">Leadership</span>
              </h2>
              <p className="text-xl text-gray-600">
                The passionate team behind PureSol Imports
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-300">
                  <div className="text-4xl">👩‍💼</div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Maria Rodriguez
                </h3>
                <p className="mb-3 font-medium text-primary-500">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-600">
                  Agricultural engineer with 20+ years in sustainable farming
                  and international trade.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-secondary-200 to-secondary-300">
                  <div className="text-4xl">👨‍🔬</div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Dr. James Chen
                </h3>
                <p className="mb-3 font-medium text-secondary-500">
                  Head of Quality Assurance
                </p>
                <p className="text-sm text-gray-600">
                  Food scientist specializing in post-harvest technology and
                  quality preservation.
                </p>
              </div>

              <div className="text-center">
                <div className="from-fruit-orange/40 to-fruit-mango/40 mx-auto mb-6 flex size-32 items-center justify-center rounded-full bg-gradient-to-br">
                  <div className="text-4xl">👩‍🌾</div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Sarah Thompson
                </h3>
                <p className="text-fruit-orange mb-3 font-medium">
                  Director of Sourcing
                </p>
                <p className="text-sm text-gray-600">
                  Global sourcing expert with deep relationships across
                  fruit-growing regions worldwide.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Background>

      {/* Call to Action */}
      <Section yPadding="py-16">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Ready to Experience the{' '}
            <span className="text-primary-500">Difference</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Join our family of satisfied customers and taste the PureSol
            difference today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                xl
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/">
              <Button
                xl
                className="border-2 border-primary-500 bg-white text-primary-500 hover:bg-primary-50"
              >
                Explore Our Fruits
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
