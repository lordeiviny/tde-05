import React from 'react';

function UserInfo({ name, birthday, email }) { 
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Data de nascimento: {birthday}</p>
      <p>e-mail: {email}</p>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <UserInfo
          key={index}
          name={user.name}
          birthday={user.birthday}
          email={user.email}
        />
      ))}
    </div>
  );
}


const userList = [
  {
    name: 'algum nome',
    birthday: '05/05/05',
    email: 'teste@teste.com'
  },
  {
    name: 'outro nome',
    birthday: '06/06/06',
    email: 'teste2@teste.com'
  },
  {
    name: 'mais um nome',
    birthday: '10/10/10',
    email: 'teste3@teste.com'
  }
];

function App() {
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <UserList users={userList} />
    </div>
  );
}

export default App;
