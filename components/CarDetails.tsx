"use client"
import { CarProps } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { generateCarImageUrl } from '@/utils';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" onClose={closeModal} className="relative z-50">
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100 '
					leaveTo='opacity-0'
				>
					<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className="car-details_dialog-panel">
								<button className='car-details_close-btn' onClick={closeModal}>
									<Image alt="close" src="/close.svg" width={20} height={20} className='object-contain' />
								</button>
								<div className='flex flex-1 flex-col gap-3'>
									<div className='car-details_main-image'>
										<Image src={generateCarImageUrl(car)} alt="hero" fill className="object-contain" />
									</div>
									<div className='flex gap-3'>
										<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
											<Image src={generateCarImageUrl(car, '29')} alt="hero" fill className="object-contain" />
										</div>
										<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
											<Image src={generateCarImageUrl(car, '33')} alt="hero" fill className="object-contain" />
										</div>
										<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
											<Image src={generateCarImageUrl(car, '13')} alt="hero" fill className="object-contain" />
										</div>
									</div>
								</div>
								<div className="flex-1 flex flex-col gap-2">
									<h2 className="font-semibold text-xl capitalize">
										{car.make} {car.model}
									</h2>
									<div className='mt-3 flex flex-wrap gap-4'>
										{Object.entries(car).map(([key, value], i) => (
											<div className='flex justify-between w-full gap-5 text-right' key={key}>
												<h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
												<p className='text-black-100 font-semibold'>{value}</p>
											</div>
										))}
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default CarDetails;
