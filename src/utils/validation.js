export const required =  value => (value ? undefined : 'Required')

export const isnumber = (value) => {
  if(isNaN(value)) {
    return 'Number Expected'
  }
}

export const istext = (value) => {
  if(typeof value != 'string') {
    return 'Invalid text provided'
  }
}
