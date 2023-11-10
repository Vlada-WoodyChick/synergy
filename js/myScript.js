function oddOreEven(a) {
    if (a % 2) {
        document.getElementById(`demo1`).innerHTML = a + " " + "нечетное"
        return;
    };
    if (!(a % 2)) { document.getElementById(`demo2`).innerHTML = a + " " + "четное" };
    return

}
oddOreEven(6);
oddOreEven(9);
