let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Kf: "ddsds"
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);
