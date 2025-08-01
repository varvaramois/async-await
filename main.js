// // const asyncFunction = async () => {
// //     const api = await fetch(`my-api.com/me`);
// //     const result = await fetch(`my-api.com/profile?api=${api}`);
// //     const frends = await fetch(`my-api.com/users/${result.id}/friends`);
// //     return frends;
// // }
// // asyncFunction().then(data => {
// //     console.log(data);
// // });

// const newFunction = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const users = await response.json();
//     return users;
// }
// newFunction().then(data => {
//     console.log(data);
// });

// // const userFuncTry = async () => {
// //     try {
// //         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
// //         const users = await response.json();
// //         console.log(users);
// //     } catch(error) {
// //         console.log(error);
// //     }
// // }

// const asyncFunction = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);

//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();
    
//     console.log(firstUser, secondUser, thirdUser);
// }
// asyncFunction();

// const newAsyncFunction = async () => {
//     try {
//         const baseUrl = "https://jsonplaceholder.typicode.com";
//         const firstResponse = await fetch(`${baseUrl}/users/1`);
//         const secondResponse = await fetch(`${baseUrl}/users/2`);
//         const thirdResponse = await fetch(`${baseUrl}/users/3`);

//         const firstUser = await firstResponse.json();
//         const secondUser = await secondResponse.json();
//         const thirdUser = await thirdResponse.json();

//         console.log(firstUser, secondUser, thirdUser);
//     } catch(error) {
//         console.log(error);
//     }
// }

const asyncFunction = async () => {
    try {
      const firstResponse = await fetch("http://localhost:3000/clubs/1");
      let firstUser = await firstResponse.json();

      const firstTimeOut = setTimeout( () => {
        const container = document.querySelector(".container");
        container.innerHTML += `
        <div class="club">
          <h2>${firstUser.name}</h2>
          <h3>${firstUser.country}</h3>
          <p>${firstUser.year}</p>
          <img src="${firstUser.logo}">
        </div>
        `;
      }, 1000)
    } catch(error) {
        console.log(error);
    }
};
asyncFunction();