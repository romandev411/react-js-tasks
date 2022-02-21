import React, {useState} from 'react';
import './App.css';

function App() {
    const input2Ref = React.createRef();
    const [arrVal, setArrVal] = useState([]);

    const h1 = React.createElement('h1', {}, 'unit_08');
    const h2 = React.createElement('h2', { className: 'text-orange' }, 'header 2');
    const p = React.createElement('p', { style: { color: 'red' } }, 'this is p');
    const input = React.createElement('input', { currentvalue: 55 },);
    const p1 = React.createElement('p', {}, 'hi');
    const p2 = React.createElement('p', {}, 'world');
    const div = React.createElement('div', { className: 'text-grey' }, p1, p2);
    const input2 = React.createElement('input', {ref: input2Ref}, );
    const button = React.createElement('button', { onClick: getValInput }, 'button');


    function getValInput() {
        const val = input2Ref.current.value;
        if (val.length) setArrVal([...arrVal, val])
    }

    return (
        <>
            {h1}
            {h2}
            {p}
            {div}
            {input}

            <hr />

            {input2}
            {button}

            <ul>
                {
                    arrVal.map((el, i)=> React.createElement('li', {key: i}, el))
                }
            </ul>
        </>
    );
}

export default App;
