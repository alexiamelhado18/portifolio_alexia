import Tech from "../Tech";
import "./style.css";

interface CardTrabalho {
    position: string,
    startDate: Date,
    endDate: Date,
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
                <h2>{position}</h2>

                <span>{startDate.getMonth().toString() + "/" + startDate.getFullYear().toString()} — {endDate.getMonth().toString() + "/" + endDate.getFullYear().toString()}</span>
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