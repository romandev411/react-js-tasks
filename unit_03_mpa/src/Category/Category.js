import {useLocation} from 'react-router-dom';

function Category({nav}) {
    const {pathname} = useLocation();

    return (
        <section className="category">
            <h1>Category</h1>

            <ul>
                {nav.map((item, index)=> {
                    return <li key={index}>
                            <a href={`${pathname}${item.href}`}>{item.text}</a>
                        </li>
                 })}
            </ul>
        </section>
    );
}

export default Category;
