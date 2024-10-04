import Tech from "../CardTecnologia";
import "./style.css";

interface CardTrabalho {
    position: string,
    startDate: Date,
    endDate: Date | string,
    description: string,
    techs: string[]
}

export default function CardTrabalho({
    description,
    endDate,
    position,
    startDate,
    techs
}: CardTrabalho) {
    return (
        <>
            <div>
                <h4>{position}</h4>

                <span>{startDate.getMonth().toString() + "/" + startDate.getFullYear().toString()} — {typeof endDate === "string" ? endDate : endDate.getMonth().toString() + "/" + endDate.getFullYear().toString()}</span>
            </div>
            <p>{description}</p>

            <div>
                {
                    techs.map((tech, index) => {
                        return (
                            <Tech
                                key={index}
                                name={tech}
                            />
                        )
                    })
                }

            </div>
        </>
    );
}