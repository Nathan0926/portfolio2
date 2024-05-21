const projects = [
    {
        name: "Build a form",
        description: "Learning how to make and design a form",
        link: "https://nathan0926.github.io/spicebowl.github.io/",
    },
    {
        name: "Local Storage",
        description: "Learning how to use local storage to store notes",
        link: "https://nathan0926.github.io/notes.github.io/",
    },
    {
        name: "javaScript Game",
        description: "Utilizing JavaScript to make a basic game",
        link: "https://nathan0926.github.io/RPS.github.io/",
    },
    {
        name: "Chat app",
        description: "Using backend and frontend I made a chat app that function if ran through render",
        link: "https://github.com/Nathan0926/ChatApp",
    },
    {
        name: "Registration form",
        description: "This Node.js app allows event registration, storing user details in MongoDB Atlas. ",
        link: "https://github.com/Nathan0926/registration.github.io",
    },
    {
        name: "",
        description: "",
        link: "",
    },
];

const projectList = document.getElementById("project-list");

function createProjectHTML(project) {
    if (project.name && project.description && project.link) {
        return `
            <div class="project">
                <h4><a href="${project.link}" target="_blank">${project.name}</a></h4>
                <p>${project.description}</p>
            </div>
        `;
    }
    return '';
}

projects.forEach(function (project) {
    const projectHTML = createProjectHTML(project);
    if (projectHTML) {
        projectList.insertAdjacentHTML("beforeend", projectHTML);
    }
});





