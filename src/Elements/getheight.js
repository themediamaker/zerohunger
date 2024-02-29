export function genHeightNumberRange(start, end, step = 0.1) {
    const range = [];
    for (let i = start; i <= end; i += step) {
        `${range.push(parseFloat(i.toFixed(1)))}`;
    }
    return range;
}

export function feetToCm(height){
    const feet = height;
    const totalInches = feet * 12;
    const cm = totalInches * 2.54; 
    return parseFloat(cm.toFixed(2));
}
