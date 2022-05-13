var simplemaps_worldmap_mapdata = {


    //State defaults
    main_settings: {
        //General settings

        width: "responsive", //'700' or 'responsive '
        background_color: "#FFFFFF", //"#FFFFFF"
        background_transparent: "no",
        border_color: "#a4a4a4",
        popups: "on_click",

        //State defaults  
        // För att ta bort ("Coming Soon...") använd (description:"") inuti lands koden.
        state_description: " <br><br><br>Coming Soon...",
        state_color: "#000000",
        state_hover_color: "#C1121F",
        state_url: "", // #2 View Website som togs bort...
        border_size: 1,
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
             description: " <div class=\"recipe-text\"> <img src=\".......\" class=\"recipe_img\" /> <p class=\"intro\">TITLE....... </br>INTRO....... <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>........ </br>  </br> Recipe by ....... </div>",
            url: ".......",
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
            description: " <div class=\"recipe-text\"> <img src=\".......\" class=\"recipe_img\" /> <p class=\"intro\">TITLE....... </br>INTRO....... <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>........ </br>  </br> Recipe by ....... </div>",
            url: ".......",
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
             description: " <div class=\"recipe-text\"> <img src=\"https://www.tasteatlas.com/images/recipes/05183524d4204a3f8b92f1c1d9392da2.jpg?mw=910\" class=\"recipe_img\" /> <p class=\"intro\"> RAGÙ ALLA BOLOGNESE </br></br> What is to the rest of the world known as spaghetti Bolognese, practically doesn't exist in Italy, let alone in Bologna. This dish has been traced as far back as the 17th century, and for the locals, the ragù is a very serious matter. According to the Italian Academy of Cuisine, this is the most typical and classic-tasting rendition of Bologna's famed meat sauce and is currently the official version. Traditionally, ragù alla Bolognese is served with tagliatelle. <p></br> Recipe: </br> Servings 4 Cooking time 3 1⁄2 hours </br>Ingredients: </br>3 tbsp olive oil or 50g butter </br>300g coarsely ground beef – preferably skirt steak, chuck or flank </br>150g pancetta (unsmoked) </br>50g yellow carrot </br>50g celery rib </br>50g onion </br>300g tomato passata or peeled tomatoes </br>1.2 L beef or poultry stock, as needed </br>240 ml whole milk </br>120 ml red wine </br>salt and pepper, to taste </br>120 ml whipping cream (optional) </br>360g tagliatelle, fresh or dried </br>Method: </br>1.Finely dice the yellow carrot, the rib of celery, and the onion, then finely chop. </br>2.Finely dice the pancetta then finely chop it until it turns into a paste.</br>3.Add the pancetta to a 20 cm terracotta dish or a thick aluminum pan, and sauté until rendered. </br>4.Add the butter or olive oil to the pancetta, then add the root vegetables. Sweat the vegetables for about 10-15 minutes until softened. </br>5.Add the coarsely ground beef and stir-fry until browned and roasted, and there is no liquid left in the dish/pan. Pour in the wine and stir. </br>6.Once the alcohol has evaporated, pour in the passata or peeled tomatoes and stir to incorporate. </br>7.Simmer for 2 hours, covered, adding stock if the ragù gets dry, and stirring occasionally. </br>8.After 2 hours have passed, pour in the milk to balance out the acidity of the tomatoes, and stir and cook some more. Season with salt and pepper to taste. </br>9.If using dried tagliatelle, pour in the whipping cream, stir, and cook just until heated through (optional). </br>10.To cook the pasta, fill a large pot with water (1 L per 100g of pasta), then bring to a boil and season generously with salt. </br>11.Drop the tagliatelle into the water and cook as instructed on the packaging or until al dente. </br>12.Drain, transfer into a large bowl, then add the ragù and mix well. </br>13.Divide between warmed plates, taking care there are equal amounts of pasta and ragù on each plate, then serve. </br>  </br> Recipe by TasteAtlas </div>",
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
            description: " <div class=\"recipe-text\"> <img src=\".......\" class=\"recipe_img\" /> <p class=\"intro\">TITLE....... </br>INTRO....... <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>........ </br>  </br> Recipe by ....... </div>",
            url: ".......",
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
        //-----------------------------------------------SWEDEN------------------------------------------------------
        SE: {
            name: "Sweden",
            description: " <div class=\"recipe-text\"> <img src=\"https://d3aux7tjp119y2.cloudfront.net/images/kottbollar_3351-IBSweb.width-1650.jpg\" class=\"recipe_img\" /> <p class=\"intro\">Traditional Swedish meatballs with mashed potatoes and lingonberries </br></br> Swedish meatballs are as close to a national dish that we have in Sweden. Everyone has their own favourite recipe and many celebrity chefs serve their own versions in their restaurants. Most people will say that their mum’s recipe is the best of course! Why not impress your friends and cook your own Swedish meatballs with this easy recipe?  <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br> Fold together bread crumbs, cream, stock and egg and leave to rest for about 5 minutes. Fry the onion in the butter until soft and then mix it with  the breadcrumb-cream. Add salt, pepper and mince and work everything together, with your hands or fork. Try not to work it too much, as this will make the meatballs compact. Take a small piece of mince and fry it  to test the flavours. When satisfied with salt and pepper, roll the rest  of the mince to small balls (about one tablespoon mince per ball) Make sure your hands are wet with water, then the mince won’t stick to your hands. Fry the meatballs until golden brown and thoroughly cooked, then  put aside. </br> Mix cream and the corn starch and then pour this, stock and the soy in the pan where you fried the meatballs. Whisk through the pan and let boil for a couple of minutes. Taste with salt, pepper and jam for a little bit of sweetness. Put the meatballs back to the sauce and serve with mashed potatoes and lingonberry jam, maybe some chopped parsley on top too. </br>  </br> Recipe by Lisa Lemke </div>",
            url: "https://visitsweden.com/what-to-do/food-drink/recipes/traditional-swedish-meatballs-recipe/",
            color: "#8E4849"
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
            description: " <div class=\"recipe-text\"> <img src=\".......\" class=\"recipe_img\" /> <p class=\"intro\">TITLE....... </br>INTRO....... <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>........ </br>  </br> Recipe by ....... </div>",
            url: ".......",
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
            description: " <div class=\"recipe-text\"> <img src=\".......\" class=\"recipe_img\" /> <p class=\"intro\">TITLE....... </br>INTRO....... <p></br> Recipe: </br> 4 portions </br>Ingredients: </br>2 tbs of breadcrumbs </br> 50 ml single cream </br>1 egg </br> 1 tbs concentrated stock from beef, calf or chicken </br> 0.5 finely chopped yellow onion </br> 25 g butter </br> 500 g ground mince (half pork and beef) </br> 1 tsp freshly ground black pepper </br> about 1.5 tsp of salt </br> Butter to fry in </br> Sauce: </br> 2.5 dl double cream </br> 1,5 tsp dark soy </br> 2.5 dl beef stock (not concentrated) </br> 25 g butter </br> 1 tbs corn starch (or something similar) to thicken the sauce with </br> salt and pepper </br> 2 tbs jam from lingonberries or cherries </br> To serve: </br> mashed potatoes </br> lingonberry jam </br> chopped parsley </br> </br> Method: </br>........ </br>  </br> Recipe by ....... </div>",
            url: ".......",
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
    //-------------------------------------------------------- ADD PIN TO COORDINATES OF CAPITAL -----------------------------------------------------
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