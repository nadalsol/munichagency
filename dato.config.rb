directory "_abouts" do
  dato.abouts.each do |about|
    create_post "#{about.title.parameterize}.md" do
      frontmatter :yaml, {
        title: about.title,
        description: about.description
      }
    end
  end
end

directory "_approaches" do
  dato.approaches.each do |approach|
    create_post "#{approach.title.parameterize}.md" do
      frontmatter :yaml, {
        title: approach.title,
        description: approach.description,
        link: approach.link,
        img: approach.img.url
      }
    end
  end
end

directory "_callouts" do
  dato.callouts.each do |callout|
    create_post "#{callout.title.parameterize}.md" do
      frontmatter :yaml, {
        title: callout.title,
        subtitle: callout.subtitle,
        description: callout.description
      }
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

directory "_services" do
  dato.services.each do |service|
    create_post "#{service.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "default",
        title: service.title,
        link: service.link,
        icon: service.icon.url,
        icon_alt: service.icon.alt
      }
    end
  end
end

directory "_visions" do
  dato.visions.each do |vision|
    create_post "#{vision.title.parameterize}.md" do
      frontmatter :yaml, {
        title: vision.title,
        description: vision.description
      }
    end
  end
end
