const cursos = ['JavaScript', 'HTMl', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

export default function getTodosCursos(){
    return cursos
}

function getCursos(i_curso){
    return cursos[i_curso]
}

export {cursos, getCursos}