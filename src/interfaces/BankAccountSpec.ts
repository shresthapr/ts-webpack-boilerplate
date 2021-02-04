import { KeySpec } from './KeySpec';

export interface BankAccountSpec {
    /**
     * check if the amount of deposit is non negative
     * increase the balance with the specified deposit amount
     * @param {number} amount amount to be deposited
     * @return {void}
     */
    deposit: (amount: number) => boolean,

    /**
     * return the current balanc
     */
    getBalance: () => number,

    /**
     * return the Key of the current account
     */
    getKey: () => KeySpec
}