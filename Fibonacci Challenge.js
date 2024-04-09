nums = [0,1]

function choseNumber(numChosen) {
    while (numChosen > nums[nums.length -1]) {
        nums.push(nums[nums.length -1] + nums[nums.length -2])
    }
    
    nums.includes(numChosen) ? console.log('O número existe na Sequência Fibonacci') : console.log('O número não existe na Sequência Fibonacci')
}

choseNumber(21)
