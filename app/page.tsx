'use client';

import avatarImage from '@assets/avatar-michelle.jpg';
import articleImage from '@assets/drawers.jpg';
import Image from 'next/image';
import { useState } from 'react';
import IconShare from './components/IconShare';
import SharePopover from './components/SharePopover';
import { ShareSocialLinks } from './components/ShareSocialLinks';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShare = () => setIsOpen((open) => !open);

  return (
    <main className='mx-auto max-w-[327px] rounded-lg shadow-lg md:max-w-[608px] md:grid md:grid-cols-[229px_1fr] lg:max-w-[730px] lg:grid-cols-[285px_1fr]'>
      <div className='overflow-hidden rounded-t-lg md:h-full md:rounded-t-none md:rounded-l-lg'>
        <Image
          className='h-full w-auto object-cover'
          loading='eager'
          fetchPriority='high'
          src={articleImage}
          width={660}
          height={528}
          alt='Article Image'
        />
      </div>
      <div className='relative overflow-visible rounded-b-lg bg-white px-[18px] pt-8 pb-[30px] md:rounded-b-none md:rounded-r-lg md:py-10 md:pl-8 md:pr-9 lg:py-8 lg:px-10 lg:pl-10'>
        <div className='space-y-12 md:space-y-6'>
          <div className='space-y-6'>
            <h1 className='text-preset-1 text-grey-900'>
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className='text-preset-2-medium text-grey-500'>
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
              I’ve got some simple tips to help you make any room feel complete.
            </p>
          </div>
          <div className='flex items-center justify-between overflow-visible'>
            <div className='flex items-center gap-4'>
              <div className='size-10 overflow-hidden rounded-full'>
                <Image src={avatarImage} width={40} height={40} alt='Avatar' />
              </div>
              <div>
                <p className='text-preset-2-bold text-grey-900'>Michelle Appleton</p>
                <p className='text-preset-2-medium text-grey-400'>28 Jun 2020</p>
              </div>
            </div>
            <div className='relative shrink-0'>
              <button
                type='button'
                className={`flex size-8 cursor-pointer items-center justify-center rounded-full bg-grey-200 text-grey-500 ${isOpen ? 'bg-grey-500 text-white' : ''}`}
                onClick={toggleShare}
                aria-expanded={isOpen}
                aria-haspopup='dialog'
              >
                <IconShare className='h-auto w-[15px]' />
              </button>
              <SharePopover open={isOpen} />
            </div>
          </div>
        </div>
        <div
          className={`absolute left-0 w-full bottom-0 z-10 h-19 rounded-b-lg bg-grey-900 px-8 md:hidden ${isOpen ? 'flex items-center justify-between' : 'hidden'}`}
        >
          <div className='flex items-center gap-6'>
            <p className='text-preset-2-regular uppercase text-white'>Share</p>
            <ShareSocialLinks className='flex items-center gap-4' />
          </div>
          <button
            type='button'
            className='flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-grey-500 text-white'
            onClick={toggleShare}
          >
            <IconShare className='h-auto w-[15px]' />
          </button>
        </div>
      </div>
    </main>
  );
}
