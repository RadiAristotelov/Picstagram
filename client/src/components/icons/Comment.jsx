const Comment = ({ iconColorProp }) => {
	const iconColor = iconColorProp || "#4B4B4B";
	
	return (
		<svg
			fill={iconColor}
			width="800px"
			height="800px"
			viewBox="0 0 32 32"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>comment-ellipsis</title>

			<path
				d="M16.5 2.353c-7.857 0-14.25 5.438-14.25 12.124 0.044 2.834 1.15 5.402 2.938 7.33l-0.006-0.007c-0.597 2.605-1.907 4.844-3.712 6.569l-0.005 0.005c-0.132 0.135-0.214 0.32-0.214 0.525 0 0.414 0.336 0.75 0.75 0.751h0c0.054-0 0.107-0.006 0.158-0.017l-0.005 0.001c3.47-0.559 6.546-1.94 9.119-3.936l-0.045 0.034c1.569 0.552 3.378 0.871 5.262 0.871 0.004 0 0.009 0 0.013 0h-0.001c7.857 0 14.25-5.439 14.25-12.125s-6.393-12.124-14.25-12.124zM16.5 25.102c-0.016 0-0.035 0-0.054 0-1.832 0-3.586-0.332-5.205-0.94l0.102 0.034c-0.058-0.018-0.126-0.029-0.195-0.030h-0.001c-0.020-0.002-0.036-0.009-0.056-0.009 0 0-0 0-0 0-0.185 0-0.354 0.068-0.485 0.18l0.001-0.001c-0.010 0.008-0.024 0.004-0.034 0.013-1.797 1.519-3.97 2.653-6.357 3.243l-0.108 0.023c1.29-1.633 2.215-3.613 2.619-5.777l0.013-0.083c0-0.006 0-0.014 0-0.021 0-0.021-0.001-0.043-0.003-0.064l0 0.003c0-0.005 0-0.010 0-0.015 0-0.019-0.001-0.037-0.002-0.055l0 0.002c-0.004-0.181-0.073-0.345-0.184-0.47l0.001 0.001-0.011-0.027c-1.704-1.697-2.767-4.038-2.791-6.626l-0-0.005c0-5.858 5.72-10.624 12.75-10.624s12.75 4.766 12.75 10.624c0 5.859-5.719 10.625-12.75 10.625zM17.019 12.143c-1.444 0-2.615 1.171-2.615 2.616s1.171 2.616 2.616 2.616 2.616-1.171 2.616-2.616c0-0 0-0 0-0.001v0c-0.002-1.444-1.172-2.614-2.616-2.615h-0zM17.019 15.874c-0.616-0-1.115-0.5-1.115-1.116s0.5-1.116 1.116-1.116c0.616 0 1.115 0.499 1.116 1.115v0c-0.001 0.616-0.5 1.115-1.116 1.116h-0zM10.176 12.143c-1.444 0-2.615 1.171-2.615 2.616s1.171 2.616 2.616 2.616 2.616-1.171 2.616-2.616c0-0 0-0 0-0.001v0c-0.002-1.444-1.172-2.614-2.616-2.615h-0zM10.176 15.874c-0.616-0-1.115-0.5-1.115-1.116s0.5-1.116 1.116-1.116c0.616 0 1.115 0.499 1.116 1.115v0c-0.001 0.616-0.5 1.115-1.116 1.116h-0zM23.861 12.143c-0 0-0 0-0 0-1.445 0-2.616 1.171-2.616 2.616s1.171 2.616 2.616 2.616c1.445 0 2.616-1.171 2.616-2.616 0-0 0-0 0-0.001v0c-0.002-1.444-1.172-2.613-2.615-2.615h-0zM23.861 15.874c-0 0-0 0-0 0-0.616 0-1.116-0.5-1.116-1.116s0.5-1.116 1.116-1.116c0.616 0 1.115 0.499 1.116 1.115v0c-0.001 0.616-0.5 1.114-1.115 1.116h-0z"
			>

			</path>
		</svg>
	)
}

export default Comment;