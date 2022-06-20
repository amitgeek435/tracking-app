import React from "react";

function Greetings() {
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
    return (
        <>
            <h2 className='h2-hello'>Hello Friend, <span style={cStyle}>{greetingmsg}</span></h2>
        </>
    );
}
export default Greetings;