import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './styles/app.css'
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './pages/ProfileScreen';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				//logged in
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email,
				}));
				console.log(user);
			} else {
				//logged Out
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch])

	return (
		<div className="app">
			<Router>
				{
					!user ?
						(
							<LoginScreen />
						)
						:
						(
							<Switch>
								<Route path="/profile">
									<ProfileScreen />
								</Route>
								<Route exact path="/">
									<HomeScreen />
								</Route>
							</Switch>
						)
				}
			</Router>
		</div>

	);
}

export default App;
