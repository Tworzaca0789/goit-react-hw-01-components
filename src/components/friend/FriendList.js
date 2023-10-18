import styles from './friend.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = _ref => {
  let { friends } = _ref;
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
