<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index()
    {
        return response()->json(\App\Models\Vehicle::all());
    }
}
