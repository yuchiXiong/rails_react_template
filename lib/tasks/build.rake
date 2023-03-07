namespace :javascript do
  desc "Build your JavaScript bundle"
  task :build do
    unless system "yarn install && yarn _prod"
      raise "jsbundling-rails: Command build failed, ensure yarn is installed and `yarn _prod` runs without errors"
    end
  end
end

namespace :manifest do
  desc "重制 sprockets-manifest 中的入口文件名"
  task :reset do
    dir_name = [Rails.root, "public", "assets"].join("/")
    file_name = Dir.new(dir_name).select { |file| file.include? "sprockets-manifest" }[0]
    path = [dir_name, file_name].join("/")

    content = JSON.parse(open(path).read)

    SYM_DIGESTED = ".digested"

    content["assets"].keys.each do |key|
      next if !key.include? "app"

      end_at = key.index(SYM_DIGESTED) + SYM_DIGESTED.size
      origin = key[0...key.index("-")] + key[end_at..-1]
      content["assets"][origin] = content["assets"][key]
      content["assets"].delete(key)

      puts ">> Convert #{key} to #{origin}"
    end

    File.new(path, "w+").syswrite(content.to_json)
  end
end

if Rake::Task.task_defined?("assets:precompile")
  Rake::Task["assets:precompile"].enhance(["javascript:build"]) do
    Rake::Task["manifest:reset"].invoke
  end
end

if Rake::Task.task_defined?("test:prepare")
  Rake::Task["test:prepare"].enhance(["javascript:build"])
elsif Rake::Task.task_defined?("db:test:prepare")
  Rake::Task["db:test:prepare"].enhance(["javascript:build"])
end
