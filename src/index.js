// var React = require('react');
// var ReactDom  = require('react-dom');
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

// ReactDom.render('what to show', 'where to show', 'callback func');
// ReactDom.render( <h1>Hello World!</h1>, document.getElementById('root'));
const data1 = "India Grow";
function randnum(x = 1, y = 1){
  return x + y ;
}
const cdate = new Date().toLocaleDateString();
const ctime = new Date().toLocaleTimeString();
const img1 = 'https://picsum.photos/200/350';
const img2 = 'https://picsum.photos/200/350';
const img4 = 'https://picsum.photos/200/350';
const img3 = 'https://picsum.photos/200/350';
const img5 = 'https://picsum.photos/200/350';
var secondp = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: '600',
  fontFamily: '"Sofia", sans-serif'
};

// let crDate = new Date(2022, 6, 5, 19);
let crDate = new Date();
crDate = crDate.getHours();
console.log(crDate);
const cStyle = {
};

var greetingmsg;
if ( crDate >= 1 && crDate < 12 ) {
  greetingmsg = "Good Morning";
  cStyle.color = 'green';
}else if ( crDate >= 12 && crDate < 20 ) {
  greetingmsg = "Good After Noon";
  cStyle.color = '#CCCC00';
} else {
  greetingmsg = "Good Night";
  cStyle.color = 'black';
}
// console.log(cStyle);
// console.log(`hello my country ${data1}`)
ReactDom.render( 
                  // <React.Fragment>
                  <>
                  <div className="container">

                    <div className='greeting'>
                      <h2 className='h2-hello'>Hello Friend, <span style={cStyle}>{greetingmsg}</span></h2>
                    </div>

                    <h1 className='h1-title'>Hello World! {`${data1} ${randnum(5,1)}`}</h1> {/* template literals */}

                    <h2 contentEditable="true" style={{color: '#fa9191',textAlign:'center',textTransform: 'capitalize',fontWeight: '600',fontFamily: '"Sofia", sans-serif'}}>This Is Content Editable.</h2>

                    <p className="ptag">Hello World! {data1 + ' - ' +  randnum(3,7)}</p>

                    <p style={{color: '#fa9191',textAlign:'center',textTransform: 'capitalize',fontWeight: '600',fontFamily: '"Sofia", sans-serif'}}>Todays Date is {cdate} use inline css object in style attr</p>

                    <p style={secondp}>Current time is {ctime} use style attr in inline style external object</p>

                    <div className='imageDiv'>
                      <img src={img1} alt="randomimage" />
                      <img src={img2} alt="randomimage2" />
                      <img src={img3} alt="randomimage3" />
                      <img src={img4} alt="randomimage4" />
                      <img src={img5} alt="randomimage5" />
                    </div>

                    <ol>
                      <li>S 1</li>
                      <li>S 2</li>
                      <li>S 3</li>
                    </ol>
                  </div>
                  </>
                  // </React.Fragment>
                  , document.getElementById('root')
                );
