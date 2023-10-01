<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use function Laravel\Prompts\text;

class GPTController extends Controller
{
    protected $URL_API;
    protected $TOKEN_API;

    public function __construct()
    {
        $this->URL_API = 'https://api.openai.com/v1/chat/completions';
        $this->TOKEN_API = env('OPENAI_API_KEY');
    }


    public function correctFrench(Request $request)
    {
        $text = $request->text;
        $language = $request->language;

        $response = Http::withoutVerifying() // para evitar la verificacion de certificado ssl 
            ->withHeaders([
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                'Content-Type' => 'application/json',
            ])->post($this->URL_API, [
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "user",
                        "content" => "Traduce al".$language. " y corrige esta frase:" . $text
                    ]
                ],
                "temperature" => 0.5,
                'max_tokens' => 1000,
            ]);
        $content = $response['choices'][0]['message']['content'];
        return response()->json([
            'content' => $content
        ]);
    }
}
