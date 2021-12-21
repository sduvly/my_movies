class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :likes, :release_date, :genre, :description
end
