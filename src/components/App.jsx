import { Profile } from './profile/Profile';
import { FriendList } from './friend/FriendList';
import { Statistic } from './statistics/Statistics';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import user from './profile/user.json';

export const App = () => {
  return (
     <div>
    <FriendList/>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      <Statistic />
      <TransactionHistory/>
    </div>
  );
}



//React homework template
//style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}