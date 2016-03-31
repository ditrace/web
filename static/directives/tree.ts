import {Span} from '../models/span';
import {Filter} from '../models/filter';

declare function require(string): any;

interface IScope extends ng.IScope{
    visible: Array<Span>;
    show_page(num: number);
    total: number;
    pageNumber: number;
    page: Array<Span>;
    fold(span: Span);
    spans: Array<Span>;
    pageSize: number;
}

export class DTraceTree {
    restrict = 'E';
    transclude = false;
    template = require('./tree.html');
    scope = {
        spans: '=spans',
        pageSize: '@pageSize'
    };
    replace = true;

    link(scope: IScope) {
        scope.$watch('spans', function(newSpans, oldSpans) {
            if (newSpans) {
                scope.show_page(0);
            }
        });
        scope.show_page = function(num) {
            scope.visible = scope.spans.filter(function(span) { return !span.hidden; });
            scope.total = Math.ceil(scope.visible.length / scope.pageSize);
            scope.pageNumber = num;
            scope.page = scope.visible.slice(num * scope.pageSize, (num + 1) * scope.pageSize);
        };
        scope.fold = function(span) {
            span.fold();
            scope.show_page(scope.pageNumber);
        };
    }

    public static Factory() {
        var directive = () => {
            return new DTraceTree();
        };

        directive['$inject'] = [];

        return directive;
    }
}