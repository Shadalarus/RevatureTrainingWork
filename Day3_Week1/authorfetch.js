function displayAuthors(){
    let ul = document.getElementById("authorList");
    
   fetch("https://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((json) => {
        let authors = json
        authors.map(function(author){
            let name = document.createElement("h2");
            let location = document.createElement("p");
            let email = document.createElement("li");
            let phone = document.createElement("li");
            let website = document.createElement("li");
            let line = document.createElement("hr");
            
            name.innerHTML = `${author.name}`;
            location.innerHTML = "Location: "+`${author.address.street}`+" "+`${author.address.suite}`+", "+`${author.address.city}`
            email.innerHTML = `${author.email}`;
            phone.innerHTML = `${author.phone}`;
            website.innerHTML = `${author.website}`;
            
            ul.appendChild(name);
            ul.appendChild(location);
            ul.appendChild(email);
            ul.appendChild(phone);
            ul.appendChild(website);
            ul.appendChild(line);
            
        })
   })
   .catch((error) => console.log(error))
   
}