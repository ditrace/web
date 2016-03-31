import * as angular from 'angular';
import {LogsController} from './controllers/logs';
import {Config} from './services/config';

declare function require(string): any;

require('bootstrap.js');
require('bootstrap.css');
require('./css/logs.css');

var app = angular.module('traceLogs', []);
app.controller("logs", LogsController);
app.service('config', Config);

var hexRegexp = new RegExp('(([0-9a-fA-F\-][0-9a-fA-F\-]){2}){4,}', 'ig');

$(document).keydown(function (event) {
	if (event.keyCode != 18)
		return;
	$(".text").each(function (i, element) {
		var original = $(element).data('original');
		if (original == undefined) {
			original = $(element).html();
			$(element).data('original', original);
			$(element).html(original.replace(hexRegexp, '<span class="hex">$&</span>'));
		} else {
			$(element).removeData('original');
			$(element).html(original);
		}
	});
	$(".hex").bind('click', function () {
		if ((<any>document).selection) {
			var range: any = (<any>document.body).createTextRange();
			range.moveToElementText(this);
			range.select();
		} else if (window.getSelection) {
			var range: any = document.createRange();
			range.selectNode(this);
			window.getSelection().addRange(range);
		}
	});
});