export default function Toolbar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="toolbar">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`toolbar-btn ${activeCategory === category.id ? "active" : ""}`}
          onClick={() => onSelectCategory(category.id)}
        >
          <img src={category.icon} alt={category.name} />
        </button>
      ))}

      {/* reload-btn */}
      <button className="reload-btn">
        <img src="./images/decorate-icons/icon-reload.svg" alt="icon-reload" />
      </button>
      {/* download-btn */}
      <button className="download-btn">
        <img src="./images/decorate-icons/icon-download.svg" alt="icon-download" />
      </button>

    </div>
  );
}
