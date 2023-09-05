"use client";

import { CustomFilterProps, OptionsProps } from '@/types';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const [selectedFilter, setSelectedFilter] = useState(options[0]);
	const router = useRouter();

	const handleUpdateParams = (e: OptionsProps) => {
		const newPathname = updateSearchParams(title, e.value.toLocaleLowerCase());

		router.push(newPathname, { scroll: false });
	}

	//I didn't need to write this function here but I think it looks cleaner
	const handleChange = (e: OptionsProps) => {
		setSelectedFilter(e);
		handleUpdateParams(e);
	}

	return (
		<div className="w-fit">

			<Listbox value={selectedFilter} onChange={handleChange}>
				<div className="relative w-fit z-10">

					<Listbox.Button className='custom-filter_btn '>
						<span className="block truncate">{selectedFilter.title}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<Image src="/chevron-up-down.svg" width={20} height={20} className="ml-4 object-contain" alt="icon" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="custom-filter_options">
							{options.map((filter) => (
								<Listbox.Option
									key={filter.title}
									value={filter}
									className={
										({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
								>
									{(selected) => (
										<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{filter.title}</span>
									)}

								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}

export default CustomFilter;