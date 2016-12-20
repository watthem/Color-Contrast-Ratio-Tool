"use strict";
const colors =
	[{
		name: "aliceblue",
		hex: "#F0F8FF",
		rgb: "240,248,255",
		ratio: 0
	}, {
		name: "antiquewhite",
		hex: "#FAEBD7",
		rgb: "250,235,215",
		ratio: 0
	}, {
		name: "aqua",
		hex: "#00FFFF",
		rgb: "0,255,255",
		ratio: 0
	}, {
		name: "aquamarine",
		hex: "#7FFFD4",
		rgb: "127,255,212",
		ratio: 0
	}, {
		name: "azure",
		hex: "#F0FFFF",
		rgb: "240,255,255",
		ratio: 0
	}, {
		name: "beige",
		hex: "#F5F5DC",
		rgb: "245,245,220",
		ratio: 0
	}, {
		name: "bisque",
		hex: "#FFE4C4",
		rgb: "255,228,196",
		ratio: 0
	}, {
		name: "black",
		hex: "#000000",
		rgb: "0,0,0",
		ratio: 0
	}, {
		name: "blanchedalmond",
		hex: "#FFEBCD",
		rgb: "255,235,205",
		ratio: 0
	}, {
		name: "blue",
		hex: "#0000FF",
		rgb: "0,0,255",
		ratio: 0
	}, {
		name: "blueviolet",
		hex: "#8A2BE2",
		rgb: "138,43,226",
		ratio: 0
	}, {
		name: "brown",
		hex: "#A52A2A",
		rgb: "165,42,42",
		ratio: 0
	}, {
		name: "burlywood",
		hex: "#DEB887",
		rgb: "222,184,135",
		ratio: 0
	}, {
		name: "cadetblue",
		hex: "#5F9EA0",
		rgb: "95,158,160",
		ratio: 0
	}, {
		name: "chartreuse",
		hex: "#7FFF00",
		rgb: "127,255,0",
		ratio: 0
	}, {
		name: "chocolate",
		hex: "#D2691E",
		rgb: "210,105,30",
		ratio: 0
	}, {
		name: "coral",
		hex: "#FF7F50",
		rgb: "255,127,80",
		ratio: 0
	}, {
		name: "cornflowerblue",
		hex: "#6495ED",
		rgb: "100,149,237",
		ratio: 0
	}, {
		name: "cornsilk",
		hex: "#FFF8DC",
		rgb: "255,248,220",
		ratio: 0
	}, {
		name: "crimson",
		hex: "#DC143C",
		rgb: "220,20,60",
		ratio: 0
	}, {
		name: "cyan",
		hex: "#00FFFF",
		rgb: "0,255,255",
		ratio: 0
	}, {
		name: "darkblue",
		hex: "#00008B",
		rgb: "0,0,139",
		ratio: 0
	}, {
		name: "darkcyan",
		hex: "#008B8B",
		rgb: "0,139,139",
		ratio: 0
	}, {
		name: "darkgoldenrod",
		hex: "#B8860B",
		rgb: "184,134,11",
		ratio: 0
	}, {
		name: "darkgray",
		hex: "#A9A9A9",
		rgb: "169,169,169",
		ratio: 0
	}, {
		name: "darkgreen",
		hex: "#006400",
		rgb: "0,100,0",
		ratio: 0
	}, {
		name: "darkgrey",
		hex: "#A9A9A9",
		rgb: "169,169,169",
		ratio: 0
	}, {
		name: "darkkhaki",
		hex: "#BDB76B",
		rgb: "189,183,107",
		ratio: 0
	}, {
		name: "darkmagenta",
		hex: "#8B008B",
		rgb: "139,0,139",
		ratio: 0
	}, {
		name: "darkolivegreen",
		hex: "#556B2F",
		rgb: "85,107,47",
		ratio: 0
	}, {
		name: "darkorange",
		hex: "#FF8C00",
		rgb: "255,140,0",
		ratio: 0
	}, {
		name: "darkorchid",
		hex: "#9932CC",
		rgb: "153,50,204",
		ratio: 0
	}, {
		name: "darkred",
		hex: "#8B0000",
		rgb: "139,0,0",
		ratio: 0
	}, {
		name: "darksalmon",
		hex: "#E9967A",
		rgb: "233,150,122",
		ratio: 0
	}, {
		name: "darkseagreen",
		hex: "#8FBC8F",
		rgb: "143,188,143",
		ratio: 0
	}, {
		name: "darkslateblue",
		hex: "#483D8B",
		rgb: "72,61,139",
		ratio: 0
	}, {
		name: "darkslategray",
		hex: "#2F4F4F",
		rgb: "47,79,79",
		ratio: 0
	}, {
		name: "darkslategrey",
		hex: "#2F4F4F",
		rgb: "47,79,79",
		ratio: 0
	}, {
		name: "darkturquoise",
		hex: "#00CED1",
		rgb: "0,206,209",
		ratio: 0
	}, {
		name: "darkviolet",
		hex: "#9400D3",
		rgb: "148,0,211",
		ratio: 0
	}, {
		name: "deeppink",
		hex: "#FF1493",
		rgb: "255,20,147",
		ratio: 0
	}, {
		name: "deepskyblue",
		hex: "#00BFFF",
		rgb: "0,191,255",
		ratio: 0
	}, {
		name: "dimgray",
		hex: "#696969",
		rgb: "105,105,105",
		ratio: 0
	}, {
		name: "dodgerblue",
		hex: "#1E90FF",
		rgb: "30,144,255",
		ratio: 0
	}, {
		name: "firebrick",
		hex: "#B22222",
		rgb: "178,34,34",
		ratio: 0
	}, {
		name: "floralwhite",
		hex: "#FFFAF0",
		rgb: "255,250,240",
		ratio: 0
	}, {
		name: "forestgreen",
		hex: "#228B22",
		rgb: "34,139,34",
		ratio: 0
	}, {
		name: "fuchsia",
		hex: "#FF00FF",
		rgb: "255,0,255",
		ratio: 0
	}, {
		name: "gainsboro",
		hex: "#DCDCDC",
		rgb: "220,220,220",
		ratio: 0
	}, {
		name: "ghostwhite",
		hex: "#F8F8FF",
		rgb: "248,248,255",
		ratio: 0
	}, {
		name: "gold",
		hex: "#FFD700",
		rgb: "255,215,0",
		ratio: 0
	}, {
		name: "goldenrod",
		hex: "#DAA520",
		rgb: "218,165,32",
		ratio: 0
	}, {
		name: "gray",
		hex: "#808080",
		rgb: "128,128,128",
		ratio: 0
	}, {
		name: "green",
		hex: "#008000",
		rgb: "0,128,0",
		ratio: 0
	}, {
		name: "greenyellow",
		hex: "#ADFF2F",
		rgb: "173,255,47",
		ratio: 0
	}, {
		name: "grey",
		hex: "#808080",
		rgb: "128,128,128",
		ratio: 0
	}, {
		name: "honeydew",
		hex: "#F0FFF0",
		rgb: "240,255,240",
		ratio: 0
	}, {
		name: "hotpink",
		hex: "#FF69B4",
		rgb: "255,105,180",
		ratio: 0
	}, {
		name: "indianred",
		hex: "#CD5C5C",
		rgb: "205,92,92",
		ratio: 0
	}, {
		name: "indigo",
		hex: "#4B0082",
		rgb: "75,0,130",
		ratio: 0
	}, {
		name: "ivory",
		hex: "#FFFFF0",
		rgb: "255,255,240",
		ratio: 0
	}, {
		name: "khaki",
		hex: "#F0E68C",
		rgb: "240,230,140",
		ratio: 0
	}, {
		name: "lavender",
		hex: "#E6E6FA",
		rgb: "230,230,250",
		ratio: 0
	}, {
		name: "lavenderblush",
		hex: "#FFF0F5",
		rgb: "255,240,245",
		ratio: 0
	}, {
		name: "lawngreen",
		hex: "#7CFC00",
		rgb: "124,252,0",
		ratio: 0
	}, {
		name: "lemonchiffon",
		hex: "#FFFACD",
		rgb: "255,250,205",
		ratio: 0
	}, {
		name: "lightblue",
		hex: "#ADD8E6",
		rgb: "173,216,230",
		ratio: 0
	}, {
		name: "lightcoral",
		hex: "#F08080",
		rgb: "240,128,128",
		ratio: 0
	}, {
		name: "lightcyan",
		hex: "#E0FFFF",
		rgb: "224,255,255",
		ratio: 0
	}, {
		name: "lightgoldenrodyellow",
		hex: "#FAFAD2",
		rgb: "250,250,210",
		ratio: 0
	}, {
		name: "lightgray",
		hex: "#D3D3D3",
		rgb: "211,211,211",
		ratio: 0
	}, {
		name: "lightgreen",
		hex: "#90EE90",
		rgb: "144,238,144",
		ratio: 0
	}, {
		name: "lightgrey",
		hex: "#D3D3D3",
		rgb: "211,211,211",
		ratio: 0
	}, {
		name: "lightpink",
		hex: "#FFB6C1",
		rgb: "255,182,193",
		ratio: 0
	}, {
		name: "lightsalmon",
		hex: "#FFA07A",
		rgb: "255,160,122",
		ratio: 0
	}, {
		name: "lightseagreen",
		hex: "#20B2AA",
		rgb: "32,178,170",
		ratio: 0
	}, {
		name: "lightskyblue",
		hex: "#87CEFA",
		rgb: "135,206,250",
		ratio: 0
	}, {
		name: "lightslategray",
		hex: "#778899",
		rgb: "119,136,153",
		ratio: 0
	}, {
		name: "lightslategrey",
		hex: "#778899",
		rgb: "119,136,153",
		ratio: 0
	}, {
		name: "lightsteelblue",
		hex: "#B0C4DE",
		rgb: "176,196,222",
		ratio: 0
	}, {
		name: "lightyellow",
		hex: "#FFFFE0",
		rgb: "255,255,224",
		ratio: 0
	}, {
		name: "lime",
		hex: "#00FF00",
		rgb: "0,255,0",
		ratio: 0
	}, {
		name: "limegreen",
		hex: "#32CD32",
		rgb: "50,205,50",
		ratio: 0
	}, {
		name: "linen",
		hex: "#FAF0E6",
		rgb: "250,240,230",
		ratio: 0
	}, {
		name: "magenta",
		hex: "#FF00FF",
		rgb: "255,0,255",
		ratio: 0
	}, {
		name: "maroon",
		hex: "#800000",
		rgb: "128,0,0",
		ratio: 0
	}, {
		name: "mediumaquamarine",
		hex: "#66CDAA",
		rgb: "102,205,170",
		ratio: 0
	}, {
		name: "mediumblue",
		hex: "#0000CD",
		rgb: "0,0,205",
		ratio: 0
	}, {
		name: "mediumorchid",
		hex: "#BA55D3",
		rgb: "186,85,211",
		ratio: 0
	}, {
		name: "mediumpurple",
		hex: "#9370DB",
		rgb: "147,112,219",
		ratio: 0
	}, {
		name: "mediumseagreen",
		hex: "#3CB371",
		rgb: "60,179,113",
		ratio: 0
	}, {
		name: "mediumslateblue",
		hex: "#7B68EE",
		rgb: "123,104,238",
		ratio: 0
	}, {
		name: "mediumspringgreen",
		hex: "#00FA9A",
		rgb: "0,250,154",
		ratio: 0
	}, {
		name: "mediumturquoise",
		hex: "#48D1CC",
		rgb: "72,209,204",
		ratio: 0
	}, {
		name: "mediumvioletred",
		hex: "#C71585",
		rgb: "199,21,133",
		ratio: 0
	}, {
		name: "midnightblue",
		hex: "#191970",
		rgb: "25,25,112",
		ratio: 0
	}, {
		name: "mintcream",
		hex: "#F5FFFA",
		rgb: "245,255,250",
		ratio: 0
	}, {
		name: "mistyrose",
		hex: "#FFE4E1",
		rgb: "255,228,225",
		ratio: 0
	}, {
		name: "moccasin",
		hex: "#FFE4B5",
		rgb: "255,228,181",
		ratio: 0
	}, {
		name: "navajowhite",
		hex: "#FFDEAD",
		rgb: "255,222,173",
		ratio: 0
	}, {
		name: "navy",
		hex: "#000080",
		rgb: "0,0,128",
		ratio: 0
	}, {
		name: "oldlace",
		hex: "#FDF5E6",
		rgb: "253,245,230",
		ratio: 0
	}, {
		name: "olive",
		hex: "#808000",
		rgb: "128,128,0",
		ratio: 0
	}, {
		name: "olivedrab",
		hex: "#6B8E23",
		rgb: "107,142,35",
		ratio: 0
	}, {
		name: "orange",
		hex: "#FFA500",
		rgb: "255,165,0",
		ratio: 0
	}, {
		name: "orangered",
		hex: "#FF4500",
		rgb: "255,69,0",
		ratio: 0
	}, {
		name: "orchid",
		hex: "#DA70D6",
		rgb: "218,112,214",
		ratio: 0
	}, {
		name: "palegoldenrod",
		hex: "#EEE8AA",
		rgb: "238,232,170",
		ratio: 0
	}, {
		name: "palegreen",
		hex: "#98FB98",
		rgb: "152,251,152",
		ratio: 0
	}, {
		name: "paleturquoise",
		hex: "#AFEEEE",
		rgb: "175,238,238",
		ratio: 0
	}, {
		name: "palevioletred",
		hex: "#DB7093",
		rgb: "219,112,147",
		ratio: 0
	}, {
		name: "papayawhip",
		hex: "#FFEFD5",
		rgb: "255,239,213",
		ratio: 0
	}, {
		name: "peachpuff",
		hex: "#FFDAB9",
		rgb: "255,218,185",
		ratio: 0
	}, {
		name: "peru",
		hex: "#CD853F",
		rgb: "205,133,63",
		ratio: 0
	}, {
		name: "pink",
		hex: "#FFC0CB",
		rgb: "255,192,203",
		ratio: 0
	}, {
		name: "plum",
		hex: "#DDA0DD",
		rgb: "221,160,221",
		ratio: 0
	}, {
		name: "powderblue",
		hex: "#B0E0E6",
		rgb: "176,224,230",
		ratio: 0
	}, {
		name: "purple",
		hex: "#800080",
		rgb: "128,0,128",
		ratio: 0
	}, {
		name: "red",
		hex: "#FF0000",
		rgb: "255,0,0",
		ratio: 0
	}, {
		name: "rosybrown",
		hex: "#BC8F8F",
		rgb: "188,143,143",
		ratio: 0
	}, {
		name: "royalblue",
		hex: "#4169E1",
		rgb: "65,105,225",
		ratio: 0
	}, {
		name: "saddlebrown",
		hex: "#8B4513",
		rgb: "139,69,19",
		ratio: 0
	}, {
		name: "salmon",
		hex: "#FA8072",
		rgb: "250,128,114",
		ratio: 0
	}, {
		name: "sandybrown",
		hex: "#F4A460",
		rgb: "244,164,96",
		ratio: 0
	}, {
		name: "seagreen",
		hex: "#2E8B57",
		rgb: "46,139,87",
		ratio: 0
	}, {
		name: "seashell",
		hex: "#FFF5EE",
		rgb: "255,245,238",
		ratio: 0
	}, {
		name: "sienna",
		hex: "#A0522D",
		rgb: "160,82,45",
		ratio: 0
	}, {
		name: "silver",
		hex: "#C0C0C0",
		rgb: "192,192,192",
		ratio: 0
	}, {
		name: "skyblue",
		hex: "#87CEEB",
		rgb: "135,206,235",
		ratio: 0
	}, {
		name: "slateblue",
		hex: "#6A5ACD",
		rgb: "106,90,205",
		ratio: 0
	}, {
		name: "slategray",
		hex: "#708090",
		rgb: "112,128,144",
		ratio: 0
	}, {
		name: "slategrey",
		hex: "#708090",
		rgb: "112,128,144",
		ratio: 0
	}, {
		name: "snow",
		hex: "#FFFAFA",
		rgb: "255,250,250",
		ratio: 0
	}, {
		name: "springgreen",
		hex: "#00FF7F",
		rgb: "0,255,127",
		ratio: 0
	}, {
		name: "steelblue",
		hex: "#4682B4",
		rgb: "70,130,180",
		ratio: 0
	}, {
		name: "tan",
		hex: "#D2B48C",
		rgb: "210,180,140",
		ratio: 0
	}, {
		name: "teal",
		hex: "#008080",
		rgb: "0,128,128",
		ratio: 0
	}, {
		name: "thistle",
		hex: "#D8BFD8",
		rgb: "216,191,216",
		ratio: 0
	}, {
		name: "tomato",
		hex: "#FF6347",
		rgb: "255,99,71",
		ratio: 0
	}, {
		name: "turquoise",
		hex: "#40E0D0",
		rgb: "64,224,208",
		ratio: 0
	}, {
		name: "violet",
		hex: "#EE82EE",
		rgb: "238,130,238",
		ratio: 0
	}, {
		name: "wheat",
		hex: "#F5DEB3",
		rgb: "245,222,179",
		ratio: 0
	}, {
		name: "white",
		hex: "#FFFFFF",
		rgb: "255,255,255",
		ratio: 0
	}, {
		name: "whitesmoke",
		hex: "#F5F5F5",
		rgb: "245,245,245",
		ratio: 0
	}, {
		name: "yellow",
		hex: "#FFFF00",
		rgb: "255,255,0",
		ratio: 0
	}, {
		name: "yellowgreen",
		hex: "#9ACD32",
		rgb: "154,205,50",
		ratio: 0
	}];

