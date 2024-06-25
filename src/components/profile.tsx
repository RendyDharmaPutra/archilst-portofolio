"use client";

import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import profile from "/public/profile.jpg";

export default function Profile(): JSX.Element {
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
		</Card>
	);
}
