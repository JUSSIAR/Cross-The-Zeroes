export const cn = (args: {[k: string]: boolean}): string => {
  let acc: string = ""
  for (const key in args) {
    if (args[key]) {
      acc += key
    }
  }
  return acc
}