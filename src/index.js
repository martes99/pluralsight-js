import './index.css';
import {getUsers} from '.api/userApi';

//populate table of users via API call
getUsers().then(result=> {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firsName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  global.document.getElementById('users').innerHTML = usersbody;
});

//import numeral from 'numeral';
//const courseValue = numeral(1000).format('$0,0.00');
//debugger;
//console.log(`Jeg vil betale ${courseValue} for dette fantastiske kurset.`);
