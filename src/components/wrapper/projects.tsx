import { getData } from "@/utils/db";

import ProjectCard from "@/components/projectCard";

export default async function Projects(): Promise<JSX.Element> {
	const data = await getData("projects");

	return (
		<div className="w-[22rem] md:w-[43rem] lg:w-[51rem] 2xl:min-w-[78rem] 2xl:w-full flex flex-wrap flex-row justify-center md:justify-between ">
			{data.map((project) => {
				return (
					<ProjectCard
						img={project.img}
						title={project.title}
						desc={project.desc}
						languages={project.languages}
						link={project.link}
						github={project.github}
					/>
				);
			})}
		</div>
	);
}
