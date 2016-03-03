.directive('keepInView', ['$window', function ($window) {
    return {
        restrict: 'AE',
        scope: {
            elm: '@', // elm to check offset for
            togglePos: '@', // value after which the element gets a new class
            toggleClass: '@' // class to toggle when after @elm and after @hideAfter
        },
        link: function (scope, element, attrs) {
            var doToggle = function () {
                elmOffset = $(element).offset();
                posCheck = window.pageYOffset < elmOffset.top;
                $(element).toggleClass(scope.hideClass, posCheck);
            };
            doToggle();
            angular.element($window).bind("scroll resize", function () {
                doToggle();
            });
        }
    };
}])
