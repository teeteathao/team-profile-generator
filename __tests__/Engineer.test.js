const Engineer = require('../lib/Engineer');

describe('Engineer Class', ()=>{
    //Constrcutor
    it('Creates an engineer object', ()=>{
        const engineer = new Engineer('Thao', 111, 'thaon@testemail.com', 'teetest');

        expect(engineer.github).toEqual(expect.any(String));

        expect(engineer instanceof Engineer);
    })
    //getGithub() function
    it('Gets the employees github account ', ()=>{
        const engineer = new Engineer('Thao', 111, 'thaon@testemail.com', 'teetest');

        expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    })

    //getRole() function
    it('Gets the employees role', ()=>{
        const engineer = new Engineer('Thao', 111, 'thaon@testemail.com', 'teetest');

        expect(engineer.getRole()).toEqual('Engineer');
    })
})