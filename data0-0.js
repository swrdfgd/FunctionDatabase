const functionData = [
  {
    "id": 0,
    "latex": "1",
    "js": "function f(x, y) {\n  return 1;\n}",
    "link": "https://en.wikipedia.org/wiki/1"
  },
  {
    "id": 1,
    "latex": "x",
    "js": "function f(x, y) {\n  return x;\n}",
    "link": ""
  },
  {
    "id": 2,
    "latex": "y",
    "js": "function f(x, y) {\n  return y;\n}",
    "link": ""
  },
  {
    "id": 3,
    "latex": "e",
    "js": "function f(x, y) {\n  return Math.E;\n}",
    "link": "https://en.wikipedia.org/wiki/Euler%27s_constant"
  },
  {
    "id": 4,
    "latex": "e - \\ln x",
    "js": "function f(x, y) {\n  return Math.E - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 5,
    "latex": "e - \\ln y",
    "js": "function f(x, y) {\n  return Math.E - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 6,
    "latex": "e^x",
    "js": "function f(x, y) {\n  return Math.exp(x);\n}",
    "link": "https://en.wikipedia.org/wiki/Exponential_function"
  },
  {
    "id": 7,
    "latex": "e^x - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(x)-Math.log(x);\n}",
    "link": ""
  },
  {
    "id": "8.0y",
    "latex": "1 - \\ln y",
    "js": "function f(x, y) {\n  return 1 - Math.log(y);\n}",
    "link": "https://arxiv.org/html/2603.21852v2"
  },
  {
    "id": 9,
    "latex": "e^y",
    "js": "function f(x, y) {\n  return Math.exp(y);\n}",
    "link": ""
  },
  {
    "id": 10,
    "latex": "e^y - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 11,
    "latex": "e^y - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 12,
    "latex": "e - 1",
    "js": "function f(x, y) {\n  return Math.E - 1;\n}",
    "link": ""
  },
  {
    "id": 13,
    "latex": "e - \\ln \\left( e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 14,
    "latex": "e - \\ln \\left( e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 15,
    "latex": "e - x",
    "js": "function f(x, y) {\n  return Math.E - x;\n}",
    "link": ""
  },
  {
    "id": 16,
    "latex": "e - \\ln \\left( e^x - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 17,
    "latex": "e - \\ln \\left( e^x - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 18,
    "latex": "e - y",
    "js": "function f(x, y) {\n  return Math.E - y;\n}",
    "link": ""
  },
  {
    "id": 19,
    "latex": "e - \\ln \\left( e^y - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 20,
    "latex": "e - \\ln \\left( e^y - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 21,
    "latex": "e^x - 1",
    "js": "function f(x, y) {\n  return Math.exp(x) - 1;\n}",
    "link": ""
  },
  {
    "id": 22,
    "latex": "e^x - \\ln \\left( e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 23,
    "latex": "e^x - \\ln \\left( e - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 24,
    "latex": "e^x - x",
    "js": "function f(x, y) {\n  return Math.exp(x) - x;\n}",
    "link": ""
  },
  {
    "id": 25,
    "latex": "e^x - \\ln \\left( e^x - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(x) - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": "26.0y",
    "latex": "1 - \\ln \\left( 1 - \\ln y \\right)",
    "js": "function f(x, y) {\n  return 1 - Math.log(1 - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 27,
    "latex": "e^x - y",
    "js": "function f(x, y) {\n  return Math.exp(x) - y;\n}",
    "link": ""
  },
  {
    "id": 28,
    "latex": "e^x - \\ln \\left( e^y - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 29,
    "latex": "e^x - \\ln \\left( e^y - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(x) - Math.log(Math.exp(y) - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 30,
    "latex": "e^y - 1",
    "js": "function f(x, y) {\n  return Math.exp(y) - 1;\n}",
    "link": ""
  },
  {
    "id": "31.x0",
    "latex": "1 - \\ln \\left( e - \\ln x \\right)",
    "js": "function f(x, y) {\n  return 1 - Math.E - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 33,
    "latex": "e^y - x",
    "js": "function f(x, y) {\n  return Math.exp(y)-x;\n}",
    "link": ""
  },
  {
    "id": 34,
    "latex": "e^y - \\ln \\left( e^x - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x) - Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 35,
    "latex": "e^y - \\ln \\left( e^x - \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(x) - Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 36,
    "latex": "e^y - y",
    "js": "function f(x, y) {\n  return Math.exp(y) - y;\n}",
    "link": ""
  },
  {
    "id": 37,
    "latex": "e^y - \\ln \\left( e^y - \\ln x \\right)",
    "js": "function f(x, y) {\n  return Math.exp(y) - Math.log(Math.exp(y)-Math.log(x));\n}",
    "link": ""
  },
  {
    "id": 39,
    "latex": "e^e",
    "js": "function f(x, y) {\n  return Math.exp(Math.E);\n}",
    "link": ""
  },
  {
    "id": 40,
    "latex": "e^e - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)-Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 41,
    "latex": "e^e - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)-Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 42,
    "latex": "\\frac{e^e}{x}",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x;\n}",
    "link": ""
  },
  {
    "id": 43,
    "latex": "\\frac{e^e}{x} - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 44,
    "latex": "\\frac{e^e}{x} - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/x - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 45,
    "latex": "\\frac{e^e}{y}",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y;\n}",
    "link": ""
  },
  {
    "id": 47,
    "latex": "\\frac{e^e}{y} - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.E)/y - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": "50.0y",
    "latex": "e-\\ln y",
    "js": "function f(x, y) {\n  return Math.E-Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 51,
    "latex": "\\frac{e^{e^x}}{x}",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/x;\n}",
    "link": ""
  },
  {
    "id": 52,
    "latex": "\\frac{e^{e^x}}{x} - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/x - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": "54.0y",
    "latex": "\\frac{e}{y}",
    "js": "function f(x, y) {\n  return Math.E/y;\n}",
    "link": ""
  },
  {
    "id": 56,
    "latex": "\\frac{e^{e^x}}{y} - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(x))/y-Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 57,
    "latex": "e^{e^y}",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y));\n}",
    "link": ""
  },
  {
    "id": 58,
    "latex": "e^{e^y} - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))-Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 60,
    "latex": "\\frac{e^{e^y}}{x}",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/x;\n}",
    "link": ""
  },
  {
    "id": "61.x0",
    "latex": "\\frac{e}{x}- \\ln x",
    "js": "function f(x, y) {\n  return Math.E/x - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 62,
    "latex": "\\frac{e^{e^y}}{x}- \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/x - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 63,
    "latex": "\\frac{e^{e^y}}{y}",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/y;\n}",
    "link": ""
  },
  {
    "id": 64,
    "latex": "\\frac{e^{e^y}}{y} - \\ln x",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/y - Math.log(x);\n}",
    "link": ""
  },
  {
    "id": 65,
    "latex": "\\frac{e^{e^y}}{y} - \\ln y",
    "js": "function f(x, y) {\n  return Math.exp(Math.exp(y))/y - Math.log(y);\n}",
    "link": ""
  },
  {
    "id": 66,
    "latex": "e - \\ln \\left( e - 1\\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E - 1);\n}",
    "link": ""
  }, 
  {
    "id": "69.00",
    "latex": "e - 1",
    "js": "function f(x, y) {\n  return Math.E - 1;\n}",
    "link": ""
  },
  {
    "id": 70,
    "latex": "e - \\ln \\left( e - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E - Math.log(Math.exp(x) - Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": "71.0y",
    "latex": "e - \\ln \\left( e - \\ln \\left( 1 - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E - Math.log(1 - Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 72,
    "latex": "e - \\ln \\left( e - y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E - y);\n}",
    "link": ""
  },
  {
    "id": 73,
    "latex": "e - \\ln \\left( e - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.E - Math.log(Math.exp(y) - Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 75,
    "latex": "e - \\ln \\left( e^x - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-1);\n}",
    "link": ""
  },
  {
    "id": "77.0y",
    "latex": "e - \\ln \\left( 1 - \\ln \\left(e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(1-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 78,
    "latex": "e - \\ln \\left( e^x - x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-x);\n}",
    "link": ""
  },
  {
    "id": 80,
    "latex": "e - \\ln \\left( e^x - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 81,
    "latex": "e - \\ln \\left( e^x - y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x) - y);\n}",
    "link": ""
  },
  {
    "id": "82.x0",
    "latex": "e - \\ln \\left( e^x - \\ln \\left( 1 - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-Math.log(1-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 83,
    "latex": "e - \\ln \\left( e^x - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x)-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 84,
    "latex": "e - \\ln \\left( e^y - 1 \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-1);\n}",
    "link": ""
  },
  {
    "id": "85.x0",
    "latex": "e - \\ln \\left( 1 - \\ln \\left( e - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(1-Math.log(Math.E-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 86,
    "latex": "e - \\ln \\left( e^y - \\ln \\left( e - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(Math.E-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": "87.0y",
    "latex": "e - y",
    "js": "function f(x, y) {\n  return Math.E - y",
    "link": ""
  },
  {
    "id": "87.x0",
    "latex": "e - \\ln \\left(1 - x \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(1-x);\n}",
    "link": ""
  },
  {
    "id": "88.x0",
    "latex": "e - \\ln \\left( 1 - \\ln \\left( e^x - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(1-Math.log(Math.exp(x)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 89,
    "latex": "e - \\ln \\left( e^y - \\ln \\left( e^x - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(Math.exp(x)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 90,
    "latex": "e - \\ln \\left( e^y - y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-y);\n}",
    "link": ""
  },
  {
    "id": 91,
    "latex": "e - \\ln \\left( e^y - \\ln \\left( e^y - \\ln x \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(Math.exp(y)-Math.log(x)));\n}",
    "link": ""
  },
  {
    "id": 92,
    "latex": "e - \\ln \\left( e^y - \\ln \\left( e^y - \\ln y \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(y)-Math.log(Math.exp(y)-Math.log(y)));\n}",
    "link": ""
  },
  {
    "id": 93,
    "latex": "0",
    "js": "function f(x, y) {\n  return 0;\n}",
    "link": "https://en.wikipedia.org/wiki/0"
  },
  {
    "id": 95,
    "latex": "e - \\ln \\left( e^e - \\ln y  \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.E)-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 96,
    "latex": "x",
    "js": "function f(x, y) {\n  return x;\n}",
    "link": "https://swrdfgd.github.io/"
  },
  {
    "id": 98,
    "latex": "e- \\ln \\left( \\frac{e^e}{x} \\ln y \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(Math.E)/x-Math.log(y));\n}",
    "link": ""
  },
  {
    "id": 99,
    "latex": "\\ln y",
    "js": "function f(x, y) {\n  return Math.log(y);\n}",
    "link": ""
  },
];