const Employee =require('../lib/Employee');

describe('Employee Class', () =>{
    it('Creates an employee object', () =>{
        const employee = new Employee('Thao', 111, 'thaon@testemail.com')

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee instanceof Employee);

    })
    //getName() function
    it('Gets the employees name', () =>{
        const employee = new Employee('Thao', 111, 'thaon@testemail.com')

        expect(employee.getName()).toEqual(expect.any(String));
    })
    //getId() Function
    it('Gets the employees ID', () =>{
        const employee = new Employee('Thao', 111, 'thaon@testemail.com')

        expect(employee.getId()).toEqual(expect.any(Number));
    })
    //getEmail() function
    it('Gets the employees email', () =>{
        const employee = new Employee('Thao', 111, 'thaon@testemail.com')

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    })
    //getRole() function
    it('Gets the employees role', () =>{
        const employee = new Employee('Thao', 111, 'thaon@testemail.com')

        expect(employee.getRole()).toEqual('Employee');
    })

})