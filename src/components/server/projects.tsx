import { dbconnect } from "@/utils/db";

import ProjectCard from "@/components/projectCard";

export default async function Projects(): Promise<JSX.Element> {
	const { db, client } = await dbconnect();

	const data = await db.collection("projects").find().toArray();
	client.close();

	return (
		<div className="w-[22rem] md:w-[43rem] lg:w-[51rem] 2xl:min-w-[78rem] 2xl:w-full flex flex-wrap flex-row justify-center md:justify-between ">
			{data.map((project) => {
				return (
					<>
						<ProjectCard data={project} />
					</>
				);
			})}
		</div>
	);
}
