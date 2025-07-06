function getElementWidth(contentWidth, padding, border) {
    // Convert all values to numbers
    const content = parseFloat(contentWidth);
    const pad = parseFloat(padding);
    const brd = parseFloat(border);

    // Calculate total width
    return content + pad * 2 + brd * 2;
}


console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
