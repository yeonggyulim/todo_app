import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value값 초기화
            //submit 이벤트는 브라우저에서 새로고침 발생
            // 이를 방지하기 위한 함수
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input 
                placeholder='할 일을 입력하세요' 
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;