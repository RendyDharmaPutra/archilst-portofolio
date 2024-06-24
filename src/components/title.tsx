"use client";
import { Typography } from "@material-tailwind/react";

export default function Title({ title }: { title: string }) {
	return (
		<div className="mb-7 lg:mb-9 py-3 px-8 max-w-[14rem] font-extabold text-center rounded-xl bg-white shadow-lg">
			<Typography
				variant="h4"
				color="blue-gray"
				placeholder="Title"
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				{title}
			</Typography>
		</div>
	);
}
