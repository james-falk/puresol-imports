import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-light text-3xl tracking-tight'
    : 'font-medium text-xl tracking-wide';

  // Check if custom logo exists, otherwise use fallback
  const hasCustomLogo = false; // Will be updated when logo is uploaded

  if (hasCustomLogo) {
    return (
      <span className="inline-flex items-center">
        <Image
          src="/assets/images/logo.png" // Update this path when logo is uploaded
          alt={AppConfig.site_name}
          width={props.xl ? 44 : 32}
          height={props.xl ? 44 : 32}
          className="mr-3"
        />
        <span className={`text-neutral-900 ${fontStyle}`}>
          {AppConfig.site_name}
        </span>
      </span>
    );
  }

  // Fallback logo with sophisticated design
  return (
    <span className={`inline-flex items-center text-neutral-900 ${fontStyle}`}>
      <div className="relative mr-3">
        <svg
          className="text-primary-600"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        {/* Animated accent dot */}
        <div className="absolute -right-1 -top-1 size-2 animate-pulse rounded-full bg-secondary-500"></div>
      </div>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
