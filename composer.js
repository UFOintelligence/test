{
    "name": "ramon/mipaquete",
    "description": "Un paquete Laravel creado por Ramón",
    "type": "library",
    "autoload": {
        "psr-4": {
            "Ramon\\MiPaquete\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Ramon\\MiPaquete\\MiPaqueteServiceProvider"
            ]
        }
    },
    "minimum-stability": "dev",
    "prefer-stable": true
}
