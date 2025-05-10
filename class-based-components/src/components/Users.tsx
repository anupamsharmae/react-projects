import { Component } from 'react';
import classes from './Users.module.css';
import User from './User';

const DUMMY_USERS = [
   { id: 'u1', name: 'Max' },
   { id: 'u2', name: 'Manuel' },
   { id: 'u3', name: 'Julie' },
];

class Users extends Component {
   constructor() {
      super();
      this.state = {
         showUsers: true,
         name: ''
      };
   }

   toggleUserHandler = () => {
      // setShowUsers((currState) => !currState);
      this.setState((currState) => {
         return {
            showUsers: !currState.showUsers
         }
      })
   }

   render() {
      const usersList = (
         <ul>
            {
               DUMMY_USERS.map((user) => (
                  <User key={user.id} name={user.name} ></User>
               ))
            }
         </ul>
      )

      return (
         <div className={classes.users}>
            <button onClick={this.toggleUserHandler}>
               {this.state.showUsers ? 'Hide' : 'Show'} Users
            </button>
            {this.state.showUsers && usersList}
         </div>
      )
   }
}


// const Users = () => {
//    const [showUsers, setShowUsers] = useState(true);
//    const toggleUserHandler = () => {
//       setShowUsers((currState) => !currState);
//    }

//    const usersList = (
//       <ul>
//          {
//             DUMMY_USERS.map((user) => (
//                <User key={user.id} name={user.name} ></User>
//             ))
//          }
//       </ul>
//    )

//    return (
//       <div className={classes.users}>
//          <button onClick={toggleUserHandler}>
//             {showUsers ? 'Hide' : 'Show'} Users
//          </button>
//          {showUsers && usersList}
//       </div>
//    )
// }

export default Users;