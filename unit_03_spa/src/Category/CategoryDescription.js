import {useParams, Link} from 'react-router-dom';

function CategoryDescription() {
    const {name} = useParams();

    return (
        <section className="category-desc">
            <h1>Category: {name}</h1>

            <Link to="/cat">Назад</Link>
        </section>
    );
}

export default CategoryDescription;
