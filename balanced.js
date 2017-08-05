function symmetrical(string) {
  if (string === '') { return 'Input a string for an output'; }
  var logic = (previous, char) => {
    if (previous < 0) { return previous; }
    if (char === '(') { return ++previous; }
    if (char === ')') { return --previous; };
    return previous;
  };

  //returns a boolean
  return !string.split("").reduce(logic, 0);
};

symmetrical("((()))");
