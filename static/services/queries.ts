export class Queries {

    private get_must(conditions, prefix) {
        var must = [];
        angular.forEach(conditions, function(value, name) {
            if (value === undefined)
                return;
            var condition = { term: {} };
            condition.term[prefix + name] = value;
            must.push(condition);
        });
        return must;
    }

    private add_prefix(conditions, must) {
        angular.forEach(conditions, function(value, name) {
            if (value === undefined)
                return;
            var condition = { prefix: {} };
            condition.prefix[name] = value;
            must.push(condition);
        });
    }

    private get_range(field, interval, inc) {
        var result = { range: {} };
        result.range[field] = {};
        if (interval.from)
            result.range[field][inc ? 'gte' : 'gt'] = interval.from;
        if (interval.to)
            result.range[field][inc ? 'lte' : 'lt'] = interval.to;
        return result;
    }

    private get_span_must(span_conditions) {
        var spans_must = this.get_must(span_conditions.terms, 'spans.');
        angular.forEach(span_conditions.range_ex, (value, name) => {
            spans_must.push(this.get_range('spans.' + name, value, false));
        });
        angular.forEach(span_conditions.range_inc, (value, name) => {
            spans_must.push(this.get_range('spans.' + name, value, true));
        });
        return spans_must;
    }

    histogram(trace_conditions, chains_conditions, span_conditions, interval) {
        var must = this.get_must(trace_conditions.terms, '');
        if (trace_conditions.date.from || trace_conditions.date.to)
            must.push(this.get_range('timestamp', trace_conditions.date, true));
        var spans_must = this.get_span_must(span_conditions);
        if (spans_must.length) {
            must.push({
                'nested': {
                    'path': 'spans',
                    'query': {
                        'bool': {
                            'must': spans_must
                        }
                    }
                }
            });
        }
        var chains_must = this.get_must(chains_conditions, '');
        if (chains_must.length) {
            must.push({
                'nested': {
                    'path': 'chains',
                    'query': {
                        'bool': {
                            'must': chains_must
                        }
                    }
                }
            });
        }
        return {
            'query': {
                'bool': {
                    'must': must
                }
            },
            'aggs': {
                'traces': {
                    'date_histogram': {
                        'field': 'timestamp',
                        'interval': interval,
                        'min_doc_count': 0
                    },
                    'aggs': {
                        'percentiles_duration': {
                            'percentiles': {
                                'field': 'duration',
                                'percents': [
                                    25,
                                    50,
                                    75,
                                    95,
                                    99
                                ]
                            }
                        },
                        'min_duration': {
                            'min': {
                                'field': 'duration'
                            }
                        },
                        'max_duration': {
                            'max': {
                                'field': 'duration'
                            }
                        }
                    }
                }
            }
        };
    }

    spans(trace_conditions, chains_conditions, span_conditions, order, page, size) {
        var must = this.get_must(trace_conditions.terms, '');
        if (trace_conditions.date.from || trace_conditions.date.to)
            must.push(this.get_range('timestamp', trace_conditions.date, true));
        this.add_prefix(trace_conditions.prefix, must);
        var chains_must = this.get_must(chains_conditions, '');
        if (chains_must.length) {
            must.push({
                'nested': {
                    'path': 'chains',
                    'query': {
                        'bool': {
                            'must': chains_must
                        }
                    }
                }
            });
        }
        var spans_must = this.get_span_must(span_conditions);
        if (spans_must.length) {
            must.push({
                'nested': {
                    'path': 'spans',
                    'query': {
                        'bool': {
                            'must': spans_must
                        }
                    }
                }
            });
        }
        return {
            'from': page * 50,
            'size': size || 50,
            'sort': [{ 'duration': { 'order': 'desc' } }],
            'query': {
                'bool': {
                    'must': must
                }
            }
        };
    }

    groups(trace_conditions, chains_conditions, span_conditions, group_field, aggr_field, order) {
        var must = this.get_must(trace_conditions.terms, '');
        if (trace_conditions.date.from || trace_conditions.date.to)
            must.push(this.get_range('timestamp', trace_conditions.date, true));
        this.add_prefix(trace_conditions.prefix, must);
        var chains_must = this.get_must(chains_conditions, '');
        if (chains_must.length) {
            must.push({
                'nested': {
                    'path': 'chains',
                    'query': {
                        'bool': {
                            'must': chains_must
                        }
                    }
                }
            });
        }
        var spans_must = this.get_span_must(span_conditions);
        if (spans_must.length) {
            must.push({
                'nested': {
                    'path': 'spans',
                    'query': {
                        'bool': {
                            'must': spans_must
                        }
                    }
                }
            });
        }
        return {
            'query': {
                'bool': {
                    'must': must
                }
            },
            'aggs': {
                'spans': {
                    'nested': {
                        'path': 'spans'
                    },
                    'aggs': {
                        'filtered': {
                            'filter': {
                                'bool': {
                                    'must': this.get_span_must(span_conditions)
                                }
                            },
                            'aggs': {
                                'spans': {
                                    'terms': {
                                        'field': 'spans.' + group_field,
                                        'size': 1000,
                                        'order': order
                                    },
                                    'aggs': {
                                        'min_duration': {
                                            'min': {
                                                'field': 'spans.' + aggr_field
                                            }
                                        },
                                        'max_duration': {
                                            'max': {
                                                'field': 'spans.' + aggr_field
                                            }
                                        },
                                        'percentiles_duration': {
                                            'percentiles': {
                                                'field': 'spans.' + aggr_field,
                                                'percents': [
                                                    25,
                                                    50,
                                                    75,
                                                    95,
                                                    99
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }

    chains(trace_conditions, chains_conditions, order) {
        var must = this.get_must(trace_conditions.terms, '');
        if (trace_conditions.date.from || trace_conditions.date.to)
            must.push(this.get_range('timestamp', trace_conditions.date, true));
        this.add_prefix(trace_conditions.prefix, must);
        return {
            'query': {
                'bool': {
                    'must': must
                }
            },
            'aggs': {
                'chains': {
                    'nested': {
                        'path': 'chains'
                    },
                    'aggs': {
                        'filtered': {
                            'filter': {
                                'bool': {
                                    'must': this.get_must(chains_conditions, '')
                                }
                            },
                            'aggs': {
                                'chain_path': {
                                    'terms': {
                                        'field': 'chains.path',
                                        'size': 1000,
                                        'order': order
                                    },
                                    'aggs': {
                                        'min_duration': {
                                            'min': {
                                                'field': 'chains.duration'
                                            }
                                        },
                                        'max_duration': {
                                            'max': {
                                                'field': 'chains.duration'
                                            }
                                        },
                                        'percentiles_duration': {
                                            'percentiles': {
                                                'field': 'chains.duration',
                                                'percents': [
                                                    25,
                                                    50,
                                                    75,
                                                    95,
                                                    99
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
}
