const functionData = [
	{
    "id": "544",
    "latex": "e-\\ln \\left(e^x - \\ln \\left(e^y - \\ln \\left(e - \\ln x \\right) \\right) \\right)",
    "js": "function f(x, y) {\n  return Math.E - Math.log(Math.exp(x- Math.log(Math.exp(y)- Math.log(Math.E - Math.log(x)))));\n}",
    "link": ""
  },
  {
    "id": "f588.x0",
    "latex": "\\ln \\left(1 + e^{1-e^e} \\right)",
    "js": "function f(x, y) {\n  return Math.log(1+Math.exp(1-Math.exp(Math.E)));\n}",
    "link": ""
  },
];