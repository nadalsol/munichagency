directory "_about_callouts" do
  dato.about_callouts.each do |about_callout|
    create_post "#{about_callout.title.parameterize}.md" do
      frontmatter :yaml, {
        title: about_callout.title,
        subtitle: about_callout.subtitle,
        description: about_callout.description
      }
    end
  end
end

directory "_about_mains" do
  dato.about_mains.each do |about_main|
    create_post "#{about_main.title.parameterize}.md" do
      frontmatter :yaml, {
        title: about_main.title,
        description: about_main.description
      }
    end
  end
end

directory "_home_approaches" do
  dato.home_approaches.each do |home_approach|
    create_post "#{home_approach.title.parameterize}.md" do
      frontmatter :yaml, {
        title: home_approach.title,
        description: home_approach.description,
        link: home_approach.link,
        img: home_approach.img.url
      }
    end
  end
end

directory "_home_carousels" do
  dato.home_carousels.each do |home_carousel|
    create_post "#{home_carousel.title.parameterize}.md" do
      frontmatter :yaml, {
        title: home_carousel.title,
        subtitle: home_carousel.subtitle,
        link: home_carousel.link,
        img: home_carousel.img.url
      }
    end
  end
end

directory "_home_visions" do
  dato.home_visions.each do |home_vision|
    create_post "#{home_vision.title.parameterize}.md" do
      frontmatter :yaml, {
        title: home_vision.title,
        description: home_vision.description
      }
    end
  end
end

directory "_services" do
  dato.services.each do |service|
    create_post "#{service.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "services",
        title: service.title,
        description: service.description,
        description_extended: service.description_extended,
        link: service.link,
        icon: service.icon.url,
        icon_alt: service.icon.alt,
        cat: service.title.parameterize
      }
    end
  end
end
