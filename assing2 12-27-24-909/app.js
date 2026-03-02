// Navigation
const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" }
];

const navList = document.getElementById("nav-list");

navItems.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.name;

    li.addEventListener("click", () => {
        document.getElementById(item.id).scrollIntoView({
            behavior: "smooth"
        });
    });

    navList.appendChild(li);
});


// Projects
const projects = [
    {
        title: "AccessVault (Event-Driven RBAC Platform)",
        description:
            "Designed and built a scalable Role-Based Access Control platform using event-driven architecture. Implemented asynchronous audit logging via RabbitMQ to decouple authorization from logging.",
        tech: ["Spring Boot", "RabbitMQ", "MongoDB", "React", "AOP"],
        teamSize: 1,
        github: "https://github.com/anshbkeai/RBAC-BACKEND",
        deploy: "https://rbac-frontend-three.vercel.app/"
    },
    {
        title: "Authentication Service (OAuth2 + JWT)",
        description:
            "Built a secure authentication microservice implementing OAuth2 and JWT with fine-grained RBAC roles and token validation.",
        tech: ["Spring Security", "PostgreSQL", "OAuth2", "JWT"],
        teamSize: 1
    },
    {
        title: "Analytics Dashboard API",
        description:
            "Developed high-performance reporting APIs with optimized queries and caching strategies using Redis.",
        tech: ["Spring Boot", "MySQL", "Redis"],
        teamSize: 1
    }
];

const projectList = document.querySelector(".project-list");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
            ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join("")}
        </div>
        <p><strong>Team Size:</strong> ${project.teamSize}</p>
        ${
            project.github 
            ? `<a href="${project.github}" target="_blank">GitHub</a>` 
            : ""
        }
        ${
            project.deploy 
            ? ` | <a href="${project.deploy}" target="_blank">Live</a>` 
            : ""
        }
    `;

    projectList.appendChild(card);
});