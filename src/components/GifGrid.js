import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import Loader from './Loader';

const GifGrid = ({ category }) => {
	// const [images, setImages] = useState([]);
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h2 className="animate__animated animate__flipInX">{category}</h2>
			{loading && (
				<Loader />
				// <p className=" animate__animated animate__flash animate__slow animate__infinite">
				// 	Loading
				// </p>
			)}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
