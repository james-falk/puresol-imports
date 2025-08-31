import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Logo } from './Logo';

const MainPage = () => (
  <div className="text-neutral-700 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/farm-background.jpg)' }}
      ></div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 to-white/70"></div>

      <Section yPadding="pt-24 pb-32">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Hero Logo */}
          <div
            className="animate-fadeInUp mb-8 flex justify-center"
            style={{ animationDelay: '0.1s' }}
          >
            <Image
              src="/logo.png"
              alt="PureSol Imports Logo"
              width={360}
              height={360}
              className="drop-shadow-lg"
            />
          </div>

          <h1 className="md:text-7xl animate-fadeInUp mb-8 text-6xl font-bold leading-tight tracking-tight text-neutral-900">
            <span className="heading-shadow-intense">Farm Direct to You</span>
          </h1>
          <div
            className="animate-fadeInUp flex justify-center"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/contact">
              <div className="magnetic-hover inline-block rounded-md bg-neutral-600 px-12 py-4 text-center transition-all duration-300 hover:bg-neutral-500">
                <span className="heading-shadow-intense text-xl font-extrabold">
                  Contact Us
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </div>

    {/* What We Do Section */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="heading-shadow-intense mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          The PureSol Difference
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 bg-neutral-800"></div>
        <p className="text-2xl font-light leading-relaxed text-neutral-600">
          We grow, pack, and ship our own fruits—cutting out intermediaries to
          deliver superior quality at competitive prices while maintaining full
          control over every step of the process
        </p>
      </div>
    </Section>

    {/* Farm Direct Section */}
    <Background color="bg-neutral-50">
      <Section yPadding="py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="heading-shadow-intense mb-8 text-center text-4xl font-bold tracking-tight lg:text-left">
                True Farm Direct
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 bg-neutral-800 lg:mx-0"></div>
              <p className="mb-6 text-lg font-light leading-relaxed text-neutral-600">
                <strong className="text-neutral-800">
                  From Our Farm to Your Business—No Middlemen
                </strong>
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                We own and operate our own farms in Ecuador&apos;s fertile
                valleys, giving us complete control over every aspect of
                production—from seed to shipment.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                We grow, harvest, pack, and ship our own fruits. No brokers, no
                middlemen, no quality compromises. This direct approach allows
                us to offer superior quality at competitive prices while
                ensuring complete traceability and consistency in every
                shipment.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                Our integrated approach means you get the freshest fruits
                possible, with full transparency about growing methods, harvest
                dates, and shipping conditions. It&apos;s the difference between
                buying from a farmer and buying from a broker.
              </p>
            </div>
            <div className="animate-slideInRight relative order-1 lg:order-2">
              <div className="group relative flex h-96 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/fruit-in-buckets.jpg"
                  alt="Fruit in Buckets"
                  width={600}
                  height={400}
                  className="size-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    {/* Product Categories */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-6xl">
        {/* Premium Selection Heading */}
        <div className="mb-8 text-center">
          <h2 className="heading-shadow-intense mb-6 text-4xl font-bold tracking-tight">
            Premium Selection
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 bg-neutral-800"></div>
        </div>

        {/* Selection Display Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/selection-display.png"
            alt="Selection Display"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* Product Description */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-light leading-relaxed text-neutral-600">
            We offer a diverse selection of dragon fruit, including the classic
            white, vibrant purple, and sweet yellow varieties to satisfy every
            taste.
          </p>
        </div>
      </div>
    </Section>

    {/* Quality Commitment */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Premium Quality Card */}
          <div className="animate-fadeInUp stagger-1 group">
            <div className="h-full rounded-lg border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
              <Image
                src="/premium-quality.jpg"
                alt="Premium Quality"
                width={300}
                height={150}
                className="h-80 w-full rounded-t-lg object-cover object-center"
              />
              <div className="h-28 p-3">
                <h3 className="heading-shadow-intense mb-1 text-center text-base font-medium tracking-wide transition-colors group-hover:text-primary-600 lg:text-left">
                  Superior Quality
                </h3>
                <p className="text-xs leading-tight text-neutral-600">
                  Grown in Ecuador&apos;s fertile valleys with perfect growing
                  conditions. Every fruit hand-selected at peak ripeness for
                  exceptional flavor.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Shipping Card */}
          <div className="animate-fadeInUp stagger-2 group">
            <div className="h-full rounded-lg border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
              <Image
                src="/direct-shipping.jpg"
                alt="Direct Shipping"
                width={300}
                height={150}
                className="h-80 w-full rounded-t-lg object-cover"
              />
              <div className="h-28 p-3">
                <h3 className="heading-shadow-intense mb-1 text-center text-base font-medium tracking-wide transition-colors group-hover:text-secondary-600 lg:text-left">
                  Direct Shipping
                </h3>
                <p className="text-xs leading-tight text-neutral-600">
                  We pack and ship our own fruits using advanced cold-chain
                  logistics. From our farm to your business with maximum
                  freshness and speed.
                </p>
              </div>
            </div>
          </div>

          {/* Reliable Seasonal Supply Card */}
          <div className="animate-fadeInUp stagger-3 group">
            <div className="h-full rounded-lg border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
              <Image
                src="/supply.jpg"
                alt="Reliable Seasonal Supply"
                width={300}
                height={150}
                className="h-80 w-full rounded-t-lg object-cover"
              />
              <div className="h-28 p-3">
                <h3 className="heading-shadow-intense mb-1 text-center text-base font-medium tracking-wide transition-colors group-hover:text-accent-600 lg:text-left">
                  Reliable Seasonal Supply
                </h3>
                <p className="text-xs leading-tight text-neutral-600">
                  Thanks to Ecuador&apos;s location on the equator, we offer
                  fresh Ecuadorian fruits available all year round, ensuring
                  consistent quality and flavor for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Footer />
  </div>
);

export { MainPage };
