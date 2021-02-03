export interface Key {
  equals: (sample: Key) => boolean;
}

export interface UserAccount {
  key: Key;
  balance: number;
  name?: string;
  accountNo?: number;
  mobile?: number;
  email?: number | string;
  getBalance: () => number;
  getKey: () => Key;
}

export interface DataStore {
  userlogs: UserAccount[];
  insert: (account: UserAccount) => boolean;
  find: (key: Key) => UserAccount;
  delete: (key: Key) => boolean;
}
