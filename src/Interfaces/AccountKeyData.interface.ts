export interface Key {
  equals: (sample: Key) => boolean;

  getNumber: () => number;
}

export interface UserAccount {
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
  search: (key: Key) => UserAccount | undefined;
  delete: (key: Key) => boolean;
}
