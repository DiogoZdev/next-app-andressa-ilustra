import { SlidersHorizontal } from "@phosphor-icons/react";
import style from "./style.module.scss";
import { useState } from "react";

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

	const filters: string[] = [
		"all",
		"drawing",
		"visual-id"
	];

  return (
    <div className={style.filterArea}>
      <div
        className={style.filter}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <SlidersHorizontal size={24} />
      </div>
      {isFilterOpen && (
        <div className={style.filterContent}>
					<ul>
						<li></li>
					</ul>
				</div>
      )}
    </div>
  );
};
