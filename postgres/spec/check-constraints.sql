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
