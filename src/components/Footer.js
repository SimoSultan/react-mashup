import React from "react";

let style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "1%",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

let link = {
  fontFamily: "Roboto",
  textDecoration: 'none',
  fontSize: 'larger',
  margin: '0',
  marginTop: '1%',
}



function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <p style={link}><strong>Portfolio:</strong> <a href="https://www.simonmcurran.com/" target="blank">simonmcurran.com - (v2 is next React project)</a></p>
        <p style={link}><strong>Source Code:</strong> <a href="https://github.com/SimoSultan/react-mashup" target="blank">github.com/SimoSultan/react-mashup</a></p>
      </div>
    </div>
  );
}

export default Footer;