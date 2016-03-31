declare function require(string): any;

export function DTraceRows(): ng.IDirective {
    return {
        restrict: 'E',
        template: require('./rows.html'),
        scope: {
            rows: '=',
            filter: '=',
        },
        replace: true
    }
}