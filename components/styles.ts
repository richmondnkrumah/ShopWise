import { StyleSheet } from "react-native";

const productCardGrid = StyleSheet.create({
	container: {
		width: 155,
	},
	ratings: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
	},
	pricerange: {
		flexDirection: "row",
		gap: 5,
	},
	discountprice: {
		textDecorationLine: "line-through",
		color: "gray",
	},
	subtitle: {
		color: "gray",
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	imagerange: {
		position: "relative",
	},
	imageoverlay: {
		position: "absolute",
		flexDirection: "row",
		top: 6,
		left: 6,
		gap: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	discountoverlay: {
		width: 42,
		height: 25,
		backgroundColor: "red",
		fontSize: 12,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	newtextoverlay: {
		width: 45,
		height: 30,
		backgroundColor: "black",
		color: "white",
		fontSize: 12,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	image: {
		width: "100%",
		height: 185,
		resizeMode: "cover",
		borderRadius: 10,
	},
	heart: {
		backgroundColor: "white",
		width: 34,
		height: 34,
		borderRadius: 17,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		bottom: -15,
		right: 3,
		zIndex: 100,
	},
});
const defaults = StyleSheet.create({});
const productCardCategory = StyleSheet.create({
	container: {
		width: "100%",
		height: 110,
		flexDirection: "row",
	},
	imagerange: {
		width: "50%",
		height: "100%",
	},
	textrange: {
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
});
const productCardBag = StyleSheet.create({
	container: {
		width: "100%",
		height: 140,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "white",
	},
	imagerange: {
		width: 105,
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	textrange: {
		flex: 1,
		position: "relative",
		padding: 10,
	},
	specsrange: {
		flexDirection: "row",
		paddingBottom: 15,
	},
	iconrange: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		flex: 1,
	},
	icon: {
		backgroundColor: "white",
		elevation: 3,
		width: 36,
		height: 36,
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	threedots: {
		position: "absolute",
		right: 5,
		top: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	price: {
		position: "absolute",
		right: 15,
		bottom: 10,
	},
});
const productCardList = StyleSheet.create({
	container: {
		width: 300,
		height: 105,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "white",
	},
	imagerange: {
		width: 105,
		height: "100%",
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	imageoverlay: {
		position: "absolute",
		flexDirection: "row",
		top: 6,
		left: 6,
		gap: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	discountoverlay: {
		width: 42,
		height: 25,
		backgroundColor: "red",
		fontSize: 12,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	newtextoverlay: {
		width: 45,
		height: 30,
		backgroundColor: "black",
		color: "white",
		fontSize: 12,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	heart: {
		backgroundColor: "white",
		width: 34,
		height: 34,
		borderRadius: 17,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		bottom: -15,
		right: 3,
		zIndex: 100,
		elevation: 3,
	},
	ratings: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
		paddingBottom: 5,
	},
	pricerange: {
		flexDirection: "row",
		gap: 5,
	},
	discountprice: {
		textDecorationLine: "line-through",
		color: "gray",
	},
	textrange: {
		flex: 1,
		position: "relative",
		padding: 10,
	},
	subtitle: {
		color: "gray",
		paddingBottom: 5,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
});
const productCardOrder = StyleSheet.create({
	container: {
		width: 300,
		height: 120,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "white",
	},
	imagerange: {
		width: 105,
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	textrange: {
		flex: 1,
		position: "relative",
		padding: 10,
	},
	specsrange: {
		flexDirection: "row",
	},
	iconrange: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		flex: 1,
	},
	icon: {
		backgroundColor: "white",
		elevation: 3,
		width: 36,
		height: 36,
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	cross: {
		position: "absolute",
		right: 5,
		top: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	unitpricerange: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	unitrange: {
		flexDirection: "row",
	},
	price: {},
	ratings: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
	},
	subtitle: {
		color: "gray",
	},
});
const productCardFavorites = StyleSheet.create({
	container: {
		width: 300,
		height: 120,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "white",
	},
	imagerange: {
		width: 105,
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	textrange: {
		flex: 1,
		position: "relative",
		padding: 10,
	},
	specsrange: {
		flexDirection: "row",
	},
	iconrange: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		flex: 1,
	},
	icon: {
		backgroundColor: "white",
		elevation: 3,
		width: 36,
		height: 36,
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	cross: {
		position: "absolute",
		right: 5,
		top: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	priceratingsrange: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	price: {},
	ratings: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
	},
	subtitle: {
		color: "gray",
	},
});

const shippingAddressCard = StyleSheet.create({
	container: {
		width: "100%",
		gap: 20,
		backgroundColor: "white",
		padding: 10,
		elevation: 2,
		borderRadius: 5,
	},
	titlerange: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	edit: {
		color: "red",
	},
	checkboxrange: {
		flexDirection: "row",
		gap: 10,
	},
	checkbox: {
		width: 20,
		height: 20,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		borderColor: "gray",
		borderWidth: 1,
	},
	addrange: {
		width: 40,
		height: 40,
		backgroundColor: "black",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	addressrange: {
		gap: 5,
	},
});
const paymentCard = StyleSheet.create({
	container: {
		width: "100%",
		height: "auto",
	},
	addrange: {
		width: 40,
		height: 40,
		backgroundColor: "black",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	checkboxrange: {
		flexDirection: "row",
		gap: 10,
		marginLeft: "5%",
	},
	checkbox: {
		width: 20,
		height: 20,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		borderColor: "gray",
		borderWidth: 1,
	},
	imagerange: {
		position: "relative",
	},
	image: {
		width: "100%",
		height: 300,
	},
	idrange: {
		flexDirection: "row",
		gap: 10,
		position: "absolute",
		top: "40%",
		left: "10%",
	},
	id: {
		fontSize: 25,
		color: "white",
	},
	userrange: {
		flexDirection: "row",
		gap: 40,
		position: "absolute",
		left: "10%",
		bottom: "22%",
	},
	user: {
		gap: 5,
	},
	usertext: {
		color: "white",
	},
});
const myOrdersCard = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: "white",
		width: "100%",
		gap: 15,
		borderRadius: 10,
		elevation: 2,
	},
	orderrange: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	trackingrange: {
		gap: 5,
	},
	boldtext: {
		fontWeight: "bold",
	},
	buttonrange: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	quantityrange: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		width: 100,
		padding: 10,
	},
	text: {
		color: "green",
	},
	graytext: {
		color: "gray",
	},
});

const promoCodeCard = StyleSheet.create({
	textrange: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
	discountrange: {
		justifyContent: "center",
		alignItems: "center",
		width: 100,
		height: "100%",
		flexDirection: "row",
       
	},
	container: {
		flexDirection: "row",
		height: 100,
		gap: 10,
		width: "100%",
        backgroundColor:'white'
        
	},
	titlerange: {
		justifyContent: "center",
	},
	buttonrange: {
		paddingTop: 15,
		paddingBottom: 20,
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		height: 40,
		width: 100,
		backgroundColor: "red",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	percentrange: {
		backgroundColor: "blue",
	},
	textgray: {
		color: "gray",
		fontSize: 12,
	},
	image: {
		width: "100%",
        height:'100%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        position:'absolute'
	},
});
export {
	defaults,
	productCardGrid,
	productCardCategory,
	productCardBag,
	productCardList,
	productCardOrder,
	productCardFavorites,
	shippingAddressCard,
	paymentCard,
	myOrdersCard,
	promoCodeCard,
};
