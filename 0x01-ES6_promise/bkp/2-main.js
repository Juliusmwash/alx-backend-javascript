import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
console.log(String(handleResponseFromAPI(promise)));

const promise2 = Promise.resolve();
console.log(String(handleResponseFromAPI(promise2)));
