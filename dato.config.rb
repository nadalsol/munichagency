# dato.config.rb
directory "_services" do
  dato.services.each do |service|
    create_post "#{service.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "default",
        title: service.title
      }
      content service.description
    end
  end
end

directory "_carousels" do
  dato.carousels.each do |carousel|
    create_post "#{carousel.title.parameterize}.md" do
      frontmatter :yaml, {
        title: carousel.title,
        subtitle: carousel.subtitle,
        link: carousel.link,
        img: carousel.img.url
      }
    end
  end
end
