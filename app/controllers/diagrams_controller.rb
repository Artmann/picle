class DiagramsController < ApplicationController
  def new
    @diagram = Diagram.new
  end
end
