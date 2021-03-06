const Manager = require('../lib/Manager');

describe('Manager Class', () =>{
    //Constructor
    it( "Creates a manager object", ()=> {
        const manager = new Manager('Thao', 111, 'thaon@testemail.com', 1)

        expect(manager.officeNumber).toEqual(expect.any(Number));
        expect(manager instanceof Manager);
    })
    //get office number function()
    it('Gets the managers office number', ()=>{
        const manager = new Manager('Thao', 111, 'thaon@testemail.com', 1)

        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    })

    //get employee role function
    it('Gets the role of the employee', () =>{
        const manager = new Manager('Thao', 111, 'thaon@testemail.com', 1)

        expect(manager.getRole()).toEqual('Manager');
    })
})