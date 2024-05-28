import React, { useRef } from "react";
import { Link } from "react-router-dom";
const ThreeDots = ({ toggleDropDown, professor }) => {
  const handleClick = async () => {
    const response = await fetch("/api/professors/" + professor._id, {
      method: "DELETE",
    });
  };

  return (
    <div class=" absolute right-0 translate-y-3/4 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="apple-imac-27-dropdown-button"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Подробнее
          </a>
        </li>
        <li>
          <Link to="/:id">
            <button class="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Редактировать
            </button>
          </Link>
        </li>
      </ul>
      <div class="py-1">
        <button
          onClick={handleClick}
          class="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ThreeDots;
