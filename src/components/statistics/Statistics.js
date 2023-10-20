import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistic}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <ul className={styles.statList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label} - </span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistic;
