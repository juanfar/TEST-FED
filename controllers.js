var inicioControllers = angular.module('inicioControllers', []),
    datos = [
        {
            "id":1,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"León Gomez",
            "edad":44,
            "ciudad":"Neiva",
            "tramo":4,
            "vehiculosAfectados":1,
            "fechaEvento":""
        },
        {
            "id":2,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Fernanda Jaimes",
            "edad":15,
            "ciudad":"Girardot",
            "tramo":12,
            "vehiculosAfectados":1
        },
        {
            "id":3,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Marco Nariño",
            "edad":22,
            "ciudad":"Aipe",
            "tramo":11,
            "vehiculosAfectados":1
        },
        {
            "id":4,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Juan Ortiz",
            "edad":24,
            "ciudad":"Neiva",
            "tramo":10,
            "vehiculosAfectados":1
        },
        {
            "id":5,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Jorge Echavarria",
            "edad":31,
            "ciudad":"Neiva",
            "tramo":9,
            "vehiculosAfectados":3,
            "fechaEvento":""
        },
        {
            "id":6,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Diana Martínez",
            "edad":16,
            "ciudad":"Neiva",
            "tramo":8,
            "vehiculosAfectados":2
        },
        {
            "id":7,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Carmelo Castellanos",
            "edad":52,
            "ciudad":"Neiva",
            "tramo":5,
            "vehiculosAfectados":1
        },
        {
            "id":8,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Miguel Santos",
            "edad":35,
            "ciudad":"Aipe",
            "tramo":4,
            "vehiculosAfectados":2
        },
        {
            "id":9,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Lorena Higuera",
            "edad":11,
            "ciudad":"Neiva",
            "tramo":33,
            "vehiculosAfectados":1,
            "fechaEvento":""
        },
        {
            "id":10,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Michelle Gómez",
            "edad":2,
            "ciudad":"Aipe",
            "tramo":2,
            "vehiculosAfectados":2
        },
        {
            "id":11,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Ana María Hurtado",
            "edad":79,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":2
        },
        {
            "id":12,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Dimas Ñañez",
            "edad":85,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":1
        },
        {
            "id":13,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Juana Rodriguez",
            "edad":33,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":1,
            "fechaEvento":""
        },
        {
            "id":14,
            "tipo":"incidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Melissa Fierro",
            "edad":17,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":1
        },
        {
            "id":15,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Antonia Pereira",
            "edad":21,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":1
        },
        {
            "id":16,
            "tipo":"accidente",
            "categoria":"Afectado por Lesiones",
            "nombreAfectado":"Camilo Cuero",
            "edad":28,
            "ciudad":"Neiva",
            "tramo":1,
            "vehiculosAfectados":1
        }
    ];

inicioControllers.controller('InicioCtrl', function ($scope) {
    $scope.model = datos;
});

inicioControllers.controller('indicadoresCtrl', function ($scope) {
    $scope.model = datos;

    $scope.inc = 0;
    $scope.acc = 0;
    $scope.age = 0;
    $scope.accAfectados = 0;
    $scope.incAfectados = 0;

    $scope.eventos = datos.length;

    for(let i = 0; i < datos.length; i++) {
        if(datos[i].tipo == "incidente")
            $scope.inc++;
        else if(datos[i].tipo == "accidente")
            $scope.acc++;
    }

    for(let i = 0; i < datos.length; i++) {
         if(datos[i].edad < 18)
            $scope.age++;
    }

    for(let i = 0; i < datos.length; i++) {
        if(datos[i].tipo == "incidente")
            $scope.incAfectados += datos[i].vehiculosAfectados;
        else if(datos[i].tipo == "accidente")
            $scope.accAfectados += datos[i].vehiculosAfectados;
    }
    
});

