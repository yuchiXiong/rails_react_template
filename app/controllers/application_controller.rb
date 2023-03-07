class ApplicationController < ActionController::Base
  rescue_from(ActiveRecord::RecordNotFound) do |e|
    head(:not_found)
  end
end
