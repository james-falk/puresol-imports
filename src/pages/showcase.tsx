import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState('animations');
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAsyncDemo = async () => {
    setIsLoading(true);
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });
    setIsLoading(false);
  };

  const demoSections = [
    { id: 'animations', title: 'Advanced Animations', icon: '✨' },
    { id: 'components', title: 'UI Components', icon: '🧩' },
    { id: 'performance', title: 'Performance', icon: '⚡' },
    { id: 'responsive', title: 'Responsive Design', icon: '📱' },
    { id: 'seo', title: 'SEO Features', icon: '🔍' },
    { id: 'typescript', title: 'TypeScript', icon: '🔷' },
  ];

  return (
    <div className="text-neutral-700 antialiased">
      <Meta
        title={`Showcase - ${AppConfig.site_name}`}
        description="Comprehensive showcase of Next.js starter template capabilities including animations, components, performance features, and more."
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
                className="font-medium tracking-wide text-primary-700"
              >
                Showcase
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </Background>

      {/* Hero Section */}
      <Background color="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0">
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
        <Section yPadding="pt-24 pb-32">
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="md:text-8xl animate-fadeInUp mb-8 text-6xl font-light leading-tight tracking-tight text-neutral-900">
              <span className="text-gradient">Next.js Starter</span>
              <br />
              <span className="text-4xl md:text-5xl">Showcase</span>
            </h1>
            <div
              className="animate-scaleIn mx-auto mb-8 h-1 w-32 bg-primary-500"
              style={{ animationDelay: '0.3s' }}
            ></div>
            <p
              className="animate-fadeInUp mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-neutral-600 md:text-2xl"
              style={{ animationDelay: '0.5s' }}
            >
              Discover the full power of this professional Next.js starter
              template with TypeScript, Tailwind CSS, advanced animations, SEO
              optimization, and enterprise-grade features.
            </p>

            {/* Live Counter Demo */}
            <div
              className="animate-fadeInUp mb-8 rounded-2xl bg-white/80 p-8 backdrop-blur-sm"
              style={{ animationDelay: '0.7s' }}
            >
              <h3 className="mb-4 text-2xl font-medium text-neutral-900">
                Live React State Demo
              </h3>
              <div className="mb-4 text-6xl font-light text-primary-600">
                {counter}
              </div>
              <p className="text-neutral-600">
                Seconds since page load - Real-time React state management
              </p>
            </div>
          </div>
        </Section>
      </Background>

      {/* Interactive Demo Navigation */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-light tracking-tight text-neutral-900">
              Interactive Feature Demos
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
          </div>

          {/* Demo Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {demoSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveDemo(section.id)}
                className={`rounded-lg px-6 py-3 font-medium tracking-wide transition-all duration-300 ${
                  activeDemo === section.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-primary-50'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="min-h-96 rounded-2xl bg-white p-8 shadow-xl">
            {activeDemo === 'animations' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  Advanced Animation System
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="group text-center">
                    <div className="magnetic-hover mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-primary-100 transition-transform duration-300 group-hover:scale-110">
                      <span className="animate-float text-3xl">🚀</span>
                    </div>
                    <h4 className="mb-2 text-lg font-medium">Hover Effects</h4>
                    <p className="text-neutral-600">
                      Magnetic hover with smooth scaling
                    </p>
                  </div>
                  <div className="group text-center">
                    <div className="hover-glow mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-secondary-100">
                      <span className="animate-pulse text-3xl">✨</span>
                    </div>
                    <h4 className="mb-2 text-lg font-medium">Glow Effects</h4>
                    <p className="text-neutral-600">
                      Beautiful glow animations on hover
                    </p>
                  </div>
                  <div className="group text-center">
                    <div className="ripple-effect mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-accent-100">
                      <span className="animate-rotate text-3xl">⚡</span>
                    </div>
                    <h4 className="mb-2 text-lg font-medium">Ripple Effects</h4>
                    <p className="text-neutral-600">
                      Click for expanding ripple animation
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'components' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  UI Component Library
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 text-xl font-medium">Buttons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        xl
                        className="bg-primary-600 text-white hover:bg-primary-700"
                      >
                        Primary Button
                      </Button>
                      <Button
                        xl
                        className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                      >
                        Secondary Button
                      </Button>
                      <Button
                        xl
                        className="hover-glow bg-secondary-600 text-white hover:bg-secondary-700"
                      >
                        Glow Button
                      </Button>
                      <Button
                        xl
                        className="ripple-effect bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
                      >
                        Gradient Button
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-medium">Cards</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 p-6 transition-shadow hover:shadow-lg">
                        <h5 className="mb-2 text-lg font-medium">
                          Gradient Card
                        </h5>
                        <p className="text-neutral-600">
                          Beautiful gradient backgrounds with hover effects
                        </p>
                      </div>
                      <div className="glass-effect rounded-lg p-6">
                        <h5 className="mb-2 text-lg font-medium">
                          Glass Effect Card
                        </h5>
                        <p className="text-neutral-600">
                          Modern glassmorphism design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'performance' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  Performance Features
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-xl font-medium">
                      Optimization Features
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-3 size-2 rounded-full bg-green-500"></span>
                        Next.js Image Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 size-2 rounded-full bg-green-500"></span>
                        Automatic Code Splitting
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 size-2 rounded-full bg-green-500"></span>
                        CSS Purging with Tailwind
                      </li>
                      <li className="flex items-center">
                        <span className="mr-3 size-2 rounded-full bg-green-500"></span>
                        Lazy Loading Components
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xl font-medium">Async Demo</h4>
                    <button
                      onClick={handleAsyncDemo}
                      disabled={isLoading}
                      className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-700 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <div className="mr-2 size-4 animate-spin rounded-full border-b-2 border-white"></div>
                          Loading...
                        </span>
                      ) : (
                        'Test Async Operation'
                      )}
                    </button>
                    <p className="mt-4 text-neutral-600">
                      Demonstrates async state management and loading states
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'responsive' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  Responsive Design System
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="rounded-lg bg-primary-100 p-4 text-center">
                      <div className="text-sm font-medium">Mobile</div>
                      <div className="text-xs text-neutral-600">&lt; 640px</div>
                    </div>
                    <div className="rounded-lg bg-secondary-100 p-4 text-center">
                      <div className="text-sm font-medium">Tablet</div>
                      <div className="text-xs text-neutral-600">
                        640px - 768px
                      </div>
                    </div>
                    <div className="rounded-lg bg-accent-100 p-4 text-center">
                      <div className="text-sm font-medium">Desktop</div>
                      <div className="text-xs text-neutral-600">
                        768px - 1024px
                      </div>
                    </div>
                    <div className="rounded-lg bg-neutral-100 p-4 text-center">
                      <div className="text-sm font-medium">Large</div>
                      <div className="text-xs text-neutral-600">
                        &gt; 1024px
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600">
                    This grid automatically adapts: 1 column on mobile, 2 on
                    small screens, 3 on medium, and 4 on large screens. Resize
                    your browser to see the responsive behavior in action!
                  </p>
                </div>
              </div>
            )}

            {activeDemo === 'seo' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  SEO & Meta Features
                </h3>
                <div className="space-y-6">
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                    <h4 className="mb-3 text-lg font-medium text-green-800">
                      ✅ SEO Optimizations Included
                    </h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Dynamic meta tags with next-seo</li>
                      <li>• Structured data markup</li>
                      <li>• Open Graph tags for social sharing</li>
                      <li>• Twitter Card optimization</li>
                      <li>• Semantic HTML structure</li>
                      <li>• Accessible navigation and forms</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                    <h4 className="mb-3 text-lg font-medium text-blue-800">
                      🔍 Current Page Meta
                    </h4>
                    <div className="space-y-1 text-sm text-blue-700">
                      <div>
                        <strong>Title:</strong> Showcase - {AppConfig.site_name}
                      </div>
                      <div>
                        <strong>Description:</strong> Comprehensive showcase of
                        Next.js starter template capabilities...
                      </div>
                      <div>
                        <strong>URL:</strong> /showcase
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'typescript' && (
              <div className="animate-fadeInUp">
                <h3 className="mb-6 text-3xl font-medium text-neutral-900">
                  TypeScript Integration
                </h3>
                <div className="overflow-x-auto rounded-lg bg-gray-900 p-6 font-mono text-sm text-green-400">
                  <div className="mb-4 text-gray-400">{`// Type-safe component props`}</div>
                  <div className="text-blue-400">interface</div>{' '}
                  <div className="text-yellow-400">ButtonProps</div> {`{`}
                  <div className="ml-4">
                    <div>
                      <span className="text-blue-400">children</span>:{' '}
                      <span className="text-green-400">React.ReactNode</span>;
                    </div>
                    <div>
                      <span className="text-blue-400">onClick</span>?:{' '}
                      <span className="text-green-400">() =&gt; void</span>;
                    </div>
                    <div>
                      <span className="text-blue-400">variant</span>?:{' '}
                      <span className="text-orange-400">
                        &apos;primary&apos;
                      </span>{' '}
                      |{' '}
                      <span className="text-orange-400">
                        &apos;secondary&apos;
                      </span>
                      ;
                    </div>
                  </div>
                  {`}`}
                  <div className="mb-2 mt-4 text-gray-400">{`// Fully typed component`}</div>
                  <div>
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-yellow-400">Button</span> ={' '}
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-400">props</span>:{' '}
                    <span className="text-green-400">ButtonProps</span>
                    <span className="text-gray-400">) =&gt;</span> {`{`}
                  </div>
                  <div className="ml-4 text-gray-400">{`// Implementation with full IntelliSense`}</div>
                  {`}`}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-lg font-medium">
                      TypeScript Benefits
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li>• Compile-time error checking</li>
                      <li>• IntelliSense and autocomplete</li>
                      <li>• Refactoring safety</li>
                      <li>• Better documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-medium">
                      Configured Features
                    </h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li>• Strict type checking</li>
                      <li>• Path mapping for imports</li>
                      <li>• ESLint TypeScript rules</li>
                      <li>• Type-safe API routes</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Background color="bg-neutral-900 text-white">
        <Section yPadding="py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-light tracking-tight">
                Technical Specifications
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-primary-400">
                  🚀 Framework
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>Next.js 14.1.0</li>
                  <li>React 18.2.0</li>
                  <li>TypeScript 5.3.3</li>
                  <li>Server-side rendering</li>
                </ul>
              </div>

              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-secondary-400">
                  🎨 Styling
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>Tailwind CSS 3.4.1</li>
                  <li>PostCSS processing</li>
                  <li>Custom animations</li>
                  <li>Responsive design</li>
                </ul>
              </div>

              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-accent-400">
                  ⚡ Performance
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>Image optimization</li>
                  <li>Code splitting</li>
                  <li>CSS purging</li>
                  <li>Bundle analysis</li>
                </ul>
              </div>

              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-primary-400">
                  🔧 Development
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>ESLint + Prettier</li>
                  <li>Husky git hooks</li>
                  <li>Lint-staged</li>
                  <li>Hot reloading</li>
                </ul>
              </div>

              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-secondary-400">
                  📱 Features
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>Mobile-first design</li>
                  <li>SEO optimization</li>
                  <li>Accessibility ready</li>
                  <li>PWA compatible</li>
                </ul>
              </div>

              <div className="rounded-lg bg-neutral-800 p-6">
                <h3 className="mb-4 text-xl font-medium text-accent-400">
                  🚀 Deployment
                </h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>Vercel optimized</li>
                  <li>Netlify ready</li>
                  <li>Static export</li>
                  <li>Docker support</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </Background>

      {/* Call to Action */}
      <Section yPadding="py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="animate-fadeInUp mb-6 text-4xl font-light tracking-tight text-neutral-900">
            Ready to Build Something{' '}
            <span className="text-gradient">Amazing</span>?
          </h2>
          <div className="animate-scaleIn mx-auto mb-8 h-1 w-16 bg-primary-500"></div>
          <p className="animate-fadeInUp mb-12 text-xl font-light leading-relaxed text-neutral-600">
            This starter template gives you everything you need to build
            professional, high-performance web applications with modern best
            practices.
          </p>
          <div className="animate-fadeInUp flex flex-col justify-center gap-6 sm:flex-row">
            <Link href="/contact">
              <Button
                xl
                className="hover-glow ripple-effect bg-primary-600 px-12 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:bg-primary-700"
              >
                Start Your Project
              </Button>
            </Link>
            <Link
              href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template"
              target="_blank"
            >
              <Button
                xl
                className="magnetic-hover border-2 border-primary-600 px-12 py-4 text-lg font-medium tracking-wide text-primary-600 transition-all duration-300 hover:bg-primary-50"
              >
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Showcase;
