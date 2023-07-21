import UsersTable from './UsersTable'

export async function getUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    return users
  }
export default async function Home() {
    const users = await getUsers()
  return (
    <>
      
        <UsersTable/>
      <br/>
      
      <table>
        <tr>
          <th colSpan='3' className='topnav'>Rendered By Next JS | Server side rendered</th>
        </tr>
        {users.map((user, index) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
