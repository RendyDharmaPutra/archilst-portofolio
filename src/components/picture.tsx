"use client";

import { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function Picture({ src }: { src: string }): JSX.Element {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = (): false | void =>
		window.innerWidth >= 960 && setOpen((cur) => !cur);

	return (
		<>
			<div
				className="mb-4 lg:mb-8 w-[20rem] max-h-[13rem] lg:w-[24rem] lg:max-h-[16rem] overflow-hidden hover:scale-110 hover:shadow-2xl cursor-pointer rounded-lg shadow-lg bg-blue-300 transition-all"
				onClick={handleOpen}
			>
				<img src={src} className=" bg-contain bg-center rounded-lg" />
			</div>
			<Dialog
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				size="xl"
				open={open}
				handler={handleOpen}
			>
				<DialogBody
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					className="p-0 rounded-lg bg-transparent"
				>
					<img
						alt="MyPhotography"
						className="h-[32rem] 2xl:h-[36rem] w-full object-contain object-center rounded-lg"
						src={src}
					/>
				</DialogBody>
			</Dialog>
		</>
	);
}
