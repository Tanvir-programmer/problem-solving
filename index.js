//reverse string
function reverse(str) {
  let reverse = "";
  for (char of str) {
    reverse = char + reverse;
  }
  return reverse;
}

console.log(reverse("yallah ya"));
