.directive('keepInView', ['$window', function ($window) {
    return {
        restrict: 'AE',
        scope: {
            elm: '@', // elm to check offset for
            togglePos: '@', // value after which the element gets a new class
            toggleClass: '@', // class to toggle when after @elm and after @hideAfter
            screenSize: '@' // limit of the screen size where script applies
        },
        link: function (scope, element, attrs) {
            var doToggle = function (smallWindow) {
                if (!smallWindow) {
                    var elmOffset = $(element).offset();
                    var posCheck = $window.pageYOffset < (elmOffset.top + parseFloat(scope.togglePos));
                    $(element).toggleClass(scope.toggleClass, posCheck);
                }
            };
           doToggle($window.innerWidth <= scope.screenSize);
            angular.element($window).bind("scroll resize", function () {
                doToggle($window.innerWidth <= scope.screenSize);
            });
        }
    };
}])
