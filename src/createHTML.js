//Generate Manager Card
const generateManager = function (managerObject) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${managerObject.name}</h3>
                <h4>Manager</h4><i class="material-icons">local_cafe</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${managerObject.id}</p>
                <p class="email">Email: <a href="mailto:${managerObject.email}">${managerObject.email}</a></p>
                <p class="office">Office Number: ${managerObject.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//Generate Engineer Card
const generateEngineer = function (engineerObject) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineerObject.name}</h3>
                <h4>Engineer</h4><i class="material-icons">devices</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineerObject.id}</p>
                <p class="email">Email: <a href="mailto:${engineerObject.email}">${engineerObject.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineerObject.github}" target= "_blank">${engineerObject.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//Generate Intern Card
const generateIntern = function (internObject) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${internObject.name}</h3>
                <h4>Intern</h4><i class="material-icons">help</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${internObject.id}</p>
                <p class="email">Email:<a href="mailto:${internObject.email}">${internObject.email}</a></p>
                <p class="school">School: ${internObject.school}</p>
            </div>
        </div>
    </div>
    `;
}

createHTML = (data) =>{
    pageList = [];
    for(let i = 0; i < data.length; i++){
        const currentEmployee = data[i];
        const currentRole = currentEmployee.getRole();

        if(currentRole === 'Manager'){
            const managerCard = generateManager(currentEmployee);
            pageList.push(managerCard);
        }
        if(currentRole === 'Engineer'){
            const engineerCard = generateEngineer(currentEmployee);
            pageList.push(engineerCard);
        }
        if(currentRole === 'Intern'){
            const internCard = generateIntern(currentEmployee);
            pageList.push(internCard);
        }
    }

    const employeeCards = pageList.join('');

    const generatedEmployeeTeam = generateTeamPage(employeeCards);
    return generatedEmployeeTeam;
}

// generate the employee cards created
const generateTeamPage = function (employeeTeamCards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeTeamCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
  `;
}
module.exports = createHTML;
