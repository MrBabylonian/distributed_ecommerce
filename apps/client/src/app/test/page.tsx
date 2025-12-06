import { auth } from "@clerk/nextjs/server";

const TestPage = async () => {
	const user = await auth();

	const token = await user.getToken();

	if (!token) return <div>Not logged in</div>;

	console.log(token);

	const response = await fetch("http://localhost:8000/test", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	console.log(data);

	return (
		<div>
			<h1>Protected Test Page</h1>
		</div>
	);
};

export default TestPage;
