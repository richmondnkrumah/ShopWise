import { View, Text, ImageSourcePropType, Image } from "react-native";
import React from "react";
import { AntDesign, Fontisto,Entypo } from "@expo/vector-icons";

type productProps = {
	imageUrl: ImageSourcePropType;
	discountRate?: number;
	isNew?: boolean;
	ratings: number;
	subTitle: string;
	title: string;
	actualPrice: number;
	color: string;
	size: string;
};
const ProductCardFavorites = (props: productProps) => {
	return (
		<View>
			<View>
				<View>
					<Image source={props.imageUrl} />
					{props?.isNew && <Text>NEW</Text>}
					{props?.discountRate && <Text>{props.discountRate}</Text>}
				</View>
			</View>
			<View>
				<Text>{props.subTitle}</Text>
				<Text>{props.title}</Text>
				<View>
					<Text>Color:{props.color}</Text>
					<Text>Size:{props.size}</Text>
				</View>
				<View>
					<View>
						{props?.discountRate && (
							<Text>
								{props.discountRate * props.actualPrice}$
							</Text>
						)}
						<Text>{props.actualPrice}$</Text>
					</View>
					{props.ratings === 0
						? new Array(Math.ceil(props.ratings) + 1).map(
								(curr, idx) => {
									return (
										<AntDesign
											name="star"
											size={24}
											color="yellow"
										/>
									);
								}
						  )
						: new Array(Math.ceil(props.ratings) + 1).map(
								(curr, idx) => {
									return (
										<AntDesign
											name="staro"
											size={24}
											color="yellow"
										/>
									);
								}
						  )}
					<Text>({props.ratings})</Text>
				</View>
				<View>
					<Fontisto name="shopping-bag" size={24} color="black" />
				</View>
                <View>
                <Entypo name="cross" size={24} color="black" />
                </View>
			</View>
		</View>
	);
};

export default ProductCardFavorites;
