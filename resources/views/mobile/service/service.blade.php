@extends('layouts.mobile')

@section('content')
<!-- MAIN CONTENT -->
<main class="main">
    <div class="tabs-control-container">
        <div class="tabs-control-wrap" id="tabs-control">
            @foreach($categories as $category)
                <a data-link="/tabs/services/{{ $category['id'] }}" href="#" class="tabs-control">
                    <span class="tabs-control__link">{{ $category['title_' . session('locale')] }}</span>
                </a>
            @endforeach
        </div>
        <div class="tabs-arrow-wrap">
            <a href="#" class="tabs-prev waves-effect waves-dark">prev</a>
            <a href="#" class="tabs-next waves-effect waves-dark">next</a>
        </div>
    </div>
    <div class="container__inner">
        <div class="tabs__container" id="tabs-container">
        </div>
    </div>
</main>
<!-- END MAIN CONTENT -->
@endsection