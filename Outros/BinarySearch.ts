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

  getHeight(root: Twig) {
    let leftHeight = 0;
    let leftTree = root.left;
    let rightHeight = 0;
    let rightTree = root.right;
    let height = 0;
    let countTrees = 0;

    while (leftTree !== null) {
      leftHeight++;

      if (leftTree) {
        countTrees = this.getHeight(leftTree);
        countTrees += leftHeight;
        height = height < countTrees ? countTrees : height;
      }

      leftTree = leftTree.left;
    }

    while (rightTree !== null) {
      rightHeight++;

      if (rightTree) {
        countTrees = this.getHeight(rightTree);
        countTrees += rightHeight;
        height = height < countTrees ? countTrees : height;
      }

      rightTree = rightTree.right;
    }
    height = height > rightHeight ? height : rightHeight;

    return leftHeight > height ? leftHeight : height;
  }
}

let tree = new BinarySearchTree();
let twig = null;

var values: number[] = [3, 5, 2, 1, 4, 6, 7];

for (let i = 0; i < values.length; i++) {
  twig = tree.insert(twig, values[i]);
}

twig && console.log(tree.getHeight(twig));
