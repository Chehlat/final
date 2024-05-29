import React from "react";
import { useState, useEffect, useRef } from "react";
import FetchData from "../components/Fetch";
import { useProfessorContext } from "../hooks/useProfessorContext";
import PopupForm from "../components/PopupForm";
import { Link } from "react-router-dom";

const Professors = () => {
  const { professors, deleteProfessor } = useProfessorContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropDown = (id) => {
    if (dropdownStates === id) {
      setDropdownStates(null); // Close the dropdown if the same button is clicked
    } else {
      setDropdownStates(id); // Open the dropdown for the clicked row
    }
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownStates(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <FetchData url="http://localhost:5000/api/professors">
      {({ loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <div class="overflow-y-scroll no-scrollbar">
            <section class="bg-gray-50 dark:bg-gray-900 overflow-y-scroll no-scrollbar">
              <div class="m-auto max-w-screen-lg ">
                {/* <!-- Start coding here --> */}
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                  <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                      <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                          Search
                        </label>
                        <div class="relative w-full">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search"
                            required=""
                          />
                        </div>
                      </form>
                    </div>
                    {/* add professor */}
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                      <button
                        onClick={togglePopup}
                        type="button"
                        class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          class="h-3.5 w-3.5 mr-2"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
                          />
                        </svg>
                        Добавить запись
                      </button>
                      {isPopupOpen && <PopupForm togglePopup={togglePopup} />}
                    </div>
                  </div>
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-4 py-3">
                            ФИО
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Должность
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Степень
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Зарплата
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Начал(а) работу
                          </th>
                          <th scope="col" class="px-4 py-3">
                            <span class="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {professors &&
                          professors.map((professor) => (
                            <>
                              <tr
                                key={professor._id}
                                class="border-b dark:border-gray-700"
                              >
                                <th
                                  scope="row"
                                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {professor.name}
                                </th>
                                <td class="px-4 py-3">{professor.position}</td>
                                <td class="px-4 py-3">{professor.degree}</td>
                                <td class="px-4 py-3">{professor.wage}</td>
                                <td class="px-4 py-3">
                                  {professor.start_date}
                                </td>
                                <td class="px-4 py-3 flex items-center justify-end">
                                  <button
                                    onClick={() =>
                                      toggleDropDown(professor._id)
                                    }
                                    class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                    type="button"
                                  >
                                    <svg
                                      class="w-5 h-5"
                                      aria-hidden="true"
                                      fill="currentColor"
                                      viewbox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                  </button>

                                  {dropdownStates === professor._id && (
                                    <div
                                      ref={dropdownRef}
                                      class=" absolute right-0 translate-y-3/4 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
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
                                          onClick={() =>
                                            deleteProfessor(professor._id)
                                          }
                                          class="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                          Удалить
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }}
    </FetchData>
  );
};

export default Professors;
