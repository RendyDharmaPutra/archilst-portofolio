"use client";
import React from "react";
import Link from "next/link";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Tooltip,
} from "@material-tailwind/react";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { BsFillQuestionCircleFill } from "@react-icons/all-files/bs/BsFillQuestionCircleFill";
import { IconType } from "@react-icons/all-files/lib";

function Icon(lang: string) {
	let icon: IconType;

	switch (lang) {
		case "React JS":
			icon = SiReact;
			break;

		case "Tailwind CSS":
			icon = SiTailwindcss;
			break;

		case "Next.js":
			icon = SiNextDotJs;
			break;

		case "Mongodb":
			icon = SiMongodb;
			break;

		default:
			icon = BsFillQuestionCircleFill;
			break;
	}

	return React.createElement(icon, {
		className: `h-5 w-5`,
	});
}

export default function ProjectCard({ data }) {
	return (
		<Card
			className="mb-4 md:mb-8 lg:mb-11 w-full max-w-[20rem] lg:max-w-[24rem] shadow-lg"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<CardHeader
				floated={false}
				color="blue-gray"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<img
					src={data.img}
					alt="ui/ux review check"
					className="max-h-[14rem] md:h-[12rem] lg:h-[14rem]"
				/>
				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
			</CardHeader>
			<CardBody
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<div className="mb-3 flex items-center justify-between">
					<Typography
						variant="h5"
						color="blue-gray"
						className="font-bold"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{data.title}
					</Typography>
				</div>
				<Typography
					color="gray"
					className="max-h-[7rem] md:h-[7rem] "
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					{data.desc}
				</Typography>
				<div className="group mt-8 inline-flex flex-wrap items-center gap-3">
					{data.languages.map((lang: string) => {
						return (
							<Tooltip content={lang}>
								<span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
									{/* <SiReact className='h-5 w-5' /> */}
									{Icon(lang)}
								</span>
							</Tooltip>
						);
					})}
				</div>
			</CardBody>
			<CardFooter
				className="pt-3"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<Link href={data.link} target="_blank">
					<Button
						color="blue"
						size="lg"
						fullWidth={true}
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Visit
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
