const firsLetterUpperOfEachWord = (text: string): string => {
  const separateText = text.split(" ");

  const newSeparateText = separateText.map((string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    const secondLetterToLast = string.substring(1).toLowerCase();

    return firstLetter + secondLetterToLast;
  });

  const newText = newSeparateText.join(" ");
  return newText;
};

export { firsLetterUpperOfEachWord };
