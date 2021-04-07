import React from 'react'

var d = new Date();
var n = d.getFullYear();

function Footer() {
    return (
        <div className="p-3 text-center footerStyle mainColorbg f" >
           Copyright © {n} - Dwidasa Samara Indonesia
        </div>
    )
}

export default Footer
