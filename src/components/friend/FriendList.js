import styles from './friend.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
