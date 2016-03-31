declare function require(string): any;

interface IScope extends ng.IScope {
    apply();
    click();
    name: string;
    active: string;
    value: boolean;
}

export function DTraceSort(): ng.IDirective {
    return {
      restrict: 'E',
      transclude: true,
      template: require('./sort.html'),
      scope: {
        value: '=',
        name: '@',
        active: '=',
      },
      replace: true,
      link: function(scope: IScope){
          scope.apply = () => {
              if(scope.active === scope.name)
                  scope.value = !scope.value;
              scope.active = scope.name;
          }
      }
    }
}