// localStorage.clear();
// localStorage.setItem('counter', '0');
// level 2 done
// let count = localStorage.getItem('counter');
// const increase = () => {
//   count++;

// //   console.log(count);
//   localStorage.setItem('counter', count);
//   local();
// };

// const local = () => {
//   //   let counter = ;
//   document.getElementById('count').innerText = localStorage.getItem('counter');
// };
// local(localStorage.getItem('counter'));

// level 1
// localStorage.setItem('masud','rahman')
// localStorage.setItem('age','33')
// localStorage.setItem('salary','null')

// localStorage.removeItem('ah=')
// let person = {
//     name : 'Masud',
//     age: 23,
//     salary: 23333
// }
// localStorage.setItem('person',JSON.stringify(person))
// let items = localStorage.getItem('person')
// console.log(JSON.parse(items));

// level 3
// localStorage.clear();
// sessionStorage.clear()
const send_btn = document.querySelectorAll('.send_btn');
// console.log(buttons);

let id = 0;
for (const send of send_btn) {
  //   console.log(button);
  send.addEventListener('click', (e) => {
    if (e.target.parentNode.parentNode.children[1].value !== '') {
      const inputField = e.target.parentNode.parentNode.children[1].value;
      localStorage.setItem(`name${id++}`, inputField);
    }
    e.target.parentNode.parentNode.children[1].value = '';
    // console.log(inputField);
  });
}

const delete_btn = document.querySelectorAll('.delete_btn');
for (const dlt of delete_btn) {
  dlt.addEventListener('click', () => {
    localStorage.removeItem(`name${--id}`);
  });
}

document.getElementById('reset_btn').addEventListener('click', () => {
  localStorage.clear();
});

// level 4
class Person {
  constructor(id, name, email, message) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
  }
}
// const Masud = new Person('masud');
// console.log(Masud);
let personID = 0;
document.getElementById('send_btn').addEventListener('click', () => {
  const getInputValue = (id) => document.getElementById(id).value;
  const name = getInputValue('name_input');
  const email = getInputValue('email_input');
  const message = getInputValue('message_input');
  let id = '';
  const length = 5;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // const person = { id, name, email, message };
  const Maud = new Person(id, name, email, message);
  console.log(Maud);

  localStorage.setItem('person', JSON.stringify(Maud));
  clearInputField('name_input');
  clearInputField('email_input');
  clearInputField('message_input');
});
const clearInputField = (id) => {
  document.getElementById(id).value = '';
  // console.log('ccc');
};

document.getElementById('reset_btn').addEventListener('click', () => {
  localStorage.clear();
});

// function generateRandomId() {
//   const timestamp = new Date().getTime().toString();
//   const randomNumber = Math.floor(Math.random() * 10000).toString();
//   return randomNumber + timestamp;
// }

// function generateRandomId() {
//   const length = 5;
//   let result = '';
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// const randomId = generateRandomId();
// console.log(randomId);

// for (let i = 0; i < 99999; i++) {
//   const randomId = generateRandomId();
//   console.log(randomId);
// }
