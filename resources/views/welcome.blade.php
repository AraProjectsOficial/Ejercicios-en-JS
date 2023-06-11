<x-app-layout title="Inicio">

    <x-slot name="styles">
        <link rel="stylesheet" href="{{asset('css/lote1.css')}}">
    </x-slot>

    <div class="p-8">
        @include('ejercicios._1one')
        @include('ejercicios._2one')
        @include('ejercicios._3one')
        @include('ejercicios._4one')
    </div>
    <script src="{{asset('js/1.js')}}"></script>
    <script src="{{asset('js/2.js')}}"></script>
    <script src="{{asset('js/3.js')}}"></script>
    <script src="{{asset('js/4.js')}}"></script>
</x-app-layout>