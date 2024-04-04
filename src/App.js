import { Provider } from "react-redux";
import store from "./store/store";
import CounterComponent from "./components/CounterComponent";

import React from 'react'

const App = () => {
  return (

    <Provider store={store}>
      <div>
        <CounterComponent />
      </div>
    </Provider>

  )
}

export default App
