<?php

namespace App\Http\Controllers;
use App\Models\Project;
use Illuminate\Http\Request;

class GuestController extends Controller
{
     public function index(){
          $projects=Project::all();
        return Inertia('Guest/Index',[
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

    }//////
}
