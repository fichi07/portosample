<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectTool extends Model
{
      use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    // Relasi dengan model Project
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    // Relasi dengan model Tool
    public function tool(): BelongsTo
    {
        return $this->belongsTo(Tool::class);
    }
}
