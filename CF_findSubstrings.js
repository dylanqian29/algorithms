function findSubstrings(words, parts) {
  let root = buildingTrie(parts);

  for (let i = 0; i < words.length; i++) {
    words[i] = convert(words[i], root);
  }
  return words;
}

const Tree = function (value) {
  this.value = value;
  this.children = {};
};

const buildingTrie = function (parts) {
  let node = new Tree("");

  for (let i = 0; i < parts.length; i++) {
    let word = parts[i];
    let currentNode = node;
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (!currentNode.children.hasOwnProperty(letter)) {
        currentNode.children[letter] = new Tree(letter);
        currentNode = currentNode.children[letter];
      } else {
        currentNode = currentNode.children[letter];
      }
    }
    currentNode.children["*"] = new Tree("*");
  }

  return node;
};
const convert = function (word, tries) {
  let startIndex = 0;
  let maxLength = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let currentNode = tries;
    let tempStart = i;
    let tempMax = 0;
    for (let j = i; j < word.length; j++) {
      if (currentNode.children[word[j]]) {
        tempMax++;
        currentNode = currentNode.children[word[j]];
      } else if (currentNode.children["*"]) {
        break;
      } else {
        tempMax = 0;
        break;
      }
    }
    if (currentNode.children["*"]) {
      if (tempMax > maxLength) {
        maxLength = tempMax;
        startIndex = tempStart;
      }
    }
  }
  if (maxLength > 0) {
    return (
      word.slice(0, startIndex) +
      "[" +
      word.slice(startIndex, maxLength + startIndex) +
      "]" +
      word.slice(maxLength + startIndex)
    );
  } else {
    return word;
  }
};
