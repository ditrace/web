declare function require(string): any;

export function DTraceHistogramBtn(): ng.IDirective {
    return {
        restrict: 'E',
        transclude: true,
        template: require('./histogram-btn.html'),
        scope: {
            value: "=",
            active: "@",
            click: "&",
        },
        replace: true
    }
}