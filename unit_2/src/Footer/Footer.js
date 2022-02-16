import Nav from '../Header/Nav';

function Footer({site}) {
    return (
        <footer className="footer">
            <h3>{site.site_name}</h3>
            <Nav nav={site.nav}/>
       </footer>
    )
}

export default Footer;
