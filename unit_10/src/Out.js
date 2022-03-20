import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectValue,
    selectTest,
    changeText,
} from './app/taskReducerSlice';

export default function Out() {
    let inputRef = React.createRef();
    const task1 = useSelector(selectValue); // получаем данные из store
    const text = useSelector(selectTest); // получаем данные из store
    const dispatch = useDispatch();

    function textHandler() {
        console.log(inputRef.value)
        dispatch(changeText(inputRef.current.value))
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <br />
            <button onClick={textHandler}>{text}</button>
            <hr/>
            <h2>Task 1</h2>
            <p>{task1}</p>
        </div>
    );
}
