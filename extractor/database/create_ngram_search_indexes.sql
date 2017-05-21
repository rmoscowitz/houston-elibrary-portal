CREATE EXTENSION pg_trgm;
CREATE INDEX title_idx ON books using gin(title gin_trgm_ops);
CREATE INDEX primary_creator_name_idx ON books using gin(primary_creator_name gin_trgm_ops);

-- SELECT *, similarity(title, 'harry') as t_sml, similarity(primary_creator_name, 'harry')  AS a_sml
-- FROM books
-- WHERE title % 'harry' OR primary_creator_name % 'harry'
-- ORDER BY t_sml DESC, a_sml;
