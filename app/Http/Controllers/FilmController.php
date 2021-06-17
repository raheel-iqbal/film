<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FilmController extends Controller
{

    public function uploadImage($image) {
        try {

            $imageName = time().'.'.$image->extension();

            $image->move(public_path('images'), $imageName);

            return $imageName;

        } catch (\Exception $e) {
            return NULL;
        }
    }

    public function index() {

        $data = Film::with('user:name,id')->orderBy('name', 'DESC')->paginate(1);

        return response()->json($data);

    }

    public function store(Request $request) {

        try {

            $img = $this->uploadImage($request->photo);
            $img = "images/{$img}";

            $releaseDate = $request->release_date;
            $releaseDate = explode("(", $releaseDate);
            $releaseDate = Carbon::parse(trim($releaseDate[0]))->format("Y-m-d");

            $data = [
                'user_id' => $request->user_id,
                'name' => $request->name,
                'rating' => $request->rating,
                'release_date' => $releaseDate,
                'ticket_price' => $request->ticket_price,
                'country' => $request->country,
                'genre' => $request->genre,
                'photo' => $img,
                'description' => $request->description,
            ];

            Film::create($data);

        } catch (\Exception $exception) {

        }

    }
}
