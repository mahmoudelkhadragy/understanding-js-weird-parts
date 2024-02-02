// POJO solution =>  POJO stands for "Plain Old JavaScript Object."
let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a + this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

// Classes solution
class Triangle {
  // Defines the methods each instance of Triangle will have
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a + this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
// ------------------------------------------

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }

  deposit(amt) {
    if (amt < 0) {
      throw Error("Can't deposit a negative amount");
    }
    this.balance = this.balance + amt;
    return this.balance;
  }
  withdraw(amt) {
    this.balance = this.balance - amt;
    return this.balance;
  }
}

// --------- Inheritance--------
class ShyTriangle extends Triangle {
  // don't repeat if not different
  // will inherit from super class

  // to add addition property and you want to put your constructor you have to use super to use super class constructor
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }

  describe() {
    return "(runs and hides)";
  }
}

// static properties
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  // static property makes property special for the class not access from object
  static species = "felis catus";

  // static methods: called on a class not an object
  static decorateCate() {
    return "cat is decorated";
  }

  coloredCat() {
    return "cat is colored";
  }
}
