'use strict';
const foregroundColorColor	= '#f3f4ef';
const backgroundColor		= '#22242d';
const red 					= '#ff1654';
const green 				= '#06d6a0';
const yellow 				= '#ffe66d';
const blue 					= '#00abe7';
const magenta 				= '#ff60b5';
const cyan 					= '#7bdff2';
const white 				= '#f9f9f9';

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColorColor,
		borderColor: '#211f30',
		cursorColor: '#b4b4ba',
		cursorAccentColor: backgroundColor,
		selectionColor: 'rgba(78, 205, 196, 0.4)',
		colors: {
			black: backgroundColor,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			white,
			lightBlack: '#7a7a7a',
			lightRed: red,
			lightGreen: green,
			lightYellow: yellow,
			lightBlue: blue,
			lightMagenta: magenta,
			lightCyan: cyan,
			lightWhite: foregroundColorColor
		},
		css: `
			/* Custom CSS */
			${config.css}
		`
	});
};