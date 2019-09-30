document.getElementById('submit').addEventListener('click', onSubmit);
function onSubmit() {
   const name = document.getElementById('name').value;
   const nameMessage = getNameMessage(name);
   if (nameMessage === '') {
       alert(name);
   } else {
       document.getElementById('nameError').innerHTML = name
   }
}
function getNameMessage(name) {
   if (isEmpty(name)) {
       return 'Name must not be empty'
   }
   if (!isNameTwoParts(name)) {
       return 'Name must be two parts';
   }
   return '';
}
function isEmpty(string) {
}
function isNameTwoParts(name) {
}