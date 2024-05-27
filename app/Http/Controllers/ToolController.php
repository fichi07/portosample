<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Tool\Store;
use App\Http\Requests\Admin\Tool\update;
use Illuminate\Support\Facades\Storage;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Tool=Tool::withTrashed()->orderBy('deleted_at','desc')->get();
       return inertia('Admin/Tool/Index',[
        'tools'=>$Tool
       ]); // //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Tool/Create');  //
    }

    /**
     * Store a newly created resource in storage.
     */
      public function store(Store $request)
    {
        $data = $request->validated();
       $data['logo'] = Storage::disk('public')->put('tools',$request->file('logo'));
       $tool= Tool::create($data); 

         return redirect(route('admin.dashboard.tool.index'))->with([
            'message' => "Tool inserted successfully",
            'type' => 'success'
        ]); //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tool $tool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tool $tool)
    {
         return inertia('Admin/Tool/Edit',[
        'tool'=>$tool
       ]);//// // //
    }

    /**
     * Update the specified resource in storage.
     */
     public function update(Update $request, Tool $tool)
    {
        $data = $request->validated();
        if($request->file('logo')){
             $data['logo'] = Storage::disk('public')->put('tools',$request->file('logo'));
             Storage::disk('public')->delete($tool->logo);
        } else{
            $data['logo']= $tool->logo;
        
        }
        $tool->update($data);
       return redirect(route('admin.dashboard.tool.index'))->with([
         'message' => "Tools Updated successfully",
            'type' => 'success'
       ]); // //  //
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
       $tool->delete();
        return redirect(route('admin.dashboard.tool.index'))->with([
         'message' => "Tool Deleted successfully",
            'type' => 'success'
       ]);//  //
    }

      public function restore($tool)
    {
        Tool::withTrashed()->find($tool)->restore();
       return redirect(route('admin.dashboard.tool.index'))->with([
         'message' => "Tool Restored successfully",
            'type' => 'success'
       ]);//
    }
}
