const isString = (arg: any): boolean => {
  return typeof arg === "string";
};

const isStringArr = (arg: any[]): string[] => {
  const newArr = arg.filter((el) => {
    if (typeof el === "string") {
      return el;
    } else {
      return;
    }
  });
  return newArr;
};

const isObjectkey = (arg: any): string => {
  if (typeof arg === "object") {
    for (const key of arg) {
      if (typeof key === "string" && key === "name") {
        return arg.key;
      }
    }
  }
};

type Admin = {
  name: string;
  role: "admin";
};

const isAdmin = (arg: any): arg is Admin => {
  return typeof arg === "object" && "role" in arg && arg.role === "admin";
};

const isStringorNumber = (arg: string | number): string | number => {
  if (typeof arg === "string") {
    return arg.toLocaleUpperCase();
  } else {
    return arg.toLocaleString();
  }
};

function isCall(arg: () => void) {
  arg();
}

const isFunction = (arg: any): void => {
  if (typeof arg === "function") {
    isCall(arg);
  } else {
    console.log(`${arg} is not a function`);
  }
};

class Animal {
  name: string;
  constructor() {
    this.name;
  }
}

class Dog extends Animal {
  voice: string;
  constructor(name: string, voice: string) {
    super();
    this.name = name;
    this.voice = voice;
  }

  void() {
    console.log(`${this.voice}`);
  }
}

function isDog(animal: any): animal is Dog {
  return (animal !== null && typeof animal === 'object' && 'voice' in animal && animal instanceof Dog)
}
