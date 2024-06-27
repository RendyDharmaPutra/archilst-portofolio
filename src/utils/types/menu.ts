import { IconType } from "@react-icons/all-files/lib";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface navlist {
	label: string;
	route: string;
	icon:
		| IconType
		| ForwardRefExoticComponent<
				Omit<SVGProps<SVGSVGElement>, "ref"> & {
					title?: string;
					titleId?: string;
				} & RefAttributes<SVGSVGElement>
		  >;
}
