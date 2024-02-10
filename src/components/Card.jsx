import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

import { ReactComponent as Star } from "../assets/imgs/star.svg";

import { ButtonPrice } from "./ButtonPrice";

const CardBody = styled.div`
	min-width: 320px;
	height: 468px;
	padding: 16px;
	border: 1px solid var(--colors-white);

	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0;
`;

const CardDiscount = styled.div`
	height: 24px;
	padding: 2px 4px 2px 4px;

	background-color: var(--colors-white);
	border-radius: var(--radii);
	border: 0;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	color: var(--colors-graydark);

	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: var(--lh-s);
	letter-spacing: var(--ls-s);

	& span:first-child {
		color: var(--colors-bluelight);
	}
`;

const SwiperWrapper = styled.div`
	width: 288px;
	height: 288px;

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide img {
		display: block;
		object-fit: cover;
		object-position: center;
	}

	.swiper-pagination-bullet {
		background: var(--colors-white);
		opacity: 1;
	}

	.swiper-pagination-bullet-active {
		background: var(--colors-graymain);
		opacity: 1;
	}
`;

const CardInfo = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 8px;
`;

const CardRating = styled.div`
	height: 24px;
	padding: 2px 4px 2px 4px;

	background-color: var(--colors-white);
	border-radius: var(--radii);
	border: 0;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	color: var(--colors-graydark);

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-bluelight);
	}

	span {
		font-weight: var(--fw-s);
		font-size: var(--fs-s);
		line-height: var(--lh-s);
		letter-spacing: var(--ls-s);
	}
`;

const CardTitle = styled.div`
	height: 16px;
	color: var(--colors-graydark);

	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: var(--lh-s);
	letter-spacing: var(--ls-s);
`;

const CardDescription = styled.div`
	color: var(--colors-graymain);

	font-weight: var(--fw-xs);
	font-size: var(--fs-xs);
	line-height: var(--lh-xs);
	letter-spacing: var(--ls-xs);
`;

const CardPrice = styled.div`
	height: 24px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;

	color: var(--colors-graymain);

	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: var(--lh-s);
	letter-spacing: var(--ls-s);
`;

export const Card = ({
	title,
	brand,
	category,
	description,
	discountPercentage,
	price,
	rating,
	images,
}) => {
	const [read, setRead] = useState(false);
	let prevPrice = Math.ceil((price * Number("1" + discountPercentage)) / 100);

	return (
		<CardBody>
			<CardDiscount>
				<span>{discountPercentage}%</span>
				<span>off sale</span>
			</CardDiscount>
			<SwiperWrapper>
				<Swiper
					slidesPerView={1}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{images.map((el) => {
						return (
							<SwiperSlide>
								<img
									src={el}
									alt={title}
									width="288"
									height="288"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</SwiperWrapper>
			<CardInfo>
				<CardRating>
					<Star />
					<span>{rating}</span>
				</CardRating>
				<CardTitle>
					{brand}&nbsp;{title}
				</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardPrice>
					<ButtonPrice price={price} />
					<span style={{ textDecoration: "line-through" }}>
						${prevPrice}
					</span>
				</CardPrice>
			</CardInfo>
		</CardBody>
	);
};
