import facebookImage from '@assets/icon-facebook.svg';
import pinterestImage from '@assets/icon-pinterest.svg';
import twitterImage from '@assets/icon-twitter.svg';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export type ShareSocialLinkItem = {
  href: string;
  image: StaticImageData;
  name: string;
  ariaLabel: string;
};

export const SHARE_SOCIAL_LINKS: readonly ShareSocialLinkItem[] = [
  {
    href: '#',
    image: facebookImage as StaticImageData,
    name: 'Facebook',
    ariaLabel: 'Share on Facebook',
  },
  {
    href: '#',
    image: twitterImage as StaticImageData,
    name: 'Twitter',
    ariaLabel: 'Share on Twitter',
  },
  {
    href: '#',
    image: pinterestImage as StaticImageData,
    name: 'Pinterest',
    ariaLabel: 'Share on Pinterest',
  },
];

type ShareSocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function ShareSocialLinks({ className, linkClassName }: ShareSocialLinksProps) {
  return (
    <div className={className}>
      {SHARE_SOCIAL_LINKS.map(({ href, image, name, ariaLabel }) => (
        <Link key={name} href={href} className={linkClassName} aria-label={ariaLabel} target='_blank'>
          <Image src={image} width={image.width} height={image.height} alt='' className='block shrink-0' />
        </Link>
      ))}
    </div>
  );
}
