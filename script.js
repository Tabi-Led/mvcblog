document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const homeLink = document.getElementById('home-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const loginLink = document.getElementById('login-link');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomePage();
    });

    dashboardLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (isLoggedIn()) {
            loadDashboardPage();
        } else {
            promptLogin();
        }
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadLoginPage();
    });

    function loadHomePage() {
        contentDiv.innerHTML = `
            <h1>Home</h1>
            <div class="post">
                <h2 class="post-title">Sample Post</h2>
                <p class="post-meta">Posted by <strong>user1</strong> on <em>2024-05-22</em></p>
                <p>This is a sample blog post.</p>
                <div class="comment">
                    <p><strong>user2</strong> commented on <em>2024-05-23</em></p>
                    <p>Great post!</p>
                </div>
            </div>
        `;
    }

    function loadDashboardPage() {
        contentDiv.innerHTML = `
            <h1>Dashboard</h1>
            <button id="new-post-button">New Post</button>
            <div class="post">
                <h2 class="post-title">My Post</h2>
                <p class="post-meta">Posted by <strong>user1</strong> on <em>2024-05-22</em></p>
                <p>This is my blog post.</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        document.getElementById('new-post-button').addEventListener('click', () => {
            loadNewPostForm();
        });

        // Add event listeners for edit and delete buttons here
    }

    function loadLoginPage() {
        contentDiv.innerHTML = `
            <h1>Log In</h1>
            <form id="login-form">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Log In</button>
            </form>
        `;

        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            login();
        });
    }

    function loadNewPostForm() {
        contentDiv.innerHTML = `
            <h1>New Post</h1>
            <form id="new-post-form">
                <input type="text" id="post-title" placeholder="Title" required>
                <textarea id="post-content" placeholder="Content" required></textarea>
                <button type="submit">Create Post</button>
            </form>
        `;

        document.getElementById('new-post-form').addEventListener('submit', (e) => {
            e.preventDefault();
            createPost();
        });
    }

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you would typically send a request to the server to authenticate the user
        // For this example, we'll just store the username in localStorage

        localStorage.setItem('username', username);
        loadHomePage();
    }

    function isLoggedIn() {
        return localStorage.getItem('username') !== null;
    }

    function createPost() {
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        // Here you would typically send a request to the server to save the post
        // For this example, we'll just log the post to the console

        console.log('New Post:', { title, content });
        loadDashboardPage();
    }

    // Load the home page by default
    loadHomePage();
});
