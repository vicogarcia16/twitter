const User = require('./../../app/models/User')

describe('Unit test for User class', () => {
    test('1. Create an User object', () => {
        const user = new User(1, "carlogilmar", "carlo", "Bio")
        //validacion izquierda con derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe('carlogilmar')
        expect(user.name).toBe('carlo')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()//Verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('2. Add getters', () => {
        const user = new User(1, "carlogilmar", "carlo", "Bio")
        //validacion izquierda con derecha
        expect(user.getUsername()).toBe('carlogilmar')
        expect(user.getBio()).toBe('Bio')
        expect(user.getDateCreated()).not.toBeUndefined()//Verifica que el valor no sea undefine
        expect(user.getLastUpdated()).not.toBeUndefined()
    });
    test('3. Add setters', () => {
        const user = new User(1, "carlogilmar", "carlo", "Bio")
        user.setUsername = 'Gilmar'
        expect(user.username).toBe('Gilmar')
        user.setBio = 'New Bio'
        expect(user.bio).toBe('New Bio')

    });
})