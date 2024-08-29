import Link from "next/link";

//estilização
import "./style.css";


interface MenuResponsivoModal {
    fecharMenuResponsivo: () => void
};

export function MenuResponsivoModal({
    fecharMenuResponsivo
}: MenuResponsivoModal) {
    return (
        <div className="div__menuresponsivo">
            <header>
                <img src="/assets/images/svg/Logo.svg" alt="Logo que representa um tag html, formada pela letra A, / e V, deitados na horizontal." />

                <button type="button" onClick={fecharMenuResponsivo}>
                    <img src="/assets/images/png/fechar.png" alt="ícone que representa um x" id="img__fechar" />
                </button>
            </header>
            <nav>
                <ul>
                    <li>
                        <div className="div__seta"></div>
                        <Link href={"#"}>inicial</Link>
                    </li>
                    <li>
                        <Link href={"#"}>sobre mim</Link>
                    </li>
                    <li>
                        <Link href={"#"}>experiência</Link>
                    </li>
                    <li>
                        <Link href={"#"}>projetos</Link>
                    </li>
                    <li>
                        <Link href={"#"}>contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}