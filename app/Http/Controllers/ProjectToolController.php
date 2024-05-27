<?php

namespace App\Http\Controllers;

use App\Models\ProjectTool;
use Illuminate\Http\Request;
use App\Models\Tool;
use App\Models\Project;

class ProjectToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $tools=Tool::withTrashed()->orderBy('deleted_at','desc')->get();
        return Inertia('Admin/Project_tool/Index',[
            'tools'=> $tools
        ]);//
    }

    /**
     * Show the form for creating a new resource.
     */
   public function create(Request $request, Project $project, Tool $tool)
    {
            // Mengambil daftar alat yang belum ditugaskan ke proyek tertentu
       $tools=Tool::withTrashed()->orderBy('deleted_at','desc')->get();
        // Mengambil daftar alat yang sudah ditugaskan ke proyek tertentu

         $assignedTools = $project->tools()->get();
    return Inertia('Admin/Project_tool/Create', [
         'assignedTools' => $assignedTools,
        'tools' => $tools,
        'project' => $project, 
       /*  'projecttool'=>$projecttool */ // Mengirim data tools ke view Inertia.
    ]); //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Project $project)
    {
            $validated = $request->validate([
            'tool_id' => 'required|integer', // assuming 'tools' is your database table for tools
        ]);

        // Add the project_id from the route model binding
        $validated['project_id'] = $project->id; 
        // Create the ProjectTool
        $projectTool = ProjectTool::updateOrCreate($validated);

        // Redirect with success message
        return redirect(route('admin.dashboard.projecttol.assign.tool', $project->id))->with([
            'message' => "ProjectTool inserted successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectTool $projectTool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectTool $projectTool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProjectTool $projectTool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectTool $projectTool)
    {
        //
    }
}
