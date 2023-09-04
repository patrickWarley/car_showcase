"use client";

import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';
import { CheckIcon } from "@heroicons/react/20/solid";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
	const [query, setQuery] = useState('');

	const filteredManufacturers = query === '' ?
		manufacturers : manufacturers.filter(
			item => item.toLowerCase()
				.replace(/\s+/g, "")
				.includes(query.toLowerCase().replace(/\s+/g, "")
				));

	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="w-full relative">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							src="/car-logo.svg"
							width={20}
							height={20}
							alt="Car logo"
							className='ml-4' />
					</Combobox.Button>
					<Combobox.Input
						className="search-manufacturer_input"
						placeholder='Volkswagen'
						name='make'
						id='make'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}>
						<Combobox.Options className="search-manufacturer_options">
							{filteredManufacturers.length === 0 && query !== '' ? (
								<Combobox.Option
									className="search-manufacturer_option"
									value={query}>
									Create "{query}"
								</Combobox.Option>)
								: (
									filteredManufacturers.map(manufacturer => (
										<Combobox.Option
											className={({ active }) => `
											relative search-manufacturer_option
											${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
										`}
											key={manufacturer}
											value={manufacturer}>
											{({ selected, active }) =>
											(
												<>
													<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
														{manufacturer}
													</span>
													{selected ? (
														<span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
															<CheckIcon className="h-5 w-5" aria-hidden="true" />
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
									)))
							}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox >
		</div >
	);
}

export default SearchManufacturer