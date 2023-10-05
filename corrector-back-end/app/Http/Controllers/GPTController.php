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
        $this->TOKEN_API = config('openai.api_token');
    }

    public function index()
    {
        return response()->json([
            "status"=>200,
            "index"=>"API_CORRECTEUR",
            "model" => "gpt-3.5-turbo",
            "role" => "user"
        ],200);
    }


    public function checker(Request $request)
    {
        $text = $request->text;
        if (!isset($text)) {
            return response()->json([
                'error' => 'I\'m sorry, but you haven\'t provided a sentence for me to translate or correct. Could you please provide a sentence for me to work with?'
            ]);
        }
        try {
            $response = Http::withoutVerifying() // para evitar la verificacion de certificado ssl 
            ->withHeaders([
                'Authorization' => 'Bearer ' . $this->TOKEN_API,
                'Content-Type' => 'application/json',
            ])->post($this->URL_API, [
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "user",
                        "content" => " corrects the spelling errors in this sentence in french " .$text
                    ]
                ],
                "temperature" => 0.5,
                'max_tokens' => 1000,
            ]);
            if($response->successful()){
                $content = $response['choices'][0]['message']['content'];
                return response()->json([
                    'status'=>200,
                    'content' => $content
                ],200);
            } else {
                return $response;
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e
            ]);
        }
    }
}
