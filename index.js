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
			@keyframes bottomactivity {
				from,
				to {
					border-bottom: 1px solid transparent;
				}
				50% {
					border-bottom: 1px solid #FFFA72;
					color: #FFFA72;
				}
			}

			.tab_hasActivity {
					animation: bottomactivity 2s linear infinite;
			}
			.tabs_nav {
				height: 40px!important;
			}
			.tabs_list {
				max-height: 40px;
			}
			.tab_text {
				height: 40px!important;
			}
			.tab_process {
				margin-top: 3px;
			}
			.tab_icon {
				top: 12px!important;
			}
			.terms_termsShifted {
				margin-top: 74px;
			}
			.tab_tab.tab_hasActivity .tab_text {
				animation: pulse-hyper 2s linear infinite!important;
			}

			/* Custom CSS */
			${config.css}
		`
	});
};
