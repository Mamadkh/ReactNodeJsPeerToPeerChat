import logo from './logo.svg';
import './App.css';

import Chat from './chat/chat'
import Process from './process/process'
import Home from './home/home'

import { Routes, Router, Route, BrowserRouter } from 'react-router-dom'

import './App.scss'
import React from 'react'
import io from 'socket.io-client'

const socket = io.connect('/')

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        ></Chat>
      </div>
      <div className='left'>
        <Process></Process>
      </div>
    </React.Fragment>
  )
}

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home socket={socket}></Home>}>
            
          </Route>
          <Route path='/chat/:roomname/:username'
            component={Appmain}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

    // <Router>
    //   <div className="App">
    //     <Router>
    //       <div className='App'>
    //         <Switch>
    //           <Route path='/' exact>
    //             <Home socket={socket}></Home>
    //           </Route>
    //           <Route path='/chat/:roomname/:username'
    //             component={Appmain}>
    //           </Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   </div>
    // </Router>
  );
}

export default App;
