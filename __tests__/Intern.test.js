const Intern = require('../lib/Intern');

describe('Intern class', ()=>{
    // Constructor
    it('Creates an intern object', ()=>{
        const intern = new Intern('Thao', 111, 'thaon@testemail.com','UCSD');

        expect(intern.school).toEqual(expect.any(String));
        expect(intern instanceof Intern);
    })
    //getSchool() function
    it('Gets the interns school', ()=>{
        const intern = new Intern('Thao', 111, 'thaon@testemail.com','UCSD');

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    })
    //getRole() function
    it('Gets the role of the employee',()=>{
        const intern = new Intern('Thao', 111, 'thaon@testemail.com','UCSD');

        expect(intern.getRole()).toEqual('Intern');
    })
})