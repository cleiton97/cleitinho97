export default async function NewCourse(){
    function saveCourse(){
        "use serve"
        console.log("Acesso a função")
    }
    return(
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input>type="text" name ="title" placeholder="Digite o texto do cursos"</input><br/>
                <input>type="text" name ="descirption" placeholder="Digite Descrição do curso"</input><br/>
                <input>type="text" name ="url" placeholder="Digite a url da imagem"</input><br/>
                <button formAction={save Course} className="text-white">SALVAR</button>
            </form>
        </div>

    )
}
