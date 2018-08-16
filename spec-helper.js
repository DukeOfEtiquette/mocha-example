// My console color scheme does not like some of the mocha default colors...
const colors = require('mocha/lib/reporters/base').colors;

colors['pass'] = 92;
colors['error stack'] = 92;
colors['light'] = 91;
colors['diff gutter'] = 91;
colors['fase'] = 91;