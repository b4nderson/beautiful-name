import { firsLetterUpperOfEachWord } from "./utils/firsLetterUpperOfEachWord";
import { removeUselessWhiteSpace } from "./utils/removeUselessWhiteSpace";

import * as exceptions from "./exceptions";

class BeautifulName {
  public originalName: string;
  public firstName: string;
  public lastName: string;
  public fullName: string;
  public beautifulName: string;

  private exceptions = exceptions["br"];

  public constructor(fullName: string) {
    this.originalName = fullName;

    this.fullName = removeUselessWhiteSpace(fullName);
    this.fullName = firsLetterUpperOfEachWord(this.fullName);
    this.fullName = this.firstLetterLowerOfEachException(this.fullName);

    const separateFullName = this.fullName.split(" ");

    const [firstName, ...secondNameToTheRest] = separateFullName;

    this.firstName = firstName;
    this.beautifulName = this.firstName;

    if (secondNameToTheRest.length) {
      this.lastName = secondNameToTheRest[secondNameToTheRest.length - 1];

      secondNameToTheRest.pop();

      if (secondNameToTheRest.length) {
        secondNameToTheRest.forEach((name) => {
          this.beautifulName += this.exceptions.includes(name.toUpperCase())
            ? ` ${name.toLocaleLowerCase()}`
            : ` ${name[0]}.`;
        });
      }

      this.beautifulName += ` ${this.lastName}`;
    }
  }

  private firstLetterLowerOfEachException(fullName: string): string {
    const separateFullName = fullName.split(" ");

    const newSeparateFullName = separateFullName.map((name) =>
      this.exceptions.includes(name.toUpperCase())
        ? name.toLocaleLowerCase()
        : name
    );

    const newFullName = newSeparateFullName.join(" ");

    return newFullName;
  }
}

export { BeautifulName };
