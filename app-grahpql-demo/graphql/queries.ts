export const GET_USERS = `
query GetUsers {
  listUsuarios {
    items {
      createdAt
      email
      id
      lastname
      updatedAt
      name
    } 
  }
}

`

export const GET_USUARIO_QUERY = `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      email
      name
      lastname
      updatedAt
      id
      createdAt
    }
  }
`;

export const CREATE_USUARIO_MUTATION = `
  mutation CreateUsuario($email: String!, $name: String!, $lastname: String!) {
    createUsuario(input: { email: $email, name: $name, lastname: $lastname}) {
      createdAt
      email
      id
      lastname
      name
    }
  }
`;