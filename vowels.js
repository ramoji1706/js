//replace all Vowels(By taking one sample text json file) in object body value (string)  with  #
const jsonData = {
  "title": "Sample Title",
  "body": "This is an example body text."
};


function replaceVowels(text) {

  return text.replace(/[aeiouAEIOU]/g, '#');
}

jsonData.title = replaceVowels(jsonData.title)
jsonData.body = replaceVowels(jsonData.body)  

console.log(jsonData);
console.log(typeof(jsonData));