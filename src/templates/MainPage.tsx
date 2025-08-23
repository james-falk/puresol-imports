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
              href="/about"
              className="tracking-wide transition-colors hover:text-primary-600"
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

    {/* Hero Section */}
    <Background color="bg-gradient-to-b from-primary-50 to-white gradient-mesh">
      <Section yPadding="pt-24 pb-32">
        <div className="relative mx-auto max-w-4xl text-center">
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

          <h1 className="md:text-7xl animate-fadeInUp mb-8 text-6xl font-light leading-tight tracking-tight text-neutral-900">
            <span className="text-gradient">Premium Fresh Fruits</span>
          </h1>
          <div
            className="animate-scaleIn mx-auto mb-8 h-1 w-24 bg-primary-500"
            style={{ animationDelay: '0.3s' }}
          ></div>
          <p
            className="animate-fadeInUp mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-neutral-600 md:text-2xl"
            style={{ animationDelay: '0.5s' }}
          >
            Sourced directly from the world&apos;s finest growers, delivered
            with uncompromising quality and freshness
          </p>
          <div
            className="animate-fadeInUp flex flex-col justify-center gap-6 sm:flex-row"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/showcase">
              <Button
                xl
                className="hover-glow ripple-effect bg-gradient-to-r from-primary-600 to-secondary-600 px-12 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:from-primary-700 hover:to-secondary-700"
              >
                🚀 View Showcase
              </Button>
            </Link>
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
    </Background>

    {/* What We Do Section */}
    <Section yPadding="py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
          What We Do
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
        <p className="text-2xl font-light leading-relaxed text-neutral-600">
          Make Fresh Fruit Sourcing More Reliable & More Profitable, One
          Partnership at a Time
        </p>
      </div>
    </Section>

    {/* Farm Direct Section */}
    <Background color="bg-neutral-50">
      <Section yPadding="py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-light tracking-tight text-neutral-900">
                Farm Direct
              </h2>
              <div className="mb-8 h-1 w-16 bg-primary-500"></div>
              <p className="mb-6 text-lg font-light leading-relaxed text-neutral-600">
                <strong className="text-neutral-800">
                  Know Your Farmer, Know Your Fruits
                </strong>
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                At PureSol Imports, we are united by a shared passion for
                providing the finest fresh fruits by working directly with farms
                that produce the perfect products for global distribution, each
                and every time.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                Farm Direct means no broker nor middleman stands between us and
                competitive pricing, allowing us to offer consistent, premium
                quality and granting us granular control over the ripeness,
                texture, and sizing for all of our fruits.
              </p>
              <Link href="/about">
                <Button
                  xl
                  className="border-2 border-primary-600 px-8 py-3 font-medium tracking-wide text-primary-600 transition-all duration-300 hover:bg-primary-50"
                >
                  More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-slideInRight relative">
              <div className="group relative flex h-96 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 p-12">
                {/* Animated background elements */}
                <div className="absolute left-0 top-0 size-full">
                  <div className="animate-float absolute left-4 top-4 size-8 rounded-full bg-primary-300 opacity-30"></div>
                  <div
                    className="animate-float absolute right-8 top-8 size-6 rounded-full bg-secondary-300 opacity-40"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div
                    className="animate-float absolute bottom-6 left-1/3 size-10 rounded-full bg-accent-300 opacity-20"
                    style={{ animationDelay: '2s' }}
                  ></div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="animate-rotate mb-4 text-6xl">🌍</div>
                  <h3 className="mb-2 text-xl font-medium text-neutral-800 transition-colors group-hover:text-primary-700">
                    Global Network
                  </h3>
                  <p className="text-neutral-600">
                    Direct partnerships worldwide
                  </p>

                  {/* Animated stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="animate-pulse">
                      <div className="text-lg font-semibold text-primary-600">
                        25+
                      </div>
                      <div className="text-neutral-500">Countries</div>
                    </div>
                    <div
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="text-lg font-semibold text-secondary-600">
                        500+
                      </div>
                      <div className="text-neutral-500">Farmers</div>
                    </div>
                  </div>
                </div>
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
          <h2 className="mb-6 text-4xl font-light tracking-tight text-neutral-900">
            Our Premium Selection
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="animate-fadeInUp stagger-1 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-primary-100 transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl group-hover:animate-pulse">🥭</span>
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-medium tracking-wide text-neutral-900">
                Tropical Fruits
              </h3>
              <p className="relative z-10 text-center text-sm text-neutral-600">
                Premium mangoes, pineapples, papayas
              </p>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-2 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-accent-100 transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl group-hover:animate-pulse">🍊</span>
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-medium tracking-wide text-neutral-900">
                Citrus Collection
              </h3>
              <p className="relative z-10 text-center text-sm text-neutral-600">
                Fresh oranges, lemons, grapefruits
              </p>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-3 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-secondary-100 transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl group-hover:animate-pulse">🍓</span>
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-medium tracking-wide text-neutral-900">
                Premium Berries
              </h3>
              <p className="relative z-10 text-center text-sm text-neutral-600">
                Strawberries, blueberries, raspberries
              </p>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-4 group">
            <div className="hover-glow relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full bg-earth-sand transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl group-hover:animate-pulse">🥝</span>
              </div>
              <h3 className="relative z-10 mb-2 text-lg font-medium tracking-wide text-neutral-900">
                Exotic Varieties
              </h3>
              <p className="relative z-10 text-center text-sm text-neutral-600">
                Dragon fruit, passion fruit, lychee
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Let Us Help You Section */}
    <Background color="bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500"></div>
      <div className="absolute left-0 top-0 size-full">
        <div className="animate-float absolute left-10 top-10 size-32 rounded-full bg-white opacity-5"></div>
        <div
          className="animate-float absolute right-20 top-20 size-20 rounded-full bg-white opacity-10"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="animate-float absolute bottom-10 left-1/3 size-24 rounded-full bg-white opacity-5"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>
      <Section yPadding="py-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="animate-slideInLeft mb-6 text-4xl font-light tracking-tight text-white md:text-5xl">
            Let Us Help You Find Your
          </h2>
          <h3 className="animate-slideInRight mb-12 text-3xl font-light tracking-tight text-primary-100 md:text-4xl">
            <span className="relative">
              Culinary Treasure Chest
              <div
                className="animate-scaleIn absolute -bottom-2 left-0 h-1 w-full bg-white opacity-30"
                style={{ animationDelay: '1s' }}
              ></div>
            </span>
          </h3>
          <div className="animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
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
      </Section>
    </Background>

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
              Hand-selected fruits that meet our rigorous quality standards.
              Every piece inspected for optimal ripeness and flavor.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-2 group text-center">
            <div className="magnetic-hover mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-secondary-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary-200">
              <span className="text-2xl group-hover:animate-pulse">🚚</span>
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-wide text-neutral-900 transition-colors group-hover:text-secondary-600">
              Fresh Delivery
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Advanced cold-chain logistics ensure your fruits arrive at peak
              freshness. From harvest to delivery in record time.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-3 group text-center">
            <div className="magnetic-hover mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-200">
              <span className="text-2xl group-hover:animate-pulse">🌍</span>
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-wide text-neutral-900 transition-colors group-hover:text-accent-600">
              Global Network
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Direct partnerships with premium growers across 25+ countries,
              bringing you the world&apos;s finest fruits year-round.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Final CTA */}
    <Background color="bg-neutral-50 gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-full opacity-30">
          <div className="animate-float absolute left-10 top-10 size-32 rounded-full bg-primary-200 opacity-20"></div>
          <div
            className="animate-float absolute right-20 top-20 size-24 rounded-full bg-secondary-200 opacity-30"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="animate-float absolute bottom-10 left-1/3 size-28 rounded-full bg-accent-200 opacity-15"
            style={{ animationDelay: '4s' }}
          ></div>
        </div>
      </div>
      <Section yPadding="py-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="animate-fadeInUp mb-6 text-4xl font-light tracking-tight text-neutral-900">
            Ready to Experience{' '}
            <span className="text-gradient">Premium Quality</span>?
          </h2>
          <div
            className="animate-scaleIn mx-auto mb-8 h-1 w-16 bg-primary-500"
            style={{ animationDelay: '0.3s' }}
          ></div>
          <p
            className="animate-fadeInUp mb-12 text-xl font-light leading-relaxed text-neutral-600"
            style={{ animationDelay: '0.5s' }}
          >
            Join industry leaders who trust PureSol Imports for their premium
            fruit sourcing needs.
          </p>
          <div
            className="animate-fadeInUp flex flex-col justify-center gap-6 sm:flex-row"
            style={{ animationDelay: '0.7s' }}
          >
            <Link href="/contact">
              <Button
                xl
                className="hover-glow ripple-effect bg-primary-600 px-12 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:bg-primary-700"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button
                xl
                className="magnetic-hover border-2 border-primary-600 px-12 py-4 text-lg font-medium tracking-wide text-primary-600 transition-all duration-300 hover:bg-primary-50"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 gap-8 opacity-60 md:grid-cols-4">
            <div className="animate-fadeInUp stagger-1 text-center">
              <div className="text-2xl font-light text-primary-600">1M+</div>
              <div className="text-sm text-neutral-500">Tons Delivered</div>
            </div>
            <div className="animate-fadeInUp stagger-2 text-center">
              <div className="text-2xl font-light text-secondary-600">98%</div>
              <div className="text-sm text-neutral-500">Satisfaction</div>
            </div>
            <div className="animate-fadeInUp stagger-3 text-center">
              <div className="text-2xl font-light text-accent-600">15+</div>
              <div className="text-sm text-neutral-500">Years Experience</div>
            </div>
            <div className="animate-fadeInUp stagger-4 text-center">
              <div className="text-2xl font-light text-primary-600">24/7</div>
              <div className="text-sm text-neutral-500">Support</div>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Footer />
  </div>
);

export { MainPage };
