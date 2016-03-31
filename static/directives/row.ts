declare function require(string): any;

export function DTraceRow(): ng.IDirective {
    return {
        restrict: 'E',
        template: require('./row.html'),
        scope: {
            item: '=item'
        },
        replace: true
    }
}