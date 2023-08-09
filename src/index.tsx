import {Text, type TextProps, type TextStyle} from "react-native";

export interface LabelProps extends Omit<TextProps, "children"> {
	title?: string;
	type?: string; //todo replace with literals
	bold?: boolean;
}

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
} as Record<string, TextStyle>;

export const Label = ({title, type, style, ...props}: LabelProps) => (
	<Text
		{...props}
		style={[
			{
				color: "black" //todo use color module (textLabel)
			},
			types[type || "body"],
			style
		]}
	>
		{title}
	</Text>
);
