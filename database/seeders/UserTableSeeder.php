<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $users = [
            'name'           => 'Natalie J Merryman',
            'email'          => 'natalie@gmail.com',
            'password'       => '$2y$10$cZkVYvzpJxj8kc.Bkdd/2e1XPt73Df2wttkBME952a/nVhJejMikO',
            'remember_token' => null,
            'created_at'     => Carbon::now(),
            'updated_at'     => Carbon::now(),
        ];

        User::create($users);

        $users = [
            'name'           => 'Bernard A McEntee',
            'email'          => 'bernard@gmail.com',
            'password'       => '$2y$10$cZkVYvzpJxj8kc.Bkdd/2e1XPt73Df2wttkBME952a/nVhJejMikO',
            'remember_token' => null,
            'created_at'     => Carbon::now(),
            'updated_at'     => Carbon::now(),
        ];

        User::create($users);
    }
}
