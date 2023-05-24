import logo from './logo.svg';
import './App.css';
import { store } from './App/store'
import { Provider } from 'react-redux'

function App() {
  return (
    ReactDOM.render(
      <Provider store={store}>
        
      </Provider>,
      document.getElementById('root')
    )
  );
}

export default App;
