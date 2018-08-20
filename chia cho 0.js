function main() {
  var a = prompt("nhập số thứ nhất");
  var c = a/0 ;
  try {
    console.log( a + "chia duoc cho " + c)
  }catch (e) {
    console.log(("Error:	" + e.message))
  }
}
main();
