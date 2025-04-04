const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

export default function getTodosCursos(){
    return cursos
}

function getCursos(i_curso){
    return cursos[i_curso]
}

export {cursos, getCursos}