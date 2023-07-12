"use client";

import { SearchManufacturer } from './';
import { useState } from 'react';

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('');

	const handleSearch = () => {
	}

	return (
		<form action="" className="searchbar" onSubmit={handleSearch}>
			<div className='searchbar_item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
			<div className='searchbar_item'>
			</div>
		</form>
	)
}

export default SearchBar