// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');


// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

//selecting the unordered list, there are 3 unordered list ---the third row is at index 3
var rowThree = rootEl.children('ul').eq(2);
//targets the first list item in row 3! (bc that is at index 0)
rowThree.children().eq(0).text('0');

rowThree.children().eq(1).text('0');