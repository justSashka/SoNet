import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/MainContent/Home/Home.jsx';
import MyPage from './components/MainContent/Mypage/MyPage.jsx';
import News from './components/MainContent/News/News.jsx';
import Messages from './components/MainContent/Messages/Messages.jsx';
import Friends from './components/MainContent/Friends/Friends.jsx';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='appWrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mypage' element={<MyPage posts={props.appState.postsData} dispatch={props.dispatch} />} />
        <Route path='/news' element={<News />} />
        <Route path='/messages' element={<Messages dialogs={props.appState.dialogsData} />} />
        <Route path='/friends' element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
