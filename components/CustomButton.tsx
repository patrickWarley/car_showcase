"use client";

import { CustomButtonProps } from "@/types";
//Elements that have some kind of user interactivity are called client components
//Remember that next js renders on the server
//Client Components enable you to add client-side interactivity to your application.

import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyle, rightIcon, leftIcon }: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`${containerStyles} ${textStyle} custom-btn`}
			onClick={handleClick || (() => { })}
		>
			{ /**Here flex-1 makes the icon go to the right because
			 * it make the span tag ocuppy all the space that remains
			 * remember 
			 * flex-1 => flex-grow:1, flex-shrink:1, the element will grow and shrink depending on the changes of the browser
			 */}
			<span className={`flex-1 `}>
				{title}
			</span>

			{rightIcon && (
				<div className="relative w-6 h-6 ">
					<Image src={rightIcon} alt="right icon" fill className="object-contain" />
				</div>
			)}
		</button >
	)
}

export default CustomButton