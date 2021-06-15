<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
    /**
     * Логирование
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response([
                'status' => 'success'
            ], 200);
        }

        return response([
            'status' => 'fail',
            'errors' => [
                'user' => ['Ошибка в авторизации. Проверьте, пожалуйста, логин/пароль']
            ]
        ], 500);
    }

    /**
     * Проверка, аутентифицирован ли пользователь
     *
     * @return Response
     */
    public function isAuthenticated() {
        return response([
            'isAuth' => Auth::check()
        ]);
    }


    // Экшн в защищенном роуте
    public function logout() {
        if (Auth::check()) {
           Auth::logout();

           return response([
               'logout' => true
           ]);
        }

        return response([
            'logout' => false
        ]);
    }
}
