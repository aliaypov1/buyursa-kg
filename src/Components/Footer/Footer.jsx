import React from 'react';

const Footer = () => {
    return (
        <footer style={{width:'100%',padding:'10px',background:'#1e1e1e',display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'280px'}}>
            <div className="footer__logo" style={{maxWidth: '1220px', width: '100%', margin: '0 auto'}}>
                <h3 style={{fontSize:'22px',color:"white"}}>
                    Buyursa.KG
                </h3>
            </div>
        </footer>
    );
};

export default Footer;