# dato.config.rb
directory "_servicios" do
  dato.servicios.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "default",
        title: item.title
      }
      content item.description
    end
  end
end
