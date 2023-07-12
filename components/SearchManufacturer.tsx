"use client";

import { SearchManufacturerProps } from '@/types'
import { Combobox } from '@headlessui/react'
import { useState } from 'react'


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
	const [query, setQuery] = useState('');

	return (
		<Combobox value={manufacturer} onChange={setManufacturer}>
			<Combobox.Input onChange={(event) => setQuery(event.target.value)} />
			<Combobox.Options>
				<Combobox.Option key={'test'} value={'teste'}>teste</Combobox.Option>
			</Combobox.Options>
		</Combobox >
	)
}

export default SearchManufacturer