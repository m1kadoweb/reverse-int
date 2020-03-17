module.exports = function reverse (n) {
    let rev = n.toString().split("").reverse().join("");

    return parseInt(rev);
}
