class User < ApplicationRecord
    has_many :tickets
    has_many :movies, through: :tickets

    validates :username, length: {minimum: 5}, uniqueness: :true
    validates :password_digest, length: {minimum:6}, uniqueness: :true


    def Add_movies
          { 
              id: self.id,
              username: self.username,
              password_digest: self.password_digest,
              movies: self.movies.map do |m|
                {
                    id: m.id,
                    title: m.title,
                    link: m.link,
                    likes: m.likes,
                    release_date: m.release_date,
                    genre: m.genre,
                    description: m.description,
                 }
              end
           }
    end
end
