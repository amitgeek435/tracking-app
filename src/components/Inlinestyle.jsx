import React from "react";


function Inlinestyle() {
    const cdate = new Date().toLocaleDateString();
    const ctime = new Date().toLocaleTimeString();
    
    var secondp = {
        color: '#fa9191',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: '600',
        fontFamily: '"Sofia", sans-serif'
    };
    return(
        <>
            <h2 style={{color: '#fa9191',textAlign:'center',textTransform: 'capitalize',fontWeight: '600',fontFamily: '"Sofia", sans-serif'}}>This Is Content Editable.</h2>

            <p style={{color: '#fa9191',textAlign:'center',textTransform: 'capitalize',fontWeight: '600',fontFamily: '"Sofia", sans-serif'}}>Todays Date is {cdate} use inline css object in style attr</p>

            <p style={secondp}>Current time is {ctime} use style attr in inline style external object</p>
        </>
    );
}
export default Inlinestyle;