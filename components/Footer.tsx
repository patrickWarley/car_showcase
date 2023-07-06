import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
	return (
		<footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16
			px-6 py-10">
				<div className=" flex flex-col justify-start items-start gap-6">
					<Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
					<p className="text-base text-gray-700">
						CarHub 2023<br />
						All right reserved &copy;
					</p>
				</div>
				<div className="footer_links">
					{
						footerLinks.map(section => (
							<div key={section.title} className="footer_link">
								<h3 className="font-bold">{section.title}</h3>
								{section.links.map(link =>
									<Link
										key={link.title}
										className="text-gray-500"
										href={link.url}
									>
										{link.title}
									</Link>)}
							</div>
						))}
				</div>
			</div>
			<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
				<p>@2023 CarHub. All rights reserved.</p>

				<div className="footer_copyrights-link">
					<Link href="/" className="text-gray-500">
						Privacy policy
					</Link>
					<Link href="/" className="text-gray-500">
						Terms of use
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer