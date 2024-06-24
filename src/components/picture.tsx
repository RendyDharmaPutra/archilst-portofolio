'use client';
import React from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';

export default function Picture(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => window.innerWidth >= 960 && setOpen((cur) => !cur);

  return (
    <>
      <div
        className='mb-4 lg:mb-8 w-[20rem] max-h-[13rem] lg:w-[24rem] lg:max-h-[16rem] overflow-hidden hover:scale-110 hover:shadow-2xl cursor-pointer rounded-lg shadow-lg bg-blue-300 transition-all'
        onClick={handleOpen}
      >
        <img src={props.src} className=' bg-contain bg-center rounded-lg' />
      </div>
      <Dialog size='xl' open={open} handler={handleOpen} className=''>
        <DialogBody className='p-0 rounded-lg bg-transparent'>
          <img
            alt='nature'
            className='h-[32rem] 2xl:h-[36rem] w-full object-contain object-center rounded-lg'
            src={props.src}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
