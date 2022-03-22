// perkam liektuvo bilietus internetu

//new Promise((resolve, reject)=>{})
//promise status gali buti, Pending, Resolve, Reject
function buyFlyTickets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        //klaida yra ir nepavyko (reject)
        reject("Sorry payment declined");
      } else {
        //klaidos nera, sekme (resolve)
        resolve("Thank you, have a nice trip");
      }
    }, 3000);
  });
}

// const result = buyFlyTickets();
// console.log("prmose===", promise);
//successMsg ==='Thank you, have a nice trip'
buyFlyTickets()
  .then((successMsg) => console.log(successMsg))
  .catch((errMsg) => console.log(errMsg));

//JEI PAKEISI const error = false, ir paslepsi .catch((errMsg) => console.log(errMsg)); - gusi success message.
