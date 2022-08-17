export const STATUS = {
  success: "SUCCESS",
  pending: "PENDING CONFIRMATION",
  failure: "NOT RECEIVE"
}

export const RECIPIENTS = [
  {
    name: "Luo lin",
    accountNumber: "611243367",
    bankName: "Bank of china",
    swiftCode: "842775342",
    issuingBank: "Bank of china of huangzhou branch",
    ownerAddress: "XXXXXXXXXXXX",
    transferAmount: "1000.00",
    currency: "CNY",
    status: STATUS.success
  },
  {
    name: "Luo lin",
    accountNumber: "611243367",
    bankName: "Bank of china",
    swiftCode: "842775342",
    issuingBank: "Bank of china of huangzhou branch",
    ownerAddress: "XXXXXXXXXXXX",
    transferAmount: "1000.00",
    currency: "CNY",
    status: STATUS.pending
  },
  {
    name: "Luo lin",
    accountNumber: "611243367",
    bankName: "Bank of china",
    swiftCode: "842775342",
    issuingBank: "Bank of china of huangzhou branch",
    ownerAddress: "XXXXXXXXXXXX",
    transferAmount: "1000.00",
    currency: "CNY",
    status: STATUS.failure
  }
]