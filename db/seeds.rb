# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ticket.destroy_all
User.destroy_all
Movie.destroy_all

user1 = User.create(username: 'sduvly', password_digest: '123456')
user2 = User.create(username: 'acnfg', password_digest: '987654')
user3 = User.create(username: 'kjjkj', password_digest: '1326458')



movie1 = Movie.create(title: 'Dune', link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', likes: 5, release_date: 10_22_21, genre: 'Action', description: 'A mythic and emotionally charged hero journey, DUNE tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet exclusive supply of the most precious resource in existence--a commodity capable of unlocking humanity greatest potential--only those who can conquer their fear will survive.')
movie2 = Movie.create(title: 'House Of Gucci', link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eGNnpVKxV6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', likes: 10, release_date: 11_25_21, genre: 'Drama', description: 'House of Gucci is inspired by the shocking true story of the family empire behind the Italian fashion house of Gucci. Spanning three decades of love, betrayal, decadence, revenge, and ultimately murder, we see what a name means, what it’s worth, and how far a family will go for control.')
movie3 = Movie.create(title: 'Eternals', link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x_me3xsvDgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', likes: 20, release_date: 11_05_21, genre: 'Action', description: 'Marvel Studios’ “Eternals” welcomes an exciting new team of Super Heroes to the Marvel Cinematic Universe. The epic story, spanning thousands of years, features a group of immortal heroes forced out of the shadows to reunite against mankind’s oldest enemy, The Deviants. The outstanding ensemble cast includes Richard Madden as the all-powerful Ikaris, Gemma Chan as humankind-loving Sersi, Kumail Nanjiani as cosmic-powered Kingo, Lauren Ridloff as the super-fast Makkari, Brian Tyree Henry as the intelligent inventor Phastos, Salma Hayek as the wise and spiritual leader Ajak, Lia McHugh as the eternally young, old-soul Sprite, Don Lee as the powerful Gilgamesh, Barry Keoghan as aloof loner Druig, and Angelina Jolie as the fierce warrior Thena. Kit Harington plays Dane Whitman.')
movie4 = Movie.create(title: 'American Underdog', link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_6rn-6lKBJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', likes: 12, release_date: 12_25_21, genre: 'Drama', description: 'The drama chronicles the incredible true story of Kurt Warner, who went from stocking shelves at a supermarket to become a two time NFL MVP, Super Bowl MVP and Hall of Fame quarterback.')
movie5 = Movie.create(title: 'The Matrix Resurrections', link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CgjjMKP4ipg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', likes: 40, release_date: 12_22_21, genre: 'Action', description: 'the plot is currently unknown')


ticket1 = Ticket.create(price: 14.99, user_id: user1.id, movie_id: movie1.id)
ticket2 = Ticket.create(price: 14.99, user_id: user2.id, movie_id: movie1.id)
ticket3 = Ticket.create(price: 14.99, user_id: user1.id, movie_id: movie2.id)
ticket4 = Ticket.create(price: 14.99, user_id: user2.id, movie_id: movie3.id)
ticket5 = Ticket.create(price: 14.99, user_id: user3.id, movie_id: movie1.id)
ticket6 = Ticket.create(price: 14.99, user_id: user1.id, movie_id: movie2.id)
ticket7 = Ticket.create(price: 14.99, user_id: user2.id, movie_id: movie3.id)
ticket8 = Ticket.create(price: 14.99, user_id: user2.id, movie_id: movie4.id)
ticket9 = Ticket.create(price: 14.99, user_id: user1.id, movie_id: movie5.id)
ticket10 = Ticket.create(price: 14.99, user_id: user2.id, movie_id: movie5.id)
ticket11 = Ticket.create(price: 14.99, user_id: user3.id, movie_id: movie5.id)
ticket12 = Ticket.create(price: 14.99, user_id: user1.id, movie_id: movie4.id)


