class ActorSpider < Kimurai::Base
  @name = 'actor_spider'
  @engine = :mechanize
  
  def self.process(url)
    @start_urls = [url]
    self.crawl!
  end
  
  def parse(response, url:, data: {})
    actors = []
    response.xpath("//div[@class='lister-item mode-detail']").each do |actor|
      item = {}
      item[:name] = actor.css('h3.lister-item-header a')&.text&.squish
      item[:imdb_id] = actor.css('h3.lister-item-header a').attr('href').value.gsub('/name/', '')
      item[:picture_url] = actor.css('div.lister-item-image img').attr('src').value
      item[:search_value] = item[:name].downcase
      actors << item
    end
    
    Actor.upsert_all(actors, unique_by: :name)
  end
end