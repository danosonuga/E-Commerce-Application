// Example 1

// let success = false;

// function getUsers(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(success){
//         resolve([
//           {username: "john", email:"john@test.com"},
//           {username: "samuel", email:"john@test.com"}
//         ]);
//       }else {
//         reject('Failed to get users');
//       }
//     }, 1000);
//   })
// }

// const promise = getUsers();

// promise.then(
//   (users) => console.log(users)
// ).catch(
//   (error) => console.log(error)
// )

// Example 2

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("done!");
//     }, 1000);
// });

// promise.then((result) => console.log(result))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("finishing it all..."))

// Example 3

// fetch('https://fakestoreapi.com/products/')
// .then((response) => response.json())
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

// Example 4
// const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
// const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
// const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

// let loading = true;
// loading && console.log('loading...');

// function getPromise(URL){
//     let promise = new Promise((resolve, reject) => {
//         let req = new XMLHttpRequest();
//         req.open("GET", URL);
//         req.onload = () => {
//             if (req.status == 200){
//                 resolve(req.response);
//             }else{
//                 reject("There is an error")
//             }
//         };
//         req.send();
//     });
//     return promise;
// }

// let promise = getPromise(ALL_POKEMONS_URL);

// let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
// let promise_2 = getPromise(RATICATE_POKEMONS_URL);
// let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

// Promise.race([promise_1, promise_2, promise_3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log("An error occured!")
// }).finally(() => {
//     loading = false;
//     console.log(`Promise is done and loading is ${loading}`);
// });

// promise.then((result) => {
//     let onePokemon = JSON.parse(result).results[0].url;
//     return onePokemon;
// }).then((onePokemonURL) => {
//     console.log(onePokemonURL);
//     return getPromise(onePokemonURL);
// }).then((pokemon) => {
//     console.log(JSON.parse(pokemon));
// }).catch((error) => {
//     console.log("In the catch", error);
// }).finally(() => {
//     loading = false;
//     console.log(`Promise settled and loading is ${loading}`);
// })