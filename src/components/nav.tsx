"use client";

import { createElement, useEffect, useState } from "react";
import Link from "next/link";

import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	IconButton,
} from "@material-tailwind/react";
import {
	CubeTransparentIcon,
	UserCircleIcon,
	ChevronDownIcon,
	Bars2Icon,
	CameraIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { navlist } from "@/utils/types/menu";

// profile menu component
function ProfileMenu(): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const closeMenu = (): void => setIsMenuOpen(false);

	const profileMenuItems: navlist[] = [
		{
			label: "Resume",
			icon: UserCircleIcon,
			route:
				"https://drive.google.com/file/d/1BqQff48AWrER5WvdFgas0X_RvKVBKJEf/view?usp=sharing",
		},
		{
			label: "Email",
			icon: HiOutlineMail,
			route: "mailto:rendydharmaputra424@gmail.com",
		},
		{
			label: "Github",
			icon: AiOutlineGithub,
			route: "https://github.com/RendyDharmaPutra",
		},
		{
			label: "Instagram",
			icon: AiOutlineInstagram,
			route: "https://www.instagram.com/arclst24/",
		},
	];

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto bg-blue-50"
				>
					<Avatar
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						variant="circular"
						size="sm"
						alt="Profile"
						className="border object-contain border-blue-500"
						src="https://ezoofkqgdygcddmpknsp.supabase.co/storage/v1/object/sign/archilst/profile/profile.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcmNoaWxzdC9wcm9maWxlL3Byb2ZpbGUuanBnIiwiaWF0IjoxNzE5MjkyMzQ5LCJleHAiOjE3NTA4MjgzNDl9.ELDyK_-2FiQ_5yW-pO0XkXRg9R9I_5XeDC8bvBwJ7AE&t=2024-06-25T05%3A12%3A24.390Z"
					/>
					<ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 `} />
				</Button>
			</MenuHandler>
			<MenuList
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				className="p-1"
			>
				{profileMenuItems.map(({ label, icon, route }, key) => {
					return (
						<Link href={route} target="_blank" key={key}>
							<MenuItem
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
								key={label}
								onClick={closeMenu}
								className={`flex items-center gap-2 rounded`}
							>
								{createElement(icon, {
									className: `h-4 w-4 }`,
									strokeWidth: 2,
								})}

								<Typography
									placeholder={undefined}
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									as="span"
									variant="small"
									className="font-normal"
								>
									{label}
								</Typography>
							</MenuItem>
						</Link>
					);
				})}
			</MenuList>
		</Menu>
	);
}

// nav list component
function NavList(): React.JSX.Element {
	const navListItems: navlist[] = [
		{
			label: "Profile",
			route: "#",
			icon: UserCircleIcon,
		},
		{
			label: "Projects",
			route: "#projects",
			icon: CubeTransparentIcon,
		},
		{
			label: "Photography",
			route: "#photography",
			icon: CameraIcon,
		},
	];

	return (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center">
			{navListItems.map(({ label, route, icon }, key) => (
				<Typography
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					key={key}
					as="a"
					href={route}
					variant="small"
					color="blue-gray"
					className="font-normal"
				>
					<MenuItem
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className="flex items-center gap-2 lg:rounded-full"
					>
						{createElement(icon, { className: "h-[18px] w-[18px]" })} {label}
					</MenuItem>
				</Typography>
			))}
		</ul>
	);
}

export default function Navigation(): React.JSX.Element {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const toggleIsNavOpen = (): void => setIsNavOpen((cur) => !cur);

	useEffect((): void => {
		window.addEventListener<"resize">(
			"resize",
			(): false | void => window.innerWidth >= 960 && setIsNavOpen(false),
		);
	}, []);

	return (
		<Navbar
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
			className={` sticky inset-0 z-10 h-max mx-auto max-w-full rounded-none p-2 lg:pl-6`}
		>
			<div className="relative mx-auto flex items-center text-blue-gray-900">
				<Typography
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					as="a"
					href="#"
					className="mr-4 ml-2 cursor-pointer py-1.5 text-xl font-bold"
				>
					Archilst
				</Typography>
				<div className="absolute top-2/4 left-3/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
					<NavList />
				</div>
				<IconButton
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					size="sm"
					color="blue-gray"
					variant="text"
					onClick={toggleIsNavOpen}
					className="ml-auto mr-2 lg:hidden"
				>
					<Bars2Icon className="h-6 w-6" />
				</IconButton>
				<ProfileMenu />
			</div>
			<MobileNav open={isNavOpen} className="">
				<NavList />
			</MobileNav>
		</Navbar>
	);
}
