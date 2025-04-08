<div>
    <!-- Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi -->
</div>
<div class="max-w-sm min-w-1/2 md:min-w-1/5 rounded-2xl overflow-hidden shadow-lg bg-gray-300 text-slate-700 card-theme box-shadow-card p-4">
    <img class="w-full max-h-64 object-cover rounded-lg" src="{{ $image }}" alt="Imagem do Card">
    <div class="py-4">
        <h2 class="text-xl font-semibold">{{ $title }}</h2>
        <p class="mt-2">{{ $description }}</p>
    </div>
    <div class="mt-4 flex justify-center items-center">
        <button class="bg-slate-500 text-slate-100 px-4 py-2 rounded-lg hover:bg-slate-600 transition cursor-pointer">
            Saiba Mais
        </button>
    </div>
</div>
