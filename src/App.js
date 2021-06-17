import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi Friend <code>src/App.js</code> and save to reload.
        </p>
          Learn React
       We haave Authentication now
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
