"use client";
import { Inter } from "next/font/google";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import profile from "/public/profile.jpg";

const inter = Inter({ weight: "800", subsets: ["latin"] });

export default function Profile() {
	return (
		<Card
			className="mb-3 group/card w-[18rem] sm:w-[22rem] shadow-lg"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<CardHeader
				floated={false}
				className=" self-center w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] rounded-full bg-red-300"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				{/* <img
          // src='https://source.unsplash.com/288x288?sky'
          src='/public/profile.jpg'
          alt='profile-picture'
          className='rounded-full'
        /> */}

				<Image src={profile} alt="Profile" className="" />
			</CardHeader>
			<CardBody
				className="text-center"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<Typography
					variant="h4"
					color="blue-gray"
					className="mb-2"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Rendy DharmaPutra
				</Typography>
				<Typography
					color="blue"
					className="font-medium"
					textGradient
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Student - Programmer
				</Typography>
			</CardBody>
			{/* <CardFooter className='flex justify-center gap-7 pt-2'>
        <Tooltip content='Like'>
          <Typography
            as='a'
            href='#facebook'
            variant='lead'
            color='blue'
            textGradient
          >
            <i className='fab fa-facebook' />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography
            as='a'
            href='#twitter'
            variant='lead'
            color='light-blue'
            textGradient
          >
            <i className='fab fa-twitter' />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography
            as='a'
            href='#instagram'
            variant='lead'
            color='purple'
            textGradient
          >
            <i className='fab fa-instagram' />
          </Typography>
        </Tooltip>
      </CardFooter> */}
		</Card>
	);
}
