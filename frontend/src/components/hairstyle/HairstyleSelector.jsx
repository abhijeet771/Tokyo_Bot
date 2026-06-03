import "./HairstyleSelector.scss";

import {
  Check,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";

import {
  HAIRSTYLES,
} from "../../constants/hairstyles";

import HairstyleSearch from "./HairstyleSearch";

const CATEGORIES = [
  "All Styles",
  "Men",
  "Women",
  "Kids",
  "Trending",
];

const HairstyleSelector = ({
  selectedHairstyle,
  setSelectedHairstyle,
}) => {
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState(
    "All Styles"
  );

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const filteredStyles = (
    selectedCategory ===
    "All Styles"
      ? HAIRSTYLES
      : HAIRSTYLES.filter(
          (style) =>
            style.category ===
            selectedCategory
        )
  ).filter((style) =>
    style.name
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
  );

  return (
    <div className="hairstyle-selector">
      <div className="hairstyle-selector__header">
        <h2>
          Choose a Hairstyle
        </h2>

        <div className="category-dropdown">
          <select
            value={
              selectedCategory
            }
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
          >
            {CATEGORIES.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>

          <ChevronDown
            size={16}
            className="dropdown-icon"
          />
        </div>
      </div>

      <HairstyleSearch
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
      />

      {filteredStyles.length >
      0 ? (
        <div className="hairstyle-selector__grid">
          {filteredStyles.map(
            (style) => (
              <div
                key={style.id}
                className={`hairstyle-card ${
                  selectedHairstyle ===
                  style.key
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedHairstyle(
                    style.key
                  )
                }
              >
                <div className="hairstyle-card__image">
                  <img
                    src={style.image}
                    alt={style.name}
                  />

                  {selectedHairstyle ===
                    style.key && (
                    <div className="selected-badge">
                      <Check
                        size={14}
                      />
                    </div>
                  )}
                </div>

                <p>
                  {style.name}
                </p>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="hairstyle-selector__empty">
          <h4>
            No hairstyles found
          </h4>

          <p>
            Try another search
            term or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default HairstyleSelector;