function Color(hex, name) {

	this.name = name || "Custom";
	this.hex = colorToHex(hex);
	var ratio = function(againstValue) {

		const againstColor = new Color(againstValue);

		const valueLuminanace = this.Luminosity();
		const againstLuminanace = againstColor.Luminosity();

		if (isNaN(valueLuminanace) || isNaN(againstLuminanace)) {
			console
				.log(`Unable to call Color.Ratio: Luminosity was NaN (valueLuminance=${valueLuminanace} vs againstLuminance=${
					againstLuminanace})`);
		}

		let lighter;
		let darker;
		if (valueLuminanace <= againstLuminanace) {
			lighter = againstLuminanace;
			darker = valueLuminanace;
		} else {
			lighter = valueLuminanace;
			darker = againstLuminanace;
		}
		return lighter && darker ? ((lighter + 0.05) / (darker + 0.05)).toFixed(1) : -1;

	};
	Object.defineProperty(this,
		"Ratio", {
			get: function() {
				return ratio;
			},
			set: function(value) {
				ratio = value;
			}
		});

	var luminosity = function() {
		const rgbFromHex = this.RGB();

		if (rgbFromHex) {

			// http://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
			function calcFrom(r, g, b) {
				const rgbArray = [r, g, b].map(function(arrayValue) {
					arrayValue /= 255;
					return (arrayValue <= 0.03928) ? arrayValue / 12.92 : Math.pow(((arrayValue + 0.055) / 1.055), 2.4);
				});
				return rgbArray[0] * 0.2126 + rgbArray[1] * 0.7152 + rgbArray[2] * 0.0722;
			}

			const returnValue = calcFrom(rgbFromHex.Red, rgbFromHex.Green, rgbFromHex.Blue);
			if (!isNaN(returnValue))
				return returnValue;
			else {

				console.log("Unable to call Color.getLuminosity(): value was Nan");
				return -1;
			}
		} else {
			console.log("Unable to call Color.getLuminosity(): this.RGB was null/undefined");
			return -1;
		}
	};
	Object.defineProperty(this,
		"Luminosity", {
			get: function() {
				return luminosity;
			},
			set: function(value) {
				luminosity = value;
			}
		});

	var hexValue = this.hex;
	var rgb = function() {

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);

		return result ? {
				Red: parseInt(result[1], 16),
				Green: parseInt(result[2], 16),
				Blue: parseInt(result[3], 16)
			} :
			null;
	};
	Object.defineProperty(this,
		"RGB", {
			get: function() {
				return rgb;
			},
			set: function(value) {
				rgb = value;
			}
		});

	//http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
	function getNewRandomColor() {

		const letters = "0123456789ABCDEF";
		var color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}

