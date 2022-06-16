// var React = require('react');
// var ReactDom  = require('react-dom');
import React from "react";
import ReactDom from "react-dom";

// ReactDom.render('what to show', 'where to show', 'callback func');
ReactDom.render( <h1>Hello World!</h1>, document.getElementById('root'));
ReactDom.render( 
                  <><h1>Hello World!</h1><h2>Hello World!</h2><p>Hello World!</p></>
                  , document.getElementById('root')
                );
