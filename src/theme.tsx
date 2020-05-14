import React from 'react';
import { Text, TextInput } from 'react-native';

// inject default font family to `Text` and `TextInput` components
export const setDefaultFontFamily = () => {
	[Text, TextInput].forEach((component) => {
		const oldRender = component.render;
		component.render = function (...args) {
			const origin = oldRender.call(this, ...args);
			return React.cloneElement(origin, {
				style: [
					// { fontFamily: 'Questrial', letterSpacing: 0.1 },
					origin.props.style,
				],
			});
		};
	});
};

// TODO: Support multi-themes
// 1. Using `createContext` to create ThemeContext
// 2. Next ThemeContext.Prover in `App` component, and set a value `theme.dark | theme.light`
// 3. `useContext(ThemeContext)` to get theme in any components
// 4. Dynamic change theme in the root component (useState(theme));

// siple theme
const theme = {
	color: {
		white: '#fff',
		blue: '#547cfe',
		green: '#37de98',
		gray: '#fbfbfd',
		darkGray: '#d2d2d4',
	},
	size: {
	}
}

export default theme;
