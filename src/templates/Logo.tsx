import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  logoPath?: string; // Optional prop for dynamic logo path
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-light text-3xl tracking-tight'
    : 'font-medium text-xl tracking-wide';

  if (props.logoPath) {
    return (
      <span
        className={`inline-flex items-center text-neutral-900 ${fontStyle}`}
      >
        <Image
          src={props.logoPath}
          alt={`${AppConfig.site_name} Logo`}
          width={parseInt(size, 10)}
          height={parseInt(size, 10)}
          className="mr-3"
        />
        {AppConfig.site_name}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center text-neutral-900 ${fontStyle}`}>
      <svg
        className="mr-3 text-primary-600"
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
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
