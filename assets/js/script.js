function insert(num) {
  document.getElementById('display').value = document.getElementById('display').value + num;
}

function result() {
  let n = document.getElementById('display').value;
  if(n) {
    document.getElementById('display').value = eval(n);
  }
}

function reset() {
  document.getElementById('display').value = '';
}

