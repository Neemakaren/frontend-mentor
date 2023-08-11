var life = 0
life = 10
console.log(life)

function invertTree(node) {
    let left = node.left
    node.left = node.right
    node.right = left
    invertTree(left)
    invertTree(right)
}