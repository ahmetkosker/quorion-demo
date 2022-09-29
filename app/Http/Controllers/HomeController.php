<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $products = Product::all();
        return view('layouts.app', ["products" => $products]);
    }

    public function addProduct()
    {
        return view('layouts.addProduct');
    }

    public function saveProduct(Request $request)
    {
        $name = $request->input('name');
        $brand = $request->input('brand');
        $price = $request->input('price');
        $wholesale_price = $request->input('wholesale_price');
        $quantity = $request->input('quantity');
        $product = Product::create([
            'name' => $name,
            'brand' => $brand,
            'price' => $price,
            'wholesale_price' => $wholesale_price,
            "quantity" => $quantity,
        ]);

        $product->save();
    }
}