class TicketsController < ApplicationController

    def index
        tickets = Ticket.all
        render json: tickets, status: :ok
    end

    def create
        tic = Ticket.create(price: params[:price], movie_id: params[:movie_id], user_id: params[:user_id])
        if tic.valid?
            render json: tic, status: :created  
        else
            render json: tic.errors, status: :unprocessable_entity
        end
    end
end
