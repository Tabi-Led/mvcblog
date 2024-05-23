body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

nav {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
}

nav ul li a:hover {
    background-color: #555;
}

#content {
    padding: 20px;
}

.post {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.post-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.post-meta {
    color: #777;
    margin-bottom: 20px;
}

.comment {
    margin-top: 20px;
    padding: 10px;
    border-top: 1px solid #eee;
}

.comment-meta {
    color: #777;
    font-size: 0.9em;
}

form {
    display: flex;
    flex-direction: column;
}

input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
