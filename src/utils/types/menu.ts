import { IconType } from "@react-icons/all-files/lib";

export interface profilelist {
	label: string;
	icon: IconType;
	route: string;
}

export interface navlist {
	label: string;
	route: string;
	icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
			title?: string;
			titleId?: string;
		} & React.RefAttributes<SVGSVGElement>
	>;
}
