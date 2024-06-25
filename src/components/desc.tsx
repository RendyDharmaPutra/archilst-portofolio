"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Desc(): JSX.Element {
	return (
		<Card
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
			className="mb-4 max-w-[22rem] md:max-w-[36rem] overflow-hidden shadow-lg"
		>
			<CardBody
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<Typography
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					variant="lead"
					color="gray"
					className="font-normal"
				>
					I am a Programmer from Jember, Indonesia, interested in technology,
					photography, and society. I believe in using technology to foster
					positive change and improve the lives of those around me.
				</Typography>
			</CardBody>
		</Card>
	);
}
