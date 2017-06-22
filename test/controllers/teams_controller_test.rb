require 'test_helper'

class TeamsControllerTest < ActionController::TestCase
  test "should get memberships" do
    get :memberships
    assert_response :success
  end

end
