function wallpaper(l, w, h) {
    // your code
  if(!l||!w||!h)return "zero"
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

    let pasadas = (h/0.52);
    let long = (pasadas * w * 2 )+(pasadas *l *2 )
    let totalLong = long * 1.15
    let totalRollos = Math.ceil(totalLong/10)
  //100m -> 10 rollos 103
    return numbers[totalRollos]

}
