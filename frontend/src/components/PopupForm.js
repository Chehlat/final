import React, { useState } from "react";
import { useProfessorContext } from "../hooks/useProfessorContext";

const PopupForm = ({ togglePopup }) => {
  const { dispatch } = useProfessorContext();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [addres, setAddres] = useState("");
  const [tabel_id, setTabel_id] = useState("");
  const [start_date, setStart_date] = useState("");
  const [wage, setWage] = useState("");
  const [degree, setDegree] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const professors = {
      name,
      position,
      degree,
      addres,
      phone,
      tabel_id,
      wage,
      start_date,
    };
    const response = await fetch("http://localhost:5000/api/professors", {
      method: "POST",
      body: JSON.stringify(professors),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setAddres("");
      setDegree("");
      setName("");
      setPhone("");
      setPosition("");
      setStart_date("");
      setTabel_id("");
      setWage("");
      setError(null);
      dispatch({ type: "CREATE_PROFESSOR", payload: json });
      console.log("New porfessor added");
    }
    // Handle form submission logic
    console.log("Form submitted");
    togglePopup();
  };

  return (
    <section class=" dark:bg-gray-900  bg-slate-400/30  fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:pb-16 w-3/4 bg-white rounded-lg shadow-lg">
        <div class="flex items justify-between">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Новый преподователь
          </h2>
          <button onClick={togglePopup}>
            <svg
              class="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#0F0F0F"
              ></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="grid gap-2     sm:grid-cols-2 sm:gap-2">
            <div class="w-full">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Имя преподователя
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Впишите имя"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Табельный номер
              </label>
              <input
                onChange={(e) => setTabel_id(e.target.value)}
                value={tabel_id}
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="10__"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Должность
              </label>
              <input
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                type="text"
                name="brand"
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Профессор, доцент и т.д."
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Степень
              </label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Магистр, доктор наук и.д."
                required=""
              />
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Зарплата
              </label>
              <input
                onChange={(e) => setWage(e.target.value)}
                value={wage}
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="В месяц"
                required=""
              />
            </div>
            <div>
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Начал работу
              </label>
              <input
                onChange={(e) => setStart_date(e.target.value)}
                value={start_date}
                type="data"
                name="item-weight"
                id="item-weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="дд.мс.гд"
                required=""
              />
            </div>
            <div>
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Телефон
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
                name="item-weight"
                id="item-weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="+7978-000-00-00"
                required=""
              />
            </div>
            <div>
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Адрес
              </label>
              <input
                onChange={(e) => setAddres(e.target.value)}
                value={addres}
                type="text"
                name="item-weight"
                id="item-weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ул.Пушкина 46"
                required=""
              />
            </div>
          </div>
          <button class="absolute   inline-flex items-center px-5 py-2.5 mt-4 sm:mb-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopupForm;
