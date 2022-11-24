import React from "react";
import { NavLink } from "react-router-dom";

const ProductImageCard = ({ id, imageSrc, altText, productDetailsPage }) => {
	if (productDetailsPage) {
		return (
			<>
				<img className="h-80 rounded-lg m-0 w-fit" src={imageSrc} alt={altText} />
			</>
		);
	}

	return (
		<NavLink to={`${id}`} className="h-80 rounded-lg m-10 object-cover">
			<img className="h-80 rounded-lg" src={imageSrc} alt={altText} />
		</NavLink>
	);
};

export default ProductImageCard;
