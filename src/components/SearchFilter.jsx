import { useState } from "react";

function SearchFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ searchTerm, category, startDate, endDate });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="food">🍽️ Food</option>
          <option value="transportation">🚗 Transportation</option>
          <option value="utilities">💡 Utilities</option>
          <option value="entertainment">🎭 Entertainment</option>
          <option value="housing">🏠 Housing</option>
          <option value="healthcare">⚕️ Healthcare</option>
          <option value="education">📚 Education</option>
          <option value="shopping">🛍️ Shopping</option>
          <option value="travel">✈️ Travel</option>
          <option value="subscriptions">📺 Subscriptions</option>
          <option value="gifts">🎁 Gifts</option>
          <option value="insurance">🛡️ Insurance</option>
          <option value="investments">📈 Investments</option>
          <option value="charity">❤️ Charity</option>
          <option value="miscellaneous">🔹 Miscellaneous</option>
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default SearchFilter;
