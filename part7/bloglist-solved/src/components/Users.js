import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = (props) => {
  return(
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user =>
            <tr key={user.id}>
              <td>
                <Link to={`users/${user.id}`}>
                  {user.name}
                </Link> 
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)