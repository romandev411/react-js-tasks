import {useParams} from 'react-router-dom';

function CategoryDescription() {
    const {name} = useParams();

    return (
        <section className="category-desc">
            <h1>Category: {name}</h1>

            <a href="/cat">Назад</a>
        </section>
    );
}

export default CategoryDescription;
