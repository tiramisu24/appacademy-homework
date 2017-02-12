class Artist < ActiveRecord::Base
  has_many(
    :albums,
    class_name: "Album",
    foreign_key: :artist_id,
    primary_key: :id
  )

  has_many(
    :tracks,
    through: :albums,
    source: :tracks
  )

  def n_plus_one_tracks
    albums = self.albums
    tracks_count = {}
    albums.each do |album|
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end

  def better_tracks_query
    albums_with_count = albums.select("albums.*, COUNT(tracks.id) AS tracks_count")
      .joins(:tracks)
      .group("albums.id")
    output = {}
    albums_with_count.each do |album|
      output[album.title] = album.tracks_count
    end
    output
  end

end
