import Nav from '../Header/Nav';

function Sidebar({nav}) {
    return (
       <aside className="sidebar">
            <Nav nav={nav}/>

            <ul>
                <li>Страница 1</li>
                <li>Страница 2</li>
                <li>Страница 3</li>
            </ul>
       </aside>
    )
}

export default Sidebar;
