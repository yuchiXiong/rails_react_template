class PostsController < ApplicationController
  def index
    @posts = [{
      id: 1,
      title: "Frontend",
      articles: [{
        id: 1,
        title: "React",
        link: "https://beta.reactjs.org/",
      }, {
        id: 2,
        title: "React Router",
        link: "https://reactrouter.com/en/main",
      }, {
        id: 3,
        title: "TypeScript",
        link: "https://www.typescriptlang.org/",
      }, {
        id: 4,
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      }, {
        id: 5,
        title: "Headless UI",
        link: "https://headlessui.com/",
      }],
    }, {
      id: 2,
      title: "Backend",
      articles: [{
        id: 1,
        title: "Ruby on Rails",
        link: "https://guides.rubyonrails.org/",
      }],
    }]
  end
end
