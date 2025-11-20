async function loaddata() {
    const response=await fetch("https://localhost:3000/posts");
    const data=await response.json();
}