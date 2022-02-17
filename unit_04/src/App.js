import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
    let count4 = 0;
    const [task5Text, setTask5Text] = useState();
    const [bg, setBg] = useState();
    const [range, setRange] = useState('0');
    const [textNumbers, setTextNumbers] = useState('');
    const out6 = React.createRef();
    const input10 = React.createRef();

    function task1() {
        console.log('task1');
    }
    function task2(e) {
        e.target.classList.add('active');
    }
    function task3(e) {
        console.log(e.target.value)
    }
    function task4() {
        console.log(++count4);
    }
    function task5(e) {
        setTask5Text(e.target.checked ? e.target.value : 0);
    }
    function task6(e) {
        out6.current.textContent = e.target.value;
    }
    function task7() {
        const rgb = `rgb(${randomInt()},${randomInt()},${randomInt()})`
        setBg(rgb);
    }
    function task8(e) {
        setTimeout(()=> {
            const lasElem = e.target.value[e.target.value.length-1];

            if (+lasElem) {
                setTextNumbers(textNumbers+1)
            } else {
                setTextNumbers(textNumbers+0)
            }
        }, 0);
    }
    function task9(e) {
        setRange(e.target.value)
    }
    let ar10 = [5, 6, 7];
    function task10() {
        ar10.push(input10.current.value);
        console.log(ar10)
    }

    function randomInt() {
        return Math.round(Math.random() * 255);
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <button className="task-1" onClick={task1}>Push</button>
            </section>
            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2}></div>
            </section>
            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3} />
            </section>
            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>Count</button>
            </section>
            <section>
                <h2>Task 5</h2>
                <input type="checkbox" onChange={task5} />
                <div className="out-5">{task5Text}</div>
            </section>
            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div className="out-6" ref={out6}></div>
            </section>
            <section>
                <h2>Task 7</h2>
                <div className="block-7" style={{'backgroundColor': bg}}></div>
                <button className="task-7" onClick={task7}>Color</button>
            </section>
            <section>
                <h2>Task 8</h2>
                <input type="text" className="task-8" onKeyPress={task8}></input>
                <div className="out-8">{textNumbers}</div>
            </section>
            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div className="out-9">{range}</div>
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={input10}></input>
                <button className="task-10" onClick={task10}>Push</button>
            </section>
        </>
    );
}

export default App;
