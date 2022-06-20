import React from "react";

function Paragraph() {
    var secondp = {
        color: '#fa9191',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: '600',
        fontFamily: '"Sofia", sans-serif'
      };
    return <p style={secondp}>This is a Paragraph.</p>;
}
export default Paragraph;