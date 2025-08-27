import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
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
    <Background color="bg-white border-b border-neutral-200">
      <Section yPadding="py-4">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link
              href="/"
              className="font-medium tracking-wide text-primary-700"
            >
              Home
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
          {/* Floating decorative elements */}
          <div className="animate-float absolute -left-10 -top-10 size-20 rounded-full bg-primary-200 opacity-20"></div>
          <div
            className="-right-15 animate-float absolute -top-5 size-12 rounded-full bg-secondary-200 opacity-30"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="animate-float absolute -bottom-10 left-1/4 size-16 rounded-full bg-accent-200 opacity-15"
            style={{ animationDelay: '2s' }}
          ></div>

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
            <span className="text-gradient">Farm Direct to You</span>
          </h1>
          <div
            className="animate-fadeInUp flex justify-center"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/contact">
              <Button
                xl
                className="magnetic-hover border-2 border-primary-600 px-12 py-4 text-lg font-medium tracking-wide text-primary-600 transition-all duration-300 hover:bg-primary-50"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>

    {/* What We Do Section */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          <span className="text-gradient">The PureSol Difference</span>
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
        <p className="text-2xl font-light leading-relaxed text-neutral-600">
          We grow, pack, and ship our own fruits—eliminating middlemen to
          deliver superior quality at competitive prices while ensuring complete
          traceability from farm to your business.
        </p>
      </div>
    </Section>

    {/* Farm Direct Section */}
    <Background color="bg-neutral-50">
      <Section yPadding="py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold tracking-tight">
                <span className="text-gradient">True Farm Direct</span>
              </h2>
              <div className="mb-8 h-1 w-16 bg-primary-500"></div>
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
            <div className="animate-slideInRight relative">
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
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">
            <span className="text-gradient">Our Premium Selection</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
        </div>

        {/* Sliced Fruit Display Image */}
        <div className="mb-16 flex justify-center">
          <div className="rotate-20 size-[500px]">
            <Image
              src="/sliced-fruit-display.jpeg"
              alt="Sliced Fruit Display"
              width={500}
              height={500}
              className="size-full rounded-full object-cover shadow-lg"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="animate-fadeInUp stagger-1 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-primary-100 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/red-emoji.png"
                  alt="Red Fruit"
                  width={48}
                  height={48}
                  className="group-hover:animate-pulse"
                />
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-bold tracking-wide text-neutral-900">
                Red with white flesh
              </h3>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-2 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-accent-100 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/red-emoji.png"
                  alt="Red Fruit"
                  width={48}
                  height={48}
                  className="group-hover:animate-pulse"
                />
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-bold tracking-wide text-neutral-900">
                Red with purple flesh
              </h3>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-3 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-secondary-100 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/yellow-emoji.png"
                  alt="Yellow Fruit"
                  width={48}
                  height={48}
                  className="group-hover:animate-pulse"
                />
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-bold tracking-wide text-neutral-900">
                Yellow with white flesh
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Contact Us Banner */}
    <div className="relative h-32 overflow-hidden">
      <Image
        src="/fruit-in-bucket-trimmed.jpg"
        alt="Fruit in Bucket"
        fill
        className="object-cover"
        style={{ objectPosition: 'center center' }}
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href="/contact">
          <Button
            xl
            className="bg-white px-12 py-4 text-lg font-medium tracking-wide text-primary-600 transition-all duration-300 hover:scale-105 hover:bg-primary-50 hover:shadow-2xl"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>

    {/* Quality Commitment */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="animate-fadeInUp stagger-1 group text-center">
            <div className="magnetic-hover mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-200">
              <span className="text-2xl group-hover:animate-pulse">🏆</span>
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-wide text-neutral-900 transition-colors group-hover:text-primary-600">
              Premium Quality
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Grown in Ecuador&apos;s fertile valleys with perfect growing
              conditions. Every fruit hand-selected at peak ripeness for
              exceptional flavor.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-2 group text-center">
            <div className="magnetic-hover mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-secondary-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary-200">
              <span className="text-2xl group-hover:animate-pulse">🚚</span>
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-wide text-neutral-900 transition-colors group-hover:text-secondary-600">
              Direct Shipping
            </h3>
            <p className="leading-relaxed text-neutral-600">
              We pack and ship our own fruits using advanced cold-chain
              logistics. From our farm to your business with maximum freshness
              and speed.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-3 group text-center">
            <div className="magnetic-hover mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-200">
              <span className="text-2xl group-hover:animate-pulse">🤝</span>
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-wide text-neutral-900 transition-colors group-hover:text-accent-600">
              No Middlemen
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Eliminate brokers and importers. Deal directly with the farm for
              better prices, complete transparency, and guaranteed quality
              control.
            </p>
          </div>
        </div>
      </div>
    </Section>

    <Footer />
  </div>
);

export { MainPage };
