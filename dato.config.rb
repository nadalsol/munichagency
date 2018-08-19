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

directory "_nav_categories" do
  dato.nav_categories.each do |nav_category|
    create_post "#{nav_category.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "default",
        title: nav_category.title,
        link: nav_category.link,
        icon: nav_category.icon.url,
        icon_alt: nav_category.icon.alt
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
