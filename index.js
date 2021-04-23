const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(addThemMfs,0)

function addThemMfs(accm, amount) {
    return accm + amount
}