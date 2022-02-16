import {NavLink} from 'react-router-dom';

function Header({nav}) {
    return (
        <header className="header">
            <nav>
                <ul>
                    {nav.map((item, index)=> {
                        return <li key={index}><NavLink to={item.href}>{item.text}</NavLink></li>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
