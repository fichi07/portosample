<?php

namespace App\Http\Controllers;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Models\ProjectOrder;
use App\Http\Requests\Guest\Store;

class GuestController extends Controller
{
     public function index(){
          $projects=Project::all();
        return Inertia('Guest/Index',[
            'projects'=> $projects
        ]);
        

    }

    public function project(){
          $projects=Project::all();
        return Inertia('Guest/Project',[
            'projects'=> $projects
        ]);
    }

    public function book(){
          $projects=Project::all();
        return Inertia('Guest/Book',[
            'projects'=> $projects
        ]);
    }

    public function detail(Project $project){
         $assignedTools = $project->tools()->get();
           $screenshots = $project->screenshots()->orderBy('deleted_at', 'desc')->get();
           $projects=Project::all();
        return inertia('Guest/Detail', [
            'assignedTools' => $assignedTools,
            'screenshots'=>$screenshots,
            'projects' => $project,
        ]);

    }
      public function store(Store $request){
        $data = $request->validated();
      
       $meeting= ProjectOrder::create($data); 

         return redirect(route('guest.index'))->with([
            'message' => "Book Meeting successfully",
            'type' => 'success'
        ]);
    }//////
}
