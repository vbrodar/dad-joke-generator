import React from 'react';
function Footer(){

    var currentYear = new Date().getFullYear();

    return( 
        <footer>Copyright © {currentYear} by Vedran Brodar </footer>
    );
}

export default Footer;