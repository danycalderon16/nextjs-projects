export const GET_ANSWERS = /* GraphQL */ `
  query MyQuery {
    listAnswers {
      nextToken
      items {
        createdAt
        idActivity
        idConsumer
        idProject
        results {
          time
          type
          activity {
            chosenAnswer
            status
            question
            feedback
          }
        }
        updatedAt
      }
    }
  }
`;

export const GET_VIDEOS = /* GraphQL */ `
  query MyQuery {
    listInteractiveVideos {
      items {
        activityType
        createdAt
        endTime
        idActivity
        idCreator
        idProject
        startTime
        updatedAt
        urlVideo
        timestamps {
          activities {
            correctAnswer
            incorrectAnswer1
            question
            justification
            incorrectAnswer3
          }
          time
          type
        }
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

export const create_hard = /* GraphQL */ `
  mutation MyMutation {
  createInteractiveVideo(input: {
    idProject: "31",
    idActivity: "11",
    idCreator: "5",
    startTime: 0.0,  
    endTime: 10.0,  
    activityType: "Tipo de Actividad",
    urlVideo: "https://www.ejemplo.com/video",
    timestamps: [
      {
        time: 2.0,
        type: "Pregunta",
        activities: {
          question: "¿Cuál es la pregunta?",
          correctAnswer: "Respuesta Correcta",
          justification: "Justificación de la respuesta correcta",
          incorrectAnswer1: "Respuesta Incorrecta 1",
          incorrectAnswer2: "Respuesta Incorrecta 2",
          incorrectAnswer3: "Respuesta Incorrecta 3"
        }
      },
      {
        time: 5.0,
        type: "Otra Actividad",
        activities: {
          question: "¿Otra pregunta?",
          correctAnswer: "Otra Respuesta Correcta",
          justification: "Justificación de otra respuesta correcta",
          incorrectAnswer1: "Otra Respuesta Incorrecta 1",
          incorrectAnswer2: "Otra Respuesta Incorrecta 2",
          incorrectAnswer3: "Otra Respuesta Incorrecta 3"
        }
      }
    ]
  }) {
    activityType
    createdAt
    endTime
    idActivity
    idCreator
    idProject
    startTime
    updatedAt
    urlVideo
    timestamps {
      time
      type
      activities {
        correctAnswer
        incorrectAnswer1
        incorrectAnswer2
        incorrectAnswer3
        question
        justification
      }
    }
  }
}

`

export const CREATE_VIDEO = /* GraphQL */ `
 mutation MyMutation(input: {
    idProject: "31",
    idActivity: "11",
    idCreator: "5",
    startTime: 0.0,  
    endTime: 10.0,  
    activityType: "Tipo de Actividad",
    urlVideo: "https://www.ejemplo.com/video",
    timestamps: [
      {
        time: 2.0,
        type: "Pregunta",
        activities: {
          question: "¿Cuál es la pregunta?",
          correctAnswer: "Respuesta Correcta",
          justification: "Justificación de la respuesta correcta",
          incorrectAnswer1: "Respuesta Incorrecta 1",
          incorrectAnswer2: "Respuesta Incorrecta 2",
          incorrectAnswer3: "Respuesta Incorrecta 3"
        }
      },
      {
        time: 5.0,
        type: "Otra Actividad",
        activities: {
          question: "¿Otra pregunta?",
          correctAnswer: "Otra Respuesta Correcta",
          justification: "Justificación de otra respuesta correcta",
          incorrectAnswer1: "Otra Respuesta Incorrecta 1",
          incorrectAnswer2: "Otra Respuesta Incorrecta 2",
          incorrectAnswer3: "Otra Respuesta Incorrecta 3"
        }
      }
    ]
  })  {
      createInteractiveVideo(input: $input) {
        activityType
        createdAt
        endTime
        idActivity
        idCreator
        idProject
        startTime
        updatedAt
        urlVideo
        timestamps {
          time
          type
          activities {
            correctAnswer
            incorrectAnswer1
            incorrectAnswer2
            incorrectAnswer3
            question
            justification
          }
        }
      }
    }

    input InteractiveVideoInput {
  idProject: String!
  idActivity: String!
  idCreator: String!
  startTime: Float!
  endTime: Float!
  activityType: String!
  urlVideo: String!
  timestamps: [TimeStampActivityInput]!
}

input TimeStampActivityInput {
  time: Float!
  type: String!
  activities: VideoActivitiesInput!
}

input VideoActivitiesInput {
  question: String!
  correctAnswer: String!
  justification: String!
  incorrectAnswer1: String!
  incorrectAnswer2: String!
  incorrectAnswer3: String!
}
  `;

  