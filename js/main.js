
import fetchMediasSlider from "./Main Slider";
import fetchMediasFree from "./FreeVip";
import fetchMediasAwesome from "./Awesom";
import fetchMediasNewest from "./newest";
import fetchMediasHot from "./hot";
import fetchMediasOnline from "./online";
import fetchMediasPopular from "./popular";
import fetchMediasTVShows from "./tvShows";
import fetchMediasComment from "./commentSlider";

try {
      fetchMediasSlider();    
      if (!fetchMediasSlider) {
      throw new Error("fetching Data error in slider");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasFree();    
      if (!fetchMediasFree) {
      throw new Error("fetching Data error in Free VIP");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasAwesome();
      if (!fetchMediasAwesome) {
      throw new Error("fetching Data error in Awesome Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasNewest();
      if (!fetchMediasNewest) {
      throw new Error("fetching Data error in Newst Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasHot();
      if (!fetchMediasHot) {
      throw new Error("fetching Data error in Hot Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasOnline();
      if (!fetchMediasOnline) {
      throw new Error("fetching Data error in Online Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasPopular();
      if (!fetchMediasPopular) {
      throw new Error("fetching Data error in Popular Movies");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasTVShows();
      if (!fetchMediasTVShows) {
      throw new Error("fetching Data error in TV Shows");
      }
} 
catch (error) {
      console.error(error.message);
}

try {
      fetchMediasComment();
      if (!fetchMediasComment) {
      throw new Error("fetching Data error in Comment Slider");
      }
} 
catch (error) {
      console.error(error.message);
}