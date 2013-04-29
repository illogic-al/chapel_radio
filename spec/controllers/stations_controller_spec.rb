require 'spec_helper'

describe StationsController do

  describe "GET 'sermons'" do
    it "returns http success" do
      get 'sermons'
      response.should be_success
    end
  end

  describe "GET 'events'" do
    it "returns http success" do
      get 'events'
      response.should be_success
    end
  end

  describe "GET 'worship'" do
    it "returns http success" do
      get 'worship'
      response.should be_success
    end
  end

end
