import "./style.css";

interface Tech {
    name: string
}

export default function Tech({
    name
}: Tech) {
    return (
        <div className="tech">
            <span>{name}</span>
        </div>
    );
}