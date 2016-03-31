export function microsecondsToString(microseconds: number): string {
  if (microseconds == undefined)
    return '';
  var sign = microseconds >= 0 ? '' : '-';
  var micro = Math.abs(microseconds);
  var numseconds = micro / 1000000;
  var nummilliseconds = (micro % 1000000) / 1000;
  if (numseconds > 0.2)
    return sign + (micro / 1000000).toFixed(1) + ' sec';
  if (nummilliseconds > 0.2)
    return sign + (micro / 1000).toFixed(1) + ' ms';
  return sign + Math.ceil(micro) + ' us';
}

const dateRegexp = new RegExp('\\.\\d+');

export function GetMilliseconds(date_string: string): number {
  var date = new Date(date_string);
  var match = date_string.match(dateRegexp);
  if (match == null)
    return date.getTime() * 1000;
  var seconds = parseFloat('0' + match[0]);
  return date.getTime() - date.getMilliseconds() + seconds * 1000;
}
