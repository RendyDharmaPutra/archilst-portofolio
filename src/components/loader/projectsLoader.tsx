"use client";

import ProjectSkel from "@/components/loader/skeleton/projectSkel";

export default function ProjectsLoader(): JSX.Element {
	return (
		<div className="w-[22rem] md:w-[43rem] lg:w-[51rem] 2xl:min-w-[78rem] 2xl:w-full flex flex-wrap flex-row justify-center md:justify-between ">
			<ProjectSkel />
			<ProjectSkel />
			<ProjectSkel />
		</div>
	);
}
