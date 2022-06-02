var simplemaps_worldmap_mapdata = {

    //State defaults
    main_settings: {
        //General settings
        width: "responsive", //'700' or 'responsive '
        background_color: "#5B7D72ff", //"#FFFFFF"
        background_transparent: "no",
        border_color: "#a4a4a4",
        popups: "on_click",

        //State defaults  
        // För att ta bort ("Coming Soon...") använd (description:"") inuti lands koden.
        state_description: "<p class=\"intro\"><br><br><br>Coming Soon... </p>",
        state_color: "#2C2C2C",
        state_hover_color: "#75635E", // changed by Josse
        state_url: "", // #2 View Website som togs bort...
        border_size: 0.5,
        all_states_inactive: "no",
        all_states_zoomable: "no",

        //Location defaults
        //------------------------------------------- STYLING OF LOCATION PIN ---------------------------------------------
        location_description: "",
        location_color: "#c1121f", // pin color
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: 15, // pin size
        location_type: "circle", // pin shape
        location_image_source: "",
        location_border_color: "#FFFFFF",
        location_border: 1, // pin border
        location_hover_border: 2,
        all_locations_inactive: "yes",
        all_locations_hidden: "yes", // change to "no" to show red pin

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "yes",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "",

        manual_zoom: "yes",
        zoom: "yes",
        back_image: "no",
        initial_back: "no",
        initial_zoom: -1,
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "yes",
        popup_centered: "yes",
    },

    state_specific: {
        AF: {
            name: "Afghanistan",

        },
        AO: {
            name: "Angola",

        },
        AL: {
            name: "Albania",

        },
        AE: {
            name: "United Arab Emirates",

        },
        AR: {
            name: "Argentina",

        },
        AM: {
            name: "Armenia",

        },
        AU: {
            name: "Australia",
            description: "<div class=\"recipe-text\"><img src=\"http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AwwFood/2019/04/15/10291/roastlamb.jpg?width=768&height=639&mode=crop&quality=75&anchor=middlecenter\" class=\"recipe_img\"> <p class=\"intro\">ROAST LAMB<br><br>The all-time classic choice for a Sunday lunch, roast lamb is an irresistible meal, sure to get the whole family to the table! With just five ingredients, this simple recipe uses honey and mustard to add beautiful flavour to the lamb leg.</p><p>Recipe: <br> 10 portions <br><br>Ingredients:<br>1 1/2 kg lamb leg<br>1 splash olive oil<br>2 tbs honey<br>2 tbs wholegrain mustard<br>4 sprigs fresh rosemary *to taste *optional<br><br>Method:<br>1. Use a knife to make small cuts in the meat.<br>2. Rub oil into meat.<br>3. Mix mustard and honey together, then baste the meat with mixture, pressing into the cuts.<br>4. Insert sprigs of rosemary into the cuts.<br>5. Bake at 180C for 1½ hours for medium-rare meat.<br>6. Rest meat in aluminium foil for 15 minutes before carving.<br><br><a href=\"https://www.bestrecipes.com.au/recipes/roast-lamb-recipe/ohkilaus\" target=\"_blank\">Recipe by Australia's best recipes</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AwwFood/2019/04/15/10291/roastlamb.jpg?width=768&height=639&mode=crop&quality=75&anchor=middlecenter\" class=\"recipe_img\"> <p class=\"intro\">ROAST LAMB<br><br>The all-time classic choice for a Sunday lunch, roast lamb is an irresistible meal, sure to get the whole family to the table! With just five ingredients, this simple recipe uses honey and mustard to add beautiful flavour to the lamb leg.</p><p>Recipe: <br> 10 portions <br><br>Ingredients:<br>1 1/2 kg lamb leg<br>1 splash olive oil<br>2 tbs honey<br>2 tbs wholegrain mustard<br>4 sprigs fresh rosemary *to taste *optional<br><br>Method:<br>1. Use a knife to make small cuts in the meat.<br>2. Rub oil into meat.<br>3. Mix mustard and honey together, then baste the meat with mixture, pressing into the cuts.<br>4. Insert sprigs of rosemary into the cuts.<br>5. Bake at 180C for 1½ hours for medium-rare meat.<br>6. Rest meat in aluminium foil for 15 minutes before carving.<br><br><a href=\"https://www.bestrecipes.com.au/recipes/roast-lamb-recipe/ohkilaus\" target=\"_blank\">Recipe by Australia's best recipes</a></p></div>"
            ],
        },
        AT: {
            name: "Austria",

        },
        AZ: {
            name: "Azerbaijan",

        },
        BI: {
            name: "Burundi",

        },
        BE: {
            name: "Belgium",

        },
        BJ: {
            name: "Benin",

        },
        BF: {
            name: "Burkina Faso",

        },
        BD: {
            name: "Bangladesh",

        },
        BG: {
            name: "Bulgaria",

        },
        BH: {
            name: "Bahrain",

        },
        BA: {
            name: "Bosnia and Herzegovina",

        },
        BY: {
            name: "Belarus",

        },
        BZ: {
            name: "Belize",

        },
        BO: {
            name: "Bolivia",

        },
        BR: {
            name: "Brazil",
            description: "<div class=\"recipe-text\"><img src=\"https://www.laylita.com/recipes/wp-content/uploads/2014/06/Recipe-for-perfect-caipirinhas-650x433.jpg\" class=\"recipe_img\"/> <p class=\"intro\">CAIPIRINHA<br><br>Brazil’s national drink, the Caipirinha, is refreshing and easy to make. The spirit Cachaça is distilled from the fermented juice of sugar cane and has a unique flavour. It’s unclear exactly when the Caipirinha first appeared, but many historians believe it was served in the early 20th century as a remedy for illness. Regardless of how or when it was born, drinkers have gravitated toward its pleasing flavours and heady effects ever since.</p><p>Recipe: <br>Servings 2 Preparation time 5 minutes<br><br>Ingredients: <br>2 lime, cut into wedges<br>4 teaspoons sugar<br>12 cl cachaça<br>Garnish:<br>lime wheel<br><br> Method: <br>1.In a double rocks glass, muddle the lime wedges and sugar.<br>2.Fill the glass with ice, add the cachaça, and stir briefly.<br>3.Garnish with a lime wheel.<br><br><a href=\"https://www.liquor.com/recipes/caipirinha/\">Recipe by Liquor</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.laylita.com/recipes/wp-content/uploads/2014/06/Recipe-for-perfect-caipirinhas-650x433.jpg\" class=\"recipe_img\"/> <p class=\"intro\">CAIPIRINHA<br><br>Brazil’s national drink, the Caipirinha, is refreshing and easy to make. The spirit Cachaça is distilled from the fermented juice of sugar cane and has a unique flavour. It’s unclear exactly when the Caipirinha first appeared, but many historians believe it was served in the early 20th century as a remedy for illness. Regardless of how or when it was born, drinkers have gravitated toward its pleasing flavours and heady effects ever since.</p><p>Recipe: <br>Servings 2 Preparation time 5 minutes<br><br>Ingredients: <br>2 lime, cut into wedges<br>4 teaspoons sugar<br>12 cl cachaça<br>Garnish:<br>lime wheel<br><br> Method: <br>1.In a double rocks glass, muddle the lime wedges and sugar.<br>2.Fill the glass with ice, add the cachaça, and stir briefly.<br>3.Garnish with a lime wheel.<br><br><a href=\"https://www.liquor.com/recipes/caipirinha/\">Recipe by Liquor</a></p></div>"
            ],
        },
        BN: {
            name: "Brunei Darussalam",

        },
        BT: {
            name: "Bhutan",

        },
        BW: {
            name: "Botswana",

        },
        CF: {
            name: "Central African Republic",

        },
        CA: {
            name: "Canada",

        },
        CH: {
            name: "Switzerland",

        },
        CL: {
            name: "Chile",
            description: "<div class=\"recipe-text\"><img src=\"https://ingmar.app/blog/wp-content/uploads/2015/09/Chile-Cazuela.jpg\" class=\"recipe_img\"> <p class=\"intro\">CAZUELA DE AVE<br><br>Cazuela de Ave may seem like any other stew, but it is not. The chicken is succulent and falls off the bone as you serve it. The vegetables are soft and sweet, melting in your mouth. All of the ingredients and spices mix perfectly on your palate and warm your heart.  This stew is delicious, easy to make and very inexpensive.</p><p>Recipe: <br>6 portions<br><br>Ingredients:<br>1 whole chicken cut into 6-8 pieces<br>3 liter water<br>1 cube chicken stock<br>1 large onion<br>3 large carrots<br>3 garlic cloves<br>2 pinches salt<br>black pepper<br>1 bunch coriander<br>1 tsp paprika powder<br>1 butternut squash or pumkin<br>6 potatoes<br>150 g rice long grain white rice<br>3 corncobs<br><br>Method:<br>1. If you bought a chicken with the skin on, first you must take a knife, skin it and trim off any excess of fat. This will save you from needing to remove the fat from your chicken stock later on.<br>2. Add the skinned chicken pieces and 3 litres of water to a large stock pot.<br>3. Turn the burner on low to medium heat and cover the chicken and water with a lid. Cook the chicken for about 30-40 minutes, keeping an eye on it to make sure it doesn’t come to a hard boil. If it starts to boil, move the lid slightly to the side of the pot. Keep the lid on, entirely or partially, during the entire process.<br>4. While the chicken is cooking, peel and chop the carrots, onion, garlic, coriander, squash and potatoes.<br>5. Once the chicken is close to being done, around 30 minutes, you should have a nice chicken stock in the pot. Add all chopped carrots, chopped onion, minced garlic cloves, a small pinch of chopped coriander, salt, pepper and a pinch of paprika (if you desire) into the pot with the chicken and stock. Crumble your cube of chicken bouillon into the pot.<br>6. There is no need to stir anything at any time. Just make sure that all of your ingredients are completely submerged into the chicken stock.<br>7. After about 8 minutes, the carrots should start to soften. This can be tested by piercing one with a knife or fork. If it enters the carrot easily, it is ready.<br>8. Now add the chopped squash and potatoes. Again, make sure that they are submerged into the stock but don’t stir. Now is also a good time to do a little taste test of the chicken stock to check if more salt or pepper is needed.<br>9. Cut the corncobs into 5-6 cm long chunks<br>10. After 8-10 minutes, test the squash and potatoes with a knife or fork. If they are starting to get soft, it is time to add the rice and pieces of corncob.<br>11. The rice and corn should take approximately 10 to 15 minutes. The rice should be soft.<br>12. To serve, put one chicken quarter into each bowl. Add to that some vegetables and rice, then ladle some of that delicious broth overtop it all. Garnish with a pinch of coriander. For a traditional food experience, serve them up in clay pots like the Chileans do<br><br><a href=\"https://ingmar.app/blog/recip-the-national-dish-of-chile-cazuela-de-ave/\" target=\"_blank\">Recipe by Ingmar</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://ingmar.app/blog/wp-content/uploads/2015/09/Chile-Cazuela.jpg\" class=\"recipe_img\"> <p class=\"intro\">CAZUELA DE AVE<br><br>Cazuela de Ave may seem like any other stew, but it is not. The chicken is succulent and falls off the bone as you serve it. The vegetables are soft and sweet, melting in your mouth. All of the ingredients and spices mix perfectly on your palate and warm your heart.  This stew is delicious, easy to make and very inexpensive.</p><p>Recipe: <br>6 portions<br><br>Ingredients:<br>1 whole chicken cut into 6-8 pieces<br>3 liter water<br>1 cube chicken stock<br>1 large onion<br>3 large carrots<br>3 garlic cloves<br>2 pinches salt<br>black pepper<br>1 bunch coriander<br>1 tsp paprika powder<br>1 butternut squash or pumkin<br>6 potatoes<br>150 g rice long grain white rice<br>3 corncobs<br><br>Method:<br>1. If you bought a chicken with the skin on, first you must take a knife, skin it and trim off any excess of fat. This will save you from needing to remove the fat from your chicken stock later on.<br>2. Add the skinned chicken pieces and 3 litres of water to a large stock pot.<br>3. Turn the burner on low to medium heat and cover the chicken and water with a lid. Cook the chicken for about 30-40 minutes, keeping an eye on it to make sure it doesn’t come to a hard boil. If it starts to boil, move the lid slightly to the side of the pot. Keep the lid on, entirely or partially, during the entire process.<br>4. While the chicken is cooking, peel and chop the carrots, onion, garlic, coriander, squash and potatoes.<br>5. Once the chicken is close to being done, around 30 minutes, you should have a nice chicken stock in the pot. Add all chopped carrots, chopped onion, minced garlic cloves, a small pinch of chopped coriander, salt, pepper and a pinch of paprika (if you desire) into the pot with the chicken and stock. Crumble your cube of chicken bouillon into the pot.<br>6. There is no need to stir anything at any time. Just make sure that all of your ingredients are completely submerged into the chicken stock.<br>7. After about 8 minutes, the carrots should start to soften. This can be tested by piercing one with a knife or fork. If it enters the carrot easily, it is ready.<br>8. Now add the chopped squash and potatoes. Again, make sure that they are submerged into the stock but don’t stir. Now is also a good time to do a little taste test of the chicken stock to check if more salt or pepper is needed.<br>9. Cut the corncobs into 5-6 cm long chunks<br>10. After 8-10 minutes, test the squash and potatoes with a knife or fork. If they are starting to get soft, it is time to add the rice and pieces of corncob.<br>11. The rice and corn should take approximately 10 to 15 minutes. The rice should be soft.<br>12. To serve, put one chicken quarter into each bowl. Add to that some vegetables and rice, then ladle some of that delicious broth overtop it all. Garnish with a pinch of coriander. For a traditional food experience, serve them up in clay pots like the Chileans do<br><br><a href=\"https://ingmar.app/blog/recip-the-national-dish-of-chile-cazuela-de-ave/\" target=\"_blank\">Recipe by Ingmar</a></p></div>"
            ],
        },
        CN: {
            name: "China",
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://ingmar.app/blog/wp-content/uploads/2015/10/Dumplings5.jpg\" class=\"recipe_img\"> <p class=\"intro\">DUMPLINGS<br><br>Dumplings are popular in China. Varieties of dumplings can be found all over the country – they are eaten in the streets or at home, in fancy restaurants or in tiny food stalls. Dumplings are usually wrapped with thin dough wrappers and filled with minced meat and vegetables. They can be boiled, steamed or pan-seared (Chinese don’t normally deep fry dumplings, in case you’re wondering!). If the dumplings are pan-seared, they are called potstickers too. Delicious ingredients such as pork, beef, lamb, chicken, shrimp and even fried eggs can be used for the filling. In addition to these ingredients, popular Chinese vegetables such as cabbage, chives and herbs are used. And of course you have the liberty to make vegetarian dumplings by combining different types of vegetables, such as mushroom and tofu fillings.</p><p>Recipe: <br> 4 portions <br><br>Ingredients:<br>500 g dumpling wrappers<br>400 g ground pork<br>450 g cabbage<br>½ spring onion<br>1 tbsp ginger<br>90 ml water<br>1 tbsp soy sauce<br>2 tbsp wine<br>½ tsp black pepper<br>1 tsp sugar<br><br>Steaming liquid<br>1 tbsp corn flour<br>165 ml water<br>salt<br>5 drops sesame oil<br>½ spring onion<br><br>Dipping sauce<br>2 tbsp soy sauce<br>1 tbsp vinegar<br>½ tsp ginger<br><br>Method:<br>1. Chop the spring onion and set aside half of it. Then make the ginger and spring onion water. Mix minced ginger and half of the chopped spring onion with 90 ml of water.<br>2. Finely chop the cabbage, and add 1 teaspoon of salt. Leave it to rest for 10 minutes.<br>3. Combine the minced pork meat with the cooking wine, ground pepper, soy sauce, sugar and 1 teaspoon of salt. Add the ginger and spring onion water to the pork one tablespoon at a time. In the meantime, stir the meat clockwise until the water is fully absorbed.<br>4. Combine the meat with the cabbage and mix them well.<br>5. Now wrap the dumplings! Wet the edge of the wrapper with water. Put 1 tablespoon of filling in the middle. Pinch the wrapper together to seal.<br>6. Evenly cover a skillet with 1 tablespoon of oil on high heat. Place in the dumplings (make sure they are not overlapping), and cook for about 1 minute until the bottom of the dumplings has turned golden brown.<br>7. Add the steaming liquid; corn flour mixed with water. Cover the skillet with a lid, and turn to medium heat.<br>8. When the water in the skillet has almost evaporated, open the lid. Continue cooking on a medium heat until the bottom of the dumplings dry up and form a beautiful lace. Add 5 drops of sesame oil and the rest of the chopped spring onions. Cover the skillet with a plate that is about the size of the skillet. Lift the skillet with one hand, and hold the plate with another. Flip over the skillet. Now we have the beautifully laced dumplings transferred onto a plate!<br>9. It is best to eat the dumplings while they are still hot.<br>10. A mix of soy sauce and vinegar goes well with the dumplings. Feel free to add some minced ginger, garlic or chili oil to the sauce to adjust to your taste.<br><br><a href=\"https://ingmar.app/blog/recipe-the-national-dish-of-china-dumplings/\" target=\"_blank\">Recipe by Ingmar</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://ingmar.app/blog/wp-content/uploads/2015/10/Dumplings5.jpg\" class=\"recipe_img\"> <p class=\"intro\">DUMPLINGS<br><br>Dumplings are popular in China. Varieties of dumplings can be found all over the country – they are eaten in the streets or at home, in fancy restaurants or in tiny food stalls. Dumplings are usually wrapped with thin dough wrappers and filled with minced meat and vegetables. They can be boiled, steamed or pan-seared (Chinese don’t normally deep fry dumplings, in case you’re wondering!). If the dumplings are pan-seared, they are called potstickers too. Delicious ingredients such as pork, beef, lamb, chicken, shrimp and even fried eggs can be used for the filling. In addition to these ingredients, popular Chinese vegetables such as cabbage, chives and herbs are used. And of course you have the liberty to make vegetarian dumplings by combining different types of vegetables, such as mushroom and tofu fillings.</p><p>Recipe: <br> 4 portions <br><br>Ingredients:<br>500 g dumpling wrappers<br>400 g ground pork<br>450 g cabbage<br>½ spring onion<br>1 tbsp ginger<br>90 ml water<br>1 tbsp soy sauce<br>2 tbsp wine<br>½ tsp black pepper<br>1 tsp sugar<br><br>Steaming liquid<br>1 tbsp corn flour<br>165 ml water<br>salt<br>5 drops sesame oil<br>½ spring onion<br><br>Dipping sauce<br>2 tbsp soy sauce<br>1 tbsp vinegar<br>½ tsp ginger<br><br>Method:<br>1. Chop the spring onion and set aside half of it. Then make the ginger and spring onion water. Mix minced ginger and half of the chopped spring onion with 90 ml of water.<br>2. Finely chop the cabbage, and add 1 teaspoon of salt. Leave it to rest for 10 minutes.<br>3. Combine the minced pork meat with the cooking wine, ground pepper, soy sauce, sugar and 1 teaspoon of salt. Add the ginger and spring onion water to the pork one tablespoon at a time. In the meantime, stir the meat clockwise until the water is fully absorbed.<br>4. Combine the meat with the cabbage and mix them well.<br>5. Now wrap the dumplings! Wet the edge of the wrapper with water. Put 1 tablespoon of filling in the middle. Pinch the wrapper together to seal.<br>6. Evenly cover a skillet with 1 tablespoon of oil on high heat. Place in the dumplings (make sure they are not overlapping), and cook for about 1 minute until the bottom of the dumplings has turned golden brown.<br>7. Add the steaming liquid; corn flour mixed with water. Cover the skillet with a lid, and turn to medium heat.<br>8. When the water in the skillet has almost evaporated, open the lid. Continue cooking on a medium heat until the bottom of the dumplings dry up and form a beautiful lace. Add 5 drops of sesame oil and the rest of the chopped spring onions. Cover the skillet with a plate that is about the size of the skillet. Lift the skillet with one hand, and hold the plate with another. Flip over the skillet. Now we have the beautifully laced dumplings transferred onto a plate!<br>9. It is best to eat the dumplings while they are still hot.<br>10. A mix of soy sauce and vinegar goes well with the dumplings. Feel free to add some minced ginger, garlic or chili oil to the sauce to adjust to your taste.<br><br><a href=\"https://ingmar.app/blog/recipe-the-national-dish-of-china-dumplings/\" target=\"_blank\">Recipe by Ingmar</a></p></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"http://nationaldish.co.uk/wp-content/uploads/2017/04/Chicken-Fried-Cauliflower-Rice-What-is-the-national-dish-of-china.jpg\" class=\"recipe_img\"> <p class=\"intro\">CHINESE CHICKEN FRIED CAULIFLOWER RICE<br><br>When you think of fried rice you think of China. There are dump loads of variations and that’s before you even get to ‘special fried rice’ on the take away menu. This uses cauliflower rice instead of the complex starchy carb, rocket fuel, real rice version, much healthier for our rich western diets – and just as nice, no, nicer.<br>Just to really overload you with fresh healthy veggies, I even lobbed in some broccoli - your mother will lose her self when she learns about how healthy you've been eating, she spent years trying to force this down your throat, finally, she's getting somewhere and it even tastes good.</p><p>Recipe: <br> 2 portions<br><br>Ingredients:<br>1 medium cauliflower<br>2 spring onions chunky slices at an angle<br>1 bunch fresh coriander finely chop the stalks and keep separate to the leaves<br>1 sliced fresh red chilli<br>1 medium broccoli cut into florets<br>1 tbls sesame oil<br>1/2 red pepper chopped into 2cm chunks (use your favourite colour)<br>1/2 green pepper chopped into 2cm chunks<br>60 ml dark soy sauce<br>2 beaten eggs<br>1 white onion chopped<br>300 g chicken thigh fillets cut into bite sized chunks<br>1 small handful celery 3mm slices<br>1 small handful carrot chopped<br><br>Method:<br>1. Firstly, you should have sorted out the cauliflower rice to the three minute recipe, you'll finish it off here.<br>2. In a pan, preferably a wok, heat the oil over a medium high heat and fry off the white onion, celery and carrot for a couple of minutes. the add the chicken,<br>3. Mix and cook for a few minutes, adding colour to everything.<br>4. Add all the peppers and coriander stalks and mix in, By now you should have loads of colour - cook that off for a couple of minutes.<br>5. Add the broccoli and mix that in and then leave to simmer, stirring from time to time for 10 minutes, don't let it catch. If it dries out, add a little water just to keep it loose.<br>6. Add all the cauliflower rice and mix,<br>7. Next. move everything to the side, hold the pan up slightly and pour in the beaten egg.<br>8. Scramble the egg over the heat before you mix through.<br>9. Give it a taste and season very carefully with salt, don't forget you've use soy, so this is just to balance it up if you think you need it, but very likely, not.<br>10. On a serving plate, build a pile and garnish with the coriander leaves and spring onions.<br><br><a href=\" https://www.nationaldish.co.uk/recipe/chinese-chicken-fried-cauliflower-rice-鸡炒饭-what-is-the-national-dish-of-china\" target=\"_blank\">Recipe National Dish</a></p></div>"
            ],
        },
        CI: {
            name: "Côte d'Ivoire",

        },
        CM: {
            name: "Cameroon",

        },
        CD: {
            name: "Democratic Republic of the Congo",

        },
        CG: {
            name: "Republic of Congo",

        },
        CO: {
            name: "Colombia",
            description: "<div class=\"recipe-text\"><img src=\"https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Bandeja-Paisa.jpg\" class=\"recipe_img\"> <p class=\"intro\">BANDEJA PAISA<br><br>Bandeja Paisa is considered to be the national dish of Colombia. It originates from the Antioquia region of Colombia in the north-west of the country.  Paisa is a shortened name for Paisano which describes the countrymen from this old part of Colombia.This very high calorie platter or tray of food would have been an individual serving and probably the only meal of the day.  It is hearty to say the least and contains several components individually placed on tray, the English translation of Bandeja is tray or platter.</p><p>Recipe: <br>4 portions<br><br>Ingredients:<br>1 recipe Paisa Pinto BeansFrijoles Paisas<br>1 recipe white Rice Arroz Blanco<br>1 recipe Powdered Beef Carne en Polvo<br>4 fried Pork BellyChicharrones<br>4 cooked Chorizos<br>4 fried eggs sunny side up<br>4 baked plantains or Tajadas de Plátano<br>1 recipe Hogao<br>Lime and Avocado for Serving<br><br>Method:<br>1. Prepare the beans, hogao and powdered beef one day ahead and keep in the refrigerator.<br>2. When you are going to serve the bandeja paisa, heat the beans and powdered beef and hogao. Make the chicharrones.<br>3. Cook the white rice and plantains.<br>4. Fry the eggs and chorizos.<br>5. To serve, place the rice in a tray or platter and place the rest of the ingredients as you like. I prefer the beans in a separate bowl, but you can ladle the beans next to the rice if you like.<br>6. Bring the hogao in a serving dish to the table, so people can place it on top of the beans if they like.<br><br><a href=\"https://www.mycolombianrecipes.com/paisa-tray-bandeja-paisa/\" target=\"_blank\">Recipe by My Colombian Recipes</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Bandeja-Paisa.jpg\" class=\"recipe_img\"> <p class=\"intro\">BANDEJA PAISA<br><br>Bandeja Paisa is considered to be the national dish of Colombia. It originates from the Antioquia region of Colombia in the north-west of the country.  Paisa is a shortened name for Paisano which describes the countrymen from this old part of Colombia.This very high calorie platter or tray of food would have been an individual serving and probably the only meal of the day.  It is hearty to say the least and contains several components individually placed on tray, the English translation of Bandeja is tray or platter.</p><p>Recipe: <br>4 portions<br><br>Ingredients:<br>1 recipe Paisa Pinto BeansFrijoles Paisas<br>1 recipe white Rice Arroz Blanco<br>1 recipe Powdered Beef Carne en Polvo<br>4 fried Pork BellyChicharrones<br>4 cooked Chorizos<br>4 fried eggs sunny side up<br>4 baked plantains or Tajadas de Plátano<br>1 recipe Hogao<br>Lime and Avocado for Serving<br><br>Method:<br>1. Prepare the beans, hogao and powdered beef one day ahead and keep in the refrigerator.<br>2. When you are going to serve the bandeja paisa, heat the beans and powdered beef and hogao. Make the chicharrones.<br>3. Cook the white rice and plantains.<br>4. Fry the eggs and chorizos.<br>5. To serve, place the rice in a tray or platter and place the rest of the ingredients as you like. I prefer the beans in a separate bowl, but you can ladle the beans next to the rice if you like.<br>6. Bring the hogao in a serving dish to the table, so people can place it on top of the beans if they like.<br><br><a href=\"https://www.mycolombianrecipes.com/paisa-tray-bandeja-paisa/\" target=\"_blank\">Recipe by My Colombian Recipes</a></p></div>"
            ],
        },
        CR: {
            name: "Costa Rica",

        },
        CU: {
            name: "Cuba",

        },
        CZ: {
            name: "Czech Republic",

        },
        DE: {
            name: "Germany",

        },
        DJ: {
            name: "Djibouti",

        },
        DK: {
            name: "Denmark",

        },
        DO: {
            name: "Dominican Republic",

        },
        DZ: {
            name: "Algeria",

        },
        EC: {
            name: "Ecuador",

        },
        EG: {
            name: "Egypt",

        },
        ER: {
            name: "Eritrea",

        },
        EE: {
            name: "Estonia",

        },
        ET: {
            name: "Ethiopia",

        },
        FI: {
            name: "Finland",

        },
        FJ: {
            name: "Fiji",

        },
        GA: {
            name: "Gabon",

        },
        GB: {
            name: "United Kingdom",

        },
        GE: {
            name: "Georgia",

        },
        GH: {
            name: "Ghana",

        },
        GN: {
            name: "Guinea",

        },
        GM: {
            name: "The Gambia",

        },
        GW: {
            name: "Guinea-Bissau",

        },
        GQ: {
            name: "Equatorial Guinea",

        },
        GR: {
            name: "Greece",

        },
        GL: {
            name: "Greenland",

        },
        GT: {
            name: "Guatemala",

        },
        GY: {
            name: "Guyana",

        },
        HN: {
            name: "Honduras",

        },
        HR: {
            name: "Croatia",

        },
        HT: {
            name: "Haiti",

        },
        HU: {
            name: "Hungary",

        },
        ID: {
            name: "Indonesia",

        },
        IN: {
            name: "India",
            description: "<div class=\"recipe-text\"><img src=\"https://cdn.cdnparenting.com/articles/2019/05/23183440/620862170-H-696x476.webp\" class=\"recipe_img\"> <p class=\"intro\">PALAK PANEER<br><br>Palak paneer is a classic curried dish from North Indian cuisine and one of the most popular Indian curries around, and with good reason. Almost a third of the Indian subcontinent is vegetarian, making paneer a staple of traditional and modern cooking in India. Although it is most often eaten as a side along with other popular Indian mains, it can just as easily be enjoyed with rice or naan. This deliciously creamy and vibrantly green dish is a delightful and easy to make vegetarian dish you just must try!</p><p>Recipe: <br>Servings 2 Cooking Time 45 minutes<br><br>Ingredients: <br>250 g spinach leaves<br>7 dl water<br>2,5 cm ginger<br>1-2 garlic cloves<br>1-2 green chili peppers<br>2 Tbsp oil, ghee or butter<br>1⁄2 Tsp cumin seeds<br>1 tej patta (Indian bay leaf)<br>1 onion<br>1 tomato<br>1⁄4 tsp turmeric powder<br>1⁄2 teaspoon red chili powder or cayenne pepper<br>A pinch of asafoetida/hing (optional)<br>1⁄2 Tsp garam masala<br>250 g paneer<br>2 Tbsp cream<br>1 Tsp fenugreek leaves<br><br> Method: <br>1.Rinse the spinach leaves well under running water.<br>2.Add the spinach leaves to a pot with lightly salted, boiling water and let them boil about 1 minute.<br>3.In a separate bowl, make ice water and set it aside.<br>4.After 1 minute, strain the spinach leaves and immediately transfer them to the ice water. This method helps preserve the vibrant green color of the spinach.<br>5.After 1 minute, drain the ice cold water and press the spinach to remove any excess moisture.<br>6.Mix the spinach with chopped ginger, 1 garlic clove and chili pepper to a smooth purée in a blender.<br>7.Heat the oil, ghee or butter in a pan, add the cumin seeds and let them splutter before adding the bay leaf.<br>8.Add the finely chopped onions and sauté until golden, then add 1 finely chopped garlic clove and sauté till the raw aroma of garlic goes away, but stop short of browning the garlic.<br>9.Add the chopped tomatoe and sauté until they soften.<br>10.Once you see fat releasing from the sides of the mixture, add turmeric powder, red chili powder and the asafoetida (hing, optional). Mix very well.<br>11.Add the spinach purée to the pan and about 1 dl water or as required. Mix well.<br>12.Simmer the sauce for 6 to 7 minutes or more until the palak puree is cooked. Season with salt as required. The gravy will have thickened by now.<br>13.Add garam masala powder.<br>14.Add the paneer cubes directly to the gravy. Mix gently and switch off the heat.<br>15.Lastly add the cream and dry fenugreek leaves (optional). Stir gently.<br>16.Serve palak paneer hot with roti, naan or paratha or cumin rice or ghee rice. You can top it with some butter or cream also while serving. Drizzle a few drops of lime or lemon juice on top along with ginger julienne.<br><br><a href=\"https://www.vegrecipesofindia.com/palak-paneer/#h-homestyle-recipe\">Recipe by Veg Recipes of India</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://cdn.cdnparenting.com/articles/2019/05/23183440/620862170-H-696x476.webp\" class=\"recipe_img\"> <p class=\"intro\">PALAK PANEER<br><br>Palak paneer is a classic curried dish from North Indian cuisine and one of the most popular Indian curries around, and with good reason. Almost a third of the Indian subcontinent is vegetarian, making paneer a staple of traditional and modern cooking in India. Although it is most often eaten as a side along with other popular Indian mains, it can just as easily be enjoyed with rice or naan. This deliciously creamy and vibrantly green dish is a delightful and easy to make vegetarian dish you just must try!</p><p>Recipe: <br>Servings 2 Cooking Time 45 minutes<br><br>Ingredients: <br>250 g spinach leaves<br>7 dl water<br>2,5 cm ginger<br>1-2 garlic cloves<br>1-2 green chili peppers<br>2 Tbsp oil, ghee or butter<br>1⁄2 Tsp cumin seeds<br>1 tej patta (Indian bay leaf)<br>1 onion<br>1 tomato<br>1⁄4 tsp turmeric powder<br>1⁄2 teaspoon red chili powder or cayenne pepper<br>A pinch of asafoetida/hing (optional)<br>1⁄2 Tsp garam masala<br>250 g paneer<br>2 Tbsp cream<br>1 Tsp fenugreek leaves<br><br> Method: <br>1.Rinse the spinach leaves well under running water.<br>2.Add the spinach leaves to a pot with lightly salted, boiling water and let them boil about 1 minute.<br>3.In a separate bowl, make ice water and set it aside.<br>4.After 1 minute, strain the spinach leaves and immediately transfer them to the ice water. This method helps preserve the vibrant green color of the spinach.<br>5.After 1 minute, drain the ice cold water and press the spinach to remove any excess moisture.<br>6.Mix the spinach with chopped ginger, 1 garlic clove and chili pepper to a smooth purée in a blender.<br>7.Heat the oil, ghee or butter in a pan, add the cumin seeds and let them splutter before adding the bay leaf.<br>8.Add the finely chopped onions and sauté until golden, then add 1 finely chopped garlic clove and sauté till the raw aroma of garlic goes away, but stop short of browning the garlic.<br>9.Add the chopped tomatoe and sauté until they soften.<br>10.Once you see fat releasing from the sides of the mixture, add turmeric powder, red chili powder and the asafoetida (hing, optional). Mix very well.<br>11.Add the spinach purée to the pan and about 1 dl water or as required. Mix well.<br>12.Simmer the sauce for 6 to 7 minutes or more until the palak puree is cooked. Season with salt as required. The gravy will have thickened by now.<br>13.Add garam masala powder.<br>14.Add the paneer cubes directly to the gravy. Mix gently and switch off the heat.<br>15.Lastly add the cream and dry fenugreek leaves (optional). Stir gently.<br>16.Serve palak paneer hot with roti, naan or paratha or cumin rice or ghee rice. You can top it with some butter or cream also while serving. Drizzle a few drops of lime or lemon juice on top along with ginger julienne.<br><br><a href=\"https://www.vegrecipesofindia.com/palak-paneer/#h-homestyle-recipe\">Recipe by Veg Recipes of India</a></p></div>"
            ],
        },
        IE: {
            name: "Ireland",

        },
        IR: {
            name: "Iran",
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://iran-cuisine.com/wp-content/uploads/2020/10/koobideh.jpg\" class=\"recipe_img\"> <p class=\"intro\">KABAB KOOBIDEH<br><br>The kebab has enormous importance in Iranian gastronomy and for them the kabab koobideh is a mythical skewer. Traditionally it has to be done on a metal brooch called “Sikh”. You can still make it very well with wooden pins. Kabab beef koobideh skewers are usually made with lamb, ground beef, or a mix of both. It is the most popular kebab that you can find in Iranian streets.</p><p><br>Ingredients:<br>500g Ground beef<br>1 Onion<br>4 Cloves of garlic<br>1 tablespoon Turmeric<br>1 teaspoon Sweet paprika<br>2 pinches Cumin<br>1 teaspoon mild red pepper<br>1 tablespoon Parsley<br>1 tablespoon Cilantro<br>Olive oil<br>Salt and Pepper<br>2 Stirred yogurt<br><br>Method:<br>1. PREPARATION OF KOUBIDEH SKEWERS<br>Finely chop the onion and garlic. Mix the onion, garlic and minced meat, then add the spices (turmeric, cumin, paprika and sweet pepper), parsley and cilantro. Mix everything and keep in the fridge for a few hours.<br>2. Shape long sausages of minced meat on skewers (preferably metal). Flatten them with your hands and brush them with olive oil with a brush.<br>3. COOKING BEEF KOOBIDEH SKEWERS<br>In the oven:<br>Preheat the oven to 200 ° C. Place your Koobideh skewers on a lightly oiled baking sheet and bake at 200 ° C for 5 to 10 minutes.<br>At the barbecue:<br>Place your Koobideh skewers on the barbecue, and turn over halfway through cooking (5 minutes on each side).<br>4. PREPARATION OF THE YOGURT SAUCE FOR YOUR KOUBIDEH SKEWERS<br>While your Koobideh skewers are cooking, prepare the yogurt sauce.Mix the stirred yogurts, a pinch of cumin, salt and pepper in a bowl. Add the finely chopped fresh cilantro and set aside in the fridge until ready to serve.<br>5. TASTING<br>Serve the Koobideh skewers with saffron rice and grilled tomatoes, dip them in the yogurt sauce and enjoy!<br><br> <a href=\"https://iran-cuisine.com/recipe/kabab-koobideh-iranian-skewers-recipe/\" target=\"_blank\">Recipe by Iran Cuisine</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://iran-cuisine.com/wp-content/uploads/2020/10/koobideh.jpg\" class=\"recipe_img\"> <p class=\"intro\">KABAB KOOBIDEH<br><br>The kebab has enormous importance in Iranian gastronomy and for them the kabab koobideh is a mythical skewer. Traditionally it has to be done on a metal brooch called “Sikh”. You can still make it very well with wooden pins. Kabab beef koobideh skewers are usually made with lamb, ground beef, or a mix of both. It is the most popular kebab that you can find in Iranian streets.</p><p><br>Ingredients:<br>500g Ground beef<br>1 Onion<br>4 Cloves of garlic<br>1 tablespoon Turmeric<br>1 teaspoon Sweet paprika<br>2 pinches Cumin<br>1 teaspoon mild red pepper<br>1 tablespoon Parsley<br>1 tablespoon Cilantro<br>Olive oil<br>Salt and Pepper<br>2 Stirred yogurt<br><br>Method:<br>1. PREPARATION OF KOUBIDEH SKEWERS<br>Finely chop the onion and garlic. Mix the onion, garlic and minced meat, then add the spices (turmeric, cumin, paprika and sweet pepper), parsley and cilantro. Mix everything and keep in the fridge for a few hours.<br>2. Shape long sausages of minced meat on skewers (preferably metal). Flatten them with your hands and brush them with olive oil with a brush.<br>3. COOKING BEEF KOOBIDEH SKEWERS<br>In the oven:<br>Preheat the oven to 200 ° C. Place your Koobideh skewers on a lightly oiled baking sheet and bake at 200 ° C for 5 to 10 minutes.<br>At the barbecue:<br>Place your Koobideh skewers on the barbecue, and turn over halfway through cooking (5 minutes on each side).<br>4. PREPARATION OF THE YOGURT SAUCE FOR YOUR KOUBIDEH SKEWERS<br>While your Koobideh skewers are cooking, prepare the yogurt sauce.Mix the stirred yogurts, a pinch of cumin, salt and pepper in a bowl. Add the finely chopped fresh cilantro and set aside in the fridge until ready to serve.<br>5. TASTING<br>Serve the Koobideh skewers with saffron rice and grilled tomatoes, dip them in the yogurt sauce and enjoy!<br><br> <a href=\"https://iran-cuisine.com/recipe/kabab-koobideh-iranian-skewers-recipe/\" target=\"_blank\">Recipe by Iran Cuisine</a></p></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.themediterraneandish.com/wp-content/uploads/2017/11/Kuku-Sabzi-Persian-Herb-Baked-Omelet-The-Mediterranean-Dish-3.jpg\" class=\"recipe_img\"> <p class=\"intro\">KUKU SABZI<br><br>Kuku Sabzi is a traditional Persian omelet typically served at Nowruz (Persian New Year) --the herbs symbolizing rebirth, and the eggs symbolizing fertility. If its deep green color is any indication, kuku sabzi has loads of greens! In fact, the ratio of greens to eggs is heavily skewed towards the greens. In this recipe, it’s heaps of parsley, cilantro, dill and scallions; there are just enough eggs to bind them together!</p><p>Recipe: <br> 6 portions <br><br>Ingredients:<br>5 tbsp Private Reserve Greek extra virgin olive oil<br>2 cups flat-leaf parsley, leaves<br>2 cups cilantro, leaves and tender stems<br>1 cup roughly chopped fresh dill<br>6 scallions, trimmed and coarsely chopped<br>1 1⁄2 tsp baking powder<br>1 tsp kosher salt<br>3⁄4 tsp ground green cardamom <br>3⁄4 tsp ground cinnamon<br>1⁄2 tsp ground cumin<br>1⁄4 tsp ground black pepper<br>6 large eggs<br>1⁄2 cup walnuts, toasted and chopped (optional)<br>1⁄3 cup dried cranberries, coarsely chopped (optional)<br><br>Method:<br>1. Position an oven rack in the upper-middle position and heat oven to 375 degrees F.<br>2. Trace the bottom of an 8-inch square pan or 9-inch round cake pan on kitchen parchment, then cut inside the lines to create a piece to fit in the bottom of the pan.<br>3. Coat the bottom and sides of the pan with 2 tablespoon extra virgin olive oil, turning the parchment to coat on both sides (the oil should pool at the bottom and generously coat the sides).<br>4. In a food processor, combine the parsley, cilantro, dill, scallions and the remaining 3 tablespoon extra virgin olive oil. Process until finely ground (now, I like my herbs less fine, so I stopped the processor at my desired texture). Set aside for now.<br>5. In a large bowl, whisk the baking powder, salt, cardamom, cinnamon, cumin and pepper. Add 2 eggs and whisk until blended, then add the remaining eggs and whisk until just combined. Fold in the herb-scallion mixture and the walnuts and cranberries, if using. Pour into the prepared pan and smooth the top.<br>6. Bake in 375 degrees F heated-oven until the center of the egg is firm, about 20 to 25 minutes. (The egg mixture will rise, but will go down once you set it aside to cool.)<br>7. Let the kuku cool in the pan undisturbed for 10 minutes. When ready, run a thin knife around the edges to loosen the kuku. Invert onto a plate and remove the parchment from bottom, then re-invert on another serving plate or a cutting board so the top of the kuku is facing you. Slice into wedges and serve warm or at room temperature.<br>8. Serve with a dollop of yogurt. See more suggestions in the post under 'what to serve with kuku sabzi'.<br><br><a href=\"https://www.themediterraneandish.com/kuku-sabzi-persian-baked-omelet/\" target=\"_blank\">Recipe by The Mediterranean Dish</a></p></div>"
            ],
        },
        IQ: {
            name: "Iraq",

        },
        IS: {
            name: "Iceland",

        },
        IL: {
            name: "Israel",

        },
        IT: {
            name: "Italy",
            description: "<div class=\"recipe-text\"><img src=\"https://www.tasteatlas.com/images/recipes/05183524d4204a3f8b92f1c1d9392da2.jpg?mw=910\" class=\"recipe_img\"> <p class=\"intro\"> RAGÙ ALLA BOLOGNESE <br><br> What is to the rest of the world known as spaghetti Bolognese, practically doesn't exist in Italy, let alone in Bologna. This dish has been traced as far back as the 17th century, and for the locals, the ragù is a very serious matter. According to the Italian Academy of Cuisine, this is the most typical and classic-tasting rendition of Bologna's famed meat sauce and is currently the official version. Traditionally, ragù alla Bolognese is served with tagliatelle. </p><p>Recipe: <br> Servings 4 Cooking time 3 1⁄2 hours<br><br>Ingredients: <br>3 tbsp olive oil or 50g butter <br>300g coarsely ground beef – preferably skirt steak, chuck or flank <br>150g pancetta (unsmoked) <br>50g yellow carrot <br>50g celery rib <br>50g onion <br>300g tomato passata or peeled tomatoes <br>1.2 L beef or poultry stock, as needed <br>240 ml whole milk <br>120 ml red wine <br>salt and pepper, to taste <br>120 ml whipping cream (optional) <br>360g tagliatelle, fresh or dried <br><br>Method: <br>1.Finely dice the yellow carrot, the rib of celery, and the onion, then finely chop. <br>2.Finely dice the pancetta then finely chop it until it turns into a paste.<br>3.Add the pancetta to a 20 cm terracotta dish or a thick aluminum pan, and sauté until rendered. <br>4.Add the butter or olive oil to the pancetta, then add the root vegetables. Sweat the vegetables for about 10-15 minutes until softened. <br>5.Add the coarsely ground beef and stir-fry until browned and roasted, and there is no liquid left in the dish/pan. Pour in the wine and stir. <br>6.Once the alcohol has evaporated, pour in the passata or peeled tomatoes and stir to incorporate. <br>7.Simmer for 2 hours, covered, adding stock if the ragù gets dry, and stirring occasionally. <br>8.After 2 hours have passed, pour in the milk to balance out the acidity of the tomatoes, and stir and cook some more. Season with salt and pepper to taste. <br>9.If using dried tagliatelle, pour in the whipping cream, stir, and cook just until heated through (optional). <br>10.To cook the pasta, fill a large pot with water (1 L per 100g of pasta), then bring to a boil and season generously with salt. <br>11.Drop the tagliatelle into the water and cook as instructed on the packaging or until al dente. <br>12.Drain, transfer into a large bowl, then add the ragù and mix well. <br>13.Divide between warmed plates, taking care there are equal amounts of pasta and ragù on each plate, then serve.<br><br><a href=\"https://www.tasteatlas.com/bolognese/recipe/\">Recipe by TasteAtlas</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.tasteatlas.com/images/recipes/05183524d4204a3f8b92f1c1d9392da2.jpg?mw=910\" class=\"recipe_img\"> <p class=\"intro\"> RAGÙ ALLA BOLOGNESE <br><br> What is to the rest of the world known as spaghetti Bolognese, practically doesn't exist in Italy, let alone in Bologna. This dish has been traced as far back as the 17th century, and for the locals, the ragù is a very serious matter. According to the Italian Academy of Cuisine, this is the most typical and classic-tasting rendition of Bologna's famed meat sauce and is currently the official version. Traditionally, ragù alla Bolognese is served with tagliatelle. </p><p>Recipe: <br> Servings 4 Cooking time 3 1⁄2 hours<br><br>Ingredients: <br>3 tbsp olive oil or 50g butter <br>300g coarsely ground beef – preferably skirt steak, chuck or flank <br>150g pancetta (unsmoked) <br>50g yellow carrot <br>50g celery rib <br>50g onion <br>300g tomato passata or peeled tomatoes <br>1.2 L beef or poultry stock, as needed <br>240 ml whole milk <br>120 ml red wine <br>salt and pepper, to taste <br>120 ml whipping cream (optional) <br>360g tagliatelle, fresh or dried <br><br>Method: <br>1.Finely dice the yellow carrot, the rib of celery, and the onion, then finely chop. <br>2.Finely dice the pancetta then finely chop it until it turns into a paste.<br>3.Add the pancetta to a 20 cm terracotta dish or a thick aluminum pan, and sauté until rendered. <br>4.Add the butter or olive oil to the pancetta, then add the root vegetables. Sweat the vegetables for about 10-15 minutes until softened. <br>5.Add the coarsely ground beef and stir-fry until browned and roasted, and there is no liquid left in the dish/pan. Pour in the wine and stir. <br>6.Once the alcohol has evaporated, pour in the passata or peeled tomatoes and stir to incorporate. <br>7.Simmer for 2 hours, covered, adding stock if the ragù gets dry, and stirring occasionally. <br>8.After 2 hours have passed, pour in the milk to balance out the acidity of the tomatoes, and stir and cook some more. Season with salt and pepper to taste. <br>9.If using dried tagliatelle, pour in the whipping cream, stir, and cook just until heated through (optional). <br>10.To cook the pasta, fill a large pot with water (1 L per 100g of pasta), then bring to a boil and season generously with salt. <br>11.Drop the tagliatelle into the water and cook as instructed on the packaging or until al dente. <br>12.Drain, transfer into a large bowl, then add the ragù and mix well. <br>13.Divide between warmed plates, taking care there are equal amounts of pasta and ragù on each plate, then serve.<br><br><a href=\"https://www.tasteatlas.com/bolognese/recipe/\">Recipe by TasteAtlas</a></p></div>"
            ],
        },
        JM: {
            name: "Jamaica",

        },
        JO: {
            name: "Jordan",

        },
        JP: {
            name: "Japan",

        },
        KZ: {
            name: "Kazakhstan",

        },
        KE: {
            name: "Kenya",

        },
        KG: {
            name: "Kyrgyzstan",

        },
        KH: {
            name: "Cambodia",

        },
        KR: {
            name: "Republic of Korea",

        },
        XK: {
            name: "Kosovo",

        },
        KW: {
            name: "Kuwait",

        },
        LA: {
            name: "Lao PDR",

        },
        LB: {
            name: "Lebanon",

        },
        LR: {
            name: "Liberia",

        },
        LY: {
            name: "Libya",

        },
        LK: {
            name: "Sri Lanka",

        },
        LS: {
            name: "Lesotho",

        },
        LT: {
            name: "Lithuania",

        },
        LU: {
            name: "Luxembourg",

        },
        LV: {
            name: "Latvia",

        },
        MA: {
            name: "Morocco",

        },
        MD: {
            name: "Moldova",

        },
        MG: {
            name: "Madagascar",

        },
        MX: {
            name: "Mexico",
            description: "<div class=\"recipe-text\"><img src=\"https://www.mexicoinmykitchen.com/wp-content/uploads/2017/10/Chipotle-adobo-oxtail-tacos-4.jpg\" class=\"recipe_img\"> <p class=\"intro\">CHIPOTLE ADOBO TACOS WITH OXTAIL<br><br>These Chipotle Adobo Tacos made with Oxtail will have you licking the plate for the last drop! The delicious sauce is smooth, and it enhances the Oxtail flavors. Indeed, oxtail tacos are a delicious thing!</p><p>Recipe: <br> 4 portions<br><br>Ingredients:<br>11⁄2 pounds Rumba oxtail<br>1⁄4 of a medium white onion<br>1 large garlic clove<br>1 Bay leaf<br><br>FOR THE ADOBO<br>Guajillo Peppers cleaned, with the veins and seeds removed<br>1 large garlic clove<br>2 Plum Tomatoes about 6.5 oz.<br>1 Chipotle in adobo the canned version*<br>1⁄2 teaspoon freshly ground cumin<br>1⁄2 teaspoon Mexican oregano<br>1⁄4 teaspoon freshly ground black pepper<br>1 tablespoon of lard or vegetable oil<br>1⁄2 medium-size onion cut into slices<br>Salt to taste<br>12 small corn tortillas or 8 medium-size flour tortillas<br><br>TO GARNISH:<br>1⁄3 cup chopped onion<br>1⁄3 cup chopped cilantro<br>1⁄4 cup chopped radishes<br>Spicy salsa of your choice<br><br>Method:<br>1. Place the RUMBA® oxtail pieces, onion, garlic, and bay leaf in a Dutch oven or soup pot, then cover with 8 cups of water. Bring to a boil and reduce heat to simmer. Cook until the meat is tender and you can remove the bones effortlessly.<br>2. While the meat is cooking, roast the guajillo peppers and the garlic clove over a skillet over medium heat. The guajillo peppers will be ready in a matter of seconds; remove them when you see that they start changing color and releasing their aroma.<br>3. Place guajillo peppers in a bowl with warm water to soak for 20 minutes.<br>4. Roast the tomatoes in the same skillet; turn to have an even roasting (this step will take 5-6 minutes). Once they are ready, chop and place in your blender along with the roasted garlic and chipotle pepper, just make sure to remove the garlic’s charred skin.<br>5. Drain the peppers and place in your blender with the tomatoes, garlic, cumin, oregano, and 1⁄2 cup of the oxtail cooking broth or water. Process until you have a sauce with a beautiful texture.<br>6. Heat lard or oil in a medium-size skillet, add the onion slices and fry until transparent. Pour the sauce in and simmer for about 8 minutes.<br>7. Discard the bones from the oxtail, add all the meat pieces to the sauce, and keep cooking for another 8 minutes. Season with salt and more pepper, if needed according to your taste.<br>8. To serve, warm corn tortillas over a hot comal/skillet, spoon on some of the oxtail adobo sauce and garnish with chopped cilantro, onion, and radishes.<br><br>NOTES<br>This sauce renders a mild adobo; if you want it to be spicier, add an extra Chipotle pepper.<br>If cooking in regular stove top type of pot, the meat will take about one hour and 45 minutes to cook. If you use a pressure cooker, it will need 50 minutes. For an Instant Pot, cook for 40 minutes.<br><br><a href=\"https://www.mexicoinmykitchen.com/chipotle-adobo-tacos/\">Recipe by Mexico In My Kitchen</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.mexicoinmykitchen.com/wp-content/uploads/2017/10/Chipotle-adobo-oxtail-tacos-4.jpg\" class=\"recipe_img\"> <p class=\"intro\">CHIPOTLE ADOBO TACOS WITH OXTAIL<br><br>These Chipotle Adobo Tacos made with Oxtail will have you licking the plate for the last drop! The delicious sauce is smooth, and it enhances the Oxtail flavors. Indeed, oxtail tacos are a delicious thing!</p><p>Recipe: <br> 4 portions<br><br>Ingredients:<br>11⁄2 pounds Rumba oxtail<br>1⁄4 of a medium white onion<br>1 large garlic clove<br>1 Bay leaf<br><br>FOR THE ADOBO<br>Guajillo Peppers cleaned, with the veins and seeds removed<br>1 large garlic clove<br>2 Plum Tomatoes about 6.5 oz.<br>1 Chipotle in adobo the canned version*<br>1⁄2 teaspoon freshly ground cumin<br>1⁄2 teaspoon Mexican oregano<br>1⁄4 teaspoon freshly ground black pepper<br>1 tablespoon of lard or vegetable oil<br>1⁄2 medium-size onion cut into slices<br>Salt to taste<br>12 small corn tortillas or 8 medium-size flour tortillas<br><br>TO GARNISH:<br>1⁄3 cup chopped onion<br>1⁄3 cup chopped cilantro<br>1⁄4 cup chopped radishes<br>Spicy salsa of your choice<br><br>Method:<br>1. Place the RUMBA® oxtail pieces, onion, garlic, and bay leaf in a Dutch oven or soup pot, then cover with 8 cups of water. Bring to a boil and reduce heat to simmer. Cook until the meat is tender and you can remove the bones effortlessly.<br>2. While the meat is cooking, roast the guajillo peppers and the garlic clove over a skillet over medium heat. The guajillo peppers will be ready in a matter of seconds; remove them when you see that they start changing color and releasing their aroma.<br>3. Place guajillo peppers in a bowl with warm water to soak for 20 minutes.<br>4. Roast the tomatoes in the same skillet; turn to have an even roasting (this step will take 5-6 minutes). Once they are ready, chop and place in your blender along with the roasted garlic and chipotle pepper, just make sure to remove the garlic’s charred skin.<br>5. Drain the peppers and place in your blender with the tomatoes, garlic, cumin, oregano, and 1⁄2 cup of the oxtail cooking broth or water. Process until you have a sauce with a beautiful texture.<br>6. Heat lard or oil in a medium-size skillet, add the onion slices and fry until transparent. Pour the sauce in and simmer for about 8 minutes.<br>7. Discard the bones from the oxtail, add all the meat pieces to the sauce, and keep cooking for another 8 minutes. Season with salt and more pepper, if needed according to your taste.<br>8. To serve, warm corn tortillas over a hot comal/skillet, spoon on some of the oxtail adobo sauce and garnish with chopped cilantro, onion, and radishes.<br><br>NOTES<br>This sauce renders a mild adobo; if you want it to be spicier, add an extra Chipotle pepper.<br>If cooking in regular stove top type of pot, the meat will take about one hour and 45 minutes to cook. If you use a pressure cooker, it will need 50 minutes. For an Instant Pot, cook for 40 minutes.<br><br><a href=\"https://www.mexicoinmykitchen.com/chipotle-adobo-tacos/\">Recipe by Mexico In My Kitchen</a></p></div>"
            ],
        },
        MK: {
            name: "Macedonia",

        },
        ML: {
            name: "Mali",

        },
        MM: {
            name: "Myanmar",

        },
        ME: {
            name: "Montenegro",

        },
        MN: {
            name: "Mongolia",

        },
        MZ: {
            name: "Mozambique",

        },
        MR: {
            name: "Mauritania",

        },
        MW: {
            name: "Malawi",

        },
        MY: {
            name: "Malaysia",

        },
        NA: {
            name: "Namibia",

        },
        NE: {
            name: "Niger",

        },
        NG: {
            name: "Nigeria",

        },
        NI: {
            name: "Nicaragua",

        },
        NL: {
            name: "Netherlands",

        },
        NO: {
            name: "Norway",

        },
        NP: {
            name: "Nepal",

        },
        NZ: {
            name: "New Zealand",

        },
        OM: {
            name: "Oman",

        },
        PK: {
            name: "Pakistan",

        },
        PA: {
            name: "Panama",

        },
        PE: {
            name: "Peru",

        },
        PH: {
            name: "Philippines",

        },
        PG: {
            name: "Papua New Guinea",

        },
        PL: {
            name: "Poland",

        },
        KP: {
            name: "Dem. Rep. Korea",

        },
        PT: {
            name: "Portugal",

        },
        PY: {
            name: "Paraguay",

        },
        PS: {
            name: "Palestine",

        },
        QA: {
            name: "Qatar",

        },
        RO: {
            name: "Romania",

        },
        RU: {
            name: "Russia",

        },
        RW: {
            name: "Rwanda",

        },
        EH: {
            name: "Western Sahara",

        },
        SA: {
            name: "Saudi Arabia",

        },
        SD: {
            name: "Sudan",

        },
        SS: {
            name: "South Sudan",

        },
        SN: {
            name: "Senegal",
            description: "<div class=\"recipe-text\"><img src=\"https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/sbs_water-thieboudienne.jpg?itok=Ns1E4PBa&mtime=1541971938\" class=\"recipe_img\"> <p class=\"intro\">THIEBOUDIENNE<br><br>Thieboudienne is considered the national dish of Senegal and is gaining popularity far and wide. Across West Africa there are variations of this savoury one-pot dish, but under different names like Jollof Rice and Benachin.  The traditional thieboudienne dish, is held as the most genuine of them and is very popular to serve on large communal platters in festive celebrations, where everyone digs in.</p><p>Recipe:<br>Servings 8 Cooking Time 1 hour 15 minutes<br><br>Ingredients:<br>7 dl rice (broken rice)<br>4 large pieces of fish (of your own choice)<br>3 fresh tomatoes, mashed<br>3 Tbsp of tomato paste<br>1 bunch of parsley, crushed<br>1 large carrot, peeled and cut into medium pieces<br>2 potatoes, peeled and chopped<br>1 large onion, chopped<br>4 cloves garlic, finely chopped<br>2 small eggplants<br>1 small cabbage, cut into 4 pieces<br>200 ml peanut oil<br>2 bouillon cube or Maggi cube<br>4 bay leaves<br>4 peppers<br>1 Tbsp of black pepper<br>Salt to taste<br>6 small okra<br>1 tablespoon of Yété (fermented sea snails), optional<br>1 tablespoons nététou (grounded fermented beans), if available<br>1.5 l hot water<br><br>Method:<br>1.Mix the parsley, half the garlic, a little pepper, salt and half a bouillon cube in a mortar or a food processor.<br>2.Then put the mixture into the fish pieces.<br>3.In a large pot, heat oil, add sauté the onions, tomatoes, tomato paste, the remaining black pepper, garlic for 15 minutes over medium heat.<br>4.Add the fish, the remaining bouillon cube, bay leaves and 1 cup of water. Simmer until the fish pieces are cooked through, about 15 minutes.<br>5.Remove the fish pieces and add all the vegetables except okra with 1 cup of water and cook the vegetables until they are cooked (25-30 min). You must ensure that the vegetables are ready before removing them, but make sure not to overcook them. Then remove the vegetables.<br>5.Add the okra with the remaining water and boil for 5 minutes before removing them.<br>6.Add the rice to the pot and cook over low heat, turning often so that all sides are cooked well.<br>7.When the rice is ready for serving, place the rice on a nice, large communal platter and arrange the vegetables and fish on top.<br><br><a href=\"https://afrifoodnetwork.com/recipes/rice-recipes/thieboudienne/#Thieboudienne_Senegalese_Jollof_Rice_and_Fish_Recipe\"> Recipe by AfriFoodNetwork</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/sbs_water-thieboudienne.jpg?itok=Ns1E4PBa&mtime=1541971938\" class=\"recipe_img\"> <p class=\"intro\">THIEBOUDIENNE<br><br>Thieboudienne is considered the national dish of Senegal and is gaining popularity far and wide. Across West Africa there are variations of this savoury one-pot dish, but under different names like Jollof Rice and Benachin.  The traditional thieboudienne dish, is held as the most genuine of them and is very popular to serve on large communal platters in festive celebrations, where everyone digs in.</p><p>Recipe:<br>Servings 8 Cooking Time 1 hour 15 minutes<br><br>Ingredients:<br>7 dl rice (broken rice)<br>4 large pieces of fish (of your own choice)<br>3 fresh tomatoes, mashed<br>3 Tbsp of tomato paste<br>1 bunch of parsley, crushed<br>1 large carrot, peeled and cut into medium pieces<br>2 potatoes, peeled and chopped<br>1 large onion, chopped<br>4 cloves garlic, finely chopped<br>2 small eggplants<br>1 small cabbage, cut into 4 pieces<br>200 ml peanut oil<br>2 bouillon cube or Maggi cube<br>4 bay leaves<br>4 peppers<br>1 Tbsp of black pepper<br>Salt to taste<br>6 small okra<br>1 tablespoon of Yété (fermented sea snails), optional<br>1 tablespoons nététou (grounded fermented beans), if available<br>1.5 l hot water<br><br>Method:<br>1.Mix the parsley, half the garlic, a little pepper, salt and half a bouillon cube in a mortar or a food processor.<br>2.Then put the mixture into the fish pieces.<br>3.In a large pot, heat oil, add sauté the onions, tomatoes, tomato paste, the remaining black pepper, garlic for 15 minutes over medium heat.<br>4.Add the fish, the remaining bouillon cube, bay leaves and 1 cup of water. Simmer until the fish pieces are cooked through, about 15 minutes.<br>5.Remove the fish pieces and add all the vegetables except okra with 1 cup of water and cook the vegetables until they are cooked (25-30 min). You must ensure that the vegetables are ready before removing them, but make sure not to overcook them. Then remove the vegetables.<br>5.Add the okra with the remaining water and boil for 5 minutes before removing them.<br>6.Add the rice to the pot and cook over low heat, turning often so that all sides are cooked well.<br>7.When the rice is ready for serving, place the rice on a nice, large communal platter and arrange the vegetables and fish on top.<br><br><a href=\"https://afrifoodnetwork.com/recipes/rice-recipes/thieboudienne/#Thieboudienne_Senegalese_Jollof_Rice_and_Fish_Recipe\"> Recipe by AfriFoodNetwork</a></p></div>"
            ],
        },
        SL: {
            name: "Sierra Leone",

        },
        SV: {
            name: "El Salvador",

        },
        RS: {
            name: "Serbia",

        },
        SR: {
            name: "Suriname",

        },
        SK: {
            name: "Slovakia",

        },
        SI: {
            name: "Slovenia",

        },
        SE: {
            name: "Sweden",
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\"onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\"> <p class=\"intro\">TRADITIONAL SWEDISH MEATBALLS<br><br> Swedish meatballs are as close to a national dish that we have in Sweden. Everyone has their own favourite recipe and many celebrity chefs serve their own versions in their restaurants. Most people will say that their mum’s recipe is the best of course! Why not impress your friends and cook your own Swedish meatballs with this easy recipe? </p></p><p>Recipe: <br> 4 portions <br><br>Ingredients: <br>2 tbs of breadcrumbs <br> 50 ml single cream <br>1 egg <br> 1 tbs concentrated stock from beef, calf or chicken <br> 0.5 finely chopped yellow onion <br> 25 g butter <br> 500 g ground mince (half pork and beef) <br> 1 tsp freshly ground black pepper <br> about 1.5 tsp of salt <br> Butter to fry in <br><br> SAUCE: <br> 2.5 dl double cream <br> 1,5 tsp dark soy <br> 2.5 dl beef stock (not concentrated) <br> 25 g butter <br> 1 tbs corn starch (or something similar) to thicken the sauce with <br> salt and pepper <br> 2 tbs jam from lingonberries or cherries <br> To serve: <br> mashed potatoes <br> lingonberry jam <br> chopped parsley <br> <br> Method: <br>1.Fold together bread crumbs, cream, stock and egg and leave to rest for about 5 minutes.<br>2.Fry the onion in the butter until soft and then mix it with  the breadcrumb-cream.<br>3.Add salt, pepper and mince and work everything together, with your hands or fork. Try not to work it too much, as this will make the meatballs compact.<br>4.Take a small piece of mince and fry it  to test the flavours. When satisfied with salt and pepper, roll the rest  of the mince to small balls (about one tablespoon mince per ball) Make sure your hands are wet with water, then the mince won’t stick to your hands.<br>5.Fry the meatballs until golden brown and thoroughly cooked, then  put aside.<br>6.Mix cream and the corn starch and then pour this, stock and the soy in the pan where you fried the meatballs. Whisk through the pan and let boil for a couple of minutes. Taste with salt, pepper and jam for a little bit of sweetness.<br>7.Put the meatballs back to the sauce and serve with mashed potatoes and lingonberry jam, maybe some chopped parsley on top too.<br><br> <a href=\"http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/\" target=\"\"_blank\"\">Recipe by Visit Sweden </a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\"> <p class=\"intro\">TRADITIONAL SWEDISH MEATBALLS<br><br> Swedish meatballs are as close to a national dish that we have in Sweden. Everyone has their own favourite recipe and many celebrity chefs serve their own versions in their restaurants. Most people will say that their mum’s recipe is the best of course! Why not impress your friends and cook your own Swedish meatballs with this easy recipe? </p></p><p>Recipe: <br> 4 portions <br><br>Ingredients: <br>2 tbs of breadcrumbs <br> 50 ml single cream <br>1 egg <br> 1 tbs concentrated stock from beef, calf or chicken <br> 0.5 finely chopped yellow onion <br> 25 g butter <br> 500 g ground mince (half pork and beef) <br> 1 tsp freshly ground black pepper <br> about 1.5 tsp of salt <br> Butter to fry in <br><br> SAUCE: <br> 2.5 dl double cream <br> 1,5 tsp dark soy <br> 2.5 dl beef stock (not concentrated) <br> 25 g butter <br> 1 tbs corn starch (or something similar) to thicken the sauce with <br> salt and pepper <br> 2 tbs jam from lingonberries or cherries <br> To serve: <br> mashed potatoes <br> lingonberry jam <br> chopped parsley <br> <br> Method: <br>1.Fold together bread crumbs, cream, stock and egg and leave to rest for about 5 minutes.<br>2.Fry the onion in the butter until soft and then mix it with  the breadcrumb-cream.<br>3.Add salt, pepper and mince and work everything together, with your hands or fork. Try not to work it too much, as this will make the meatballs compact.<br>4.Take a small piece of mince and fry it  to test the flavours. When satisfied with salt and pepper, roll the rest  of the mince to small balls (about one tablespoon mince per ball) Make sure your hands are wet with water, then the mince won’t stick to your hands.<br>5.Fry the meatballs until golden brown and thoroughly cooked, then  put aside.<br>6.Mix cream and the corn starch and then pour this, stock and the soy in the pan where you fried the meatballs. Whisk through the pan and let boil for a couple of minutes. Taste with salt, pepper and jam for a little bit of sweetness.<br>7.Put the meatballs back to the sauce and serve with mashed potatoes and lingonberry jam, maybe some chopped parsley on top too.<br><br> <a href=\"http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/\" target=\"\"_blank\"\">Recipe by Visit Sweden </a></p></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"\"previousRecipe()\"\">BACK</button><button class=\"next-btn\" onclick=\"\"nextRecipe()\"\">NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\"> <p class=\"intro\">Hej Hej <a href=\"http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/\" target=\"\"_blank\"\">Recipe by Visit Sweden </a></p></div>"
            ],
        },
        SZ: {
            name: "Swaziland",

        },
        SY: {
            name: "Syria",

        },
        TD: {
            name: "Chad",

        },
        TG: {
            name: "Togo",

        },
        TH: {
            name: "Thailand",
            description: "<div class=\"recipe-text\"><img src=\"https://hot-thai-kitchen.com/wp-content/uploads/2019/09/pad-thai-blog.jpg\" class=\"recipe_img\"> <p class=\"intro\">PAD THAI<br><br>Pad Thai is everyday food for a lot of people in Thailand, but it's hard to find an authentic Pad Thai outside of Thailand. The best option is to master cooking it at home. What makes pad Thai such a special dish is because no flavour is left behind and everything works in harmony. “Spicy, sour, sweet, salty, and bitter flavours all make appearances in a single dish. This recipe is the real deal with all the ingredients of a traditional Pad Thai—no compromise.<p><br> Recipe: <br>Servings 2 Cooking Time 30 minutes<br><br>SAUCE<br>Ingredients: <br>70 g palm sugar, chopped (6 Tbsp tightly packed)<br>90 ml water<br>8 Tbsp Thai cooking tamarind paste<br>4 Tbsp fish sauce<br><br>Method: <br>1.Add palm sugar to a small pot and melt over medium heat. Once the sugar is melting, keep stirring until it darkens in colour. Immediately add water, fish sauce, and tamarind paste.<br>2.Bring sauce to a simmer, then turn off heat. The hardened sugar will not have dissolved at this point, but let it sit while you prep other ingredients, and it should be dissolved by the time you need it. Check that it is dissolved before you start cooking!<br><br>Ingredients: <br>225 g dry rice noodles, medium size, soak in room temp water for 1 hour<br>4 Tbsp dried shrimp, medium size, roughly chopped<br>6 cloves garlic, chopped<br>60 g roughly chopped shallots<br>170 g pressed tofu, cut into small pieces<br>6 Tbsp finely chopped SWEET preserved daikon radish<br>Dried chili flakes, to taste<br>90 ml vegetable oil<br>20 medium sized shrimp, or another protein to your liking<br>4 eggs<br>240 g bean sprouts<br>20 stalks garlic chives, cut into 5 cm pieces<br>60 g roasted peanuts, roughly chopped<br>1 lime<br><br>Method: <br>1.Cut drained noodles in half<br>2.In a bowl, combine tofu, garlic, shallots, preserved radish, dried shrimp, and chili flakes.<br>3.Heat a wok or a large nonstick skillet over high heat and cover the bottom with oil.<br>4.Sear shrimp, or whatever protein you're using, until done and remove them from pan.<br>5.Over medium heat and a little more oil if needed, sauté everything in the tofu bowl for a few minutes until garlic starts to turn golden and shallots are wilted. If the wok looks dry, add a little more oil.<br>6.Turn heat up to high then add noodles and sauce. Keep tossing until all the sauce is absorbed.<br>7.Turn off the heat and taste the noodles. If they're still undercooked, add a little more water and continue cooking, being careful not to add too much water!<br>8.Push the noodles to one side of the pan. Add little extra oil to the empty space and add eggs. Break the yolks, then put noodles on top of eggs and cook for about 30 seconds. Flip and toss to mix eggs into noodles.<br>9.Toss the cooked protein back in, plus any collected juices. Then add bean sprouts, garlic chives and half of the peanuts. Turn off the heat and toss until well mixed.<br>10.Serve immediately with a lime wedge and extra peanuts on top. For a classic presentation you can add a little extra side of bean sprouts and some garlic chives garnish.<br>11.Be sure to squeeze a bit of lime on top before eating!<br><br><a href=\"https://hot-thai-kitchen.com/best-pad-thai/\">Recipe by Hot Thai Kitchen</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://hot-thai-kitchen.com/wp-content/uploads/2019/09/pad-thai-blog.jpg\" class=\"recipe_img\"> <p class=\"intro\">PAD THAI<br><br>Pad Thai is everyday food for a lot of people in Thailand, but it's hard to find an authentic Pad Thai outside of Thailand. The best option is to master cooking it at home. What makes pad Thai such a special dish is because no flavour is left behind and everything works in harmony. “Spicy, sour, sweet, salty, and bitter flavours all make appearances in a single dish. This recipe is the real deal with all the ingredients of a traditional Pad Thai—no compromise.<p><br> Recipe: <br>Servings 2 Cooking Time 30 minutes<br><br>SAUCE<br>Ingredients: <br>70 g palm sugar, chopped (6 Tbsp tightly packed)<br>90 ml water<br>8 Tbsp Thai cooking tamarind paste<br>4 Tbsp fish sauce<br><br>Method: <br>1.Add palm sugar to a small pot and melt over medium heat. Once the sugar is melting, keep stirring until it darkens in colour. Immediately add water, fish sauce, and tamarind paste.<br>2.Bring sauce to a simmer, then turn off heat. The hardened sugar will not have dissolved at this point, but let it sit while you prep other ingredients, and it should be dissolved by the time you need it. Check that it is dissolved before you start cooking!<br><br>Ingredients: <br>225 g dry rice noodles, medium size, soak in room temp water for 1 hour<br>4 Tbsp dried shrimp, medium size, roughly chopped<br>6 cloves garlic, chopped<br>60 g roughly chopped shallots<br>170 g pressed tofu, cut into small pieces<br>6 Tbsp finely chopped SWEET preserved daikon radish<br>Dried chili flakes, to taste<br>90 ml vegetable oil<br>20 medium sized shrimp, or another protein to your liking<br>4 eggs<br>240 g bean sprouts<br>20 stalks garlic chives, cut into 5 cm pieces<br>60 g roasted peanuts, roughly chopped<br>1 lime<br><br>Method: <br>1.Cut drained noodles in half<br>2.In a bowl, combine tofu, garlic, shallots, preserved radish, dried shrimp, and chili flakes.<br>3.Heat a wok or a large nonstick skillet over high heat and cover the bottom with oil.<br>4.Sear shrimp, or whatever protein you're using, until done and remove them from pan.<br>5.Over medium heat and a little more oil if needed, sauté everything in the tofu bowl for a few minutes until garlic starts to turn golden and shallots are wilted. If the wok looks dry, add a little more oil.<br>6.Turn heat up to high then add noodles and sauce. Keep tossing until all the sauce is absorbed.<br>7.Turn off the heat and taste the noodles. If they're still undercooked, add a little more water and continue cooking, being careful not to add too much water!<br>8.Push the noodles to one side of the pan. Add little extra oil to the empty space and add eggs. Break the yolks, then put noodles on top of eggs and cook for about 30 seconds. Flip and toss to mix eggs into noodles.<br>9.Toss the cooked protein back in, plus any collected juices. Then add bean sprouts, garlic chives and half of the peanuts. Turn off the heat and toss until well mixed.<br>10.Serve immediately with a lime wedge and extra peanuts on top. For a classic presentation you can add a little extra side of bean sprouts and some garlic chives garnish.<br>11.Be sure to squeeze a bit of lime on top before eating!<br><br><a href=\"https://hot-thai-kitchen.com/best-pad-thai/\">Recipe by Hot Thai Kitchen</a></p></div>"
            ],
        },
        TJ: {
            name: "Tajikistan",

        },
        TM: {
            name: "Turkmenistan",

        },
        TL: {
            name: "Timor-Leste",

        },
        TN: {
            name: "Tunisia",
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.196flavors.com/wp-content/uploads/2018/03/couscous-tunisien-2.jpg\" class=\"recipe_img\"> <p class=\"intro\">TUNISIAN COUSCOUS<br><br>There’s no better way to start this Tunisian food guide than with couscous. Known as kosksi in the Tunisian dialect, couscous is a staple dish in North African cuisines and is considered a national dish in Tunisia.<br>Couscous refers to small granules of rolled durum wheat semolina cooked in a special double boiler. To cook, fine-grain couscous is layered over a bed of whole herbs in the upper pot while the meats and vegetables are cooked in the lower pot. As the meat and vegetables cook, steam rises through the vents and into the container above, cooking the pasta with aromatic steam. Similar to risotto, the couscous granules need to be stirred constantly to prevent lumping.</p><p>Recipe: <br> 6 portions<br><br>Ingredients:<br>2 lb lamb stew meat , cut into large pieces<br>6 cups couscous fine semolina (or medium)<br>2 onions , finely chopped<br>2 cloves garlic , pressed<br>4 tablespoons tomato paste<br>2 tablespoons harissa<br>2 tablespoons ground caraway<br>1 tablespoon ground coriander<br>1 teaspoon chili powder<br>4 turnips , cut in half<br>6 medium carrots , peeled<br>4 zucchini , peeled lengthwise, alternately leaving a layer of skin<br>6 small potatoes , peeled<br>10 oz. chickpeas (canned)<br>4 green hot peppers , fried in oil (optional)<br>Vegetable oil<br>Salt<br>Pepper<br><br>Method:<br>1. Add ½ cup (120ml) of oil into a large pan. Fry the onion over medium heat for 2 minutes.<br>2. Add the garlic, tomato paste and harissa and continue frying for 2 minutes.<br>3. Add the caraway, coriander, and chili powder. Mix and continue cooking for another 2 minutes.<br>4. Add the lamb meat and mix well so that the pieces are covered with the sauce. Cook for 5 minutes stirring regularly.<br>5. Cover with water. Add the turnips and carrots, and cook on low/medium heat for 45 minutes.<br>6. Meanwhile, prepare the couscous semolina as indicated on the package, with boiling water, salt, and oil.<br>7. After 45 minutes, add the zucchini, potatoes and chickpeas.<br>8. Cook for at least another 30 to 40 minutes over low to medium heat. Monitor the cooking of the vegetables. If some vegetables are cooked before the meat, remove them from the pan and place them on a serving platter. Proceed in the same way with all the vegetables to prevent them from cooking too much.<br>9. 10 minutes before the end of cooking, get a few ladles of broth (one at a time) and wet the couscous semolina. Mix the semolina well after each ladle until it gets moistened enough.<br>10. Arrange the semolina in a tajine pot. Decorate the dish with the vegetables and the meat all around. Garnish with fried green hot peppers (optional).<br><br><a href=\"https://www.196flavors.com/tunisia-tunisian-couscous/\" target=\"_blank\">Recipe by 196 Flavors</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.196flavors.com/wp-content/uploads/2018/03/couscous-tunisien-2.jpg\" class=\"recipe_img\"> <p class=\"intro\">TUNISIAN COUSCOUS<br><br>There’s no better way to start this Tunisian food guide than with couscous. Known as kosksi in the Tunisian dialect, couscous is a staple dish in North African cuisines and is considered a national dish in Tunisia.<br>Couscous refers to small granules of rolled durum wheat semolina cooked in a special double boiler. To cook, fine-grain couscous is layered over a bed of whole herbs in the upper pot while the meats and vegetables are cooked in the lower pot. As the meat and vegetables cook, steam rises through the vents and into the container above, cooking the pasta with aromatic steam. Similar to risotto, the couscous granules need to be stirred constantly to prevent lumping.</p><p>Recipe: <br> 6 portions<br><br>Ingredients:<br>2 lb lamb stew meat , cut into large pieces<br>6 cups couscous fine semolina (or medium)<br>2 onions , finely chopped<br>2 cloves garlic , pressed<br>4 tablespoons tomato paste<br>2 tablespoons harissa<br>2 tablespoons ground caraway<br>1 tablespoon ground coriander<br>1 teaspoon chili powder<br>4 turnips , cut in half<br>6 medium carrots , peeled<br>4 zucchini , peeled lengthwise, alternately leaving a layer of skin<br>6 small potatoes , peeled<br>10 oz. chickpeas (canned)<br>4 green hot peppers , fried in oil (optional)<br>Vegetable oil<br>Salt<br>Pepper<br><br>Method:<br>1. Add ½ cup (120ml) of oil into a large pan. Fry the onion over medium heat for 2 minutes.<br>2. Add the garlic, tomato paste and harissa and continue frying for 2 minutes.<br>3. Add the caraway, coriander, and chili powder. Mix and continue cooking for another 2 minutes.<br>4. Add the lamb meat and mix well so that the pieces are covered with the sauce. Cook for 5 minutes stirring regularly.<br>5. Cover with water. Add the turnips and carrots, and cook on low/medium heat for 45 minutes.<br>6. Meanwhile, prepare the couscous semolina as indicated on the package, with boiling water, salt, and oil.<br>7. After 45 minutes, add the zucchini, potatoes and chickpeas.<br>8. Cook for at least another 30 to 40 minutes over low to medium heat. Monitor the cooking of the vegetables. If some vegetables are cooked before the meat, remove them from the pan and place them on a serving platter. Proceed in the same way with all the vegetables to prevent them from cooking too much.<br>9. 10 minutes before the end of cooking, get a few ladles of broth (one at a time) and wet the couscous semolina. Mix the semolina well after each ladle until it gets moistened enough.<br>10. Arrange the semolina in a tajine pot. Decorate the dish with the vegetables and the meat all around. Garnish with fried green hot peppers (optional).<br><br><a href=\"https://www.196flavors.com/tunisia-tunisian-couscous/\" target=\"_blank\">Recipe by 196 Flavors</a></p></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.smartcookie95.com/wp-content/uploads/2021/05/Molokhia-tunisia-1-1-1020x600.jpg\" class=\"recipe_img\"> <p class=\"intro\">TUNISIAN MOLOKHIA<br><br>This dish has traveled from India to the Middle East and North Africa where it became national dishes. In Egypt, it sis prepared with its leaves, while in Tunisia it is cooked in a very special way as the leaves are not used as such but rather transformed to a powder used in this generous stew.</p><p><br>Ingredients:<br>150 ml olive oil (Extra virgin oil if you have)<br>500 gr beef, lamb or chicken<br>100 gr Molokhia powder (if you find only dried leaves you can use a food processor to transform it into powder and use a sieve to remove big pits. You might have to do this 2 or 3 times)<br>1 tbsp Harissa<br>2 tbsp tomato puree<br>1 tsp ras al hanout spice<br>1 tbsp cumin<br>1 onion<br>6 garlic gloves<br>3 Bay leaves<br><br>Method:<br>1. Chop the onions and the garlic<br>2. Cut your meat in large cubes<br>3. Add oil to a big pan and the garlic and onions and stir for 5min<br>4. Add the meat and sear it<br>5. remove the meat/onions/garlic and reserve it<br>6. Turn the stove off and add the Mololkhia powder<br>7. Mix until it forms a paste<br>8. add boiled water to 3/4 of the pan<br>9. let the sauce cook at low to medium heat for two hours and stir it often<br>10. Add the meat, the spices, the harissa paste, tomato puree and the bay leaves, as well as salt and pepper to your taste<br>11. Leave it to cook for 3 to 4 hours on low heat. Stir it every 30 min or so. (one hour if you use a pressure cooker)<br>12. Your meat should stay together so if it soften it up too much, take it out of the sauce while you let it cook further<br>13. When the oil comes up, it means your Molokhiya stew is ready!<br><br><a href=\"https://www.smartcookie95.com/delicious-tunisian-molokhia-easy-recipe/\" target=\"_blank\">Recipe by SmartCookie95</a></p></div>"
            ],
        },
        TR: {
            name: "Turkey",
            description: "<div class=\"recipe-text\"><img src=\"https://www.thespruceeats.com/thmb/1WWGpJrtarnoXCUgDOpOe8niKvs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-turkish-chicken-kebab-3274263_19-5b4ce87746e0fb00370a5025.jpg\" class=\"recipe_img\"> <p class=\"intro\">TURKISH CHICKEN KEBAB<br><br>Kebabs originated in Turkey, so you can't get much more authentic than these Turkish chicken kebabs, or tavuk şiş (tah-VOOK’ SHEESH’). The method of cooking meats on a skewer over an open fire originated on the steppes of central Asia. In Turkey, it’s said the descendants of Genghis Khan himself skewered their daily catch on their swords and cooked it over an open flame. This concept was refined over time and was brought to the world with the westward migration of Turkic peoples.<br>In comparison to some modern kebabs, authentic Turkish shish kebabs are actually very plain. The key to great authentic Turkish kebab is in the quality of the meat and the flavor imparted by the marinade. In a typically hospitable Turkish way, chicken kebabs are often served alongside grilled beef and lamb to offer an alternative for diners.<br>There are many versions of traditional chicken kebabs, and this one features a simple marinade made from plain yogurt, onion, garlic, and spices that transform white or dark meat chicken into succulent, flavorful kebabs. Serve with bulgur and summer vegetable salad or rice pilaf with orzo for a starch, and okra with tomato and olive oil or eggplant and vegetable ragout as your vegetable, and bread like lavaş.</p><p>Recipe: <br>6 portions<br><br>Ingredients:<br>2 boneless, skinless chicken breasts, or 4 to 5 boneless, skinless thighs<br>1 medium onion<br>2 cloves garlic<br>1/2 cup plain yogurt, or milk<br>3 tablespoons vegetable oil<br>2 tablespoons tomato paste<br>1 teaspoon freshly ground black pepper<br>1 teaspoon paprika<br>1 teaspoon kosher salt <br>1 teaspoon dried oregano, sumac, and paprika, optional<br><br>Method:<br>1. Gather the ingredients.<br>2. Blot the chicken breasts dry on paper towels.<br>3. Cut the meat into bite-sized cubes about the size of large dice.<br>4. Using the finest grater possible, make a pulp from the onion and garlic cloves.<br>5. Pour this pulp and juice into a fine mesh strainer and, using a wooden spoon, press out the juice into a separate bowl.<br>6. Discard the onion and garlic pulp.<br>7. In a glass or ceramic bowl, combine the onion-garlic juice, yogurt or milk, oil, tomato paste, black pepper, paprika, and salt.<br>8. Add the cubed chicken and toss to coat.<br>9. Cover the bowl and refrigerate it for at least 4 hours or overnight for the best results.<br>10. If using bamboo skewers, soak them in water for a few hours so they don't ignite on the grill. <br>11. Preheat a grill to medium heat.<br>12. Remove the chicken pieces from the marinade and thread them onto small metal or soaked bamboo kebab skewers. The chunks of chicken can touch each other, but don’t put them too close together to ensure they cook through. Discard any remaining marinade.<br>13. Sprinkle the kebabs with salt and put them on the grill. Grill them evenly on all sides, about 12 minutes total. You can sprinkle Turkish spices like oregano, sumac, and paprika over the hot kebabs to add extra flavor.<br>14. Serve and enjoy.<br><br><a href=\"https://www.thespruceeats.com/basic-turkish-chicken-kebab-3274263\" target=\"_blank\">Recipe by The Spruce Eats</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.thespruceeats.com/thmb/1WWGpJrtarnoXCUgDOpOe8niKvs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-turkish-chicken-kebab-3274263_19-5b4ce87746e0fb00370a5025.jpg\" class=\"recipe_img\"> <p class=\"intro\">TURKISH CHICKEN KEBAB<br><br>Kebabs originated in Turkey, so you can't get much more authentic than these Turkish chicken kebabs, or tavuk şiş (tah-VOOK’ SHEESH’). The method of cooking meats on a skewer over an open fire originated on the steppes of central Asia. In Turkey, it’s said the descendants of Genghis Khan himself skewered their daily catch on their swords and cooked it over an open flame. This concept was refined over time and was brought to the world with the westward migration of Turkic peoples.<br>In comparison to some modern kebabs, authentic Turkish shish kebabs are actually very plain. The key to great authentic Turkish kebab is in the quality of the meat and the flavor imparted by the marinade. In a typically hospitable Turkish way, chicken kebabs are often served alongside grilled beef and lamb to offer an alternative for diners.<br>There are many versions of traditional chicken kebabs, and this one features a simple marinade made from plain yogurt, onion, garlic, and spices that transform white or dark meat chicken into succulent, flavorful kebabs. Serve with bulgur and summer vegetable salad or rice pilaf with orzo for a starch, and okra with tomato and olive oil or eggplant and vegetable ragout as your vegetable, and bread like lavaş.</p><p>Recipe: <br>6 portions<br><br>Ingredients:<br>2 boneless, skinless chicken breasts, or 4 to 5 boneless, skinless thighs<br>1 medium onion<br>2 cloves garlic<br>1/2 cup plain yogurt, or milk<br>3 tablespoons vegetable oil<br>2 tablespoons tomato paste<br>1 teaspoon freshly ground black pepper<br>1 teaspoon paprika<br>1 teaspoon kosher salt <br>1 teaspoon dried oregano, sumac, and paprika, optional<br><br>Method:<br>1. Gather the ingredients.<br>2. Blot the chicken breasts dry on paper towels.<br>3. Cut the meat into bite-sized cubes about the size of large dice.<br>4. Using the finest grater possible, make a pulp from the onion and garlic cloves.<br>5. Pour this pulp and juice into a fine mesh strainer and, using a wooden spoon, press out the juice into a separate bowl.<br>6. Discard the onion and garlic pulp.<br>7. In a glass or ceramic bowl, combine the onion-garlic juice, yogurt or milk, oil, tomato paste, black pepper, paprika, and salt.<br>8. Add the cubed chicken and toss to coat.<br>9. Cover the bowl and refrigerate it for at least 4 hours or overnight for the best results.<br>10. If using bamboo skewers, soak them in water for a few hours so they don't ignite on the grill. <br>11. Preheat a grill to medium heat.<br>12. Remove the chicken pieces from the marinade and thread them onto small metal or soaked bamboo kebab skewers. The chunks of chicken can touch each other, but don’t put them too close together to ensure they cook through. Discard any remaining marinade.<br>13. Sprinkle the kebabs with salt and put them on the grill. Grill them evenly on all sides, about 12 minutes total. You can sprinkle Turkish spices like oregano, sumac, and paprika over the hot kebabs to add extra flavor.<br>14. Serve and enjoy.<br><br><a href=\"https://www.thespruceeats.com/basic-turkish-chicken-kebab-3274263\" target=\"_blank\">Recipe by The Spruce Eats</a></p></div>"
            ],
        },
        TW: {
            name: "Taiwan",

        },
        TZ: {
            name: "Tanzania",

        },
        UG: {
            name: "Uganda",

        },
        UA: {
            name: "Ukraine",

        },
        UY: {
            name: "Uruguay",

        },
        US: {
            name: "United States",
            description: "<div class=\"recipe-text\"><img src=\"https://www.tasteofthesouthmagazine.com/wp-content/uploads/2017/02/JAMBALYA594JB.jpg\" class=\"recipe_img\"> <p class=\"intro\">JAMBALAYA<br><br>This one-pot long-time favourite dish in Louisiana comes in many different variations and has influences from French, Spanish and West African cuisines. Like most dishes of early American origin, jambalaya was born of necessity, a delicious and inexpensive means of using whatever ingredients were likely on hand. Each cook and culture contributed their own unique variations. In New Orleans and the surrounding regions, Creole cooks make a “red” jambalaya that starts with meat and the “trinity” of onion, celery, and bell pepper.</p><p>Recipe: <br>Servings 6 Cooking time 1 hour<br><br>Ingredients: <br>2 tablespoons peanut oil <br> 1 tablespoon Cajun seasoning <br>285 g andouille sausage, sliced into rounds <br>450 g boneless skinless chicken breasts, cut into 2,5 cm pieces <br> 1 onion, diced <br>1 small green bell pepper, diced <br> 2 stalks celery, diced <br>3 cloves garlic, minced <br> 1 (450 ml) can crushed Italian tomatoes <br> 1⁄2 teaspoon red pepper flakes <br> 1⁄2 teaspoon ground black pepper <br>1 teaspoon salt <br> 1⁄2 teaspoon hot pepper sauce <br> 2 teaspoons Worcestershire sauce <br>1 teaspoon file powder <br>3dl uncooked white rice <br> 6 dl chicken broth <br> <br> Method: <br>1.Heat 1 tablespoon of peanut oil in a large cast iron pot over medium heat.<br>2.Season the sausage and chicken pieces with Cajun seasoning.<br>3.Saute sausage until browned. Remove with slotted spoon and set aside.<br>4.Add 1 tablespoon peanut oil, and saute chicken pieces until lightly browned on all sides. Remove with a slotted spoon, and set aside.<br>5.In the same pot, saute onion, bell pepper, celery and garlic until tender.<br>6.Stir in crushed tomatoes, and season with red pepper, black pepper, salt, hot pepper sauce, Worcestershire sauce and file powder.<br>7.Stir in chicken and sausage. Cook for 10 minutes, stirring occasionally.<br>8.Stir in the rice and chicken broth. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes, or until liquid is absorbed.<br><br><a href=\"https://www.allrecipes.com/recipe/31848/jambalaya/\">Recipe by All Recipes</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><img src=\"https://www.tasteofthesouthmagazine.com/wp-content/uploads/2017/02/JAMBALYA594JB.jpg\" class=\"recipe_img\"> <p class=\"intro\">JAMBALAYA<br><br>This one-pot long-time favourite dish in Louisiana comes in many different variations and has influences from French, Spanish and West African cuisines. Like most dishes of early American origin, jambalaya was born of necessity, a delicious and inexpensive means of using whatever ingredients were likely on hand. Each cook and culture contributed their own unique variations. In New Orleans and the surrounding regions, Creole cooks make a “red” jambalaya that starts with meat and the “trinity” of onion, celery, and bell pepper.</p><p>Recipe: <br>Servings 6 Cooking time 1 hour<br><br>Ingredients: <br>2 tablespoons peanut oil <br> 1 tablespoon Cajun seasoning <br>285 g andouille sausage, sliced into rounds <br>450 g boneless skinless chicken breasts, cut into 2,5 cm pieces <br> 1 onion, diced <br>1 small green bell pepper, diced <br> 2 stalks celery, diced <br>3 cloves garlic, minced <br> 1 (450 ml) can crushed Italian tomatoes <br> 1⁄2 teaspoon red pepper flakes <br> 1⁄2 teaspoon ground black pepper <br>1 teaspoon salt <br> 1⁄2 teaspoon hot pepper sauce <br> 2 teaspoons Worcestershire sauce <br>1 teaspoon file powder <br>3dl uncooked white rice <br> 6 dl chicken broth <br> <br> Method: <br>1.Heat 1 tablespoon of peanut oil in a large cast iron pot over medium heat.<br>2.Season the sausage and chicken pieces with Cajun seasoning.<br>3.Saute sausage until browned. Remove with slotted spoon and set aside.<br>4.Add 1 tablespoon peanut oil, and saute chicken pieces until lightly browned on all sides. Remove with a slotted spoon, and set aside.<br>5.In the same pot, saute onion, bell pepper, celery and garlic until tender.<br>6.Stir in crushed tomatoes, and season with red pepper, black pepper, salt, hot pepper sauce, Worcestershire sauce and file powder.<br>7.Stir in chicken and sausage. Cook for 10 minutes, stirring occasionally.<br>8.Stir in the rice and chicken broth. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes, or until liquid is absorbed.<br><br><a href=\"https://www.allrecipes.com/recipe/31848/jambalaya/\">Recipe by All Recipes</a></p></div>"
            ],
        },
        UZ: {
            name: "Uzbekistan",

        },
        VE: {
            name: "Venezuela",

        },
        VN: {
            name: "Vietnam",

        },
        VU: {
            name: "Vanuatu",

        },
        YE: {
            name: "Yemen",

        },
        ZA: {
            name: "South Africa",
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.internationalcuisine.com/wp-content/uploads/2020/04/South-African-Bobotie-2.jpeg\" class=\"recipe_img\"> <p class=\"intro\">BOBOTIE<br><br>Bobotie's roots in South Africa date back to the 17th century. Dutch traders set up camp in the area that is now Cape Town as a stopping point on their journeys back and forth to Indonesia. The traders brought spices, cooking techniques, and recipes with them. While the specifics are a bit vague, it is thought by some that the original bobotie recipe came from Indonesia and was adapted to fit the available ingredients.Today many consider bobotie to be the national dish of South Africa, and it has become popular on menus featuring South African cuisine all over the world.</p><p>Recipe: <br> 8 portions<br><br>Ingredients:<br>2 tablespoons butter<br>2 medium onions diced<br>1 tablespoon garlic minced<br>2 slices bread <br>½ cup milk<br>1 1/2 Tablespoons curry powder<br>1 teaspoon turmeric<br>1 teaspoon ground cumin<br>1 teaspoon coriander<br>1 teaspoon thyme<br>1 teaspoon oregano<br>2 pounds lean ground beef lamb or turkey<br>1 large apple grated<br>1/3 cup fruit chutney<br>1/4 cup sultanas or raisins<br>1 lemon juice and zest<br>1 tablespoon Worcestershire sauce<br>salt and pepper to taste<br><br>Egg Custard Topping<br>3 eggs<br>5-6 bay leaves<br>½ cup cream<br>½ cup milk<br><br>Method:<br>1. Pre-heat oven at 350 deg<br>2. In a medium bowl, mix together milk and bread to soften it. Set aside.<br>3. Lightly grease a 9×13-inch baking dish<br>4. Heat up a large skillet over medium heat, add butter until melted, add in onions and garlic. Saute for about 3 minutes just until soft and fragrant.<br>5. Next stir in the spices: curry powder, turmeric, ground cumin, coriander, thyme and oregano.<br>6. Add ground meat and stirring constantly to break it up, cook until beef is no longer pink or slightly brown. Remove from the stove.<br>7. Add to a bowl, followed by bread mixture, chutney, grated apple, lemon juice and zest, and Worcestershire – add sultanas or raisins. Season to taste with salt and pepper. Mix all together well.<br>8. Add beef mixture into greased casserole dish. Using a spoon press the beef mixture down. This helps keep the egg mixture on top and forms a nice custard top when baked.<br>9. Bake in the oven for around 40-50 minutes.<br>10. While bobotie is baking, mix together eggs, cream, milk and a 1⁄4 teaspoon of turmeric.<br>11. Take the meat out of the oven, pour the egg mixture over the beef. Arrange the bay leaves on top.<br>12. Bake for another 20 minutes (check after 15 minutes ) or until the egg mixture has set.<br>13. Remove and let it rest for a few minutes then serve with yellow rice and vegetables.<br><br><a href=\"https://www.internationalcuisine.com/south-african-bobotie/\" target=\"_blank\">Recipe by International Cuisine</a></p></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://www.internationalcuisine.com/wp-content/uploads/2020/04/South-African-Bobotie-2.jpeg\" class=\"recipe_img\"> <p class=\"intro\">BOBOTIE<br><br>Bobotie's roots in South Africa date back to the 17th century. Dutch traders set up camp in the area that is now Cape Town as a stopping point on their journeys back and forth to Indonesia. The traders brought spices, cooking techniques, and recipes with them. While the specifics are a bit vague, it is thought by some that the original bobotie recipe came from Indonesia and was adapted to fit the available ingredients.Today many consider bobotie to be the national dish of South Africa, and it has become popular on menus featuring South African cuisine all over the world.</p><p>Recipe: <br> 8 portions<br><br>Ingredients:<br>2 tablespoons butter<br>2 medium onions diced<br>1 tablespoon garlic minced<br>2 slices bread <br>½ cup milk<br>1 1/2 Tablespoons curry powder<br>1 teaspoon turmeric<br>1 teaspoon ground cumin<br>1 teaspoon coriander<br>1 teaspoon thyme<br>1 teaspoon oregano<br>2 pounds lean ground beef lamb or turkey<br>1 large apple grated<br>1/3 cup fruit chutney<br>1/4 cup sultanas or raisins<br>1 lemon juice and zest<br>1 tablespoon Worcestershire sauce<br>salt and pepper to taste<br><br>Egg Custard Topping<br>3 eggs<br>5-6 bay leaves<br>½ cup cream<br>½ cup milk<br><br>Method:<br>1. Pre-heat oven at 350 deg<br>2. In a medium bowl, mix together milk and bread to soften it. Set aside.<br>3. Lightly grease a 9×13-inch baking dish<br>4. Heat up a large skillet over medium heat, add butter until melted, add in onions and garlic. Saute for about 3 minutes just until soft and fragrant.<br>5. Next stir in the spices: curry powder, turmeric, ground cumin, coriander, thyme and oregano.<br>6. Add ground meat and stirring constantly to break it up, cook until beef is no longer pink or slightly brown. Remove from the stove.<br>7. Add to a bowl, followed by bread mixture, chutney, grated apple, lemon juice and zest, and Worcestershire – add sultanas or raisins. Season to taste with salt and pepper. Mix all together well.<br>8. Add beef mixture into greased casserole dish. Using a spoon press the beef mixture down. This helps keep the egg mixture on top and forms a nice custard top when baked.<br>9. Bake in the oven for around 40-50 minutes.<br>10. While bobotie is baking, mix together eggs, cream, milk and a 1⁄4 teaspoon of turmeric.<br>11. Take the meat out of the oven, pour the egg mixture over the beef. Arrange the bay leaves on top.<br>12. Bake for another 20 minutes (check after 15 minutes ) or until the egg mixture has set.<br>13. Remove and let it rest for a few minutes then serve with yellow rice and vegetables.<br><br><a href=\"https://www.internationalcuisine.com/south-african-bobotie/\" target=\"_blank\">Recipe by International Cuisine</a></p></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\" onclick=\"previousRecipe()\">BACK</button><button class=\"next-btn\" onclick=\"nextRecipe()\">NEXT</button></div><img src=\"https://i0.wp.com/www.afronaija.com.ng/wp-content/uploads/2022/03/yellow.jpg\" class=\"recipe_img\"> <p class=\"intro\">CAPA MALAYA CHICKEN CURRY WITH YELLOW RICE<br><br>Spice up chicken thighs in a South African curry, packed with flavourful spices and served with a side of sweet, fragrant rice.</p><p>Recipe: <br>6 portions<br><br>Ingredients:<br>For the curry<br><br>2 tbsp sunflower or rapeseed oil<br>1 large onion , finely chopped<br>4 large garlic cloves , finely grated<br>2 tbsp finely grated ginger<br>5 cloves<br>2 tsp turmeric<br>1 tsp ground white pepper<br>1 tsp coriander<br>1 tsp cumin<br>seeds from 8 cardamom pods , lightly crushed<br>1 cinnamon stick , snapped in half<br>1 large red chilli , halved, deseeded and sliced<br>400g can chopped tomatoes<br>2 tbsp mango chutney<br>1 chicken stock cube , crumbled<br>12 bone-in chicken thighs , skin removed<br>500g potato , cut into chunks<br>small pack coriander , chopped<br><br>For the yellow rice<br><br>50g butter<br>350g basmati rice<br>50g raisins<br>1 tsp golden caster sugar<br>1 tsp ground turmeric<br>¼ tsp ground white pepper<br>1 cinnamon stick , snapped in half<br>8 cardamom pods , lightly crushed<br><br>Method:<br>1. Heat the oil in a large, wide pan. Add the onion and fry for 5 mins until softened, stirring every now and then. Stir in the garlic, ginger and cloves, and cook for 5 mins more, stirring frequently to stop it sticking. Add all the remaining spices and the fresh chilli, stir briefly, then tip in the tomatoes with 2 cans of water, plus the chutney and crumbled stock cube.<br>2. Add the chicken thighs, pushing them under the liquid, then cover the pan and leave to cook for 35 mins. Stir well, add the potatoes and cook uncovered for 15-20 mins more until they are tender. Stir in the coriander.<br>3. About 10 mins before you want to serve, make the rice. Put the butter, rice, raisins, sugar and spices in a large pan with 550ml water and 0.5 tsp salt. Bring to the boil and, when the butter has melted, stir, cover and cook for 10 mins. Turn off the heat and leave undisturbed for 5 mins. Fluff up and serve with the curry.<br><br><a href=\"https://www.bbcgoodfood.com/recipes/cape-malay-chicken-curry-yellow-rice\" target=\"_blank\">Recipe by BBC Good Food</a></p></div>"
            ],
        },
        ZM: {
            name: "Zambia",

        },
        ZW: {
            name: "Zimbabwe",

        },
        SO: {
            name: "Somalia",

        },
        GF: {
            name: "France",

        },
        FR: {
            name: "France",

        },
        ES: {
            name: "Spain",

        },
        AW: {
            name: "Aruba",

        },
        AI: {
            name: "Anguilla",

        },
        AD: {
            name: "Andorra",

        },
        AG: {
            name: "Antigua and Barbuda",

        },
        BS: {
            name: "Bahamas",

        },
        BM: {
            name: "Bermuda",

        },
        BB: {
            name: "Barbados",

        },
        KM: {
            name: "Comoros",

        },
        CV: {
            name: "Cape Verde",

        },
        KY: {
            name: "Cayman Islands",

        },
        DM: {
            name: "Dominica",

        },
        FK: {
            name: "Falkland Islands",

        },
        FO: {
            name: "Faeroe Islands",

        },
        GD: {
            name: "Grenada",

        },
        HK: {
            name: "Hong Kong",

        },
        KN: {
            name: "Saint Kitts and Nevis",

        },
        LC: {
            name: "Saint Lucia",

        },
        LI: {
            name: "Liechtenstein",

        },
        MF: {
            name: "Saint Martin (French)",

        },
        MV: {
            name: "Maldives",

        },
        MT: {
            name: "Malta",

        },
        MS: {
            name: "Montserrat",

        },
        MU: {
            name: "Mauritius",

        },
        NC: {
            name: "New Caledonia",

        },
        NR: {
            name: "Nauru",

        },
        PN: {
            name: "Pitcairn Islands",

        },
        PR: {
            name: "Puerto Rico",

        },
        PF: {
            name: "French Polynesia",

        },
        SG: {
            name: "Singapore",

        },
        SB: {
            name: "Solomon Islands",

        },
        ST: {
            name: "São Tomé and Principe",

        },
        SX: {
            name: "Saint Martin (Dutch)",

        },
        SC: {
            name: "Seychelles",

        },
        TC: {
            name: "Turks and Caicos Islands",

        },
        TO: {
            name: "Tonga",

        },
        TT: {
            name: "Trinidad and Tobago",

        },
        VC: {
            name: "Saint Vincent and the Grenadines",

        },
        VG: {
            name: "British Virgin Islands",

        },
        VI: {
            name: "United States Virgin Islands",

        },
        CY: {
            name: "Cyprus",

        },
        RE: {
            name: "Reunion (France)",

        },
        YT: {
            name: "Mayotte (France)",

        },
        MQ: {
            name: "Martinique (France)",

        },
        GP: {
            name: "Guadeloupe (France)",

        },
        CW: {
            name: "Curaco (Netherlands)",

        },
        IC: {
            name: "Canary Islands (Spain)",


        }
    },
    locations: {
        "stockholm/sweden": {
            lat: 59.334591,
            lng: 18.063240,
            name: "Stockholm",
            type: "circle"
        }
    },
    labels: {},
    legend: {
        entries: []
    },
    regions: {
        "0": {
            name: "North America",
            states: [
                "MX",
                "CA",
                "US",
                "GL",
                "BM"
            ]
        },
        "1": {
            name: "South America",
            states: [
                "EC",
                "AR",
                "VE",
                "BR",
                "CO",
                "BO",
                "PE",
                "BZ",
                "CL",
                "CR",
                "CU",
                "DO",
                "SV",
                "GT",
                "GY",
                "GF",
                "HN",
                "NI",
                "PA",
                "PY",
                "PR",
                "SR",
                "UY",
                "JM",
                "HT",
                "BS",
                "FK",
                "AI",
                "AG",
                "AW",
                "BB",
                "VG",
                "KY",
                "DM",
                "MQ",
                "LC",
                "VC",
                "GD",
                "GP",
                "MS",
                "TC",
                "SX",
                "MF",
                "KN",
                "CW"
            ]
        },
        "2": {
            name: "Europe",
            states: [
                "IT",
                "NL",
                "NO",
                "DK",
                "IE",
                "GB",
                "RO",
                "DE",
                "FR",
                "AL",
                "AM",
                "AT",
                "BY",
                "BE",
                "LU",
                "BG",
                "CZ",
                "EE",
                "GE",
                "GR",
                "HU",
                "IS",
                "LV",
                "LT",
                "MD",
                "PL",
                "PT",
                "RS",
                "SI",
                "HR",
                "BA",
                "ME",
                "MK",
                "SK",
                "ES",
                "FI",
                "SE",
                "CH",
                "TR",
                "CY",
                "UA",
                "XK",
                "MT",
                "FO"
            ]
        },
        "3": {
            name: "Africa and the Middle East",
            states: [
                "QA",
                "BH",
                "SA",
                "AE",
                "SY",
                "OM",
                "KW",
                "PK",
                "AZ",
                "AF",
                "IR",
                "IQ",
                "IL",
                "PS",
                "JO",
                "LB",
                "YE",
                "TJ",
                "TM",
                "UZ",
                "KG",
                "NE",
                "AO",
                "EG",
                "TN",
                "GA",
                "DZ",
                "LY",
                "CG",
                "GQ",
                "BJ",
                "BW",
                "BF",
                "BI",
                "CM",
                "CF",
                "TD",
                "CI",
                "CD",
                "DJ",
                "ET",
                "GM",
                "GH",
                "GN",
                "GW",
                "KE",
                "LS",
                "LR",
                "MG",
                "MW",
                "ML",
                "MA",
                "MR",
                "MZ",
                "NA",
                "NG",
                "ER",
                "RW",
                "SN",
                "SL",
                "SO",
                "ZA",
                "SD",
                "SS",
                "SZ",
                "TZ",
                "TG",
                "UG",
                "EH",
                "ZM",
                "ZW",
                "RE",
                "KM",
                "SC",
                "MU",
                "CV",
                "IC",
                "ST",
                "YT"
            ]
        },
        "4": {
            name: "South Asia",
            states: [
                "SG",
                "TW",
                "IN",
                "AU",
                "MY",
                "NP",
                "NZ",
                "TH",
                "BN",
                "JP",
                "VN",
                "LK",
                "SB",
                "FJ",
                "BD",
                "BT",
                "KH",
                "LA",
                "MM",
                "KP",
                "PG",
                "PH",
                "KR",
                "ID",
                "CN",
                "MV",
                "NC",
                "VU",
                "NR"
            ]
        },
        "5": {
            name: "North Asia",
            states: [
                "MN",
                "RU",
                "KZ"
            ]
        }
    }
};