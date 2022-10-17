import React, { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; //ref 설정 부분

    /*
        컴포넌트의 생성자 메서드 -> 컴포넌트 만들때 처음으로 실행
     */
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    /*
        마운트 될때 or 업데이트 될때
        props로 받아 온 값 state에 동기화 시키는 용도
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    /*
       첫 렌더링을 마친 후(Did) 실행
       ex) setTimeout, setInterval, 네트워크 요청과 같은 비동기 작업
    */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /*
        리렌더링을 시작할지 여부를 지정하는 메서드
        반드시 true or false 반환
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4라면 리렌더링 하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    /*
        결과물이 실제로 브라우저에 적용되기 전 호출
        반환 값은 componentDidUpdate에서 세번째 파라미터인 snapshot값으로 전달
        ex) 스크롤바 위치 유지 (업데이트 하기 직전의 값을 참고할 일 있을때 활용)
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBefoeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    /*
        리랜더링이 완료한 후 실행
        DOM관련 처리를 해도 무방
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    /*
        컴포넌트를 Dom에서 제거할때 실행
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }

}

export default LifeCycleSample;