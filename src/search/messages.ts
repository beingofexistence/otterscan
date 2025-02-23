import { commify } from "../utils/utils";

export const totalTransactionsFormatter = (total: number) =>
  `A total of ${commify(total)} ${
    total > 1 ? "transactions" : "transaction"
  } found`;

export const totalContractsFormatter = (total: number) =>
  `A total of ${commify(total)} ${total > 1 ? "contracts" : "contract"} found`;
