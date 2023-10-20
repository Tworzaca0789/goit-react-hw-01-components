import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.type}>Type</th>
          <th className={styles.amount}>Amount</th>
          <th className={styles.currency}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {items.map(item => (
          <tr className={styles.bodyItem} key={item.id}>
            <td className={styles.typeTd}>{item.type}</td>
            <td className={styles.amountTd}>{item.amount}</td>
            <td className={styles.currencyTd}>{item.currency}</td>
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
