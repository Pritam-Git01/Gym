
import './App.css';
import { store } from './App/store'
import { Provider } from 'react-redux'

function App() {
  return (
   <div className='App'>
      <Provider store={store}>
        
      </Provider>
      </div>
    )
 
}

export default App;
