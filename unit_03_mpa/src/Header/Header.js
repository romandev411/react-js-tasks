function Header({nav}) {
    return (
        <header className="header">
            <nav>
                <ul>
                    {nav.map((item, index)=> {
                        return <li key={index}><a href={item.href}>{item.text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
