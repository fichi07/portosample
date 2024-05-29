<?php

namespace App\Http\Controllers;

use App\Models\ProjectOrder;
use App\Http\Requests\Guest\Store;
use Illuminate\Http\Request;

class ProjectOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $projectOrder=ProjectOrder::withTrashed()->orderBy('deleted_at','desc')->get();
       
        return Inertia('Admin/Project_order/Index',[
            'projectOrder'=> $projectOrder
        ]);//
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
 

    /**
     * Display the specified resource.
     */
     public function show(ProjectOrder $projectOrder)
    {
        return Inertia('Admin/Project_order/Detail',[
            'projectOrder'=> $projectOrder
        ]); //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProjectOrder $projectOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProjectOrder $projectOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectOrder $projectOrder)
    {
        //
    }
}
