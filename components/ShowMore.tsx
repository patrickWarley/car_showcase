"use client";
import CustomButton from "./CustomButton"
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

/**
 *I did:
		const searchParams = new URLSearchParams(window.location.search);
		const currLimit = searchParams.get('limit');
		let newLimit;
		if (currLimit === null) newLimit = 20;
		else { newLimit = Math.min(parseInt(currLimit) + 10, 30);
		
		his way seems cleaner
 */


const ShowMore = ({ pageNumber, isNext }: { pageNumber: number, isNext: boolean }) => {
	const router = useRouter();

	const handleNavigation = () => {

		//when the limit is bigger than the number of cars isNext is false
		if (isNext) return;
		const newPathname = updateSearchParams("limit", ((pageNumber + 1) * 10).toString());

		router.push(newPathname, { scroll: false });
	}
	return (
		<>
			{
				(!isNext === true) && (
					<CustomButton
						containerStyles="py-[16px] rounded-full bg-primary-blue px-4 "
						textStyle="text-white text-[14px] leading-[17px] font-bold"
						title="Show More"
						handleClick={handleNavigation}
					/>
				)

			}
		</>
	)
}

export default ShowMore