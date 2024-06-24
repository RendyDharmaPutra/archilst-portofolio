// import supabase from '@/utils/supabase';
import { dbconnect } from "@/utils/db";

// export const revalidate = 30;

import Project from "@/components/project";
import ProjectCard from "@/components/projectCard";
import ProjectSkel from "@/components/loader/skeleton/projectSkel";

export default async function Projects() {
	// const { data } = await supabase.from('projects').select();
	const { db, client } = await dbconnect();

	const data = await db.collection("projects").find().toArray();
	client.close();

	return (
		<div className="w-[22rem] md:w-[43rem] lg:w-[51rem] 2xl:min-w-[78rem] 2xl:w-full flex flex-wrap flex-row justify-center md:justify-between ">
			{/* <Project />
      <Project />
      <Project />
      <Project />
          <Project /> */}
			{data.map((project) => {
				return (
					// <ProjectCard data={project} />
					<>
						<ProjectCard data={project} />
						{/* <Project />
            <ProjectSkel /> */}
					</>
				);
				// return <h1>{project.title}</h1>;
			})}
			{/* {JSON.stringify(data)} */}
		</div>
	);
}
