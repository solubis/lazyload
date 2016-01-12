import angular from 'angular';
import './scss/app.scss';

angular.module('app', [])
.directive('inner', function(){
    return {
        restrict: 'C',
        bindToController: true,
        scope: {},
        controllerAs: 'ctrl',
        controller: function($element) {
            this.items = new Array(1000);
        },
        template: `
            <div>
                <h1><i class="material-icons">devices</i>Hello World<small><a href="">ES6 with SCSS and Angular.js</a></small></h1>
                <p ng-repeat="(key, value) in ctrl.items track by $index">Element {{key}}</p>
            </div>
        `
    }
})

angular.element(document).ready(function(){
    console.time('DOM generation');
    angular.bootstrap(document, ['app']);
    console.timeEnd('DOM generation');
})