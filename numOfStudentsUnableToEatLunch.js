
var countStudents = function(students, sandwiches) {
    let len = students.length;
    let count = 0

    for(let i=0; i<len; i++) {
        if(count == students.length) break

        if(students[i] == sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            count = 0
        } else {
            students.push(students[i])
            students.shift()
            count++
        }
        i--
        len = students.length
    }
    return students.length
    
};

// let students = [1,1,0,0], sandwiches = [0,1,0,1]
students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
console.log(countStudents(students, sandwiches));