import React from 'react';

// Card Component to display each event/resource
const Card = ({ title, description, link,image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <b><p>{description}</p></b>
      <button>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Menu
      </a>
      </button>
    </div>
  );
};

// Main CommunityBoard Component
const CommunityBoard = () => {
  // Array of events/resources
  const resources = [
    { title: 'Birria-Landia', description: 'Mexican', link: 'https://ww12.thebirrialandia.com/menu/?usid=27&utid=8196217440'
    ,image:'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' },

     { title: 'Mysttik Masala', description: 'Indian', link: 'https://indianfoodny.com/'
     ,image:'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' },
    
     { title: 'The Halal Guys', description: 'Middle Eastern', link: 'https://thehalalguys.com/menu/'
     ,image:'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024'},
    
     { title: 'NY Dosas', description: 'Vegetarian', link: 'https://nydosas.com/menu/'
     ,image:'https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' },
    
     { title: 'Jerk Pan', description: 'Jamaican', link: 'https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/'
     ,image:'https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' },
    
     { title: 'Tong', description: 'Bangladeshi', link: 'https://www.facebook.com/Bangladeshistreetfoods/'
     ,image:'https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' },

    { title: 'King Souvlaki of Astoria', description: 'Greek', link: 'https://kingsouvlakinyc.com/'
    ,image:'https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg' },

    { title: 'Ling\'s Sweet Mini Cakes', description: 'Chinese', link: 'https://canalstreet.market/'
    ,image:'https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' },

    { title: 'Uncle Gussy\'s', description: 'Greek', link: 'https://unclegussys.com/menus/'
    ,image:'https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' },

    { title: 'Patacon Pisao', description: 'Venezuelan', link: 'https://www.pataconpisaonyc.com/menus/'
    ,image:'https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' },

    { title: 'Mom\'s Mono', description: 'Tibetan', link: 'https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/'
    ,image:'https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' },

    { title: 'Makina Cafe', description: 'Ethiopian', link: 'https://makinacafenyc.com/' 
    ,image:'https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg'}
  ];

  return (
    <div class='container'>
      <div class='header'>
      <img className="Tent" src="https://heroic-pixie-6d7f91.netlify.app/awning.png"></img>
      <h1 className='Middle'>Food Truck Favorites</h1>
      </div>
      <div className="card-container">
        {resources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            image={resource.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityBoard;
