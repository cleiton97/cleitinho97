import Courses from "@/app/componetes/Courses";
import { sql } from "@vercel/postgres";
export const revalidate =0

export default async function ListCourse(){
    const { rows } = await sql 'SELECT * from courses';
    return(
        <div>
            <h1 className="text-center text-white"> Lista de Cursos</h1>

        <table>
            <thead>
                <tr> <td>Titulo do Curso</td> <td>Descrição</td></tr>
            </thead>
            <body>
            {
                rows.map((course) => {
                    return(

            <tr key=(course.title)<td>({course,title}</td> <td>(course.description)</td>    
            )

            })  
        }          
            </body>
        </table>


        </div>

    )
}