function translateKey(student, keyToChange, translation) {
    const newObject = {};
    for (let key in student) {
        if (key === keyToChange) {
            newObject[translation] = student[key];
        } else {
            newObject[key] = student[key];
        }
    }
    return newObject;
}