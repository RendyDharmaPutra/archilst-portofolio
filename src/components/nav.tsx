"use client";

import React from "react";
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
import { navlist, profilelist } from "@/utils/types/menu";

// profile menu component
function ProfileMenu(): React.JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	const profileMenuItems: profilelist[] = [
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
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto bg-gradient-to-l from-blue-500 via-light-blue-200 to-cyan-500 animate-bg"
				>
					<Avatar
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						variant="circular"
						size="sm"
						alt="Profile"
						className="border object-contain border-blue-500 p-0.5"
						src="https://ezoofkqgdygcddmpknsp.supabase.co/storage/v1/object/sign/archilst/profile/profile.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcmNoaWxzdC9wcm9maWxlL3Byb2ZpbGUuanBnIiwiaWF0IjoxNzE5MjkyMzQ5LCJleHAiOjE3NTA4MjgzNDl9.ELDyK_-2FiQ_5yW-pO0XkXRg9R9I_5XeDC8bvBwJ7AE&t=2024-06-25T05%3A12%3A24.390Z"
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}animate-bounce `}
					/>
				</Button>
			</MenuHandler>
			<MenuList
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				className="p-1"
			>
				{profileMenuItems.map(({ label, icon, route }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<Link href={route} target="_blank">
							<MenuItem
								placeholder={undefined}
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
								key={label}
								onClick={closeMenu}
								className={`flex items-center gap-2 rounded ${
									isLastItem
										? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
										: ""
								}`}
							>
								{React.createElement(icon, {
									className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
									strokeWidth: 2,
								})}

								<Typography
									placeholder={undefined}
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									as="span"
									variant="small"
									className="font-normal"
									color={isLastItem ? "red" : "inherit"}
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
			label: "Account",
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
					key={label}
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
						{React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
						{label}
					</MenuItem>
				</Typography>
			))}
		</ul>
	);
}

export default function Navigation(): React.JSX.Element {
	const [isNavOpen, setIsNavOpen] = React.useState(false);
	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavOpen(false),
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
			<MobileNav open={isNavOpen} className="overflow-scroll">
				<NavList />
			</MobileNav>
		</Navbar>
	);
}
