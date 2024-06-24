"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Desc() {
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
					{/* Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others. */}
					I am a Programmer from Jember, Indonesia. Have interest with
					technology, photograph, and people
				</Typography>
			</CardBody>
		</Card>
	);
}
