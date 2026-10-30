import { SlidersHorizontal } from "@phosphor-icons/react";
import style from "./style.module.scss";
import { useState } from "react";

const FILTERS = ["all", "drawing", "visual-id"];

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selected, setSelected] = useState(FILTERS[0]);

  return (
    <div className={style.filterArea}>
      <button
        type="button"
        className={style.filter}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        aria-label="Filtrar projetos"
        aria-expanded={isFilterOpen}
      >
        <SlidersHorizontal size={24} />
      </button>

      {isFilterOpen && (
        <div className={style.filterContent}>
          <ul>
            {FILTERS.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  className={selected === filter ? style.active : undefined}
                  onClick={() => setSelected(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
