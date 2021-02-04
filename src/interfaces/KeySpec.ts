export interface KeySpec {
    /**
     * will compare the sample key with the current key
     * @param {KeySpec} sample target key for comparison
     * @return {boolean} true when both keys share the same numerical val
     */
    equals: (sample: KeySpec) => boolean,

    /**
     * return numerical value of the current key
     */
    toNumber: () => number
}