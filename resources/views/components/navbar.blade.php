<header class="bg-slate-400 text-stone-800 navbar-theme relative z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="/" class="md:text-2xl">Marco Nobre</a>
        </div>

        <!-- Botão do menu para mobile -->
        <div class="flex lg:hidden gap-4">
            <button id="toggle-theme-sm-menu" type="button" class="cursor-pointer">
                <svg width="25" height="25" id="svgClaroSmMenu" fill="currentColor" class="bi bi-brightness-low" viewBox="0 0 16 16">
                    <path
                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
                </svg>
                <svg width="18" height="18" id="svgEscuroSmMenu" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                    <path
                        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                </svg>
            </button>
            <button id="menu-button" type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer">
                <!-- abre o menu -->
                <svg id="menu-icon-open" class="size-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
                <!-- fecha o menu -->
                <svg id="menu-icon-close" class="size-7 hidden" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-8">
            <a href="#sobre_mim" class="text-sm/6 font-semibold">Sobre mim</a>
            <a href="#tecnologias" class="text-sm/6 font-semibold">Tecnologias</a>
            <a href="#meus_projetos" class="text-sm/6 font-semibold">Meus projetos</a>
            <a href="#contato" class="text-sm/6 font-semibold">Contato</a>
            <button id="toggle-theme" type="button" class="cursor-pointer">
                <svg width="25" height="25" fill="currentColor" class="bi bi-brightness-low" viewBox="0 0 16 16" id="svgClaro">
                    <path
                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
                </svg>
                <svg width="18" height="18" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16" id="svgEscuro">
                    <path
                        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Menu mobile -->
    <div id="mobile-menu"
         class="hidden md:hidden absolute width-menu-mobile-navbar z-50 py-3 bg-slate-400 mobile-menu-theme bg-opacity-90 flex flex-col justify-center text-stone-800 rounded-xl">
        <a href="#sobre_mim" class="block">
            <div id="nav-lg-sobre-mim" class="hover:bg-slate-600 hover:text-white py-3 px-5 rounded-xl">
                Sobre mim
            </div>
        </a>
        <a href="#meus_projetos" class="block">
            <div id="nav-lg-meus-projetos" class="hover:bg-slate-600 hover:text-white py-3 px-5 rounded-xl">
                Meus projetos
            </div>
        </a>
        <a href="#tecnologias" class="block">
            <div id="nav-lg-tecnologias" class="hover:bg-slate-600 hover:text-white py-3 px-5 rounded-xl">
                Tecnologias
            </div>
        </a>
        <a href="#contato" class="block">
            <div id="nav-lg-contato" class="hover:bg-slate-600 hover:text-white py-3 px-5 rounded-xl">
                Contato
            </div>
        </a>

    </div>
</header>
