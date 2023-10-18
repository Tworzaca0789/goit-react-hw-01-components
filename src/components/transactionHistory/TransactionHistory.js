import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = _ref => {
  let { items } = _ref;
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
