import { getData } from "@/utils/db";

import Picture from "@/components/picture";

export default async function Pictures(): Promise<JSX.Element> {
	const data = await getData("photograph");

	return (
		<div className="pt-4 px-4 w-[22rem] md:w-[43rem] lg:w-[54rem] 2xl:min-w-[78rem] 2xl:w-full lg:pt-8 lg:px-8 flex flex-wrap flex-row justify-center md:justify-between rounded-xl shadow-lg bg-white">
			{data.map(({ img }): React.JSX.Element => {
				return <Picture src={img} />;
			})}
		</div>
	);
}
