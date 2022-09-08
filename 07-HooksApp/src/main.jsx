import React from 'react'
import ReactDOM from 'react-dom/client'
// import { TodoApp } from './09-useReducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './07-useMemo/memoHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
//import { Padre } from './08-tarea-memo/Padre'
import { BrowserRouter } from "react-router-dom";
import './index.css'

// import './09-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='container' style={{ marginTop: '20px' }}>
      <MainApp />
    </div>
  </ BrowserRouter>

)
