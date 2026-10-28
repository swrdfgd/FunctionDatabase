const functionData = [
  {
    "id": 100,
    "latex": "e - \\ln \\left( \\frac{e^e}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.E)/y - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 101,
    "latex": "e - \\ln \\left( \\frac{e^e}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.E)/y - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 102,
    "latex": "e - e^x",
    "js": "function f(x, y) {\n  return Math.E - Math.exp(x);\n}",
    "link": ""
  },
  {
    "id": 103,
    "latex": "e - \\ln \\left( e^{e^x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 104,
    "latex": "e - \\ln \\left( e^{e^x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 105,
    "latex": "\\ln x + e - e^x",
    "js": "function f(x, y) {\n  return Math.log(x) + Math.E - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 106,
    "latex": "e - \\ln \\left( \\frac{e^{e^x}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))/x-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 107,
    "latex": "e - \\ln \\left( \\frac{e^{e^x}}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))/x-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 108,
    "latex": "-e^x + e + \\ln y",
    "js": "function f(x, y) {\n  return -Math.exp(x) + Math.E + Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 109,
    "latex": "e - \\ln \\left( \\frac{e^{e^x}}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))/y-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 110,
    "latex": "e - \\ln \\left( \\frac{e^{e^x}}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(x))/y-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 111,
    "latex": "e - y",
    "js": "function f(x, y) {\n  return Math.E - y;\n}",
    "link": ""
  },
  {
    "id": 112,
    "latex": "e - \\ln \\left( e^{e^y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 113,
    "latex": "e - \\ln \\left( e^{e^y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 114,
    "latex": "e - e^y + \\ln x",
    "js": "function f(x, y) {\n  return Math.E - Math.exp(y) + Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 115,
    "latex": "e - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y))/x-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 116,
    "latex": "e - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y))/x-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 117,
    "latex": "\\ln y - e^y + e",
    "js": "function f(x, y) {\n  Math.log(y) - Math.exp(y) + Math.E;\n}",
    "link": ""
  },
  {
    "id": 118,
    "latex": "e - \\ln \\left( \\frac{e^{e^y}}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y))/y-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 119,
    "latex": "e - \\ln \\left( \\frac{e^{e^y}}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.exp(y))/y-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 120,
    "latex": "e^x - \\ln \\left( e - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-1);\n}",
    "link": ""
  },
  {
    "id": 121,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 122,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 123,
    "latex": "e^x - \\ln \\left(e - x\\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E - x);\n}",
    "link": ""
  },
  {
    "id": 124,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 125,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 126,
    "latex": "e^x - \\ln \\left( e - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-y);\n}",
    "link": ""
  },
  {
    "id": 127,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 128,
    "latex": "e^x - \\ln \\left(e - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 129,
    "latex": "e^x - \\ln \\left( e^x - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x) - 1);\n}",
    "link": ""
  },
  {
    "id": 130,
    "latex": "e^x - \\ln \\left(e^x - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 131,
    "latex": "e^x - \\ln \\left(e^x - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 132,
    "latex": "e^x - \\ln \\left( e^x - x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-x);\n}",
    "link": ""
  },
  {
    "id": 133,
    "latex": "e^x - \\ln \\left(e^x - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 134,
    "latex": "e^x - \\ln \\left(e^x - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 135,
    "latex": "e^x - \\ln \\left( e^x - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-y);\n}",
    "link": ""
  },
  {
    "id": 136,
    "latex": "e^x - \\ln \\left( e^x - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 137,
    "latex": "e^x - \\ln \\left( e^x - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x)-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 138,
    "latex": "e^x - \\ln \\left(e^y - 1\\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y)-1);\n}",
    "link": ""
  },
  {
    "id": 139,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 140,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 141,
    "latex": "e^x - \\ln \\left( e^y - x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - x);\n}",
    "link": ""
  },
  {
    "id": 142,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 143,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 144,
    "latex": "e^x - \\ln \\left( e^y - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - y);\n}",
    "link": ""
  },
  {
    "id": 145,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y)-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 146,
    "latex": "e^x - \\ln \\left( e^y - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y)-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 147,
    "latex": "e^x - e",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.E;\n}",
    "link": ""
  },
  {
    "id": 148,
    "latex": "e^x - \\ln \\left( e^e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 149,
    "latex": "e^x - \\ln \\left( e^e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 150,
    "latex": "\\ln x + e^x - e",
    "js": "function f(x, y) {\n  return Math.log(x) + Math.exp(x) - Math.E;\n}",
    "link": ""
  },
  {
    "id": 151,
    "latex": "e^x - \\ln \\left( \\frac{e^e}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)/x - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 152,
    "latex": "e^x - \\ln \\left( \\frac{e^e}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)/x - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 153,
    "latex": "e^x - e^e + \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.exp(Math.E) + Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 154,
    "latex": "e^x - \\ln \\left( \\frac{e^e}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)/y - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 155,
    "latex": "e^x - \\ln \\left( \\frac{e^e}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.E)/y - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 156,
    "latex": "0",
    "js": "function f(x, y) {\n  return 0;\n}",
    "link": "https://en.wikipedia.org/wiki/0"
  },
  {
    "id": 157,
    "latex": "e^x - \\ln \\left( e^{e^x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 158,
    "latex": "e^x - \\ln \\left( e^{e^x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 159,
    "latex": "\\ln x",
    "js": "function f(x, y) {\n  return Math.log(x);\n}",
    "link": "https://en.wikipedia.org/wiki/Logarithm"
  },
  {
    "id": 160,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^x}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))/x - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 161,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^x}}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))/x - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 162,
    "latex": "\\ln y",
    "js": "function f(x, y) {\n  return Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 163,
    "latex": "e^x - \\ln \\left(\\frac{e^{e^x}}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))/y - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 164,
    "latex": "e^x - \\ln \\left(\\frac{e^{e^x}}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(x))/y - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 165,
    "latex": "e^x - e^y",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.exp(y);\n}",
    "link": ""
  },
  {
    "id": 166,
    "latex": "e^x - \\ln \\left( e^{e^y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 167,
    "latex": "e^x - \\ln \\left( e^{e^y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 168,
    "latex": "-e^y + e^x + \\ln x",
    "js": "function f(x, y) {\n  return -Math.exp(y) + Math.exp(x) + Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 169,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))/x-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 170,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^y}}{x} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))/x-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 171,
    "latex": "-e^y + e^x + y",
    "js": "function f(x, y) {\n  return -Math.exp(y) + Math.exp(x) + y;\n}",
    "link": ""
  },
  {
    "id": 172,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^y}}{y} - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))/y-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 173,
    "latex": "e^x - \\ln \\left( \\frac{e^{e^y}}{y} - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(Math.exp(y))/y-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 174,
    "latex": "e^y - \\ln \\left( e - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-1);\n}",
    "link": ""
  },
  {
    "id": 175,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 176,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 177,
    "latex": "e^y - \\ln \\left( e - x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-x);\n}",
    "link": ""
  },
  {
    "id": 178,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 179,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 180,
    "latex": "e^y - \\ln \\left( e - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-y);\n}",
    "link": ""
  },
  {
    "id": 181,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 182,
    "latex": "e^y - \\ln \\left( e - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.E-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 183,
    "latex": "e^y - \\ln \\left( e^x - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-1);\n}",
    "link": ""
  },
  {
    "id": 184,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 185,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 186,
    "latex": "e^y - \\ln \\left( e^x - x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-x);\n}",
    "link": ""
  },
  {
    "id": 187,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 188,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 189,
    "latex": "e^y - \\ln \\left( e^x - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-y);\n}",
    "link": ""
  },
  {
    "id": 190,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 191,
    "latex": "e^y - \\ln \\left( e^x - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x)-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 192,
    "latex": "e^y - \\ln \\left( e^y - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-1);\n}",
    "link": ""
  },
  {
    "id": 193,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left(e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 194,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left(e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 195,
    "latex": "e^y - \\ln \\left( e^y - x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-x);\n}",
    "link": ""
  },
  {
    "id": 196,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left(e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 197,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left(e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 198,
    "latex": "e^y - \\ln \\left( e^y - y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-y);\n}",
    "link": ""
  },
  {
    "id": 199,
    "latex": "e^y - \\ln \\left( e^y - \\ln \\left( e^y \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
];