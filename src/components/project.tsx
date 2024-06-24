'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from '@material-tailwind/react';

import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import Link from 'next/link';

export default function Project() {
  return (
    <Card className='mb-4 md:mb-8 lg:mb-11 w-full max-w-[20rem] lg:max-w-[24rem] shadow-lg'>
      <CardHeader floated={false} color='blue-gray'>
        <img
          src='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='ui/ux review check'
          className='max-h-[14rem] md:h-[12rem] lg:h-[14rem]'
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
      </CardHeader>
      <CardBody>
        <div className='mb-3 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray' className='font-medium'>
            Wooden House, Florida
          </Typography>
        </div>
        <Typography color='gray' className='max-h-[7rem] md:h-[7rem] '>
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>
        <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
          <Tooltip content={`React JS`}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <SiReact className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content='Tailwind CSS'>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <SiTailwindcss className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content='Next.js'>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <SiNextDotJs className='h-5 w-5' />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className='pt-3'>
        <Link href={'#'}>
          <Button size='lg' fullWidth={true}>
            Visit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
