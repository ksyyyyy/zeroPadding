
// numをlenの桁数でゼロ埋めする
function zeroPadding(num, len) {
  return (Array(len).join('0') + num).slice(-len);
}
