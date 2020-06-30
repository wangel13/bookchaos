import qs from 'qs'

const defaultOptions = {
  s: 80,
  r: 'g',
  d: 'identicon',
}

export const getGravatar = (emailHash: string, options = defaultOptions) => {
  const base = `https://www.gravatar.com/avatar/`
  const query = qs.stringify(options)
  return `${base}${emailHash}?${query}`
}
