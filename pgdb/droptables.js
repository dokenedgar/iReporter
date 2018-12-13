import db from './dbconfig';

//db.query('DROP TABLE IF EXISTS reflections')

const queryText =
    `DROP TABLE IF EXISTS users CASCADE`;

db.query(queryText, (error)=>{
	if (error) {
		console.log(error);
	}
});

const queryRedFlags =
    `DROP TABLE IF EXISTS redflags CASCADE`;

db.query(queryRedFlags, (error)=>{
	if (error) {
		console.log(error);
	}
});

const queryInterventions =
    `DROP TABLE IF EXISTS interventions CASCADE`;

db.query(queryInterventions, (error)=>{
	if (error) {
		console.log(error);
	}
});