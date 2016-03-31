import * as jquery from 'jquery';
import * as d3 from 'd3';
import {microsecondsToString} from '../helper';
import {IHistogramData} from '../models/histogram';
import {IAggrBucket} from '../models/bucket';


export class Graph {
    draw(data: IHistogramData, value_func: string, date_select: (start: number, end: number) => void) {
        $('#histogram').empty();

        function getNumber(v) {
            if (typeof (v) != 'number')
                return null;
            return v;
        }

        var histograms = {
            min: { f: function(bucket: IAggrBucket) { return getNumber(bucket.min_duration.value); }, tickFormat: microsecondsToString },
            max: { f: function(bucket: IAggrBucket) { return getNumber(bucket.max_duration.value); }, tickFormat: microsecondsToString },
            p25: { f: function(bucket: IAggrBucket) { return getNumber(bucket.percentiles_duration.values['25.0']); }, tickFormat: microsecondsToString },
            p50: { f: function(bucket: IAggrBucket) { return getNumber(bucket.percentiles_duration.values['50.0']); }, tickFormat: microsecondsToString },
            p75: { f: function(bucket: IAggrBucket) { return getNumber(bucket.percentiles_duration.values['75.0']); }, tickFormat: microsecondsToString },
            p95: { f: function(bucket: IAggrBucket) { return getNumber(bucket.percentiles_duration.values['95.0']); }, tickFormat: microsecondsToString },
            p99: { f: function(bucket: IAggrBucket) { return getNumber(bucket.percentiles_duration.values['99.0']); }, tickFormat: microsecondsToString },
            count: { f: function(bucket: IAggrBucket) { return getNumber(bucket.doc_count); }, tickFormat: function(v) { return '' + v; } },
        };

        var get_bucket_value = histograms[value_func].f;
        var tickFormat = histograms[value_func].tickFormat;

        var buckets = data.aggregations.traces.buckets;
        if (buckets.length == 0)
            return;

        var histogram = $('#histogram');
        var margin = { top: 10, right: 20, bottom: 20, left: 60 };
        var width = histogram.width() - margin.left - margin.right;
        var height = histogram.height() - margin.bottom - margin.top;
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        var xAxis = d3.svg.axis().scale(x).tickFormat(d3.time.format('%e %H:%M')).orient('bottom'),
            yAxis = d3.svg.axis().ticks(5).tickFormat(tickFormat).scale(y).orient('left');

        x.domain(d3.extent(buckets.map(function(bucket: IAggrBucket) { return new Date(bucket.key); })));
        y.domain([0, d3.max(buckets.map(function(bucket: IAggrBucket) { return get_bucket_value(bucket); })) * 1.5]);

        var svg = d3.select('#histogram').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        svg.append('text').attr('y', 15).attr('x', width / 2).style('text-anchor', 'middle').text('Trace histogram');

        function brushed() {
            var range = brush.extent();
            date_select(<number>range[0], <number>range[1]);
        }

        var brush = d3.svg.brush().x(<any>x).on('brushend', brushed);

        svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + height + ')').call(xAxis);
        svg.append('g').attr('class', 'y axis').call(yAxis);
        svg.append('g').attr('class', 'x brush').call(brush).selectAll('rect').attr('y', -6).attr('height', height + 7);

        var bar_width = width;
        if (buckets.length > 1)
            bar_width = Math.floor(width / (buckets.length - 1)) - 2;

        var start_x = 0;

        var state = svg.selectAll('.state')
            .data(buckets.slice(0, buckets.length - 1))
            .enter().append('g')
            .attr('class', 'g')
            .attr('transform', function(bucket: IAggrBucket) { return 'translate(' + x(new Date(bucket.key)) + ',0)'; });
        state.append('rect')
            .attr('width', bar_width)
            .attr('y', function(bucket: IAggrBucket) { return y(get_bucket_value(bucket)); })
            .attr('height', function(bucket: IAggrBucket) { return height - y(get_bucket_value(bucket)); })
            .style('fill', function(bucket: IAggrBucket) { return 'steelblue'; });
    }
}
