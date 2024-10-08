'use client';

import "./style.css";

//imagens
import imgFechar from "../../../../public/assets/images/svg/fechar.svg";
import imgLupa from "../../../../public/assets/images/svg/lupa.svg";

//componentes
import Image from "next/image";

interface Projects {
    closeProjectModal: () => void
}

export default function ProjetosModal({
    closeProjectModal
}: Projects) {
    return (
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <header>
                    <button type="button" onClick={closeProjectModal}>
                        <Image
                            src={imgFechar}
                            alt=""
                            width={25}
                            style={{ cursor: "pointer" }}
                        />
                    </button>
                </header>
                <div>
                    <div>
                        <div className="div__pesquisa">
                            <input type="search" />
                            <button>
                                <Image
                                    src={imgLupa}
                                    alt=""
                                />
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>January</td>
                                    <td>$100</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}