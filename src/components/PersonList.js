import React from "react";
import axios from "axios";
export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>username</th>
              <th>EMail</th>
            </tr>
            {this.state.persons.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.username}</td>
                <td>{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
