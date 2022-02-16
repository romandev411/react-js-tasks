import Nav from './Nav'

function Header({site}) {
    return (
        <header className="header">
            <h1>{site.site_name}</h1>
            <h2>{site.site_title}</h2>
            <Nav nav={site.nav}/>
        </header>
    )
}

export default Header;
