import { BigNumber } from "ethers";

export const BASE_UNITS = BigNumber.from(10_000);

export const maxBN = (a: BigNumber, b: BigNumber) => (a.gt(b) ? a : b);
