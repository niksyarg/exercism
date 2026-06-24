UPDATE "rna-transcription"
SET result = REPLACE(
                REPLACE(
                    REPLACE(
                        REPLACE(dna, 'A', 'U'),
                    'T', 'A'),
                'C', 'X'), 
            'G', 'C')
;

UPDATE "rna-transcription"
SET result = REPLACE(result, 'X', 'G');
