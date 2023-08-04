import {Text} from "react-native";
import {} from "@react-native-ui-components/color";

//todo might end up using native components

const types = {
	body: {
		fontSize: 17,
		lineHeight: 22
	},
	callout: {
		fontSize: 16,
		lineHeight: 21
	},
	caption1: {
		fontSize: 12,
		lineHeight: 16
	},
	caption2: {
		fontSize: 11,
		lineHeight: 13
	},
	footnote: {
		fontSize: 13,
		lineHeight: 18
	},
	headline: {
		fontSize: 17,
		lineHeight: 22
	},
	largeTitle: {
		fontSize: 34,
		lineHeight: 41
	},
	subheadline: {
		fontSize: 15,
		lineHeight: 20
	},
	title1: {
		fontSize: 28,
		lineHeight: 34
	},
	title2: {
		fontSize: 22,
		lineHeight: 28
	},
	title3: {
		fontSize: 20,
		lineHeight: 25
	}
};

export const Label = props => (
	<Text
		{...props}
		style={[
			{
				color: "black" //todo use color module (textLabel)
			},
			types[props.type || "body"],
			props.style
		]}
	>
		{props.children}
	</Text>
);
