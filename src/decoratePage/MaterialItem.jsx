export default function MaterialItem({ name, src, onClick }) {
    return (
        <div className="material-item" onClick={onClick}>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}