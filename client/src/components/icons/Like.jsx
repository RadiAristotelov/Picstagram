const Like = ({ iconColorProp, fillColorProp }) => {
	const iconColor = iconColorProp || "#4B4B4B";
	const fillColor = fillColorProp || "none";

	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill={fillColor}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				id="style=linear"
			>
				<g
					id="like"
				>
					<path
						id="vector"
						d="M7.66003 10.1022L11.76 4.00221C12.16 3.40221 13.16 3.00221 13.96 3.30221C14.86 3.60221 15.46 4.60221 15.26 5.50221L14.76 8.70221C14.66 9.40221 15.16 9.90221 15.76 9.90221H19.76C21.26 9.90221 22.1801 11.0522 21.66 12.5022C21.14 13.9522 20.6801 16.5522 19.26 18.8022C18.6102 19.8318 17.8975 20.5522 16.6801 20.5522C12.6801 20.5522 6.66003 20.5522 6.66003 20.5522"
						stroke={iconColor}
						strokeWidth="1.5"
						strokeMiterlimit="10"
					/>

					<path
						id="rec"
						d="M2.18005 10.5522C2.18005 9.99996 2.62777 9.55225 3.18005 9.55225H6.68005C7.23234 9.55225 7.68005 9.99996 7.68005 10.5522V20.5522H3.18005C2.62777 20.5522 2.18005 20.1045 2.18005 19.5522V10.5522Z"
						stroke={iconColor}
						strokeWidth="1.5"
					/>
				</g>
			</g>
		</svg>
	)
}

export default Like;
