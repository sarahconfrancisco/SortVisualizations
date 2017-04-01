let modal = document.getElementById('myModal');
let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');

openModal.onclick = () => {
  modal.style.display = "block";
}

closeModal.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
}

function init(arrayType, array) {
  if(arrayType === 1){
      array.reverse();
  } else if( arrayType == 3) {
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
