# RftValami

This project is the UI application for a university project.

This project is made with Angular 7.

The members of the team are:
- Norbert Gagyi
- István Gégény
- Balázs Bardócz
- Jordán Szalontai

## The application

This application supports two languages
- Hungarian
- English UK

The main goal of this application is to represent an educational system, like Neptun. For now, this is a very basic implementation, with only a dashboard, where users can manage themselves, and the admin can manage all users (including him/her).

The look of this application was customized for this particular project, with the logo and the layout.

### Main features
- If you are a newcomer you can register to the system, so you can log in and use the application
- If you already registered, you can log in with your crendentials in order to use the application
- In the application footer you can see the latest news based on your language preferences
- In the header you can change between English (UK) and Hungarian languages
- On the dashboard you can see basic information about yourself that you provided, and you can edit some of that
- You can give feedback on a dedicated page to the developers as an e-mail

### Run the app

0. Please, make sure that you have Node.js and npm installed to your machine, and you checked out the repository and install the dependencies

```
$ npm install
```
1. Run the following commands in separate command lines (or concurrently)

```
$ node app.js
```

```
$ npm run dev-ui
```
2. Open the browser at `localhost:3000`

**NOTE**: you have to specifiy the following enviroment variables to work properly
```
process.env.GMAIL_EMAIL
process.env.GMAIL_PASS
process.env.CLIENT_ID
process.env.CLIENT_SECRET
```
