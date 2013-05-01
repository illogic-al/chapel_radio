require 'spec_helper'

describe "LandingPages" do
  before do
    visit '/landing_pages/home'
  end

  it "should have a SHARE button" do
    page.should have_button("Sign in to share")
  end

  describe "/landing_pages/home" do
    it "should have a title" do
      page.should have_selector('title', text: "Chapel Radio")
    end

    it "should have a 'Latest Broadcasts' section" do
      page.should have_selector('h1', text: "Latest Broadcasts")
    end

    it "should have a 'Stations' section" do
      page.should have_selector('h1', text: "Stations")
    end

    #TODO: Test for pressence of SHARE button in more global location
    #maybe spec_helpers ?
  end
end
