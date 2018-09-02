################################################################################
#                                                                              #
# Dump all the remote data into local files                                    #
#                                                                              #
# This script will fetch the data from DatoCMS and will create the new files   #
# thanks to the create_post helper that the dato gem exposes.                  #
#                                                                              #
# Just fire the following command to fetch data:                               #
# `$ bundle exec dato dump --token=SITE_READONLY_TOKEN`                        #
#                                                                              #
# More info:                                                                   #
# https://www.datocms.com/blog/datocms-with-jekyll-a-beginners-guide/          #
#                                                                              #
################################################################################

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

directory "_home_customers" do
  dato.home_customers.each do |home_customer|
    create_post "#{home_customer.title.parameterize}.md" do
      frontmatter :yaml, {
        title: home_customer.title,
        icon: home_customer.icon.url,
        icon_alt: home_customer.icon.alt
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

directory "_legal_cookies" do
  dato.legal_cookies.each do |legal_cookie|
    create_post "#{legal_cookie.title.parameterize}.md" do
      frontmatter :yaml, {
        title: legal_cookie.title,
        description: legal_cookie.description
      }
    end
  end
end

directory "_legal_privacies" do
  dato.legal_privacies.each do |legal_privacy|
    create_post "#{legal_privacy.title.parameterize}.md" do
      frontmatter :yaml, {
        title: legal_privacy.title,
        description: legal_privacy.description
      }
    end
  end
end

directory "_projects" do
  dato.projects.each do |project|
    create_post "#{project.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "projects",
        title: project.title,
        cat: project.cat.title.parameterize,
        permalink: "/proyectos/#{project.cat.title.parameterize}",
        permalink_to: "/proyectos/#{project.cat.title.parameterize}/#{project.title.parameterize}",
        sector: project.sector,
        description: project.description,
        link: project.link,
        img_cover: project.img_cover.url,
        img_cover_alt: project.img_cover.alt,
        img_carousel: project.img_carousel
      }
    end
  end
end

directory "_the_projects" do
  dato.projects.each do |project|
    create_post "#{project.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "the-project",
        title: project.title,
        cat: project.cat.title.parameterize,
        permalink: "/proyectos/#{project.cat.title.parameterize}/#{project.title.parameterize}",
        slug: "#{project.title.parameterize}",
        sector: project.sector,
        description: project.description,
        link: project.link,
        img_cover: project.img_cover.url,
        img_cover_alt: project.img_cover.alt,
        img_carousel: project.img_carousel
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
        cat: service.title.parameterize,
        permalink: "/servicios/#{service.title.parameterize}",
        description_main: service.description_main,
        description_secondary: service.description_secondary,
        link: service.link,
        icon: service.icon.url,
        icon_alt: service.icon.alt,
        order: service.order
      }
    end
  end
end
