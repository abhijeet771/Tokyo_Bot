import "./HairstyleSearch.scss";

import { Search, X } from "lucide-react";

const HairstyleSearch = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="hairstyle-search">
      <div className="hairstyle-search__input">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search hairstyles..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />

        {searchTerm && (
          <button
            className="clear-btn"
            onClick={() =>
              setSearchTerm("")
            }
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HairstyleSearch;