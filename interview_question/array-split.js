const nums = [1,2,3,4,5,6,7,8,9];

const part = nums.slice(2, 5) // just divide kora but no change original array
const removed = nums.splice(2, 5, 77, 85) // remove data from original array & you can inkject array
// console.log(part)
// console.log(removed)
// console.log(nums)

const together = nums.join("-")
console.log(together)