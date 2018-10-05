<?php

require '../vendor/autoload.php';
$app = new \Slim\App();

$app->get('/', function ($request, $response) {
    $response->write('Hello world');

    return $response;
});
$app->run();
