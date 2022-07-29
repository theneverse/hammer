export const ellipseAddress = (address: string | null | undefined, width = 4): string => {
  if (!address) return ''

  if (width <= 0) {
    return address
  }

  const prefixWith = address.slice(0, 2) === '0x' ? width + 2 : width

  return `${address.slice(0, prefixWith)}...${address.slice(-width)}`
}
