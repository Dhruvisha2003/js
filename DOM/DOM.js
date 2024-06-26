let output;
// output = document.querySelector('#h1');
// output = document.forms[0].id;
// document.forms[0].id = 'new-itemId';
// output = document.forms[0].id;


// output = document.querySelectorAll('li');
// const forms = Array.from(output);
// output.forEach((p) => console.log(p));
// console.log(output);


// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);
// console.log(listItems3[0].innerHTML);
// console.log(listItems3[0].textContent);


// const pclass = document.querySelector('.parent');
// output = pclass.children;
// output = pclass.children[2].textContent;
// pclass.children[1].innerText = 'Child Two';
// pclass.children[1].style.color = 'red';
// pclass.firstElementChild.innerText = 'Child One';
// pclass.lastElementChild.innerText = 'Child Three';
// output = pclass.children[2].className;


// const child = document.querySelector('.child');
// output = child.parentElement;
// child.parentElement.style.border = ' 1px solid pink';
// child.parentElement.style.padding = '10px';


// const sibling = document.querySelector('.child:nth-child(2)');
// output = sibling.previousElementSibling;
// output = sibling.nextElementSibling;
// console.log(output);


// const pnode = document.querySelector('.parent');
// output = pnode.childNodes;

// const cnode = document.querySelector('.child');
// output = cnode.parentNode;

// cnode.parentNode.style.backgroundColor = '#ccc';
// cnode.parentNode.style.padding = '10px';
// console.log(output);



// function createListItem(item){
//     const li = document.createElement('li');

//     li.innerHTML = `${item} 
//     <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//     </button>`;

//     document.querySelector('.items').appendChild(li);
// }   


// createListItem('Eggs');



// function createNewItem(item){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';

//     const icon = document.createElement('icon');
//     icon.className = 'fa-solid fa-xmark';

//     button.appendChild(icon);
//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }

// createNewItem('Blue Berry');



// function createNewItem(item){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = createButton('remove-item btn-link text-red');
//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }

// function createButton(classes){
//     const button = document.createElement('button');
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);

//     return button;
// }

// function createIcon(classes){
//     const icon = document.createElement('icon');
//     icon.className = classes;

//     return icon;
// }

// createNewItem('Strawberry');


const logo = document.querySelector('img');

function onClick(e) {
  // Event properties
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.screenX);
  // console.log(e.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);


// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// e.preventDefault() method prevents the default behavior
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Link was clicked');
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/