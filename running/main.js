console.time("time");
import randomWords from "random-words";

console.log(randomWords({ minLength: "hellow", maxLength: "test" }));

console.timeEnd("time");
