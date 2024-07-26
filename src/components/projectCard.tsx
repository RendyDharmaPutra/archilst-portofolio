"use client";

import { createElement } from "react";
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
import { RiRemixiconFill } from "@react-icons/all-files/ri/RiRemixiconFill";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { DiSqllite } from "@react-icons/all-files/di/DiSqllite";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { BsFillQuestionCircleFill } from "@react-icons/all-files/bs/BsFillQuestionCircleFill";
import { IconType } from "@react-icons/all-files/lib";
import { IconBaseProps } from "@react-icons/all-files";
import { project } from "@/utils/types/data";

function Icon(lang: string): React.FunctionComponentElement<IconBaseProps> {
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

		case "Remix":
			icon = RiRemixiconFill;
			break;

		case "Flutter":
			icon = SiFlutter;
			break;

		case "MongoDB":
			icon = SiMongodb;
			break;

		case "PostgreSQl":
			icon = SiPostgresql;
			break;

		case "SQLite":
			icon = DiSqllite;
			break;

		case "Python":
			icon = SiPython;
			break;

		case "TypeScript":
			icon = SiTypescript;
			break;

		case "JavaScript":
			icon = SiJavascript;
			break;

		case "Dart":
			icon = SiDart;
			break;

		default:
			icon = BsFillQuestionCircleFill;
			break;
	}

	return createElement(icon, {
		className: `h-5 w-5`,
	});
}

export default function ProjectCard({
	img,
	title,
	desc,
	languages,
	link,
	github,
}: project): JSX.Element {
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
					src={img}
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
						{title}
					</Typography>
				</div>
				<Typography
					color="gray"
					className="max-h-[7rem] md:h-[7rem] "
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					{desc}
				</Typography>
				<div className="group mt-8 inline-flex flex-wrap items-center gap-3">
					{languages.map((lang: string) => {
						return (
							<Tooltip content={lang}>
								<span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
									{Icon(lang)}
								</span>
							</Tooltip>
						);
					})}
				</div>
			</CardBody>
			<CardFooter
				className="flex flex-col pt-3 gap-3"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<Link href={github} target="_blank">
					<Button
						variant="outlined"
						color="blue"
						size="lg"
						className="hover:bg-blue-700 hover:text-white"
						fullWidth={true}
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						View Code
					</Button>
				</Link>
				{link.length > 0 && (
					<Link href={link} target="_blank">
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
				)}
			</CardFooter>
		</Card>
	);
}
