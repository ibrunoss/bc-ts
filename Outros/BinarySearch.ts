interface TwigInterface {
  data: number;
  left: TwigInterface | null;
  right: TwigInterface | null;
}

class Twig implements TwigInterface {
  constructor(
    public data: number,
    public left: TwigInterface | null = null,
    public right: TwigInterface | null = null
  ) {}
}

class BinarySearchTree {
  insert(twig: TwigInterface | null, data: number): Twig {
    if (twig === null) {
      return new Twig(data);
    }

    if (data <= twig.data) {
      if (twig.left) {
        this.insert(twig.left, data);
      } else {
        twig.left = new Twig(data);
      }
    } else {
      if (twig.right) {
        this.insert(twig.right, data);
      } else {
        twig.right = new Twig(data);
      }
    }

    return twig;
  }

  getHeight(twig: Twig | null) {
    let left = 0;
    let right = 0;

    if (twig?.left) {
      left++;
      left += this.getHeight(twig.left);
    }

    if (twig?.right) {
      right++;
      right += this.getHeight(twig.right);
    }

    return left > right ? left : right;
  }
}

// Testes

let tree = new BinarySearchTree();
let twig = null;

const value1: number[] = [3, 5, 2, 1, 4, 6, 7]; // expect to be 3
const value2: number[] = [20, 50, 35, 44, 9, 15, 62, 11, 13]; // expect to be 4
const value3: number[] = [25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90]; // expect to be 5

for (let i = 0; i < value1.length; i++) {
  twig = tree.insert(twig, value1[i]);
}

twig && console.log("expect to be 3, received =", tree.getHeight(twig));

twig = null;

for (let i = 0; i < value2.length; i++) {
  twig = tree.insert(twig, value2[i]);
}

twig && console.log("expect to be 4, received =", tree.getHeight(twig));

twig = null;

for (let i = 0; i < value3.length; i++) {
  twig = tree.insert(twig, value3[i]);
}

twig && console.log("expect to be 5, received =", tree.getHeight(twig));
