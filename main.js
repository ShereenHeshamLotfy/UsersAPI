var items="";

fetch("https://dummyjson.com/users")
.then((r) => r.json())
.then((r)=>{
    var users=r.users;
    users.forEach((user) => {
        items += ` <div class="items" id="item">
        <img src=${user.image}>
        <p class="paragraph">Name:${user.firstName} ${user.lastName}</p>
        <div class="space"></div>
        <p class="paragraph">email:${user.email}</p>
        <div class="space"></div>
        <p><a href="tel:${user.phone}">phone:${user.phone}</a></p>
        <div class="space"></div>
        <p class="paragraph">address:${user.address.address}</p>
    </div>
        `
    });
    document.getElementById("parent").innerHTML=items;
    
})
