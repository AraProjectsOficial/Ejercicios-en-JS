<nav class="bg-gray-500 flex flex-row p-5 justify-evenly">
    <div>
        <p class="text-3xl">
          Ejercicios en JavaScript
        </p>
    </div>
    <div class="group inline-block ">
      <button class="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 text-white">
          <span class="pr-1 font-semibold flex-1 ">Ejercicios</span>
          <span>
              <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
          </span>
      </button>
      <ul
          class="bg-gray-700 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
          {{--* Inicio --}}
        {{-- <li class="rounded-sm relative px-3 py-1 hover:bg-gray-500">
            <button class="w-full text-left flex items-center outline-none focus:outline-none">
              <span class="pr-1 flex-1">Lote #1</span>
              <span class="mr-auto">
                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul class="bg-gray-700 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
              <li class="px-3 py-1 hover:bg-gray-500">Ejercicio #1</li>
              <li class="px-3 py-1 hover:bg-gray-500">Ejercicio #2</li>
              <li class="px-3 py-1 hover:bg-gray-500">Ejercicio #3</li>
            </ul>
        </li> --}}
        {{--* FIN --}}
        <li class="rounded-sm px-3 py-1 hover:bg-gray-500">Lote #1</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-500">Lote #2</li>
      </ul>
    </div>
</nav>