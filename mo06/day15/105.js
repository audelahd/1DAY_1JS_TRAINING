const album = {
  name: "Love yourself",
};

album.song = "Euphoria";
album.singer = "RM";

console.log(album);

Object.seal(album);

album.comment = "Answer";
album.singer = "JK";
delete album.name;

console.log(album);
