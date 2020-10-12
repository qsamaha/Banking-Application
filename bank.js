var accounts = [];


//Account object 
//balance 
//username 
class Account{
	constructor(balance,userName){
		this.balance = balance;
		this.userName = userName;
	}
}

//create acount object that needs a balance and a username 
//push onto account array
//return account 
function createAccount(balance, userName){
	const account = new Account(balance, userName);
	accounts.push(account);
	return account;
}

//getAccount(userName)
//find mathhing account using for each 
function getAccount(username){
	var user;
	accounts.forEach(function (account){
		if(username === account.userName){
			user = account;
			
		}
		
	})
	return user;
}

function deposit(account, amount){
	var user = getAccount(account);
	user.balance += amount;
}

function withdraw(account, amount){
 	var user = getAccount(account);
 	user.balance -= amount;
}

function getBalance(account){
	var user = getAccount(account);
	return user.balance;
}

createAccount(100, "Qutada");

deposit("Qutada", 40);
withdraw("Qutada", 20);
createAccount(22, "Aubada");
console.log(getAccount("Qutada"));
console.log(getBalance("Qutada"));