inicioControllers.controller('incidentesCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    var id = $routeParams.id,
        existe = typeof (id) !== 'undefined',
        model = existe ? datos[id] : null;

    if (existe) {
        $scope.tipo = model.tipo;
        $scope.nombre = model.nombreAfectado;
        $scope.edad = model.edad;
        $scope.categoria = model.categoria;
        $scope.ciudad = model.ciudad;
        $scope.tramo = model.tramo;
        $scope.vehiculosAfectados = model.vehiculosAfectados;
    }

    if($scope.categoria == "Afectado por Lesiones") {
        $scope.op1 = "Varado";
        $scope.op2 = "Choque";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Varado") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Choque";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Choque") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Varado";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Siniestro") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Varado";
        $scope.op3 = "Choque";
    }


    $scope.guardar = function () {
        $scope.message = "";

        if(parseInt($scope.edad) > 100) {
            $scope.message = "La edad no pude ser mayor que 100 años";
            $scope.empty = true;
        }
        else if($scope.vehiculosAfectados > 5 && $scope.vehiculosAfectados < 1) {
            $scope.message = "el Numero de vehículos no puede ser superior a 5 y no debe ser inferior a 1";
            $scope.empty = true;
        }

        if (typeof ($scope.nombre) !== 'undefined' && typeof ($scope.edad) !== 'null' && typeof ($scope.categoria) !== 'undefined' && typeof ($scope.ciudad) !== 'undefined' && typeof ($scope.tramo) !== 'null' && typeof ($scope.vehiculosAfectados) !== 'null') {
            if($scope.nombre !== '' && $scope.edad !== '' && $scope.categoria !== '' && $scope.ciudad !== '' && $scope.tramo !== '' && $scope.vehiculosAfectados !== '') {
                if($scope.edad > 100) {
                    $scope.message = "La edad no pude ser mayor que 100 años";
                    $scope.empty = true;
                }
                else if($scope.vehiculosAfectados > 5 || $scope.vehiculosAfectados < 1) {
                    $scope.message = "el Numero de vehículos no puede ser superior a 5 y no debe ser inferior a 1";
                    $scope.empty = true;
                }
                else {
                    var model = {
                        tipo: $scope.tipo,
                        nombreAfectado: $scope.nombre,
                        edad: $scope.edad,
                        categoria: $scope.categoria,
                        ciudad: $scope.ciudad,
                        tramo: $scope.tramo,
                        vehiculosAfectados: $scope.vehiculosAfectados
                    };

                    console.log($scope.edad);

                    if (existe) datos[id] = model;
                    else datos.push(model);

                    $location.path('/');
                }
            }
            else {
                $scope.message = "Debes llenar todos los campos";
                $scope.empty = true;
            }
        }

        return false;
    }
}]);

inicioControllers.controller('accidentesCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    var id = $routeParams.id,
        existe = typeof (id) !== 'undefined',
        model = existe ? datos[id] : null;

    if (existe) {
        $scope.tipo = model.tipo;
        $scope.nombre = model.nombreAfectado;
        $scope.edad = model.edad;
        $scope.categoria = model.categoria;
        $scope.ciudad = model.ciudad;
        $scope.tramo = model.tramo;
        $scope.vehiculosAfectados = model.vehiculosAfectados;
    }

    if($scope.categoria == "Afectado por Lesiones") {
        $scope.op1 = "Varado";
        $scope.op2 = "Choque";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Varado") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Choque";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Choque") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Varado";
        $scope.op3 = "Siniestro";
    }
    else if($scope.categoria == "Siniestro") {
        $scope.op1 = "Afectado por Lesiones";
        $scope.op2 = "Varado";
        $scope.op3 = "Choque";
    }


    $scope.guardar = function () {
        $scope.message = "";

        if(parseInt($scope.edad) > 100) {
            $scope.message = "La edad no pude ser mayor que 100 años";
            $scope.empty = true;
        }
        else if($scope.vehiculosAfectados > 5 && $scope.vehiculosAfectados < 1) {
            $scope.message = "el Numero de vehículos no puede ser superior a 5 y no debe ser inferior a 1";
            $scope.empty = true;
        }

        if (typeof ($scope.nombre) !== 'undefined' && typeof ($scope.edad) !== 'null' && typeof ($scope.categoria) !== 'undefined' && typeof ($scope.ciudad) !== 'undefined' && typeof ($scope.tramo) !== 'null' && typeof ($scope.vehiculosAfectados) !== 'null') {
            if($scope.nombre !== '' && $scope.edad !== '' && $scope.categoria !== '' && $scope.ciudad !== '' && $scope.tramo !== '' && $scope.vehiculosAfectados !== '') {
                if($scope.edad > 100) {
                    $scope.message = "La edad no pude ser mayor que 100 años";
                    $scope.empty = true;
                }
                else if($scope.vehiculosAfectados > 5 || $scope.vehiculosAfectados < 1) {
                    $scope.message = "el Numero de vehículos no puede ser superior a 5 y no debe ser inferior a 1";
                    $scope.empty = true;
                }
                else {
                    var model = {
                        tipo: $scope.tipo,
                        nombreAfectado: $scope.nombre,
                        edad: $scope.edad,
                        categoria: $scope.categoria,
                        ciudad: $scope.ciudad,
                        tramo: $scope.tramo,
                        vehiculosAfectados: $scope.vehiculosAfectados
                    };

                    console.log($scope.edad);

                    if (existe) datos[id] = model;
                    else datos.push(model);

                    $location.path('/');
                }
            }
            else {
                $scope.message = "Debes llenar todos los campos";
                $scope.empty = true;
            }
        }

        return false;
    }
}]);