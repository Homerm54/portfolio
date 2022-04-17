type Project = {
  /** Name of the project */
  title: string;
  /** Link to the project web app */
  link: string;
  /** Link to the Code Repository */
  repo_link: string | Array<{ name: string; link: string }>;
  /** Simple description of the project */
  description: string;
  /** Array of the tools, platforms and frameworks used in the development of the project */
  tools: Array<string>;
  /**
   * Whether or not the project is not currently active, and hence, 
   * not mantained or updated anymore.
   * */
  legacy: boolean;
}

const projects: Array<Project> = [
  {
    title: 'Starburst',
    link: 'https://starburst-app.herokuapp.com/',
    repo_link: [
      { name: 'Client', link: 'https://github.com/Homerm54/starburst-client' },
      { name: 'Server', link: 'https://github.com/Homerm54/starburst-api' },
    ],
    description: `
      The Starburst is the biggest project on the list, intended to be a Workspace Environment, 
      provides the user a place to design / develop projects, explore ideas, and keep a space to 
      brainstorm. The Web Application provides the user with the ability to create a project, and 
      inside the project, draw the designs, upload related files, and create a complex file 
      (markdown like), that allows to organize all the data that comes with creating and keeping 
      the progress of a project. 

      Much like a Notion application, but providing a file system to store multimedia, 
      tab system and calendar implementation. Inspired by Notion and the Jupyter Lab / VSCode 
      workspace.

      The application provides a MERN like stack, separated in 2 big projects, 
      the Client and the Server. The server provides Authentication, Database implementation with 
      Mongo Atlas, and Dropbox connection to store users' files.

      The client connects to the server via HTTP, and is separated in 2 main sections:
      - UI with ReactJS
      - API SDK to connect to the server

      The API SDK is used to provide ready to use, functions and classes to communicate
      with the modules provided by the server. Furthermore, this allows to developed UI and
      logic separately, which scales better, and provides less friction to changes.

      Both server and client are developed using Typescript, which ensures that the types,
      events, and codes matches across the overall codebase.
    `,
    tools: ['Node.js', 'React', 'Mongo DB', 'JWT', 'XState', 'Style Components', 'Typescript', 'Express.js', 'Heroku', 'NodeMailer', 'Dropbox API'],
    legacy: false,
  },

  {
    title: 'Time Machine',
    link: 'https://homerm54.github.io/time-machine/',
    repo_link: 'https://github.com/Homerm54/time-machine',
    description: `
      The Time Machine is a small project that seeks to implement the concepts of 
      State Machines and State Charts, to help in the development of UIs states. 
      
      The application consists in a simple Timer and a Stopwatch, with some small features. 
      The whole project is written with Typescript, providing a solid consistency and robustness 
      to both the Application Logic and behavior, and to the codebase overall.
    `,
    tools: ['FSM', 'State Charts', 'React', 'XState', 'Typescript'],
    legacy: false,
  },
  
  {
    title: 'React Calendar',
    link: 'https://the-react-calendar.herokuapp.com', 
    repo_link: [
      {
        name: 'Client', link: 'https://github.com/Homerm54/React-Calendar',
      },
      {
        name: 'Server', link: 'https://github.com/Homerm54/React-Calendar-Backend',
      }
    ],
    description: `
      The React Calendar is intended to be an application that "mimics" some features of
      Google Calendar, like scheduling an event, editing / deleting the event, among others. 
      Both the server and the Client are hosted in Heroku.

      Developed under the MERN (MongoDB - Express - React - Node) stack, and implements two big
      projects, The Frontend Client Application, and the Backend Server. As this, the development 
      of the Client and the Server is independent, and both "worlds" are connected via HTTP requests.
      
      The application presents Authentication Feature with JWT, Database service using MongoDB 
      and MongoAtlas, for the Client Side, React JS with Redux to manage the application’s global 
      state, alongside with server requests.
    `,
    tools: ['Express.js', 'MongoDB', 'Mongo Atlas', 'React', 'Redux', 'JWT', 'Material UI'],
    legacy: true,
  },

  {
    title: 'React Notes',
    link: 'https://react-notes-beta.web.app',
    repo_link: 'https://github.com/Homerm54/React-Notes',
    description: `
      This project is a rebuilt of the Note Taker, but using React, along with Firebase to 
      handle Database, authentication and Functions, this way, creating a Serverless web application.
      With this project, the users can create a profile, and start taking notes, with Markdown syntax, 
      and see them across multiple devices.
    `,
    tools: ['Firebase', 'React', 'Material UI'],
    legacy: true,
  },

  {
    title: 'Note Taker',
    link: 'https://thenote-taker.herokuapp.com',
    repo_link: 'https://github.com/Homerm54/Note-Taker',
    description: `
      The Note Taker App is one of the first projects that I made, is built with JQuery and Express,
      in a traditional MVC way. It's the first approach in creating an application that allows the 
      user to create notes, in Markdown, and edit / view them live on the web, across devices.
      
      The application has an authentication feature, along with a Sequelize database, allows multiple 
      users to sign in, create notes, and persist them across sessions. Besides JQuery, the server 
      uses Handlebars.
    `,
    tools: ['JQuery', 'Express.js', 'Sequelize', 'Handlebars'],
    legacy: true,
  },
];

export { projects };
