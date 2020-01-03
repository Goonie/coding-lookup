import React, { useState, useEffect, ChangeEvent } from 'react';

const GitHub: React.FC = () => {
	const [ username, setUsername ] = useState('Goonie');
	const [ id, setId ] = useState('');

	const fetchUser = (username: string) => {
		fetch('https://api.github.com/users/' + username)
			.then(response => response.json())
			.then(response => {
				setId(response.id);
			});
	};

	useEffect(() => {
		fetchUser(username);
	}, [username]);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value);
	};

	return(
		<article>
			<h1>GitHub id</h1>
			<input onChange={onChange} value={username}/>
			<p>GitHub id: {id}</p>
		</article>
	);
};

export default GitHub;
