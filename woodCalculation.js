function woodCaculation(chair, table, bad) {
    const totalChairCft = chair * 2;
    const totalTableCft = table * 10;
    const totalbadCft = bad * 30;
    const totalWoodCft = totalChairCft + totalTableCft + totalbadCft;
    return totalWoodCft;
}
const result = woodCaculation(1, 1, 2)
console.log(result)