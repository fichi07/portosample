<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectOrderController;
use App\Http\Controllers\ToolController;
use Inertia\Inertia;
use App\Http\Controllers\ProjectScreenshotController;
use App\Http\Controllers\ProjectToolController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[GuestController::class,'index'])->name('guest.index');
Route::get('/detail/{project:slug}', [GuestController::class, 'detail'])->name('guest.detail');

 Route::post('/book/save', [GuestController::class, 'store'])->name('guest.book.store');
 Route::get('/projects', [GuestController::class, 'project'])->name('projects.index');
  Route::get('/book', [GuestController::class, 'book'])->name('book.index');



Route::middleware('auth')->prefix('dashboard')->name('admin.dashboard.')->group(function(){
        Route::get('/',[DashboardController::class,'index'])->name('index');

        Route::resource('project', ProjectController::class);
            Route::put('project/{project}/restore', [ProjectController::class,'restore'])->name('project.restore');
        Route::resource('tool',ToolController::class);
            Route::put('tool/{tool}/restore', [ToolController::class,'restore'])->name('tool.restore');

            Route::resource('projecttool', ProjectToolController::class);
        Route::get('/projecttool/create/{project}', [ProjectToolController::class, 'create'])->name('projecttol.assign.tool');
            Route::post('/projecttool/create/save/{project}', [ProjectToolController::class, 'store'])->name('projecttool.assign.tool.store');

     
        Route::resource('screenshoot', ProjectScreenshotController::class);
  
        Route::get('/screenshoot/create/{project}', [ProjectScreenshotController::class, 'create'])->name('projectscreenshot.create');
            Route::post('/screenshoot/create/save/{project}', [ProjectScreenshotController::class, 'store'])->name('projectscreenshot.create.store');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
