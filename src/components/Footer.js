import React from "react";

let style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
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
}



function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <a style={link} href="https://www.simonmcurran.com/">simonmcurran.com</a>
        <p style={link}><strong>Source Code:</strong> <a href="https://github.com/SimoSultan/react-mashup" target="blank">github.com/SimoSultan/react-mashup</a></p>
      </div>
    </div>
  );
}

export default Footer;