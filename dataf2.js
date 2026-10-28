const functionData = [
  {
    "id": 200,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y) - Math.log(Math.exp(y)- Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 201,
    "latex": "e^y - e",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.E;\n}",
    "link": ""
  },
  {
    "id": 202,
    "latex": "e^y - \\ln \\left( e^e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(Math.E)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 203,
    "latex": "e^y - \\ln \\left( e^e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(Math.E)-Math.log(y));\n}",
    "link": ""
  },
	{
    "id": 204,
    "latex": "-e + e^y + \\ln x",
    "js": "function f(x, y) {\n  return -Math.E + Math.exp(y) + Math.log(x);\n}",
    "link": ""
  },
	{
    "id": "f206",
    "latex": "\\frac{e^y}{\\ln y + e^{e^y}}",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/(Math.log(y)+Math.exp(Math.exp(y)));\n}",
    "link": ""
  },
  {
    "id": 209,
    "latex": "e^y - \\ln \\left( \\frac{e^e}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.E)/y-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 212,
    "latex": "e^y - \\ln \\left( e^{e^x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(x))-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 213,
    "latex": "\\ln x + e^y - e^x",
    "js": "function f(x, y) {\n  return Math.log(x)+Math.exp(y)-Math.exp(x);\n}",
    "link": ""
  },
  {
    "id": 214,
    "latex": "e^y - \\ln \\left( \\frac{e^{e^x}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(x))/x-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 219,
    "latex": "0",
    "js": "function f(x, y) {\n  return 0;\n}",
    "link": "https://en.wikipedia.org/wiki/0"
  },
  {
    "id": 221,
    "latex": "e^y - \\ln \\left( e^{e^y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(y))-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 223,
    "latex": "e^y - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(y))/x-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 224,
    "latex": "e^y - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(y))/x-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 226,
    "latex": "e^y - \\ln \\left( \\frac{e^{e^y}}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y)-Math.log(Math.exp(Math.exp(y))/y-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 233,
    "latex": "e^e - x",
    "js": "function f(x, y) {\n  return Math.exp(Math.E) - x;\n}",
    "link": ""
  },
  {
    "id": 233,
    "latex": "e^e - \\ln \\left( e^x - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E) - Math.log(Math.exp(x)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 234,
    "latex": "e^e - y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E) - y;\n}",
    "link": ""
  },
  {
    "id": 236,
    "latex": "e^e - \\ln \\left( e^y - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E) - Math.log(Math.exp(y)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 239,
    "latex": "\\frac{e^e}{x} - \\ln \\left( e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - Math.log(Math.E-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": "f242",
    "latex": "e^{e^x - \\sqrt[x]{e^{e^e}}}",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x) - Math.exp(Math.exp(Math.E))**(1/x));\n}",
    "link": ""
  },
  {
    "id": 243,
    "latex": "\\frac{e^e}{x} - y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - y;\n}",
    "link": ""
  },
  {
    "id": 244,
    "latex": "\\frac{e^e}{x} - \\ln \\left(e^y - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - Math.log(Math.exp(y)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 246,
    "latex": "\\frac{e^e}{y} - 1",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - 1;\n}",
    "link": ""
  },
  {
    "id": 247,
    "latex": "\\frac{e^e}{y} - \\ln \\left(e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - \\Math.log(e-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 248,
    "latex": "\\frac{e^e}{y} - \\ln \\left(e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - \\Math.log(e-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 249,
    "latex": "\\frac{e^e}{y} - x",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - x;\n}",
    "link": ""
  },
  {
    "id": 252,
    "latex": "\\frac{e^e}{y} - y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - y;\n}",
    "link": ""
  },
  {
    "id": 253,
    "latex": "\\frac{e^e}{y} - \\ln  \\left( e^y - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - Math.log(Math.exp(y)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 256,
    "latex": "e^{e^x}- \\ln \\left( e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))-Math.log(Math.E-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 258,
    "latex": "e^{e^x}- x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))-x;\n}",
    "link": ""
  },
  {
    "id": 260,
    "latex": "e^{e^x}- \\ln \\left( e^x - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))-Math.log(Math.exp(x)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 261,
    "latex": "e^{e^x}-y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))-y;\n}",
    "link": ""
  },
  {
    "id": 263,
    "latex": "e^{e^x}- \\ln \\left( e^y - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))-Math.log(Math.exp(y)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 265,
  "latex": "\\frac{e^{e^x}}{x}- \\ln \\left(e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/x-Math.log(Math.E-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 269,
  "latex": "\\frac{e^{e^x}}{x}- \\ln \\left(e^x - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/x-Math.log(Math.exp(x)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 273,
  "latex": "\\frac{e^{e^x}}{y}- 1",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/y-1;\n}",
    "link": "https://en.wikipedia.org/wiki/Celsius"
  },
  {
    "id": 275,
  "latex": "\\frac{e^{e^x}}{y}- \\ln \\left(e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/y-Math.log(Math.E-Math.log(y));\n}",
    "link": "https://en.wikipedia.org/wiki/Celsius"
  },
  {
    "id": 277,
  "latex": "\\frac{e^{e^x}}{y}- \\ln \\left( e^x - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/y-Math.log(Math.exp(x)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 279,
  "latex": "\\frac{e^{e^x}}{y}- y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/y-y;\n}",
    "link": ""
  },
  {
    "id": 283,
  "latex": "e^{e^y}-\\ln \\left( e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))-Math.log(Math.E - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 285,
  "latex": "e^{e^y}-x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))-x;\n}",
    "link": ""
  },
  {
    "id": 288,
  "latex": "e^{e^y}-y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))-y;\n}",
    "link": ""
  },
  {
    "id": 292,
  "latex": "\\frac{e^{e^y}}{x}- \\ln \\left(e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/x-Math.log(Math.E - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 294,
  "latex": "\\frac{e^{e^y}}{x}- x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/x-x;\n}",
    "link": ""
  },
  {
    "id": 299,
  "latex": "\\frac{e^{e^y}}{x}- \\ln \\left(e^y - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/x-Math.log(Math.exp(y)-Math.log(y));\n}",
    "link": ""
  },
];