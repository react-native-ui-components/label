import {FunctionComponent} from "react";
import {TextProps} from "react-native";

export interface LabelProps extends TextProps {
	type?: string; //todo replace with literals
	bold?: boolean;
}

export declare const Label: FunctionComponent<LabelProps>;
