## Project Specificarion

### Database saves an array of BankAccounts,

- can insert, find and delete BankAccount from its saved list of BankAccounts.
- Database shouldn’t allow insertion of a new account that shares the same key with an existing account
- Each BankAccount keeps a key: Key, balance: number, has a deposit method that allows top up, a getBalance method that returns balance, and a getKey methods that returns the Key when asked
- Key has equals method to compare two Keys and return either true or false, and
  getNumber that returns the actual numerical key when asked
