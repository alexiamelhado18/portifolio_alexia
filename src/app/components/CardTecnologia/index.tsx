import "./style.css";

interface Tech {
    name: string
}

export default function CardTecnologia({
    name
}: Tech) {
    return (
        <div className="tecnologia">
            <span>{name}</span>
        </div>
    );
}