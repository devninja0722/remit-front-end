export const STATUS = {
  success: "SUCCESS",
  cancel: "CANCELLED",
  received: "RECEIVED",
  notReceived: "NOT RECEIVED",
  processing: "PROCESSING",
  notConfirmed: "CONFIRM",
  confirmed: "CONFIRMED",
  appeal: "APEAL",
  none: undefined,
}

export const TRANSFERS = [
  {
    txnType: "Transfer",
    recipient: "Luo Lin",
    bankAccount: "61143526765",
    totalAmount: 1000.00,
    currency: "CNY",
    status: STATUS.success
  },
]

export const DEPOSITS = [
  {
    id: 1,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.none,
    time: { h: 1, m: 0, s: 0 },
    receipt: "",
    confirmStatus: STATUS.notConfirmed
  },
  {
    id: 2,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.received,
    time: { h: 1, m: 0, s: 0 },
    receipt: "",
    confirmStatus: STATUS.confirmed
  },
  {
    id: 3,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.notReceived,
    time: { h: 1, m: 0, s: 0 },
    receipt: "",
    confirmStatus: STATUS.confirmed
  },
  {
    id: 4,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.notReceived,
    time: { h: 1, m: 0, s: 0 },
    receipt: "",
    confirmStatus: STATUS.appeal
  },
  {
    id: 5,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.processing,
    time: { h: 1, m: 0, s: 0 },
    receipt: "",
    confirmStatus: STATUS.none
  },
  {
    id: 6,
    txnType: "Deposit",
    depositer: "Luo Lin",
    depositAmount: "100",
    currency: "USD",
    status: STATUS.cancel,
    time: undefined,
    receipt: undefined,
    confirmStatus: STATUS.none
  },
]

export const BENFICIARY = {
  name: "Luo Lin",
  accountNumber: "61143526765",
  bankName: "Bank of china",
  swiftCode: "842775342",
  issuingBank: "Bank of china huangzhou branch",
  ownerAddress: "XXXXXXXXXXXX",
  transferAmount: "10000",
  currency: "CNY"
}