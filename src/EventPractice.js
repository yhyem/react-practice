import React, { useState } from "react";

const EventPractice = () => {

    const onKeyPress = e => {
        if (e.key === 'Enter')
            onClick();
    }

    const [username, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setUserName('');
        setMessage('');
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="아무거나 입력하세요"
                value={username}
                onChange={onChangeUserName}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                확인
            </button>
        </div>
    )

}

export default EventPractice;