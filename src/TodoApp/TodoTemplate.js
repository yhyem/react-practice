/*
    화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여줍니다.
    childre으로 내부 JSX를 props로 받아와 렌더링 해줍니다.
*/

import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;