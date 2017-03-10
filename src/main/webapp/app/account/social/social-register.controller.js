(function() {
    'use strict';

    angular
        .module('3RuedelevangileApp')
        .controller('SocialRegisterController', SocialRegisterController);

    SocialRegisterController.$inject = ['$filter', '$stateParams'];

    function SocialRegisterController ($filter, $stateParams) {
        var vm = this;

        vm.success = $stateParams.success;
        vm.error = !vm.success;
        vm.provider = $stateParams.provider;
        vm.providerLabel = $filter('capitalize')(vm.provider);
        vm.success = $stateParams.success;
    }
})();