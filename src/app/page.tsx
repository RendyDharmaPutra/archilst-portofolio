import { Suspense } from "react";

import Profile from "@/components/profile";
import Desc from "@/components/desc";
import Title from "@/components/title";
import Projects from "@/components/wrapper/projects";
import Pictures from "@/components/wrapper/pictures";
import ProjectsLoader from "@/components/loader/projectsLoader";
import PicturesLoader from "@/components/loader/picturesLoader";

export default function Page(): JSX.Element {
	return (
		<div className={`flex flex-col flex-wrap items-center`}>
			<section
				id="profile"
				className="mb-28 pt-8 w-full flex flex-col items-center "
			>
				<Profile />
				<Desc />
			</section>
			<section
				id="projects"
				className="mb-16 pt-16 px-4 pb-0 lg:px-9 lg:pb-0 w-full flex flex-col flex-wrap items-center justify-center "
			>
				<Title title="Projects" />
				<Suspense fallback={<ProjectsLoader />}>
					<Projects />
				</Suspense>
			</section>

			<section
				id="photography"
				className="mb-7 pt-16 px-4 pb-0 lg:px-9 lg:pb-0 w-full flex flex-col flex-wrap items-center justify-center "
			>
				<Title title="Photography" />
				<Suspense fallback={<PicturesLoader />}>
					<Pictures />
				</Suspense>
			</section>
		</div>
	);
}
