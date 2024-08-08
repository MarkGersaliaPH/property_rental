<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'address',
        'status',
        'is_featured',
        'posted_by_id',
    ];

    public function posted_by(){
        return $this->belongsTo(User::class,'posted_by_id','id');
    }
}
