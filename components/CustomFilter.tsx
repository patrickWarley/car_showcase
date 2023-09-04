"use client";

import { CustomFilterProps } from '@/types';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const [selectedFilter, setSelectedFilter] = useState(options[0].title);

	return (
		<Listbox value={selectedFilter} onChange={setSelectedFilter}>
			<div className="relative mt-1">

				<Listbox.Button className='custom-filter_btn '>
					<span className="block truncate">{selectedFilter}</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
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
								value={filter.value}
							>
								{filter.title}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}

export default CustomFilter;