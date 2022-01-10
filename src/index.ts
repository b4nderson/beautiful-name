const prepositions = ["E", "DO", "DOS", "DA", "DAS", "DE"];

export const firsLetterUpperRestLower = (text: string) => {
  const newText = text.charAt(0).toUpperCase();
  return newText.substring(1).toLowerCase();
};

const beautifulName = (name: string) => {
  const separateName = name.split(" ");

  const [firstName, ...rest] = separateName;

  let finishName = firstName;

  if (rest.length) {
    const lastName = rest[rest.length - 1];

    rest.pop();

    if (rest.length) {
      for (const item of rest) {
        finishName += prepositions.includes(item.toUpperCase())
          ? ` ${firsLetterUpperRestLower(item)} `
          : ` ${firsLetterUpperRestLower(item[0])}. `;
      }
    }

    finishName += lastName;

    return finishName;
  }

  return firstName.trim().toLocaleUpperCase();
};

console.log(beautifulName("Anderson barbosa Soares dos Nascimento"));

// export { beautifulName };
