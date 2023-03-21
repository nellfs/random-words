import randomWords from "random-words";

console.log(randomWords());
//army

console.log(randomWords(5));
//['army', 'beautiful', 'became', 'if', 'actually']

console.log(randomWords({ min: 3, max: 10 }));
//['became', 'arrow', 'article', 'therefore']

console.log(randomWords({ exactly: 2 }));
//['beside', 'between']

console.log(randomWords({ min: 2, max: 3, seed: "my-seed" }));
//['plenty', 'pure']

// this call will yield exactly the same results as the last since the same `seed` was used and the other inputs are identical
console.log(randomWords({ min: 2, max: 3, seed: "my-seed" }));
//['plenty', 'pure']

console.log(randomWords({ exactly: 5, join: " " }));
//'army beautiful became if exactly'

console.log(randomWords({ exactly: 5, join: "" }));
// 'armybeautifulbecameifexactly'

console.log(randomWords({ exactly: 5, maxLength: 4 }));
//['army','come','eye','five','fur']

console.log(randomWords({ exactly: 5, wordsPerString: 2 }));
//[ 'salt practical', 'also brief', 'country muscle', 'neighborhood beyond', 'grew pig' ]

console.log(randomWords({ exactly: 5, wordsPerString: 2, separator: "-" }));
//[ 'equator-variety', 'salt-usually', 'importance-becoming', 'stream-several', 'goes-fight' ]

console.log(
  randomWords({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word) => word.toUpperCase(),
  })
);
//[ 'HAVING LOAD', 'LOST PINE', 'GAME SLOPE', 'SECRET GIANT', 'INDEED LOCATION' ]

console.log(
  randomWords({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
      return index === 0
        ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
        : word;
    },
  })
);
//[ 'Until smoke', 'Year strength', 'Pay knew', 'Fallen must', 'Chief arrow' ]
