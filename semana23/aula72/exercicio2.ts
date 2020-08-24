const stringCompression = (string: string): string => {
    
  
    for (let i = 0; i < string.toLowerCase().length; i++) {
      if (!charObject[i]) {
        charObject[i] = 1;
      } else {
        charObject[i] += 1;
      }
    }
  
    console.log(charObject);
  
    return "";
  };
  
  stringCompression("aabbb");