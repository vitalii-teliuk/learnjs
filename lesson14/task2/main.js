function isEmpty(obj) {
    for (let key in obj) {

        return false;
    }
    return true;
}
const user = {
    name: "Jhon",
    surname: "Smith"
};
alert(isEmpty(user));