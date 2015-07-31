(function () {

  angular
    .module('tc.profile')
    .controller('ProfileAboutController', ProfileAboutController);

  ProfileAboutController.$inject = ['$scope', 'ProfileService'];

  function ProfileAboutController($scope, ProfileService) {
    var vm = this;
    vm.profile = {};
    vm.mockProfile = ProfileService.getMockMemberProfile();
    vm.categoryIndex = 0;
    vm.skillIndex = 0;
    vm.shiftCategories = shiftCategories;
    vm.shiftSkills = shiftSkills;

    activate();

    function activate() {
      $scope.initProfile(vm);
    }

    function shiftCategories(x) {
      if (vm.categories && vm.categories.length !== 0) {
        if (x < 0 && vm.categoryIndex > 0) {
          vm.categoryIndex -= 4;
          if (vm.categoryIndex < 0) vm.categoryIndex = 0;
        }
        else if (x > 0 && vm.categoryIndex < vm.categories.length - 4) {
          vm.categoryIndex += 4;
          if (vm.categoryIndex > vm.categories.length - 4) vm.categoryIndex = vm.categories.length - 4;
        }
      }
    }

    function shiftSkills(x) {
      if (vm.skills && vm.skills.length !== 0) {
        if (x < 0 && vm.skillIndex > 0) {
          vm.skillIndex -= 5;
          if (vm.skillIndex < 0) vm.skillIndex = 0;
        }
        else if (x > 0 && vm.skillIndex < vm.skills.length - 5) {
          vm.skillIndex += 5;
          if (vm.skillIndex > vm.skills.length - 5) vm.skillIndex = vm.skills.length - 5;
        }
      }
     
    }

  }


})();
