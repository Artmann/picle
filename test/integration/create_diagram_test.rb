require 'test_helper'

class CreateDiagramTest < ActionDispatch::IntegrationTest
  test 'can create a diagram from the home page' do
    get '/'
    assert_response :success

    assert_select 'a', 'Create Diagram'
  end
end
