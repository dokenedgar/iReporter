import db from './dbconfig';

const queryText =
    `CREATE TABLE IF NOT EXISTS
      users (
        count SERIAL PRIMARY KEY,
        userid VARCHAR(20) NOT NULL,
        firstname VARCHAR(20) NOT NULL,
        othernames VARCHAR(20) ,
        lastname VARCHAR(20) NOT NULL,
        phoneNumber VARCHAR(20) NOT NULL,
        username VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        registered VARCHAR(20) NOT NULL,
        isAdmin VARCHAR(20) NOT NULL
        
      )`;

db.query(queryText, (error)=>{
	if (error) {
		console.log(error);
	}
});

const tableRedFlags =
    `CREATE TABLE IF NOT EXISTS
      redflags (
        count SERIAL PRIMARY KEY,
        id VARCHAR(20) NOT NULL,
        createdon VARCHAR(30) NOT NULL,
        createdby VARCHAR(20) NOT NULL,
        type VARCHAR(20) NOT NULL,
        location VARCHAR(80) NOT NULL,
        status VARCHAR(20) NOT NULL,
        comment VARCHAR(1000) NOT NULL
        
      )`;
// add title of record & images as well
db.query(tableRedFlags, (error)=>{
  if (error) {
    console.log(error);
  }
});

const tableInterventions =
    `CREATE TABLE IF NOT EXISTS
    interventions (
        count SERIAL PRIMARY KEY,
        id VARCHAR(20) NOT NULL,
        createdon VARCHAR(30) NOT NULL,
        createdby VARCHAR(20) NOT NULL,
        type VARCHAR(20) NOT NULL,
        location VARCHAR(80) NOT NULL,
        status VARCHAR(20) NOT NULL,
        comment VARCHAR(1000) NOT NULL
      )`;
// add title of record & images as well
db.query(tableInterventions, (error)=>{
  if (error) {
    console.log(error);
  }
});

//userid UUID NOT NULL,
//price INTEGER NOT NULL