// var React = require('react');
// var ReactDom  = require('react-dom');
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from './components/App';
import Greetings from './components/Greeting';
import Inlinestyle from './components/Inlinestyle';

// ReactDom.render('what to show', 'where to show', 'callback func');
// ReactDom.render( <h1>Hello World!</h1>, document.getElementById('root'));
const data1 = "India Grow";
function randnum(x = 1, y = 1){
  return x + y ;
}

const img1 = 'https://picsum.photos/200/350';
const img2 = 'https://picsum.photos/200/350';
const img4 = 'https://picsum.photos/200/350';
const img3 = 'https://picsum.photos/200/350';
const img5 = 'https://picsum.photos/200/350';



// console.log(`hello my country ${data1}`)
ReactDom.render( 
                  // <React.Fragment>
                  <>
                  <div className="container">

                    <div className='greeting'>
                      <Greetings />
                    </div>

                    <h1 className='h1-title'>Hello World! {`${data1} ${randnum(5,1)}`}</h1> {/* template literals */}

                    <p className="ptag">Hello World! {data1 + ' - ' +  randnum(3,7)}</p>

                    <Inlinestyle />

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

                    <div className='learnComponent'>
                        <App />
                    </div>
                  </div>
                  </>
                  // </React.Fragment>
                  , document.getElementById('root')
                );
