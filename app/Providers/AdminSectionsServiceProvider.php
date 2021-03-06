<?php

namespace App\Providers;

use App\Http\Admin\Models\Addresses;
use App\Http\Admin\Models\Categories;
use App\Http\Admin\Models\Doctors;
use App\Http\Admin\Models\Jobs;
use App\Http\Admin\Models\News;
use App\Http\Admin\Models\Phones;
use App\Http\Admin\Models\Qualifies;
use App\Http\Admin\Models\Roles;
use App\Http\Admin\Models\Specialties;
use App\Http\Admin\Models\Users;
use App\Http\Admin\Models\Vacancies;
use SleepingOwl\Admin\Providers\AdminSectionsServiceProvider as ServiceProvider;

use SleepingOwl\Admin\Navigation\Page;
use AdminNavigation;
class AdminSectionsServiceProvider extends ServiceProvider
{

    /**
     * @var array
     */
    protected $sections = array(
        \App\User::class => 'App\Http\Admin\Models\Users',
        \App\Models\Role::class => 'App\Http\Admin\Models\Roles',
        \App\Models\Menu::class => 'App\Http\Admin\Models\Menus',
        \App\Models\Doctor::class => 'App\Http\Admin\Models\Doctors',
        \App\Models\Job::class => 'App\Http\Admin\Models\Jobs',
        \App\Models\Specialty::class => 'App\Http\Admin\Models\Specialties',
        \App\Models\Qualify::class => 'App\Http\Admin\Models\Qualifies',
        \App\Models\Category::class => 'App\Http\Admin\Models\Categories',
        \App\Models\News::class => 'App\Http\Admin\Models\News',
        \App\Models\Address::class => 'App\Http\Admin\Models\Addresses',
        \App\Models\Vacancy::class => 'App\Http\Admin\Models\Vacancies',
        \App\Models\Carousel::class => 'App\Http\Admin\Models\Carousels',
        \App\Models\Review::class => 'App\Http\Admin\Models\Reviews',
        \App\Models\Phone::class => 'App\Http\Admin\Models\Phones',
        \App\Models\Email::class => 'App\Http\Admin\Models\Emails',
    );

    /**
     * Register sections.
     *
     * @return void
     */
    public function boot(\SleepingOwl\Admin\Admin $admin)
    {
    	//

        parent::boot($admin);
        AdminNavigation::addPage("Контакты")->setPages(function(Page $section){
            $section
                ->addPage(Addresses::class)
                ->setTitle('Адреса клиник')
                ->setUrl('admin/addresses')
                ->setIcon('fa fa-map-marker');
            $section
                ->addPage(Phones::class)
                ->setTitle('Телефоны')
                ->setUrl('admin/phones')
                ->setIcon('fa fa-phone');
            $section
                ->addPage(Emails::class)
                ->setTitle('Email')
                ->setUrl('admin/emails')
                ->setIcon('fa fa-envelope');
        })->setIcon('fa fa-info-circle');

        AdminNavigation::addPage("Пользователи")->setPages(function(Page $section){
            $section
                ->addPage(Users::class)
                ->setTitle('Список пользователей')
                ->setUrl('admin/users')
                ->setIcon('fa fa-user');
            $section
                ->addPage(Roles::class)
                ->setTitle('Роли')
                ->setUrl('admin/roles')
                ->setIcon('fa fa-users');
        })->setIcon('fa fa-users');

        AdminNavigation::addPage("Персонал")->setPages(function(Page $section){
            $section
                ->addPage(Doctors::class)
                ->setTitle('Врачи')
                ->setUrl('admin/doctors')
                ->setIcon('fa fa-user-md');
            $section
                ->addPage(Qualifies::class)
                ->setTitle('Квалификации')
                ->setUrl('admin/qualifies')
                ->setIcon('fa fa-stethoscope');
            $section
                ->addPage(Specialties::class)
                ->setTitle('Специализации')
                ->setUrl('admin/specialties')
                ->setIcon('fa fa-university');
            $section
                ->addPage(Jobs::class)
                ->setTitle('Должности')
                ->setUrl('admin/jobs')
                ->setIcon('fa fa-hospital-o');
            /*$section
                ->addPage(Vacancies::class)
                ->setTitle('Вакансии')
                ->setUrl('admin/vacancies')
                ->setIcon('fa fa-user');*/
        })->setIcon('fa fa-hospital-o');

        AdminNavigation::addPage("Новости")->setPages(function(Page $section){
            $section
                ->addPage(Categories::class)
                ->setTitle('Категории')
                ->setUrl('admin/categories')
                ->setIcon('fa fa-folder');
            $section
                ->addPage(News::class)
                ->setTitle('Список новостей')
                ->setUrl('admin/news')
                ->setIcon('fa fa-list-alt');
        })->setIcon('fa fa-newspaper-o');

        /*$this->registerNRoutes();
        $this->registerNavigation();
        $this->registerMediaPackages();*/
    }
}
