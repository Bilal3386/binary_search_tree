class Node {
    constructor(val)
    {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor()
    {
        this.root = null
    }

    insertNode (value)
    {
        let newNode = new Node(value)
        if(this.root === null)
        {
            this.root = newNode
            return this
        }
        let current = this.root
        while(current)
        {
            if(value === current.val)
            {
                return undefined
            }

            else if(value < current.val)
            {
                if(current.left === null)
                {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if(current.right === null)
                {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    search(value)
    {
        if(!this.root)
        {
            return false
        }

        let current = this.root
        let found = false
        while(current && !found)
        {
            if(value < current.val)
            {
                current = current.left
            }

            else if (value > current.val)
            {
                current = current.right
            }
            else {
                found = current
            }
        }
        
        if(!found) return undefined
        return found
    }

    print()
    {
        let current = this.root
        let i = 0
        while(i<current)
        {
            current.left = current
            current.right = current
            console.log(current)
            i++
        }
    }

    preOrder() {
        let current = this.root
        this.preOrderHelper(current);
    }

    preOrderHelper(root) {
        if (root !== null) {
        console.log(root.val);
        this.preOrderHelper(root.left);
        this.preOrderHelper(root.right);
        }
    }
}

const bst = new BST()
bst.insertNode(4)
bst.insertNode(2)
bst.insertNode(3)
bst.insertNode(6)
bst.insertNode(7)
bst.insertNode(1)
bst.preOrder()
console.log(bst.search(2))