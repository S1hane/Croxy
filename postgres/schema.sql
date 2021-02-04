DROP USER IF EXISTS student;
CREATE USER student WITH PASSWORD 'student';

DROP TABLE IF EXISTS images;
CREATE TABLE images
(
  id    integer CONSTRAINT pk_images PRIMARY KEY,
  i1_4  bigint NOT NULL
  CONSTRAINT max_num_i1_4 CHECK (i1_4 < 10000000000000000)
  CONSTRAINT min_num_i1_4 CHECK (i1_4 > -1),
  i5_8  bigint NULL
  CONSTRAINT max_num_i5_8 CHECK (i5_8 < 10000000000000000)
  CONSTRAINT min_num_i5_8 CHECK (i5_8 > -1),
  i9    smallint NULL
  CONSTRAINT max_num_i9 CHECK (i9 < 10000)
  CONSTRAINT min_num_i9 CHECK (i9 > -1),
  fav boolean NULL
);

GRANT SELECT, UPDATE, INSERT ON TABLE images TO student;

-- These test records are inserted above the 10M record scope of the project.
-- Feel free to remove them. They just facilitate testing of an unseeded database.
INSERT INTO images (id, i1_4, i5_8, i9, fav)
VALUES
  (10000000, 1111222233334444, 5555666677778888, 9999, 't'),
  (10000001, 0000000000000000, 0000000000000000, 0000, 'f'),
  (10000002, 9999999999999999, 9999999999999999, 9999, 'f');
SELECT (i1_4, i5_8, i9, fav) FROM images;
