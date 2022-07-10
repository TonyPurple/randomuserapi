import React from 'react';
 
const Lists = ({ users }) => {
  return (
      <div>
          <ul>
              {users.map(user => (
                  <li key={user.id}>{user.name}</li>
              ))}
          </ul>
      </div>
  )
};
 
export default Lists;