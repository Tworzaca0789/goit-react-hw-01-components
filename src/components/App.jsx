import  Profile  from './profile/Profile';
import  FriendList  from './friend/FriendList';
import  Statistic  from './statistics/Statistics';
import  TransactionHistory from './transactionHistory/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend/friends.json';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
     <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      <Statistic
        title='Upload stats'
        stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
}
export default App;
