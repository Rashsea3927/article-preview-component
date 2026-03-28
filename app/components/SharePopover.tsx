import { ShareSocialLinks } from './ShareSocialLinks';

type SharePopoverProps = {
  open: boolean;
};

export default function SharePopover({ open }: SharePopoverProps) {
  return (
    <div
      className={
        open
          ? 'absolute bottom-[calc(100%+14px)] left-1/2 z-20 hidden w-[248px] -translate-x-1/2 flex-col items-center md:flex'
          : 'hidden'
      }
      role='dialog'
      aria-label='Share article'
      aria-hidden={!open}
    >
      <div className='flex items-center gap-6 rounded-2xl bg-grey-900 px-8 py-[18px] shadow-lg'>
        <p className='text-preset-2-regular text-grey-400 uppercase tracking-[0.5em]'>Share</p>
        <ShareSocialLinks
          className='flex shrink-0 items-center gap-4'
          linkClassName='shrink-0 transition-opacity hover:opacity-80'
        />
      </div>
      <div className='size-0 border-x-11 border-t-11 border-x-transparent border-t-grey-900' aria-hidden />
    </div>
  );
}
