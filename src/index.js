// var React = require('react');
// var ReactDom  = require('react-dom');
import React from 'react';
import ReactDom from 'react-dom';

// ReactDom.render('what to show', 'where to show', 'callback func');
// ReactDom.render( <h1>Hello World!</h1>, document.getElementById('root'));
const data1 = "India Grow";
function randnum(x = 1, y = 1){
  return x + y ;
}
const cdate = new Date().toLocaleDateString();
const ctime = new Date().toLocaleTimeString();
const img1 = 'https://picsum.photos/300/350';
const img2 = 'https://picsum.photos/300/350';
const img4 = 'https://picsum.photos/300/350';
const img3 = 'https://picsum.photos/300/350';
const img5 = 'https://picsum.photos/300/350';
// lo
// console.log(`hello my country ${data1}`)
ReactDom.render( 
                  // <React.Fragment>
                  <>
                  <h1>Hello World! {`${data1} ${randnum(5,1)}`}</h1> {/* template literals */}
                  <h2 contentEditable="true">This Is Content Editable.</h2>
                  <p>Hello World! {data1 + ' - ' +  randnum(3,7)}</p>
                  <p>Todays Date is {cdate}</p>
                  <p>Current time is {ctime}</p>
                  <img src={img1} alt="randomimage" />
                  <img src={img2} alt="randomimage2" />
                  <img src={img3} alt="randomimage3" />
                  <img src={img4} alt="randomimage4" />
                  <img src={img5} alt="randomimage5" />
                  <ol>
                    <li>S 1</li>
                    <li>S 2</li>
                    <li>S 3</li>
                  </ol>
                  </>
                  // </React.Fragment>
                  , document.getElementById('root')
                );
