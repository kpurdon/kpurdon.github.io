desc 'create a new post'
task :new_post, [:title, :author] do |_, args|
  args.with_defaults(author: 'Kyle Purdon')

  fn_content = %{---
layout: post
title: "#{args.title}"
author: #{args.author}
#summary: ""
categories: []
---}

  fn_title = args.title.gsub(/[^0-9a-z ]/i, '-')
  fn_time = Time.new.strftime('%Y-%m-%d')
  fn = "_posts/#{fn_time}-#{fn_title}.md"

  puts "Creating #{fn}"
  File.open(fn, 'w') { |file| file.write(fn_content) }
end

desc 'build site and watch for changes'
task :build do
  sh 'bundle exec jekyll build --watch'
end
