import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  logoPath?: string; // Optional prop for dynamic logo path
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-bold text-3xl tracking-tight'
    : 'font-bold text-xl tracking-wide';

  if (props.logoPath) {
    return (
      <span className={`inline-flex items-center ${fontStyle}`}>
        <Image
          src={props.logoPath}
          alt={`${AppConfig.site_name} Logo`}
          width={parseInt(size, 10)}
          height={parseInt(size, 10)}
          className="mr-3"
        />
        <span className="text-gradient">{AppConfig.site_name}</span>
      </span>
    );
  }

  // Use the default logo file
  return (
    <span className={`inline-flex items-center ${fontStyle}`}>
      <Image
        src="/logo.png"
        alt={`${AppConfig.site_name} Logo`}
        width={parseInt(size, 10)}
        height={parseInt(size, 10)}
        className="mr-3"
      />
      <span className="text-gradient">{AppConfig.site_name}</span>
    </span>
  );
};

export { Logo };
