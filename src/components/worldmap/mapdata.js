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

            description: " <div class=\"recipe-text\"> <img src=\"https://www.laylita.com/recipes/wp-content/uploads/2014/06/Recipe-for-perfect-caipirinhas-650x433.jpg\" class=\"recipe_img\" /> <p class=\"intro\">CAIPIRINHA</br></br>Brazil’s national drink, the Caipirinha, is refreshing and easy to make. The spirit Cachaça is distilled from the fermented juice of sugar cane and has a unique flavour. It’s unclear exactly when the Caipirinha first appeared, but many historians believe it was served in the early 20th century as a remedy for illness. Regardless of how or when it was born, drinkers have gravitated toward its pleasing flavours and heady effects ever since.<p>Recipe: </br>Servings 2 Preparation time 5 minutes</br></br>Ingredients: </br>2 lime, cut into wedges</br>4 teaspoons sugar</br>12 cl cachaça</br>Garnish:</br>lime wheel</br></br> Method: </br>1.In a double rocks glass, muddle the lime wedges and sugar.</br>2.Fill the glass with ice, add the cachaça, and stir briefly.</br>3.Garnish with a lime wheel.</br></br>Recipe by Liquor </div>",
            url: "https://www.liquor.com/recipes/caipirinha/",
            color: "#8E4849"
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

        },
        CN: {
            name: "China",

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
            description: " <div class=\"recipe-text\"> <img src=\"https://cdn.cdnparenting.com/articles/2019/05/23183440/620862170-H-696x476.webp\" class=\"recipe_img\" /> <p class=\"intro\">PALAK PANEER</br></br>Palak paneer is a classic curried dish from North Indian cuisine and one of the most popular Indian curries around, and with good reason. Almost a third of the Indian subcontinent is vegetarian, making paneer a staple of traditional and modern cooking in India. Although it is most often eaten as a side along with other popular Indian mains, it can just as easily be enjoyed with rice or naan. This deliciously creamy and vibrantly green dish is a delightful and easy to make vegetarian dish you just must try!<p>Recipe: </br>Servings 2 Cooking Time 45 minutes</br></br>Ingredients: </br>250 g spinach leaves</br>7 dl water</br>2,5 cm ginger</br>1-2 garlic cloves</br>1-2 green chili peppers</br>2 Tbsp oil, ghee or butter</br>1⁄2 Tsp cumin seeds</br>1 tej patta (Indian bay leaf)</br>1 onion</br>1 tomato</br>1⁄4 tsp turmeric powder</br>1⁄2 teaspoon red chili powder or cayenne pepper</br>A pinch of asafoetida/hing (optional)</br>1⁄2 Tsp garam masala</br>250 g paneer</br>2 Tbsp cream</br>1 Tsp fenugreek leaves</br></br> Method: </br>1.Rinse the spinach leaves well under running water.</br>2.Add the spinach leaves to a pot with lightly salted, boiling water and let them boil about 1 minute.</br>3.In a separate bowl, make ice water and set it aside.</br>4.After 1 minute, strain the spinach leaves and immediately transfer them to the ice water. This method helps preserve the vibrant green color of the spinach.</br>5.After 1 minute, drain the ice cold water and press the spinach to remove any excess moisture.</br>6.Mix the spinach with chopped ginger, 1 garlic clove and chili pepper to a smooth purée in a blender.</br>7.Heat the oil, ghee or butter in a pan, add the cumin seeds and let them splutter before adding the bay leaf.</br>8.Add the finely chopped onions and sauté until golden, then add 1 finely chopped garlic clove and sauté till the raw aroma of garlic goes away, but stop short of browning the garlic.</br>9.Add the chopped tomatoe and sauté until they soften.</br>10.Once you see fat releasing from the sides of the mixture, add turmeric powder, red chili powder and the asafoetida (hing, optional). Mix very well.</br>11.Add the spinach purée to the pan and about 1 dl water or as required. Mix well.</br>12.Simmer the sauce for 6 to 7 minutes or more until the palak puree is cooked. Season with salt as required. The gravy will have thickened by now.</br>13.Add garam masala powder.</br>14.Add the paneer cubes directly to the gravy. Mix gently and switch off the heat.</br>15.Lastly add the cream and dry fenugreek leaves (optional). Stir gently.</br>16.Serve palak paneer hot with roti, naan or paratha or cumin rice or ghee rice. You can top it with some butter or cream also while serving. Drizzle a few drops of lime or lemon juice on top along with ginger julienne.</br></br>Recipe by Veg Recipes of India</div>",
            url: "https://www.vegrecipesofindia.com/palak-paneer/#h-homestyle-recipe",
            color: "#8E4849"
        },
        IE: {
            name: "Ireland",

        },
        IR: {
            name: "Iran",

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
            description: " <div class=\"recipe-text\"> <img src=\"https://www.tasteatlas.com/images/recipes/05183524d4204a3f8b92f1c1d9392da2.jpg?mw=910\" class=\"recipe_img\" /> <p class=\"intro\"> RAGÙ ALLA BOLOGNESE </br></br> What is to the rest of the world known as spaghetti Bolognese, practically doesn't exist in Italy, let alone in Bologna. This dish has been traced as far back as the 17th century, and for the locals, the ragù is a very serious matter. According to the Italian Academy of Cuisine, this is the most typical and classic-tasting rendition of Bologna's famed meat sauce and is currently the official version. Traditionally, ragù alla Bolognese is served with tagliatelle. <p> Recipe: </br> Servings 4 Cooking time 3 1⁄2 hours</br></br>Ingredients: </br>3 tbsp olive oil or 50g butter </br>300g coarsely ground beef – preferably skirt steak, chuck or flank </br>150g pancetta (unsmoked) </br>50g yellow carrot </br>50g celery rib </br>50g onion </br>300g tomato passata or peeled tomatoes </br>1.2 L beef or poultry stock, as needed </br>240 ml whole milk </br>120 ml red wine </br>salt and pepper, to taste </br>120 ml whipping cream (optional) </br>360g tagliatelle, fresh or dried </br></br>Method: </br>1.Finely dice the yellow carrot, the rib of celery, and the onion, then finely chop. </br>2.Finely dice the pancetta then finely chop it until it turns into a paste.</br>3.Add the pancetta to a 20 cm terracotta dish or a thick aluminum pan, and sauté until rendered. </br>4.Add the butter or olive oil to the pancetta, then add the root vegetables. Sweat the vegetables for about 10-15 minutes until softened. </br>5.Add the coarsely ground beef and stir-fry until browned and roasted, and there is no liquid left in the dish/pan. Pour in the wine and stir. </br>6.Once the alcohol has evaporated, pour in the passata or peeled tomatoes and stir to incorporate. </br>7.Simmer for 2 hours, covered, adding stock if the ragù gets dry, and stirring occasionally. </br>8.After 2 hours have passed, pour in the milk to balance out the acidity of the tomatoes, and stir and cook some more. Season with salt and pepper to taste. </br>9.If using dried tagliatelle, pour in the whipping cream, stir, and cook just until heated through (optional). </br>10.To cook the pasta, fill a large pot with water (1 L per 100g of pasta), then bring to a boil and season generously with salt. </br>11.Drop the tagliatelle into the water and cook as instructed on the packaging or until al dente. </br>12.Drain, transfer into a large bowl, then add the ragù and mix well. </br>13.Divide between warmed plates, taking care there are equal amounts of pasta and ragù on each plate, then serve. </br>  </br> Recipe by TasteAtlas </div>",
            url: "https://www.tasteatlas.com/bolognese/recipe/",
            color: "#8E4849"

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
            description: " <div class=\"recipe-text\"> <img src=\"https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/sbs_water-thieboudienne.jpg?itok=Ns1E4PBa&mtime=1541971938\" class=\"recipe_img\" /> <p class=\"intro\">THIEBOUDIENNE</br></br>Thieboudienne is considered the national dish of Senegal and is gaining popularity far and wide. Across West Africa there are variations of this savoury one-pot dish, but under different names like Jollof Rice and Benachin.  The traditional thieboudienne dish, is held as the most genuine of them and is very popular to serve on large communal platters in festive celebrations, where everyone digs in.<p>Recipe:</br>Servings 8 Cooking Time 1 hour 15 minutes</br></br>Ingredients:</br>7 dl rice (broken rice)</br>4 large pieces of fish (of your own choice)</br>3 fresh tomatoes, mashed</br>3 Tbsp of tomato paste</br>1 bunch of parsley, crushed</br>1 large carrot, peeled and cut into medium pieces</br>2 potatoes, peeled and chopped</br>1 large onion, chopped</br>4 cloves garlic, finely chopped</br>2 small eggplants</br>1 small cabbage, cut into 4 pieces</br>200 ml peanut oil</br>2 bouillon cube or Maggi cube</br>4 bay leaves</br>4 peppers</br>1 Tbsp of black pepper</br>Salt to taste</br>6 small okra</br>1 tablespoon of Yété (fermented sea snails), optional</br>1 tablespoons nététou (grounded fermented beans), if available</br>1.5 l hot water</br></br>Method:</br>1.Mix the parsley, half the garlic, a little pepper, salt and half a bouillon cube in a mortar or a food processor.</br>2.Then put the mixture into the fish pieces.</br>3.In a large pot, heat oil, add sauté the onions, tomatoes, tomato paste, the remaining black pepper, garlic for 15 minutes over medium heat.</br>4.Add the fish, the remaining bouillon cube, bay leaves and 1 cup of water. Simmer until the fish pieces are cooked through, about 15 minutes.</br>5.Remove the fish pieces and add all the vegetables except okra with 1 cup of water and cook the vegetables until they are cooked (25-30 min). You must ensure that the vegetables are ready before removing them, but make sure not to overcook them. Then remove the vegetables.</br>5.Add the okra with the remaining water and boil for 5 minutes before removing them.</br>6.Add the rice to the pot and cook over low heat, turning often so that all sides are cooked well.</br>7.When the rice is ready for serving, place the rice on a nice, large communal platter and arrange the vegetables and fish on top.</br></br> Recipe by AfriFoodNetwork</div>",
            url: "https://afrifoodnetwork.com/recipes/rice-recipes/thieboudienne/#Thieboudienne_Senegalese_Jollof_Rice_and_Fish_Recipe",
            color: "#8E4849"
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
            description: "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\">BACK</button><button class=\"next-btn\" onclick=nextRecipe()>NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\" /> <p class=\"intro\">TRADITIONAL SWEDISH MEATBALLS</br></br> Swedish meatballs are as close to a national dish that we have in Sweden. Everyone has their own favourite recipe and many celebrity chefs serve their own versions in their restaurants. Most people will say that their mum’s recipe is the best of course! Why not impress your friends and cook your own Swedish meatballs with this easy recipe?  <p> Recipe: </br> 4 portions </br></br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br></br> SAUCE: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>1.Fold together bread crumbs, cream, stock and egg and leave to rest for about 5 minutes.</br>2.Fry the onion in the butter until soft and then mix it with  the breadcrumb-cream.</br>3.Add salt, pepper and mince and work everything together, with your hands or fork. Try not to work it too much, as this will make the meatballs compact.</br>4.Take a small piece of mince and fry it  to test the flavours. When satisfied with salt and pepper, roll the rest  of the mince to small balls (about one tablespoon mince per ball) Make sure your hands are wet with water, then the mince won’t stick to your hands.</br>5.Fry the meatballs until golden brown and thoroughly cooked, then  put aside.</br>6.Mix cream and the corn starch and then pour this, stock and the soy in the pan where you fried the meatballs. Whisk through the pan and let boil for a couple of minutes. Taste with salt, pepper and jam for a little bit of sweetness.</br>7.Put the meatballs back to the sauce and serve with mashed potatoes and lingonberry jam, maybe some chopped parsley on top too.</br></br> <a href= 'http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/' target=_blank>Recipe by Visit Sweden </a></div>",
            color: "#8E4849",
            recipes: [
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\">BACK</button><button class=\"next-btn\" onclick=nextRecipe()>NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\" /> <p class=\"intro\">TRADITIONAL SWEDISH MEATBALLS</br></br> Swedish meatballs are as close to a national dish that we have in Sweden. Everyone has their own favourite recipe and many celebrity chefs serve their own versions in their restaurants. Most people will say that their mum’s recipe is the best of course! Why not impress your friends and cook your own Swedish meatballs with this easy recipe?  <p> Recipe: </br> 4 portions </br></br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br></br> SAUCE: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>1.Fold together bread crumbs, cream, stock and egg and leave to rest for about 5 minutes.</br>2.Fry the onion in the butter until soft and then mix it with  the breadcrumb-cream.</br>3.Add salt, pepper and mince and work everything together, with your hands or fork. Try not to work it too much, as this will make the meatballs compact.</br>4.Take a small piece of mince and fry it  to test the flavours. When satisfied with salt and pepper, roll the rest  of the mince to small balls (about one tablespoon mince per ball) Make sure your hands are wet with water, then the mince won’t stick to your hands.</br>5.Fry the meatballs until golden brown and thoroughly cooked, then  put aside.</br>6.Mix cream and the corn starch and then pour this, stock and the soy in the pan where you fried the meatballs. Whisk through the pan and let boil for a couple of minutes. Taste with salt, pepper and jam for a little bit of sweetness.</br>7.Put the meatballs back to the sauce and serve with mashed potatoes and lingonberry jam, maybe some chopped parsley on top too.</br></br> <a href= 'http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/' target=_blank>Recipe by Visit Sweden </a></div>",
                "<div class=\"recipe-text\"><div class=\"recipe-btn\"><button class=\"back-btn\">BACK</button><button class=\"next-btn\" onclick=nextRecipe()>NEXT</button></div><img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\" /> <p class=\"intro\">BALLS</br></br> HEHE<a href= 'http://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/' target=_blank>Recipe by Visit Sweden </a></div>"
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
            description: " <div class=\"recipe-text\"> <img src=\"https://hot-thai-kitchen.com/wp-content/uploads/2019/09/pad-thai-blog.jpg\" class=\"recipe_img\" /> <p class=\"intro\">PAD THAI</br></br>Pad Thai is everyday food for a lot of people in Thailand, but it's hard to find an authentic Pad Thai outside of Thailand. The best option is to master cooking it at home. What makes pad Thai such a special dish is because no flavour is left behind and everything works in harmony. “Spicy, sour, sweet, salty, and bitter flavours all make appearances in a single dish. This recipe is the real deal with all the ingredients of a traditional Pad Thai—no compromise.<p></br> Recipe: </br>Servings 2 Cooking Time 30 minutes</br></br>SAUCE</br>Ingredients: </br>70 g palm sugar, chopped (6 Tbsp tightly packed)</br>90 ml water</br>8 Tbsp Thai cooking tamarind paste</br>4 Tbsp fish sauce</br></br>Method: </br>1.Add palm sugar to a small pot and melt over medium heat. Once the sugar is melting, keep stirring until it darkens in colour. Immediately add water, fish sauce, and tamarind paste.</br>2.Bring sauce to a simmer, then turn off heat. The hardened sugar will not have dissolved at this point, but let it sit while you prep other ingredients, and it should be dissolved by the time you need it. Check that it is dissolved before you start cooking!</br></br>Ingredients: </br>225 g dry rice noodles, medium size, soak in room temp water for 1 hour</br>4 Tbsp dried shrimp, medium size, roughly chopped</br>6 cloves garlic, chopped</br>60 g roughly chopped shallots</br>170 g pressed tofu, cut into small pieces</br>6 Tbsp finely chopped SWEET preserved daikon radish</br>Dried chili flakes, to taste</br>90 ml vegetable oil</br>20 medium sized shrimp, or another protein to your liking</br>4 eggs</br>240 g bean sprouts</br>20 stalks garlic chives, cut into 5 cm pieces</br>60 g roasted peanuts, roughly chopped</br>1 lime</br></br>Method: </br>1.Cut drained noodles in half</br>2.In a bowl, combine tofu, garlic, shallots, preserved radish, dried shrimp, and chili flakes.</br>3.Heat a wok or a large nonstick skillet over high heat and cover the bottom with oil.</br>4.Sear shrimp, or whatever protein you're using, until done and remove them from pan.</br>5.Over medium heat and a little more oil if needed, sauté everything in the tofu bowl for a few minutes until garlic starts to turn golden and shallots are wilted. If the wok looks dry, add a little more oil.</br>6.Turn heat up to high then add noodles and sauce. Keep tossing until all the sauce is absorbed.</br>7.Turn off the heat and taste the noodles. If they're still undercooked, add a little more water and continue cooking, being careful not to add too much water!</br>8.Push the noodles to one side of the pan. Add little extra oil to the empty space and add eggs. Break the yolks, then put noodles on top of eggs and cook for about 30 seconds. Flip and toss to mix eggs into noodles.</br>9.Toss the cooked protein back in, plus any collected juices. Then add bean sprouts, garlic chives and half of the peanuts. Turn off the heat and toss until well mixed.</br>10.Serve immediately with a lime wedge and extra peanuts on top. For a classic presentation you can add a little extra side of bean sprouts and some garlic chives garnish.</br>11.Be sure to squeeze a bit of lime on top before eating!</br></br> Recipe by Hot Thai Kitchen</div>",
            url: "https://hot-thai-kitchen.com/best-pad-thai/",
            color: "#8E4849"
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

        },
        TR: {
            name: "Turkey",

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
            description: " <div class=\"recipe-text\"> <img src=\"https://www.tasteofthesouthmagazine.com/wp-content/uploads/2017/02/JAMBALYA594JB.jpg\" class=\"recipe_img\" /> <p class=\"intro\">JAMBALAYA</br></br>This one-pot long-time favourite dish in Louisiana comes in many different variations and has influences from French, Spanish and West African cuisines. Like most dishes of early American origin, jambalaya was born of necessity, a delicious and inexpensive means of using whatever ingredients were likely on hand. Each cook and culture contributed their own unique variations. In New Orleans and the surrounding regions, Creole cooks make a “red” jambalaya that starts with meat and the “trinity” of onion, celery, and bell pepper.<p>Recipe: </br>Servings 6 Cooking time 1 hour</br></br>Ingredients: </br>2 tablespoons peanut oil </br> 1 tablespoon Cajun seasoning </br>285 g andouille sausage, sliced into rounds </br>450 g boneless skinless chicken breasts, cut into 2,5 cm pieces </br> 1 onion, diced </br>1 small green bell pepper, diced </br> 2 stalks celery, diced </br>3 cloves garlic, minced </br> 1 (450 ml) can crushed Italian tomatoes </br> 1⁄2 teaspoon red pepper flakes </br> 1⁄2 teaspoon ground black pepper </br>1 teaspoon salt </br> 1⁄2 teaspoon hot pepper sauce </br> 2 teaspoons Worcestershire sauce </br>1 teaspoon file powder </br>3dl uncooked white rice </br> 6 dl chicken broth </br> </br> Method: </br>1.Heat 1 tablespoon of peanut oil in a large cast iron pot over medium heat.</br>2.Season the sausage and chicken pieces with Cajun seasoning.</br>3.Saute sausage until browned. Remove with slotted spoon and set aside.</br>4.Add 1 tablespoon peanut oil, and saute chicken pieces until lightly browned on all sides. Remove with a slotted spoon, and set aside.</br>5.In the same pot, saute onion, bell pepper, celery and garlic until tender.</br>6.Stir in crushed tomatoes, and season with red pepper, black pepper, salt, hot pepper sauce, Worcestershire sauce and file powder.</br>7.Stir in chicken and sausage. Cook for 10 minutes, stirring occasionally.</br>8.Stir in the rice and chicken broth. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes, or until liquid is absorbed.</br></br>Recipe by All Recipes </div>",
            url: "https://www.allrecipes.com/recipe/31848/jambalaya/",
            color: "#8E4849"

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