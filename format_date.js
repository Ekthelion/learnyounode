module.exports = (date) => {
  let result = '';
  result = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${date.getDate()} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
  return result;
}
