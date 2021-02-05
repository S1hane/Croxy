
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

-- none of these records should be inserted due to constraint voilations!
INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (1, 10000000000000000, 7777777777777777, 7777, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (2, -1, 7777777777777777, 7777, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (3, 7777777777777777, 10000000000000000, 7777, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (4, 7777777777777777, -1, 7777, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (5, 7777777777777777, 7777777777777777, 10000, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (6, 7777777777777777, 7777777777777777, -1, 'f');

INSERT INTO images (id, i1_4, i5_8, i9, fav) VALUES
  (-1, 7777777777777777, 7777777777777777, -1, 'f');
-- none of these records should be inserted due to constraint voilations!

INSERT INTO images (id, i1_4, i5_8, i9, fav)
VALUES
  (9999999, 1111222233334444, 5555666677778888, 9999, 't'),
  (9999998, 0000000000000000, 0000000000000000, 0000, 'f'),
  (9999997, 9999999999999999, 9999999999999999, 9999, 'f');
--- you should see these 3 test records in the database
SELECT (i1_4, i5_8, i9, fav) FROM images;


