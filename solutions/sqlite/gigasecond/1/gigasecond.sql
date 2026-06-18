UPDATE gigasecond
SET result = replace(datetime(moment, '+1000000000 seconds'), ' ', 'T');
