require 'actor_spider'

module ActorScraper
  def scrape_actors start_index=1, end_index=5000
    base_url = "https://www.imdb.com/search/name/?gender=male,female&ref_=rlm"
    url = base_url + "&start=1"
    current_index = start_index
    while current_index <= end_index
      response = ActorSpider.process(url)
      current_index += 50
      url = base_url + "&start=#{current_index}"
    end
  
  end
end