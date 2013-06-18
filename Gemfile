source 'https://rubygems.org'

gem 'rails', '3.2.13'
#gem 'bootstrap-sass', '2.1'
gem 'bourbon', '3.1.1'
gem 'anjlab-bootstrap-rails', '>= 2.3', :require => 'bootstrap-rails'
gem 'font-awesome-rails', '3.0.2.0'
gem 'jquery-rails'
gem 'haml', '4.0.1'
gem 'haml-rails', '0.4'
gem 'markdown', '1.0.0'
gem 'redcarpet', '2.2.2'
# To use ActiveModel has_secure_password
gem 'bcrypt-ruby', '~> 3.0.0'
#gem 'piwik_analytics', github: 'illogic-al/piwik-ruby-tracking'
#gem 'google-analytics-rails'
gem 'thin', '1.5.1'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :development, :test do
  gem 'sqlite3', '1.3.5'
  gem 'rspec-rails', '2.11.0'
  gem 'guard-rspec', '1.2.1'
  gem 'guard-spork', '1.4.2'
  gem 'spork', '0.9.2' # 'bundle exec spork --bootstrap' to start
end


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '3.2.5'
  gem 'coffee-rails', '3.2.2'
  gem 'closure-compiler', '1.1.10'
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

end

group :test do
  gem 'capybara', '1.1.2'
  # For linux
  gem 'rb-inotify', '0.9', require: false
  gem 'libnotify', '0.5.9', require: false # For GUI notifications
  # For OSX
  gem 'rb-fsevent', '0.9.1', require: false
  gem 'growl', '1.0.3', require: false # For GUI notifications
end
# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

group :production do
#  gem 'mysql'
  gem 'pg', '0.12.2'
end
