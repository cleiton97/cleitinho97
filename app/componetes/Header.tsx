

export default function Header() {
  return (
    <>
    <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
      <h4>VIAGEM PASSE LIVRE</h4>
      <nav>
        <a className="hover:text-[#00e77f]" href="#">
          Home &nbsp;
        </a>
        <a className="hover:text-[#00e77f]" href="#cursos">
           &nbsp;
        </a>
        <a className="hover:text-[#00e77f]" href="#contato">
          Contato &nbsp;{" "}
        </a>
        <a className="hover:text-[#00e77f]" href="#">
          Login &nbsp;
        </a>
      </nav>
    </header>
    {}
  </>
  )
}