// import React from 'react';

function add(a, b){
    let c;
    return c = a + b;
}
function sub(a, b){
    let c;
    return c = a - b;
}
function div(a, b){
    let c,d;
    c = a / b;
    return d = (Math.round(c * 100) / 100).toFixed(2);
}
function mul(a, b){
    let c;
    return c = a * b;
}
export default add;
export { mul, sub, div };