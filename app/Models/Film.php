<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $table = "films";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "user_id",
        "name",
        "release_date",
        "ticket_price",
        "country",
        "genre",
        "rating",
        "photo",
        "description",
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
