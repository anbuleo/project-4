// const persons = fetch("https://jsonplaceholder.typicode.com/users")

const header = document.createElement("header");
const section = document.createElement("section");
async function foo(){
    try {
       const res =  await fetch("https://jsonplaceholder.typicode.com/users")
       const result = await res.json();
       for (var i = 0; i< result.length; i++) {
       console.log(result[i])
           
           
            // const section = document.createElement("section");
            const div = document.createElement("div");
            header.innerHTML=`<nav class="navbar text-bg-primary p-3">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><h1>Users</h1></a>
            </div>
          </nav>`;
            div.innerHTML=`<p><div class="card text-bg-info p-3" style="max-width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${result[i].name}</h5>
              <p class="card-text">Email: ${result[i].email}</p>
              <p class="card-text">Street: ${result[i].address.street}</p>
              <p class="card-text">City: ${result[i].address.city}</p>
            </div>
          </div>`         
            section.appendChild(div);
            header.appendChild(section)
          document.body.append(header);
       }
   } catch (error) {
       console.log(error)
    }
   }
   foo();