import * as angular from 'angular';
import {IndexController} from './controllers/index';
import {Config} from './services/config';
import {Graph} from './services/graph';
import {Queries} from './services/queries';
import {Api} from './services/api';
import {FilterService} from './services/filter';
import {DTraceFilter} from './directives/filter';
import {DTraceHistogramBtn} from './directives/histogram-btn';
import {DTraceHistogram} from './directives/histogram';
import {DTraceTabs} from './directives/tabs';
import {DTraceRow} from './directives/row';
import {DTraceTree} from './directives/tree';
import {DTraceSort} from './directives/sort';
import {Tooltip} from './directives/tooltip';
import {DTraceRows} from './directives/rows';

declare function require(string): any;

var app = angular.module('dtrace', ['daterangepicker', require('angular-ui-bootstrap'), require('angular-cookies')]);

require('bootstrap.js');
require('bootstrap.css');
require('./css/ditrace.css');
require('./js/daterangepicker.js');
require('./js/angular-daterangepicker-plus.js');
require('./css/daterangepicker-bs3.css');

app.service('config', Config);
app.service('queries', Queries);
app.service('graph', Graph);
app.service('filter', FilterService);
app.service('api', Api);
app.controller('index', IndexController);
app.directive('dtraceFilter', DTraceFilter.Factory());
app.directive('dtraceTree', DTraceTree.Factory());
app.directive('dtraceHistogram', DTraceHistogram.Factory());
app.directive('dtraceTabs', DTraceTabs.Factory());
app.directive('dtraceHistogramBtn', DTraceHistogramBtn);
app.directive('dtraceRow', DTraceRow);
app.directive('dtraceSort', DTraceSort);
app.directive('dtraceRows', DTraceRows);
app.directive('tooltip', Tooltip);
