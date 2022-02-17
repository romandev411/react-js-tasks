import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
    const [st1, setSt1] = useState('');
    const [st2, setSt2] = useState(0);
    const [st3, setSt3] = useState('');
    const [st4, setSt4] = useState(0);
    const [st5, setSt5] = useState(0);
    const [st6, setSt6] = useState('');
    const [st7, setSt7] = useState('');
    const [st8, setSt8] = useState('');
    const [st9, setSt9] = useState('0');
    const [st10, setSt10] = useState([]);

    const input1 = React.createRef();
    const input2 = React.createRef();

    function task1() {
        const val = input1.current.value;
        setSt1(val);
    }
    function task2() {
        const count = st2 + 1;
        setSt2(count);
    }
    function task3(e) {
        setSt3(e.target.value);
    }
    function task4() {
        const count = st4 + 1;
        setSt4(count);
    }
    function task5(e) {
        setSt5(e.target.checked ? e.target.value : 0);
    }
    function task6(e) {
        setSt6(e.target.value);
    }
    function task7() {
        const rgb = `rgb(${randomInt()},${randomInt()},${randomInt()})`
        setSt7(rgb);
    }
    function task8(e) {
        setTimeout(() => {
            const lasElem = e.target.value[e.target.value.length - 1];

            if (+lasElem) {
                setSt8(st8 + 1)
            } else {
                setSt8(st8 + 0)
            }
        }, 0);
    }
    function task9(e) {
        setSt9(e.target.value)
    }
    function task10(e) {
        const val = input2.current.value;
        const arrVal = [...st10, val];
        setSt10(arrVal);
    }

    function randomInt() {
        return Math.round(Math.random() * 255);
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <input type="text" ref={input1} />
                <button className="task-1" onClick={task1}>Push</button>
                <div>{st1}</div>
            </section>

            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2}></div>
                <div>{st2}</div>
            </section>

            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3} />
                <div>{st3}</div>
            </section>

            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>Count</button>
                <div>{st4}</div>
            </section>

            <section>
                <h2>Task 5</h2>
                <input type="checkbox" onChange={task5} />
                <div>{st5}</div>
            </section>

            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div>{st6}</div>
            </section>

            <section>
                <h2>Task 7</h2>
                <div className="block-7" style={{ 'background': st7 }}></div>
                <button className="task-7" onClick={task7}>Color</button>
                <div>{st7}</div>
            </section>

            <section>
                <h2>Task 8</h2>
                <input type="text" className="task-8" onKeyPress={task8}></input>
                <div>{st8}</div>
            </section>

            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div>{st9}</div>
            </section>

            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={input2}></input>
                <button className="task-10" onClick={task10}>Push</button>
                <div>
                    {st10.map((el, index)=> <div key={index}>{el}</div> )}
                </div>
            </section>
        </>
    );
}

export default App;
