import PropTypes from "prop-types";

// untuk Rupiah
// function currency(amount) {
//   amount = parseFloat(amount).toFixed(0);
//   amount = amount.replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
//   return 'Rp ' + amount;
// }

function currency(amount) {
  return amount.toLocaleString("us", { style: "currency", currency: "USD" });
}

const Price = ({ amount }) => currency(Number(amount));

Price.propTypes = {
  amount: PropTypes.string.isRequired
};

export default Price;
