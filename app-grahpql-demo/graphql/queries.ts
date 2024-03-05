export const GET_USERS = /* GraphQL */ `
  query MyQuery {
    listActividades {
      items {
        createdAt
        id
        id_actividad
        id_creador
        id_proyecto
        updatedAt
        url_video
        timestamps {
          act {
            correctAnswer
            incorrectAnswer1
            incorrectAnswer2
            incorrectAnswer3
            question
          }
          time
          tipo
        }
      }
    }
  }
`;

export const GET_USUARIO_QUERY = /* GraphQL */`
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

export const CREATE_USUARIO_MUTATION = /* GraphQL */ `
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
