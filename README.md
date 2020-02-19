# Challenge Description

We’re looking to build the first version of our client-facing web application. In a nutshell, we’d like to provide a prompt to users (e.g. “What do you think of the results of the New Hampshire primaries?”) and have them record a video of their response. 

Core functionality includes:
- User sign-up and login
- Display prompt and record video
- View and replay saved videos

## Requirements

- User sign-up
    - User can sign up using username and password
    - Confirmation link sent to email
    - User can log in using credentials after confirmation
- User Profile
    - Set up profile using
        - Name
        - Birthdate
        - location of birth
        -   Current location
        - Gender: man / woman / non-binary
        - Marital status
        - number of children, grandchildren
        - Occupation (checkbox for retired yes/no)  
- Record videos
    - Display a prompt to the user
    - Allow them to start recording (up to 10 min) when ready (lead in by counting to 3)
    - Allow them to stop recording and save or re-record video (please use one of: GCP, S3, or Minio for storage)
    - View videos
    - Allow user to view and re-play their videos



## Evaluation
How we’ll be evaluating submissions:
1. Appealing design: Is the app a pleasure to use and look at?
2. Screencast showing walkthrough of core functionality: Does it perform the core functionality described?
3. Implementation: Did you use the framework and tech stack provided in the starter application (see below)
3. Github repo: How clean and easy to understand is the code?
4. Dockerfile: Are we able to run it locally using Docker? Please use the provided docker files (modify them if necessary). When you are done we should be able to spin up the app locally using docker-compose
5. Graphql API: Following the template provided, use graphql for the API.


# Implementation

## Starter App

To get you started  we have provided a starter application structure. The backend is adapted from the prosma2 examples, and the frontend is a skeleton for a react + typescript + MUI app.

See the READMEs in each component folder for more tips and guides.

## Stack

The stack consists of
1. Frontend: Typescript + React
2. API: Graphql
3. Backend: Typescript + Express + GraphQL Yoga
4. Data Model: prisma2
5. Storage: Postgres + S3

## Programming Guidelines

1. Please use the dependencies provided here (unless necessary, don't change them)
2. The app should be implemented in typescript + React. Please follow best practices -- such as using react hooks and functional components.
3. Please use off the shelf MUI components wherever possible.
4. Use redux for global state management, and use redux-saga for asynchronous API call management.

## Links

- Prisma2: https://github.com/prisma/prisma2
- Prisma Examples: https://github.com/prisma/prisma-examples
- Prisma2 cli docs: https://github.com/prisma/prisma2/blob/master/docs/prisma2-cli.md
