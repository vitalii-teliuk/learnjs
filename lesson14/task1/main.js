const user = {
    name: "Jhon",
    surname: "Smith"
};
user.name = "Pete";
delete user.name;
alert(user.surname);