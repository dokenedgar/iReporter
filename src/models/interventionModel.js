
export const interventions = [];

class InterventionClass {

  // eslint-disable-next-line class-methods-use-this
  create(data) {

    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      arr.push(r);
    }

    const newIntervention = {
      id: arr.join(''),
      createdOn: new Date().toDateString(),
      createdBy: data.userid,
      type: 'Intervention',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    interventions.push(newIntervention);
    let {id} = newIntervention;
    let response = {
        id,
        message: "Created Intervention record"
    };
    //return newRedFlag;
    return response;
  }

  getSpecificIntervention(id) {
    let userFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)){
        userFound = element;
        return userFound;
      }
    });
    return userFound;
  }

  
 getAllinterventionRecords() {
     return interventions;
 }


 editInterventionLocation(id, latitude, longitude){
    let recordFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)){
        element.location =  `${latitude}, ${longitude}`;
        recordFound = {
            id,
            message: "Updated red-flag record’s location"
        };
        return recordFound;
      }
    });
    return recordFound;

 }

/*
editRedFlagComment(id, comment){
    let recordFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)){
        element.comment =  comment;
        recordFound = {
            id,
            message: "Updated red-flag record’s comment"
        };
        return recordFound;
      }
    });
    return recordFound;
 }
*/
/*
 deleteRedFlag(id){
    let recordFound = false;
    interventions.forEach((element, index) =>{
      if((element.id === id)){
        interventions.splice(index, 1);
        recordFound = {
            id,
            message: "red-flag record has been deleted"
        };
        return recordFound;
      }
    });
    return recordFound;
 }
 */

}

export const newInterventionObject = new InterventionClass();