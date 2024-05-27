<?php

namespace App\Http\Controllers;

use App\Models\ProjectScreenshot;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;

class ProjectScreenshotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
     public function create(Request $request,Project $project)
    {
        $screenshots = $project->screenshots()->orderBy('deleted_at', 'desc')->get();
          
        return Inertia('Admin/Project_screenshoot/Create', [
        'screenshots'=>$screenshots,
     
        'project' => $project, 
       /*  'projecttool'=>$projecttool */ // Mengirim data tools ke view Inertia.
    ]);//
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request, Project $project)
    {  
        
        $validated = $request->validate([
            'screenshot' => 'required|image|max:2048', // assuming 'tools' is your database table for tools
        ]);
         $screenshotFile = $request->file('screenshot');

      
        $validated['screenshot'] = Storage::disk('public')->put('project_screenshots',$request->file('screenshot'));
        // Add the project_id from the route model binding
        $validated['project_id'] = $project->id; 
        // Create the ProjectTool
        $projectScreenshot = ProjectScreenshot::create($validated);
     
        // Redirect with success message
        return redirect(route('admin.dashboard.projectscreenshot.create', $project->id))->with([
            'message' => "ProjectScreenshot inserted successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectScreenshot $projectScreenshot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectScreenshot $projectScreenshot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProjectScreenshot $projectScreenshot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectScreenshot $projectScreenshot)
    {
        //
    }
}
