import styled from "styled-components";

function Button({ text, bgColor, textColor, bgOpacity, visibility }) {
	return (
		<ButtonContainer
			bgColor={bgColor}
			textColor={textColor}
			bgOpacity={bgOpacity}
			visibility={visibility}
		>
			<a href="#/" className="button button-arrow">
				<p className="mr-1 select-none">{text}</p>

				<svg
					viewBox="0 0 6 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="arrow-icon"
				>
					<g className="arrow-head">
						<path
							d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</g>
					<g className="arrow-body">
						<path
							d="M3.5 4.5H0"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</g>
				</svg>
			</a>
		</ButtonContainer>
	);
}

export default Button;

const ButtonContainer = styled.div`
	/* display: none; */

	/* @media (min-width: 1280px) { */
	display: ${(props) => props.visibility};

	.button {
		font-family: poppins, sans-serif;
		border-radius: 20px;
		color: ${(props) => props.textColor};
		font-weight: light;
		font-size: 14px;
		padding: 8px 20px;
		text-decoration: none;
		transition: all 150ms ease-in-out;

		display: flex;

		/* background-color: #fcfcfc36; */
		background-color: ${(props) =>
			props.bgColor + props.bgOpacity["normal"]};

		&:hover {
			/* background-color: #fcfcfc52; */
			background-color: ${(props) =>
				props.bgColor + props.bgOpacity["hover"]};
		}

		&:not(:first-of-type) {
			margin-left: 15px;
		}

		&.bg-blue {
			color: #fff;

			&:hover {
				background-color: #0a2540;
			}
		}
	}

	.button-arrow {
		.arrow-icon {
			overflow: visible;
			margin-left: 3px;
			width: 8px;
		}

		.arrow-head {
			transform: translateX(0);
			transition: transform 150ms ease-in-out;
		}

		.arrow-body {
			opacity: 0;
			transform: scaleX(1);
			transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
		}

		&:hover {
			.arrow-head {
				transform: translateX(3px);
			}

			.arrow-body {
				opacity: 1;
				transform: scaleX(2);
			}
		}
	}
	/* } */
`;
