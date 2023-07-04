"use client";

import { CustomButtonProps } from "@/types";
//Elements that have some kind of user interactivity are called client components
//Remember that next js renders on the server
//Client Components enable you to add client-side interactivity to your application.

import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`${containerStyles} custom-btn`}
			onClick={handleClick || (() => { })}
		>
			<span className={`flex-1`}>
				{title}
			</span>
		</button >
	)
}

export default CustomButton