const isOneEdit = (stringOriginal: string, stringModified: string): boolean => {
  if (
    stringModified.length > stringOriginal.length + 1 ||
    stringModified.length < stringOriginal.length - 1
  ) {
    return false;
  }

  let sameCharacters: number = 0;

  for (let i = 0; i < stringModified.length; i++) {
    if (stringModified[i].toLowerCase() === stringOriginal[i].toLowerCase()) {
      sameCharacters++;
    }
  }

  if (
    sameCharacters >= stringOriginal.length + 1 ||
    sameCharacters <= stringOriginal.length - 1
  ) {
    return true;
  }
};

isOneEdit("Banana", "banan");
