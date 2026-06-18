UPDATE twofer
SET response = 'One for ' || COALESCE(NULLIF(input, ''), 'you') || ', one for me.';
