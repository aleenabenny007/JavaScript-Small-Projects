'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2024-06-10T07:09:27.816Z',
    '2024-06-15T07:09:27.816Z',
    '2024-06-25T07:09:27.816Z',
    '2024-06-28T07:09:27.816Z',
    '2024-07-01T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-03T07:09:27.816Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2024-06-10T07:09:27.816Z',
    '2024-06-15T07:09:27.816Z',
    '2024-06-25T07:09:27.816Z',
    '2024-06-28T07:09:27.816Z',
    '2024-07-01T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-03T07:09:27.816Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2024-06-10T07:09:27.816Z',
    '2024-06-15T07:09:27.816Z',
    '2024-06-25T07:09:27.816Z',
    '2024-06-28T07:09:27.816Z',
    '2024-07-01T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-02T07:09:27.816Z',
    '2024-07-03T07:09:27.816Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2024-06-10T07:09:27.816Z',
    '2024-06-15T07:09:27.816Z',
    '2024-06-25T07:09:27.816Z',
    '2024-06-28T07:09:27.816Z',
    '2024-07-01T07:09:27.816Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// to format date
const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }
    return Intl.DateTimeFormat(locale, options).format(date);
  }
}

// to format currency
const formatCurrency = function (cur) {
  return Intl.NumberFormat(currentAccount.locale, {
    style: 'currency',
    currency: currentAccount.currency,
  }).format(cur);
}


// to set logout countdown timer
const startLogoutTimer = function () {
  let time = 300;
  const timer = setInterval(() => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    time--;
    if (time === 0) {
      clearInterval(timer);
      inputLoginUsername.value = inputLoginPin.value = "";
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
  }, 1000);
  return timer;    
}


// to display movements
const displayMovements = function (acc) {
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date, acc.locale);

    const formatedMov = formatCurrency(mov);
    const html = ` 
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMov}</div>
        </div>   
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}

const createUsernames = function (accs) {
  accs.forEach((acc, index) => {
    acc.username = acc.owner.toLowerCase().split(" ").map((name) => name[0]).join("");
  });
}
createUsernames(accounts);


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  const formatedBal = formatCurrency(acc.balance);
  labelBalance.textContent = formatedBal;
}


const calcDisplaySummary = function (acc) {

  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  const formatedSumIn = formatCurrency(incomes);
  labelSumIn.textContent = formatedSumIn;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  const formatedSumOut = formatCurrency(out);
  labelSumOut.textContent = formatedSumOut;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter(interest => interest >= 1).reduce((acc, interest) => acc + interest, 0);
  const formatedSumInterest = formatCurrency(interest);
  labelSumInterest.textContent = formatedSumInterest;
}

const updateUI = function (acc) {
  containerMovements.innerHTML = ""; // clear movements   
  displayMovements(acc);   // Display movements
  calcDisplayBalance(acc); // Display balance
  calcDisplaySummary(acc); // Display summary
}

const calcDate = function () {
  return new Date().toISOString();
}

// Event handler
let currentAccount, timer;


// setting Date
const locale = navigator.language;
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
}
labelDate.textContent = Intl.DateTimeFormat(locale, options).format(new Date());


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting on button click (to avoid reloading the whole page on click)
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username == inputLoginUsername.value);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
    containerApp.style.opacity = 1;

    updateUI(currentAccount);
    if(timer) clearInterval(timer);
    timer = startLogoutTimer();

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";      
  }
  else {
    console.log('Not a user');
  }

});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = inputTransferAmount.value;
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAccount);

  if (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount.username !== currentAccount.username) {
    console.log('Transfer VALID');
    inputTransferTo.value = inputTransferAmount.value = "";

    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    currentAccount.movementsDates.push(calcDate());
    receiverAccount.movementsDates.push(calcDate());

    updateUI(currentAccount);
    if(timer) clearInterval(timer);
    timer = startLogoutTimer();
  }
  else {
    console.log("Invalid Transfer :( ");
  }

});


btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(calcDate());
    updateUI(currentAccount);
    if(timer) clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputLoanAmount.value = "";   
});


btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    console.log(accounts);
  }

  inputCloseUsername.value = inputClosePin.value = ""

});

let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sort = !sort;
  updateUI(currentAccount);
});

/////////////////////////////////////////////////      
/////////////////////////////////////////////////
// LECTURES   

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const deposits = movements.filter((mov) => mov > 0);
// console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);   

// Maximum value
const max = movements.reduce((acc, cur) => (acc < cur) ? cur : acc, movements[0]);  // here movements[0] is the initial value of acc
// console.log(max);  


//....using flat method....
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
// using a map and then flattening that array is a common way if using these in programming, we can use it together by
// using flatMap() method
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);      













