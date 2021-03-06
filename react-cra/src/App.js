import './App.css';
import React from 'react';
import CalculatorUsingRedux from './CalculatorUsingRedux/calculator.js';
import { createStore } from 'redux';
import { rootReducer } from './CalculatorUsingRedux/Reducers';
import { Provider } from 'react-redux';

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={myStore}>
      <CalculatorUsingRedux />
    </Provider>
  )
}


// // Uncomment this to show the Calculator:
// import './App.css';
// import React from 'react';
// import Calculator from './Calculator/calculator.js';

// export default function App() {
//   return (
//     <Calculator />
//   )
// }


// // Uncomment this to show the GithubUserSearchApp:
// import './App.css';
// import React from 'react';
// import GithubUserSearch from './GithubUserSearch/main.js';

// export default function App(){
//   return(
//       <GithubUserSearch/>
//     )
// }


// //Uncomment all of this to show login&cart pages:
// import './App.css';

// // for react-router-dom to build multipage web app:
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './login&cart/forLogin&Cart.css'

// // import the pages login and cart:
// // import Temp from './login&cart/temp.js';
// import Header from './login&cart/header.js';
// import Login from './login&cart/login.js'; 
// import Cart from './login&cart/cart.js';

// export default function App(){
//   return(
//     <Router>
//       <Header/>
//       <Switch>
//         <Route exact path="/" component={Login}/>
//         <Route exact path="/cart" component={Cart}/>
//       </Switch>
//     </Router>    
//   )
// }

