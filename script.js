// var note_ahmed = document.getElementsByClassName('note_ahmed');
// console.log(note_ahmed);

// var moy_ahmed = document.getElementById('moy_ahmed');
// console.log(moy_ahmed);

// var sum = 0;
// for (let i = 0; i < note_ahmed.length; i++) {
//   var el = Number(note_ahmed[i].innerText);
//   sum = sum + el;
// }
// console.log(sum / note_ahmed.length);
// moy_ahmed.innerHTML = sum / note_ahmed.length;

function getMoy(str, str2) {
  var arr = document.getElementsByClassName(str);
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    var el = Number(arr[i].innerText);
    sum = sum + el;
  }
  return (document.getElementById(str2).innerHTML = sum / arr.length);
}

function getAll() {
  getMoy('note_sarra', 'moy_sarra');
  getMoy('note_ahmed', 'moy_ahmed');
}

var moy = document.getElementsByClassName('moy');
moy[0].addEventListener('click', getAll);
