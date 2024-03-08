export const GET_ITEMS = /* GraphQL */ `
  query MyQuery {
    llistVideosInteractivos {
      items {
        createdAt
        id_actividad
        id_creador
        id_proyecto
        url_video
        timestamps {
          time
          tipo
          act {
            correctAnswer
            incorrectAnswer1
            incorrectAnswer3
            question
            incorrectAnswer2
          }
        }
        updatedAt
      }
    }
  }
`;

export const GET_USUARIO_QUERY = /* GraphQL */ `
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
    createUsuario(input: { email: $email, name: $name, lastname: $lastname }) {
      createdAt
      email
      id
      lastname
      name
    }
  }
`;
