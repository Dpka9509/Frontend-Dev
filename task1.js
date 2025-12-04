async function fetchdata(params) {
    const loader=document.getElementById("loader");
    const tableBody=document.querySelector("#userTable tbody");

    loader.style.display="block";
    tableBody.innerHTML="";

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();

        loader.style.display="none";

        data.forEach(user=>{
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            `;

            tableBody.appendChild(row);
        });
    }
    catch (error) {
        loader.innerHTML = "Failed to load data!";
        console.error(error);
    }
}
document.getElementById("refreshbtn").addEventListener("click",fetchdata);
fetchdata();