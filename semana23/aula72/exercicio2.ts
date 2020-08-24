const stringCompression = (term: string): string => {
  let newString: string[] = [];
  let previousCharacter: string = term[0];
  let count: number = 0;

  for (const character of term) {
    if (character !== previousCharacter) {
      newString.push(previousCharacter + count);
      previousCharacter = character;
      count = 0;
    }
    count++;
  }

  newString.push(previousCharacter + count);

  let result: string = "";

  for (const iterator of newString) {
    result += iterator;
  }

  if (result.length > term.length) {
    return term;
  } else {
    return result;
  }
};

stringCompression("aabbb");
