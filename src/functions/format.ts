
export const escapeRegExp = (string: string): string => {
  return string.replace(/[*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export const formatWithCurrency = (value: Number | String, currency: string): string => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: currency }).format(Number(value))
}