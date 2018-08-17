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

directory "_leads" do
  dato.leads.each do |lead|
    create_post "#{lead.title.parameterize}.md" do
      frontmatter :yaml, {
        title: lead.title,
        description: lead.description
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
