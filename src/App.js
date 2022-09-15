import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css'
import './App.css';

function App() {
  return (
    <>
		<Authenticator>
			{({ signOut, user }) => (
				<div className="App">
					<header className="App-header">
					<p>
						Hey {user.username}, welcome to my channel, with auth!
					</p>
					<button onClick={signOut}>Sign out</button>
					</header>
				</div>
			)}
		</Authenticator>
	</>
	
  );
}

export default App;