var primaryColor = new Color("#1793ec");
var backgroundColor = new Color("#f5f5f5");
var secondaryColor = new Color("#3c9d87");

// helper use to get DOM values in either RGB or #HEX 
function colorToHex(domValue) {
	return domValue.substr(0, 1) !== "#" ? rgbTohex(domValue) : domValue;
};

function rgbTohex(domValue) {
	const colorCompArray = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(domValue);

	const red = parseInt(colorCompArray[2]);
	const green = parseInt(colorCompArray[3]);
	const blue = parseInt(colorCompArray[4]);

	const rgb = blue | (green << 8) | (red << 16);
	return colorCompArray[1] + "#" + rgb.toString(16);
}

const ColorArray = function(fromObject) {
	var array = new Array();
	fromObject.forEach(color => array.push(new Color(color.hex, color.name)));
	return array;
};

function TableRow(color) {
	this.rowTableTemplate =
		`<div class="table-row" data-name="" data-color=""><div class="row-cell primary-color-cell"><div class="color-display"><div class="color-ratio">1.0</div></div><div class="color-name"></div></div><div class="row-cell secondary-color-cell"><div class="color-display"><div class="color-ratio">1.0</div></div><div class="color-hex"></div></div></div>`;

	var rowColor = this.color = color;
	var domRow = function() {
		return this;
	};

	Object.defineProperty(this,
		"DomRow", {
			get: function() {
				return domRow;
			},
			set: function(value) {
				domRow = value;
			}
		});
	var dataSetColor = function(newColor) {
		if (this.DomRow) {
			this.DomRow.dataset.color = newColor.hex;
			this.DomRow.dataset.name = newColor.name;
		} else {
			console.log("Unable to call TableRow.DataSetColor(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"DataSetColor", {
			get: function() {
				return dataSetColor;
			},
			set: function(value) {
				dataSetColor = value;
			}
		});
	var primaryColumnBackgroundColor = function(newColor) {
		if (this.DomRow) {
			this.DomRow.querySelector(".primary-color-cell").style.backgroundColor = newColor.hex;
		} else {
			console.log("Unable to call TableRow.PrimaryColumnBackgroundColor(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"PrimaryColumnBackgroundColor", {
			get: function() {
				return primaryColumnBackgroundColor;
			},
			set: function(value) {
				primaryColumnBackgroundColor = value;
			}
		});
	var secondaryColumnBackgroundColor = function(newColor) {
		if (this.DomRow) {
			this.DomRow.querySelector(".secondary-color-cell").style.backgroundColor = newColor.hex;
		} else {
			console.log("Unable to call TableRow.SecondaryColumnBackgroundColor(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"SecondaryColumnBackgroundColor", {
			get: function() {
				return secondaryColumnBackgroundColor;
			},
			set: function(value) {
				secondaryColumnBackgroundColor = value;
			}
		});
	var displayedColor = function(newColor) {
		if (this.DomRow) {
			Array.from(this.DomRow.querySelectorAll(".color-display")).forEach(display => display.style.backgroundColor = newColor.hex);
		} else {
			console.log("Unable to call TableRow.DisplayedColor(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"DisplayedColor", {
			get: function() {
				return displayedColor;
			},
			set: function(value) {
				displayedColor = value;
			}
		});

	var colorHexValue = function(newColor) {
		if (this.DomRow) {
			const querySelector = this.DomRow.querySelector(".color-hex");
			querySelector.innerText = newColor.hex;
			querySelector.style.color = newColor.hex;
		} else {
			console.log("Unable to call TableRow.ColorHexValue(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"ColorHexValue", {
			get: function() {
				return colorHexValue;
			},
			set: function(value) {
				colorHexValue = value;
			}
		});

	var colorNameValue = function(newColor) {
		if (this.DomRow) {
			const querySelector = this.DomRow.querySelector(".color-name");
			querySelector.innerText = newColor.name;
			querySelector.style.color = newColor.hex;
		} else {
			console.log("Unable to call TableRow.ColorNameValue(): domRow was null?");
			return;
		}
	};

	Object.defineProperty(this,
		"ColorNameValue", {
			get: function() {
				return colorNameValue;
			},
			set: function(value) {
				colorNameValue = value;
			}
		});

	this.ColorContrastRatioAgainst = function(newColor) {
		if (this.DomRow) {
			Array.from(this.DomRow.querySelectorAll(".color-ratio"))
				.forEach(function(colorRatio) {
					const againstColor = colorRatio.parentElement.parentElement.style.backgroundColor;

					colorRatio.innerText = newColor.Ratio(againstColor);
					// determines if the text value should be white or black (helps with pereceived brightness)
					colorRatio.style.color = newColor.Ratio("#FFFFFF") > 3 ? "white" : "black";
				});
		} else {
			console.log("Unable to call TableRow.ColorContrastRatioAgainst(): domRow was null?");
			return;
		}
	};
	this.updateRowValues = function() {
		if (this.DomRow) {
			this.DataSetColor(rowColor);
			this.PrimaryColumnBackgroundColor(primaryColor);
			this.SecondaryColumnBackgroundColor(secondaryColor);
			this.ColorContrastRatioAgainst(rowColor);
			this.DisplayedColor(rowColor);
			this.ColorHexValue(rowColor);
			this.ColorNameValue(rowColor);

		} else {
			console.log("Unable to call TableRow.updateRowValues(): domRow was null?");
			return;
		}
	};
}

var targetTable = document.querySelector(".color-table");

function buildColorTable(colorArray) {

	if (!targetTable) return;

	colorArray.forEach(function(color) {
		const tableRow = new TableRow(color);

		targetTable.innerHTML += tableRow.rowTableTemplate;
		tableRow.DomRow = targetTable.lastChild;

		tableRow.updateRowValues();
	});

}

function handleRowClick(event) {
	if (event.altKey) {

		setUpdatingInput(event.target.classList[1], this.dataset.color);
	} else {
		setBackground(this.dataset.color);

	}
}

function selectElementContents(element) {
	var range = document.createRange();
	var textNode = element.childNodes[0]; //text node is the first child node of a span
	range.selectNodeContents(element);
	range.setStart(textNode, 1);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function setBackground(newColor) {

	backgroundColor = new Color(newColor);
	document.body.style.backgroundColor = backgroundColor.hex;

	document.querySelector("#background-color-input").value = backgroundColor.hex;
	document.querySelector("#background-text-input").value = backgroundColor.hex.substr(1);

	Array.from(document.querySelectorAll(".color-results"))
		.forEach(function(element) {

			if (element.classList[0].startsWith("primary")) {
				setRaito(element, primaryColor, backgroundColor);
			} else if (element.classList[0].startsWith("secondary")) {
				setRaito(element, secondaryColor, backgroundColor);
			}
		});
}

function handleInputChange(event) {
	const eventName = event.target.name;

	setUpdatingInput(eventName, this.value);

}

function handleRatioClick(event) {

	var amount = -2;
	if (event.ctrlKey) {
		amount *= -1;
	}
	if (this.parentNode.classList.contains("primary")) {
		const oldColor = primaryColor.hex;
		const newHex = shadeColor(oldColor, amount);

		setUpdatingInput("primary", newHex);

	} else if (this.parentNode.classList.contains("secondary")) {
		const oldColor = secondaryColor.hex;
		const newHex = shadeColor(oldColor, amount);
		console.log(newHex);
		setUpdatingInput("secondary", newHex);
	}

}

function handleFilterClick(event) {

	const a = new ColorArray(colors);

	if (this.classList.contains("active")) {

		targetTable.innerHTML = "";
		buildColorTable(a);
		this.classList.remove("active");
		return;
	} else {
		var filteredParent = this;
		const filtered = a.filter(function(x) {
			const againstValue = filteredParent.classList.contains("primary") ? primaryColor.hex : secondaryColor.hex;
			const ratio = x.Ratio(againstValue);
			if (ratio >= 3 && ratio <= 4) {
				return x;
			}
		});

		targetTable.innerHTML = "";

		buildColorTable(filtered);

		this.classList.add("active");
	}
}

function setRaito(element, color, against) {

	const ratioSelector = element.querySelector(".color-ratio");
	if (ratioSelector) {
		const ratio = color.Ratio(against.hex);
		var sentimentColor = "";
		ratioSelector.innerText = ratio;

		let result = "sentiment_neutral";
		if (ratio <= 1) {
			result = "sentiment_very_dissatisfied";

		} else if (ratio <= 1.5) {
			result = "sentiment_dissatisfied";

		} else if (ratio >= 1.5 && ratio < 2.5) {
			result = "sentiment_neutral";

		} else if (ratio >= 3 && ratio <= 4) {
			result = "sentiment_very_satisfied";
		} else if (ratio >= 4) {
			result = "sentiment_satisfied";

		}

	}

}

function setUpdatingInput(eventName, newColor) {

	if (newColor.charAt(0) !== "#") {
		newColor = `#${newColor}`;
	}

	if (eventName.startsWith("primary")) {
		primaryColor = new Color(newColor);
		updateColorTable();
		Array.from(document.querySelectorAll(".primary"))
			.forEach(function(element) {
				element.style.color = primaryColor.hex;

				setRaito(element, primaryColor, backgroundColor);

			});

		document.querySelector("#primary-color-input").value = primaryColor.hex;
		document.querySelector("#primary-text-input").value = primaryColor.hex.substr(1);

	} else if (eventName.startsWith("secondary")) {
		secondaryColor = new Color(newColor);
		updateColorTable();
		Array.from(document.querySelectorAll(".secondary"))
			.forEach(function(element) {
				element.style.color = secondaryColor.hex;

				setRaito(element, secondaryColor, backgroundColor);

			});

		document.querySelector("#secondary-color-input").value = secondaryColor.hex;
		document.querySelector("#secondary-text-input").value = secondaryColor.hex.substr(1);

	} else if (eventName.startsWith("background")) {
		setBackground(newColor);
		isFilteredSoRebuild();
	}
}

function shadeColor(color, percent) {

	var R = parseInt(color.substring(1, 3), 16);
	var G = parseInt(color.substring(3, 5), 16);
	var B = parseInt(color.substring(5, 7), 16);

	R = parseInt(R * (100 + percent) / 100);
	G = parseInt(G * (100 + percent) / 100);
	B = parseInt(B * (100 + percent) / 100);

	R = (R < 255) ? R : 255;
	G = (G < 255) ? G : 255;
	B = (B < 255) ? B : 255;

	const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
	const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
	const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));

	return "#" + RR + GG + BB;
}

function isFilteredSoRebuild() {
	Array.from(document.querySelectorAll(".color-filter")).forEach(function(element) {
		if (element.classList.contains("active")) {
			buildColorTable(new ColorArray(colors));
			element.classList.remove("active");
			return true;
		}
	});
}

function updateColorTable() {
	if (!targetTable) return;

	if (isFilteredSoRebuild()) {
		return;
	}

	Array.from(targetTable.querySelectorAll(".table-row"))
		.forEach(function(element) {

			const tableRow = new TableRow(new Color(element.dataset.color, element.dataset.name));
			tableRow.DomRow = element;

			tableRow.updateRowValues();
		});
}

function showHelp() {
	var help = document.querySelector(".helper.overlay")
	help.classList.toggle("shown");
}

(function() {
	const colorList = new ColorArray(colors);
	buildColorTable(colorList);

	Array.from(document.querySelectorAll(".color-swatch input"))
		.forEach(function(colorInput) {
			colorInput.addEventListener("change", handleInputChange, true);

		});

	Array.from(document.querySelectorAll(".table-row"))
		.forEach(function(tableRow) {
			tableRow.addEventListener("click", handleRowClick);
		});

	Array.from(document.querySelectorAll(".color-ratio"))
		.forEach(function(ratio) {
			ratio.addEventListener("click", handleRatioClick);
		});

	Array.from(document.querySelectorAll(".color-filter"))
		.forEach(function(element) {
			element.addEventListener("click", handleFilterClick);
		});

	document.querySelector(".help .button").addEventListener("click", showHelp);

})();