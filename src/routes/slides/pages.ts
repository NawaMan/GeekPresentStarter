// The slide list — this array IS the deck: the order you present in, and what the
// arrows and the table of contents read.
//
// To add a slide: copy content.html/ to <name>.html/ (both files — +layout.js is required),
// then add a line below. `hidden: true` makes it an appendix: reachable, but out of the march.
export const pages = [
	{ path: 'title.html', title: 'Title' },
	{ path: 'content.html', title: 'Content' }
];
