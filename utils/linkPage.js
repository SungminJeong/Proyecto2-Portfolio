export const linkPage = (id, page) => {
	const link = document.querySelector(id);
	link.addEventListener("click", () => page());
};

//main.js
//linkPage("#homelink", Home);
//linkPage("#projectslink", Projects);