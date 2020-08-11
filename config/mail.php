<?php

return [
    'driver' => env('MAIL_DRIVER', 'smtp'),
    'host' => env('MAIL_HOST', 'smtp.gmail.com'),
    'port' => env('MAIL_PORT', 587),
    'from' => ['address' => 'merakipampeano@gmail.com', 'name' => 'Erick'],
    'encryption' =>   env('MAIL_ENCRYPTION', 'ssl'),
    'username' => env('MAIL_USERNAME'),
    'password' => env('MAIL_PASSWORD'),
    'pretend' => env('MAIL_PRETEND', false),
];
