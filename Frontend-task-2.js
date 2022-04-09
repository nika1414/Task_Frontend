var numJewelsInStones = function (jewels, stones) {
  var a = 0;
  for (let j of jewels) {
    for (let s of stones) {
      //includes() ფუნქციაა, რომელიც ადგენს მოცემული ტექსტი (string) შეიცავს თუ არა კონკრეტულ ასოს (character-ს). a ცვლადში იწერება ასოთა დაემთხვევის რაოდენობა.
      if (j.includes(s)) {
        a++;
      }
    }
  }
  return a;
};

let output = numJewelsInStones("aA", "aAAbbbb"); //3
console.log(output);
