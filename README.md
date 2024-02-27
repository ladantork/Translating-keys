# Translating keys

Northcoders is expanding to France!

Unfortunately for us, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French.

Write a function that will take an object representing a student's data, a key that needs changing, and its English translation. The function should return a new object with the relevant key name changed to its English translation.

const student = {
    prénom: 'Carla',
    surname: 'Bruni',
    job: 'Artist'
}
const keyToChange = 'prénom'
const translation = 'firstName'

translateKey(student, keyToChange, translation) /* should return the following:

{
    firstName: 'Carla',
    surname: 'Bruni,
    job: 'Artist'
} 
*/
