import { sql } from "@vercel/postgres;

export default async function NewCourse(){
    async function saveCourse(FormData: FormData){       
        "use serve"
        const title = FormData.get("title") as string;
        const description = FormData.get("description") as string;
        const url = FormData.get("url") as string;
        await sql`INSERT INTO courses (title, description, url) VALUES ( ${title}, ${description}, ${url})`


        console.log("Acesso a função")
    }
    return(
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input>type="text" name ="title" placeholder="Digite o texto do cursos"</input><br/>
                <input>type="text" name ="descirption" placeholder="Digite Descrição do curso"</input><br/>
                <input>type="text" name ="url" placeholder="Digite a url da imagem"</input><br/>
                <button formAction={saveCourse} className="text-white">SALVAR</button>
            </form>
        </div>

    )
}
