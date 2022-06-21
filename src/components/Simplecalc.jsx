// import React from 'react';

function add(a, b){
    // let c;
    return  a + b;
}
function sub(a, b){
    // let c;
    return  a - b;
}
function div(a, b){
    let c;
    c = a / b;
    return  (Math.round(c * 100) / 100).toFixed(2);
}
function mul(a, b){
    // let c;
    return  a * b;
}
export default add;
export { mul, sub, div };