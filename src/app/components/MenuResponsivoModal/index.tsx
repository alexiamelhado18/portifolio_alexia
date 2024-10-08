import Link from "next/link";

//estilização
import "./style.css";

//componentes
import Image from "next/image";

//imagens
import imgLogo from "../../../../public/assets/images/svg/Logo.svg";
import imgFechar from "../../../../public/assets/images/svg/fechar.svg";


interface MenuResponsivoModal {
    closeMenuResponsivo: () => void
};

export function MenuResponsivoModal({
    closeMenuResponsivo
}: MenuResponsivoModal) {
    return (
        <div className="div__menuresponsivo">
            <header>
                <Image
                    src={imgLogo}
                    alt="Logo que representa um tag html, formada pela letra A, / e V, deitados na horizontal."
                />

                <button type="button" onClick={closeMenuResponsivo}>
                    <Image
                        src={imgFechar}
                        alt="ícone que representa um x"
                        id="img__fechar"
                    />
                </button>
            </header>
            <nav>
                <ul>
                    <li onClick={closeMenuResponsivo}>
                        <div className="div__seta"></div>
                        <Link href="#div__banner">inicial</Link>
                    </li>
                    <li onClick={closeMenuResponsivo}>
                        <Link href="#section__sobremim">sobre mim</Link>
                    </li>
                    <li onClick={closeMenuResponsivo}>
                        <Link href="#section__experiencia">experiência</Link>
                    </li>
                    <li onClick={closeMenuResponsivo}>
                        <Link href="#section__projetos">projetos</Link>
                    </li>
                    <li onClick={closeMenuResponsivo}>
                        <Link href="#section__contato">contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}