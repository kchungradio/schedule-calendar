export default date => {
  let hours = new Date(date).getHours()
  const ampm = hours >= 12 ? 'p' : 'a'
  hours %= 12
  hours = hours || 12
  return hours + ampm
}
