class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        users = User.find_by(id: params[:id])

        if users
            render json: users.Add_movies 
        else
            render json:{error: "User doesnt exist"}, status: :unprocessable_entity
        end
    end

    def update
        users = User.update(user_params)
        if users.save
            render json: users, status: :ok
        else
            render json: {error: "password need to be atleast 6 character"}
        end
    end

    def destroy
        users = User.find_by(id: params[:id])

        if users.destroy
           render json: {}, status: :no_content
        else
            render json: {error: "Users account was deleted"}
        end
    end

    private

    def user_params
        params.permit(:password_digest)
    end
end
