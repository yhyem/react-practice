import logo from './logo.svg';
import './App.css';
import EventPractice from './EventPractice'
import ValidationSample from './ValidationSample'
import { Component, useState } from 'react';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'};
      </button>
      <hr></hr>
      {visible && <Info></Info>}
    </div>
  )
}

export default App;
