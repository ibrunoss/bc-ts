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

  levelOrder(twig: Twig): string {
    const queue: Twig[] = [twig];
    const result: number[] = [];

    while (queue.length) {
      const twig = queue.shift();

      if (!twig) {
        break;
      }

      result.push(twig.data);

      twig.left && queue.push(twig.left);
      twig.right && queue.push(twig.right);
    }

    return result.join(" ");
  }
}

// Testes

let tree = new BinarySearchTree();
let twig = null;

const getHeight1: number[] = [3, 5, 2, 1, 4, 6, 7]; // expect to be 3
const getHeight2: number[] = [20, 50, 35, 44, 9, 15, 62, 11, 13]; // expect to be 4
const getHeight3: number[] = [
  25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90,
]; // expect to be 5

interface GetHeightTest {
  expect: number;
  data: number[];
}
const getHeight: GetHeightTest[] = [
  {
    expect: 3,
    data: [3, 5, 2, 1, 4, 6, 7],
  },
  {
    expect: 4,
    data: [20, 50, 35, 44, 9, 15, 62, 11, 13],
  },
  {
    expect: 5,
    data: [25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90],
  },
];

for (let test of getHeight) {
  for (let i = 0; i < test.data.length; i++) {
    twig = tree.insert(twig, test.data[i]);
  }

  console.log(`expect to be ${test.expect}, received =`, tree.getHeight(twig));

  twig = null;
}

interface LevelOrderTest {
  expect: string;
  data: number[];
}

const levelOrder: LevelOrderTest[] = [
  {
    expect: "3 2 5 1 4 7",
    data: [3, 5, 4, 7, 2, 1],
  },
  {
    expect: "20 9 50 15 35 62 11 44 13",
    data: [20, 50, 35, 44, 9, 15, 62, 11, 13],
  },
  {
    expect: "25 12 39 9 19 31 55 23 35 41 60 70 90",
    data: [25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90],
  },
];

for (let test of levelOrder) {
  for (let i = 0; i < test.data.length; i++) {
    twig = tree.insert(twig, test.data[i]);
  }

  twig &&
    console.log(
      `expect to be ${test.expect}, received =`,
      tree.levelOrder(twig)
    );

  twig = null;
}
