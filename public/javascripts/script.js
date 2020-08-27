/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

function fetchInRoutes(data, route) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(route, options)
    .then((res) => {
      if (res.status >= 400 && res.status <= 499) {
        alert('Erro no cliente!');
      } else if (res.status >= 500 && res.status <= 599) {
        alert('Erro no servidor!');
      }
    });
}

function setDeadline() {
  const deadline = document.querySelector('#deadline');

  const date = new Date();
  const day = date.getDate();
  let mouth = date.getMonth();
  const year = date.getFullYear();

  if (mouth < 10) {
    mouth = `0${mouth + 2}`;
  } else {
    mouth = `${mouth + 2}`;
  }

  deadline.value = `${year}-${mouth}-${day}`;
}

function addLoan() {
  const bookName = document.querySelector('#bookName').value;
  const customerName = document.querySelector('#customerName').value;
  const deadline = document.querySelector('#deadline').value;
  const data = {
    bookName,
    customerName,
    deadline,
  };
  const route = '/addLoan';

  fetchInRoutes(data, route);
}

function searchLoan() {
  const bookName = document.querySelector('#bookName').value;
  const data = { bookName };
  const route = '/searchLoan';

  fetchInRoutes(data, route);
}

function insertDataInTableLoans(loanList) {
  const loan = loanList;
  const dataTable = document.querySelector('#tableLoans');

  for (let i = 0; i < loan.length; i += 1) {
    const tr = document.createElement('tr');
    dataTable.appendChild(tr);

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const button = document.createElement('button');
    button.setAttribute('id', `button${i}`);
    button.innerHTML = 'Devolver';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(button);

    const livro = document.createTextNode(loan[i].bookName);
    const cliente = document.createTextNode(loan[i].customerName);
    const cpf = document.createTextNode(loan[i].customerCPF);
    const date = document.createTextNode(loan[i].deadline);
    td1.appendChild(livro);
    td2.appendChild(cliente);
    td3.appendChild(cpf);
    td4.appendChild(date);
  }
}

function bookRegistration() {
  const bookName = document.querySelector('#bookName').value;
  const authorName = document.querySelector('#authorName').value;
  const bookRelease = document.querySelector('#bookRelease').value;
  const bookGenre = document.querySelector('#bookGenre').value;
  const bookEdition = document.querySelector('#bookEdition').value;
  const bookPublisher = document.querySelector('#bookPublisher').value;
  const data = {
    bookName,
    authorName,
    bookRelease,
    bookGenre,
    bookEdition,
    bookPublisher,
  };
  const route = '/bookRegistration';

  fetchInRoutes(data, route);
}

function searchBook() {
  const bookName = document.querySelector('#bookName').value;
  const data = { bookName };
  const route = '/searchBook';

  fetchInRoutes(data, route);
}

function checkAvailable() {
  const checkOn = document.querySelector('#available');

  if (checkOn.checked === true) {
    const check = 0;
    const data = { check };
    const route = '/checkMarking';

    fetchInRoutes(data, route);
  }
}

function checkUnavailable() {
  const checkOff = document.querySelector('#unavailable');

  if (checkOff.checked === true) {
    const check = 1;
    const data = { check };
    const route = '/checkMarking';

    fetchInRoutes(data, route);
  }
}

function insertDataInTableBooks(booksList) {
  const book = booksList;
  const dataTable = document.querySelector('#tableBooks');

  for (let i = 0; i < book.length; i += 1) {
    const tr = document.createElement('tr');
    dataTable.appendChild(tr);

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const td7 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    const livro = document.createTextNode(book[i].name);
    const autor = document.createTextNode(book[i].author);
    const ano = document.createTextNode(book[i].year);
    const area = document.createTextNode(book[i].area);
    const edicao = document.createTextNode(book[i].edition);
    const editora = document.createTextNode(book[i].publisher);
    const id = document.createTextNode(book[i].id);
    td1.appendChild(livro);
    td2.appendChild(autor);
    td3.appendChild(ano);
    td4.appendChild(area);
    td5.appendChild(edicao);
    td6.appendChild(editora);
    td7.appendChild(id);
  }
}

function customerRegistration() {
  const customerName = document.querySelector('#customerName').value;
  const customerCPF = document.querySelector('#customerCPF').value;
  const customerEmail = document.querySelector('#customerEmail').value;
  const customerTelephone = document.querySelector('#customerTelephone').value;
  const data = {
    customerName,
    customerCPF,
    customerEmail,
    customerTelephone,
  };
  const route = '/customerRegistration';

  fetchInRoutes(data, route);
}

function searchCustomer() {
  const customerName = document.querySelector('#customerName').value;
  const data = { customerName };
  const route = '/searchCustomer';

  fetchInRoutes(data, route);
}

function checkPendingStatus() {
  const checkOff = document.querySelector('#pending');

  if (checkOff.checked === true) {
    const check = 0;
    const data = { check };
    const route = '/checkMarkingCustomer';

    fetchInRoutes(data, route);
  }
}

function checkBlockedStatus() {
  const checkOff = document.querySelector('#blocked');

  if (checkOff.checked === true) {
    const check = 1;
    const data = { check };
    const route = '/checkMarkingCustomer';

    fetchInRoutes(data, route);
  }
}

function insertDataInTableCustomer(customersList) {
  console.log(customersList);
  const customer = customersList;
  const dataTable = document.querySelector('#tableCustomers');

  for (let i = 0; i < customer.length; i += 1) {
    const tr = document.createElement('tr');
    dataTable.appendChild(tr);

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    const cliente = document.createTextNode(customer[i].name);
    const cpf = document.createTextNode(customer[i].cpf);
    const telefone = document.createTextNode(customer[i].telephone);
    const email = document.createTextNode(customer[i].email);
    td1.appendChild(cliente);
    td2.appendChild(cpf);
    td3.appendChild(telefone);
    td4.appendChild(email);
  }
}
