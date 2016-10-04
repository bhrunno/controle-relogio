 angular.module("Teste02",[]);
      angular.module("Teste02").controller("Teste02Ctrl_msg", function($scope){
            $scope.message= "Sistema de Gestão Empresarial";
      });

      angular.module("Teste02").controller("Teste02Ctrl_action", function($scope){
           $scope.esconderRelogio = function(){
             $('.hero-circle').css("visibility", "hidden");
             

             $('.b1').css("visibility", "hidden");
             $('.b1').css("display", "none");

             $('.b2').css("visibility", "visible");
             $('.b2').css("display", "block");
           };

           $scope.mostrarRelogio = function(){
             
             $('.hero-circle').css("visibility", "visible");
             $('.hero-circle').css("display", "block");

             $('.b1').css("visibility", "visible");
             $('.b1').css("display", "block");

             $('.b2').css("visibility", "hidden");
             $('.b2').css("display", "none");

           };

      });

