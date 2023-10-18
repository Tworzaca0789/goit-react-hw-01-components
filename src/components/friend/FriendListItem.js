import styles from './friend.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = _ref => {
  let { friend } = _ref;
  return (
    <>
      <li className={styles.item} key={friend.id}>
        <span
          className={(styles.status, { [styles.isOnline]: friend.isOnline })}
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    </>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendListItem;
