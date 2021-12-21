class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price
  has_one :movie
  has_one :user
end
