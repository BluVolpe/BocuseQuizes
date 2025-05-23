const questions = {
  DinnerMenu: [
    {
      question: "Which dish contains Chicken Consommé, Root Vegetables, Black Truffles, Foie Gras, Mushrooms, and Puff Pastry?",
      choice: [
        "Truffle Soup",
        "Mushroom Tart",
        "Kale Salad",
        "Butter Poached White Asparagus",
      ],
      answer: "Truffle Soup",
      explanation: "Truffle Soup features chicken consommé, root vegetables, black truffles, foie gras, mushrooms, and puff pastry.",
    },
    {
      question: "Which dish includes Avocado, Yogurt, Sprouted Quinoa, Sunflower Seeds, and Sherry Dressing?",
      choice: [
        "Baby Beet Salad",
        "Kale Salad",
        "Charcuterie 'Du Moment'",
        "Steak Tartare",
      ],
      answer: "Baby Beet Salad",
      explanation: "The Baby Beet Salad is made with avocado, yogurt, sprouted quinoa, sunflower seeds, and sherry dressing.",
    },
    {
      question: "Which dish is made with Caramelized Onions, Almond Sable, Mushrooms, Triple Cream Brie, and Truffle Vinaigrette?",
      choice: [
        "Mushroom Tart",
        "Truffle Soup",
        "Matcha Cured Torchon of Foie Gras",
        "Steak Tartare",
      ],
      answer: "Mushroom Tart",
      explanation: "The Mushroom Tart includes caramelized onions, almond sable, mushrooms, triple cream brie, and truffle vinaigrette.",
    },
    {
      question: "Which dish features Radicchio, Spring Peas, Radish, Shaved Broccoli, and Creamy Comté Dressing?",
      choice: [
        "Kale Salad",
        "Baby Beet Salad",
        "Salmon & Caviar",
        "Charcuterie 'Du Moment'",
      ],
      answer: "Kale Salad",
      explanation: "Kale Salad contains radicchio, spring peas, radish, shaved broccoli, and creamy Comté dressing.",
    },
    {
      question: "Which dish is served with Gruyère Waffle, Quail Egg, and Gruyère Crisps?",
      choice: [
        "Steak Tartare",
        "Truffle Soup",
        "Kale Salad",
        "Charcuterie 'Du Moment'",
      ],
      answer: "Steak Tartare",
      explanation: "Steak Tartare is accompanied by Gruyère waffle, quail egg, and Gruyère crisps.",
    },
    {
      question: "Which dish is composed of King Salmon Crudo, Domestic Caviar, Lemon Dijon Dressing, Endives, and Grilled Baguette?",
      choice: [
        "Salmon & Caviar",
        "Mushroom Tart",
        "Butter Poached White Asparagus",
        "Steak Tartare",
      ],
      answer: "Salmon & Caviar",
      explanation: "The Salmon & Caviar dish consists of king salmon crudo, domestic caviar, lemon dijon dressing, endives, and grilled baguette.",
    },
    {
      question: "Which dish includes Strawberry & Rhubarb Compote, Toasted Brioche, and Citrus Gel?",
      choice: [
        "Matcha Cured Torchon of Foie Gras",
        "Truffle Soup",
        "Butter Poached White Asparagus",
        "Charcuterie 'Du Moment'",
      ],
      answer: "Matcha Cured Torchon of Foie Gras",
      explanation: "Matcha Cured Torchon of Foie Gras is paired with strawberry & rhubarb compote, toasted brioche, and citrus gel.",
    },
    {
      question: "Which dish is accompanied by Almond Emulsion, Candied Almonds, Rhubarb, and Black Garlic?",
      choice: [
        "Butter Poached White Asparagus",
        "Mushroom Tart",
        "Steak Tartare",
        "Salmon & Caviar",
      ],
      answer: "Butter Poached White Asparagus",
      explanation: "Butter Poached White Asparagus is served with almond emulsion, candied almonds, rhubarb, and black garlic.",
    },
    {
      question: "Which dish features Braised Fennel, Artichokes, Sunchoke Purée, and Saffron Vanilla Sauce?",
      choice: [
        "Seared Sea Scallops",
        "Braised Lamb Ravioli",
        "Black Olive Poached Halibut",
        "Lobster Cavatelli",
      ],
      answer: "Seared Sea Scallops",
      explanation: "Seared Sea Scallops are served with braised fennel, artichokes, sunchoke purée, and a saffron vanilla sauce.",
    },
    {
      question: "Which dish includes Smoked Berkshire Pork, Charred Caulilini, Apricots, Roquefort Crema, and Pickled Mustard Seed Port Jus?",
      choice: [
        "Côtes de Porc",
        "Grilled Strip Loin Of Beef",
        "Hudson Valley Rohan Duck Breast",
        "Charcoal Grilled Hen Of The Woods Mushroom",
      ],
      answer: "Côtes de Porc",
      explanation: "Côtes de Porc features smoked Berkshire pork with charred caulilini, apricots, Roquefort crema, and pickled mustard seed port jus.",
    },
    {
      question: "Which dish is served with Meyer Lemon Brown Butter, Baby Vegetables, and Mint?",
      choice: [
        "Braised Lamb Ravioli",
        "Seared Sea Scallops",
        "Grilled Strip Loin Of Beef",
        "Black Olive Poached Halibut",
      ],
      answer: "Braised Lamb Ravioli",
      explanation: "Braised Lamb Ravioli comes with meyer lemon brown butter, baby vegetables, and mint.",
    },
    {
      question: "Which dish features Maine Lobster, Peas, Fava Beans, Spring Onions, and Lobster Sabayon?",
      choice: [
        "Lobster Cavatelli",
        "Black Olive Poached Halibut",
        "Côtes de Porc",
        "Charcoal Grilled Hen Of The Woods Mushroom",
      ],
      answer: "Lobster Cavatelli",
      explanation: "Lobster Cavatelli is made with Maine lobster, peas, fava beans, spring onions, and lobster sabayon.",
    },
    {
      question: "Which dish includes Braised Salsify, Stuffed Cabbage, Parsnip Purée, Duck Skin Dukkah, and Cherry Duck Jus?",
      choice: [
        "Hudson Valley Rohan Duck Breast",
        "Côtes de Porc",
        "Grilled Strip Loin Of Beef",
        "Seared Sea Scallops",
      ],
      answer: "Hudson Valley Rohan Duck Breast",
      explanation: "Hudson Valley Rohan Duck Breast comes with braised salsify, stuffed cabbage, parsnip purée, duck skin dukkah, and cherry duck jus.",
    },
    {
      question: "Which dish is served with Potato Rosti, Asparagus, Sauce Béarnaise, Garlic Scapes, and Brandy Peppercorn Sauce?",
      choice: [
        "Grilled Strip Loin Of Beef",
        "Charcoal Grilled Hen Of The Woods Mushroom",
        "Côtes de Porc",
        "Braised Lamb Ravioli",
      ],
      answer: "Grilled Strip Loin Of Beef",
      explanation: "Grilled Strip Loin Of Beef is served with potato rosti, asparagus, sauce béarnaise, garlic scapes, and brandy peppercorn sauce.",
    },
    {
      question: "Which dish features Warm Bean Salad, Basil Pesto, Sauce Vierge, and Potato Purée?",
      choice: [
        "Black Olive Poached Halibut",
        "Lobster Cavatelli",
        "Hudson Valley Rohan Duck Breast",
        "Grilled Strip Loin Of Beef",
      ],
      answer: "Black Olive Poached Halibut",
      explanation: "Black Olive Poached Halibut is accompanied by warm bean salad, basil pesto, sauce vierge, and potato purée.",
    },
    {
      question: "Which dish includes Asparagus, Spring Onions, Baby Potatoes, Kombu Glaze, and Spring Garlic Vinaigrette?",
      choice: [
        "Charcoal Grilled Hen Of The Woods Mushroom",
        "Seared Sea Scallops",
        "Côtes de Porc",
        "Hudson Valley Rohan Duck Breast",
      ],
      answer: "Charcoal Grilled Hen Of The Woods Mushroom",
      explanation: "Charcoal Grilled Hen Of The Woods Mushroom features asparagus, spring onions, baby potatoes, kombu glaze, and spring garlic vinaigrette.",
    },
    {
      question: "Which dessert features Crème Fraîche Cake and Vanilla-Lavender Ice Cream?",
      choice: [
        "Blueberry Lemon Tart",
        "Chocolate Caramel Mousse",
        "Vacherin",
        "Crème Brûlée",
      ],
      answer: "Blueberry Lemon Tart",
      explanation: "The Blueberry Lemon Tart is served with crème fraîche cake and vanilla-lavender ice cream.",
    },
    {
      question: "Which dessert is made with Strawberry Ice Cream, Basil Meringue, Raspberry Sorbet, Honey Chantilly, and Poached Sugar Snap Peas?",
      choice: [
        "Vacherin",
        "Blueberry Lemon Tart",
        "Chocolate Caramel Mousse",
        "Crème Brûlée",
      ],
      answer: "Vacherin",
      explanation: "The Vacherin dessert includes strawberry ice cream, basil meringue, raspberry sorbet, honey chantilly, and poached sugar snap peas.",
    },
    {
      question: "Which dessert contains Salted Caramel Flourless Biscuit, Almond Tuile, and Coffee Ice Cream?",
      choice: [
        "Chocolate Caramel Mousse",
        "Crème Brûlée",
        "Vacherin",
        "Blueberry Lemon Tart",
      ],
      answer: "Chocolate Caramel Mousse",
      explanation: "Chocolate Caramel Mousse is paired with salted caramel flourless biscuit, almond tuile, and coffee ice cream.",
    },
    {
      question: "Which dessert comes with Buckwheat Tuile and Fresh Berries?",
      choice: [
        "Crème Brûlée",
        "Vacherin",
        "Blueberry Lemon Tart",
        "Chocolate Caramel Mousse",
      ],
      answer: "Crème Brûlée",
      explanation: "Crème Brûlée is served with a buckwheat tuile and fresh berries.",
    },
  ],






  BocuseWines: [

    {
      question: "From which region is the Pierre Sparr Crémant d'Alsace Pinot Blanc/Auxerrois?",
      choice: [
        "Alsace",
        "Burgundy",
        "Bordeaux",
        "Provence"
      ],
      answer: "Alsace",
      explanation: "Pierre Sparr Crémant d'Alsace Pinot Blanc/Auxerrois is a sparkling wine from Alsace, France."
    },
    {
      question: "From which region does the Chateau Chesnaie-Moriniere Muscadet come?",
      choice: [
        "Lower Loire (Pays Nantais)",
        "Burgundy",
        "Rhône",
        "Bordeaux"
      ],
      answer: "Lower Loire (Pays Nantais)",
      explanation: "Chateau Chesnaie-Moriniere Muscadet is produced in Pays Nantais, in the Lower Loire Valley of France."
    },
    {
      question: "Which region is home to the Hugel Classic Pinot Gris?",
      choice: [
        "Alsace",
        "Provence",
        "Bordeaux",
        "Beaujolais"
      ],
      answer: "Alsace",
      explanation: "Hugel Classic Pinot Gris is a white wine from Alsace, France."
    },
    {
      question: "The Louis Jadot Mâcon-Villages Chardonnay comes from which French wine region?",
      choice: [
        "Burgundy (Côte de Beaune)",
        "Alsace",
        "Rhône",
        "Loire"
      ],
      answer: "Burgundy (Côte de Beaune)",
      explanation: "Louis Jadot Mâcon-Villages Chardonnay is from the Côte de Beaune, Burgundy, France."
    },
    {
      question: "Bandol Domaine Le Galantin Rosé is produced in which region?",
      choice: [
        "Provence",
        "Bordeaux",
        "Alsace",
        "Loire"
      ],
      answer: "Provence",
      explanation: "Bandol Domaine Le Galantin is a rosé from Bandol, Provence, France."
    },
    {
      question: "Château Larose-Trintaudon Bordeaux Blend comes from which French wine region?",
      choice: [
        "Bordeaux (Haut-Médoc)",
        "Burgundy",
        "Beaujolais",
        "Rhône"
      ],
      answer: "Bordeaux (Haut-Médoc)",
      explanation: "Château Larose-Trintaudon is a Bordeaux Blend from Haut-Médoc, Bordeaux, France."
    },
    {
      question: "Michel Tete ‘Cuvée Tradition’ Gamay is produced in which region?",
      choice: [
        "Beaujolais (Julienas)",
        "Bordeaux",
        "Provence",
        "Alsace"
      ],
      answer: "Beaujolais (Julienas)",
      explanation: "Michel Tete ‘Cuvée Tradition’ Gamay comes from Julienas, in the Beaujolais region of France."
    },
    {
      question: "Vincent Paris Syrah is produced in which region?",
      choice: [
        "Northern Rhône (Crozes-Hermitage)",
        "Burgundy",
        "Bordeaux",
        "Loire"
      ],
      answer: "Northern Rhône (Crozes-Hermitage)",
      explanation: "Vincent Paris Syrah comes from Crozes-Hermitage, in the Northern Rhône Valley, France."
    },
    {
      question: "What is the primary grape variety in Pierre Sparr Crémant d'Alsace?",
      choice: [
        "Pinot Blanc and Auxerrois",
        "Chardonnay",
        "Riesling",
        "Sauvignon Blanc"
      ],
      answer: "Pinot Blanc and Auxerrois",
      explanation: "Pierre Sparr Crémant d'Alsace is a sparkling wine made from Pinot Blanc and Auxerrois grapes."
    },
    {
      question: "Which grape variety is used to make Chateau Chesnaie-Moriniere Muscadet?",
      choice: [
        "Melon de Bourgogne",
        "Chenin Blanc",
        "Sauvignon Blanc",
        "Chardonnay"
      ],
      answer: "Melon de Bourgogne",
      explanation: "Muscadet wines are made from the Melon de Bourgogne grape."
    },
    {
      question: "What is the grape variety in Hugel Classic Pinot Gris?",
      choice: [
        "Pinot Gris",
        "Riesling",
        "Pinot Blanc",
        "Gewürztraminer"
      ],
      answer: "Pinot Gris",
      explanation: "Hugel Classic Pinot Gris is made from the Pinot Gris grape."
    },
    {
      question: "Which grape is used in Louis Jadot Mâcon-Villages?",
      choice: [
        "Chardonnay",
        "Pinot Noir",
        "Sauvignon Blanc",
        "Melon de Bourgogne"
      ],
      answer: "Chardonnay",
      explanation: "Mâcon-Villages wines from Burgundy are made from Chardonnay."
    },
    {
      question: "What grape varieties are found in Bandol Domaine Le Galantin Rosé?",
      choice: [
        "Cinsault, Grenache, Mourvedre",
        "Syrah, Grenache, Carignan",
        "Pinot Noir, Chardonnay",
        "Gamay, Pinot Gris"
      ],
      answer: "Cinsault, Grenache, Mourvedre",
      explanation: "Bandol Domaine Le Galantin Rosé is a blend of Cinsault, Grenache, and Mourvedre."
    },
    {
      question: "What is the wine type of Château Larose-Trintaudon Bordeaux Blend?",
      choice: [
        "Red Blend",
        "White Blend",
        "Rosé",
        "Sparkling"
      ],
      answer: "Red Blend",
      explanation: "Château Larose-Trintaudon is a classic red Bordeaux blend."
    },
    {
      question: "Which grape variety is featured in Michel Tete ‘Cuvée Tradition’ Julienas?",
      choice: [
        "Gamay",
        "Pinot Noir",
        "Syrah",
        "Cabernet Franc"
      ],
      answer: "Gamay",
      explanation: "Julienas, in Beaujolais, produces red wine made from the Gamay grape."
    },
    {
      question: "What is the primary grape in Vincent Paris Syrah?",
      choice: [
        "Syrah",
        "Grenache",
        "Cabernet Sauvignon",
        "Merlot"
      ],
      answer: "Syrah",
      explanation: "Vincent Paris Crozes-Hermitage is made from 100% Syrah grapes."
    },
    {
      question: "Who is the producer of the Crémant d'Alsace Pinot Blanc/Auxerrois on this list?",
      choice: [
        "Pierre Sparr",
        "Louis Jadot",
        "Hugel",
        "Michel Tete"
      ],
      answer: "Pierre Sparr",
      explanation: "Pierre Sparr is the producer of this sparkling wine from Alsace."
    },
    {
      question: "Who produces the Muscadet from Pays Nantais, Lower Loire, France, 2022?",
      choice: [
        "Chateau Chesnaie-Moriniere",
        "Vincent Paris",
        "Bandol Domaine Le Galantin",
        "Hugel"
      ],
      answer: "Chateau Chesnaie-Moriniere",
      explanation: "Chateau Chesnaie-Moriniere is the producer of this Muscadet."
    },
    {
      question: "What is the producer of the Classic Pinot Gris from Alsace, 2023?",
      choice: [
        "Hugel",
        "Pierre Sparr",
        "Louis Jadot",
        "Château Larose-Trintaudon"
      ],
      answer: "Hugel",
      explanation: "Hugel produces the Classic Pinot Gris from Alsace."
    },
    {
      question: "Who is the producer of the Mâcon-Villages Chardonnay from Burgundy, 2022?",
      choice: [
        "Louis Jadot",
        "Pierre Sparr",
        "Michel Tete",
        "Chateau Chesnaie-Moriniere"
      ],
      answer: "Louis Jadot",
      explanation: "Louis Jadot is the famous Burgundy house producing this Mâcon-Villages Chardonnay."
    },
    {
      question: "What is the producer of the Bandol Rosé from Provence, 2023?",
      choice: [
        "Domaine Le Galantin",
        "Vincent Paris",
        "Château Larose-Trintaudon",
        "Pierre Sparr"
      ],
      answer: "Domaine Le Galantin",
      explanation: "Bandol Domaine Le Galantin is the producer of this Provence rosé."
    },
    {
      question: "Who produces the Bordeaux Blend from Haut-Médoc, Bordeaux, 2019?",
      choice: [
        "Château Larose-Trintaudon",
        "Louis Jadot",
        "Hugel",
        "Domaine Le Galantin"
      ],
      answer: "Château Larose-Trintaudon",
      explanation: "Château Larose-Trintaudon is the producer of this classic Bordeaux blend."
    },
    {
      question: "What is the producer of the ‘Cuvée Tradition’ Gamay from Julienas, Beaujolais, 2023?",
      choice: [
        "Michel Tete",
        "Vincent Paris",
        "Louis Jadot",
        "Pierre Sparr"
      ],
      answer: "Michel Tete",
      explanation: "Michel Tete is the producer of the ‘Cuvée Tradition’ Gamay from Julienas."
    },
    {
      question: "Who produces the Syrah from Crozes-Hermitage, Northern Rhône, 2023?",
      choice: [
        "Vincent Paris",
        "Château Larose-Trintaudon",
        "Michel Tete",
        "Domaine Le Galantin"
      ],
      answer: "Vincent Paris",
      explanation: "Vincent Paris is the producer of this Syrah from Crozes-Hermitage."
    },
    {
      question: "What is the vintage of the Pierre Sparr Crémant d'Alsace Pinot Blanc/Auxerrois on this list?",
      choice: [
        "NV (Non-Vintage)",
        "2022",
        "2023",
        "2019"
      ],
      answer: "NV (Non-Vintage)",
      explanation: "Pierre Sparr Crémant d'Alsace on the list is Non-Vintage (NV), as is common for many sparkling wines."
    },
    {
      question: "What is the vintage of Chateau Chesnaie-Moriniere Muscadet on this list?",
      choice: [
        "2022",
        "2023",
        "NV (Non-Vintage)",
        "2019"
      ],
      answer: "2022",
      explanation: "The Chateau Chesnaie-Moriniere Muscadet listed is from the 2022 vintage."
    },
    {
      question: "What vintage is the Hugel Classic Pinot Gris from Alsace on this menu?",
      choice: [
        "2023",
        "2022",
        "2019",
        "NV (Non-Vintage)"
      ],
      answer: "2023",
      explanation: "Hugel Classic Pinot Gris from Alsace is from the 2023 vintage."
    },
    {
      question: "What is the vintage of Louis Jadot Mâcon-Villages Chardonnay, Burgundy, on this list?",
      choice: [
        "2022",
        "2023",
        "2019",
        "NV (Non-Vintage)"
      ],
      answer: "2022",
      explanation: "Louis Jadot Mâcon-Villages Chardonnay is from the 2022 vintage."
    },
    {
      question: "Which vintage is the Bandol Domaine Le Galantin Rosé, Provence, on this menu?",
      choice: [
        "2023",
        "2022",
        "2019",
        "NV (Non-Vintage)"
      ],
      answer: "2023",
      explanation: "Bandol Domaine Le Galantin Rosé, Provence, is from the 2023 vintage."
    },
    {
      question: "Château Larose-Trintaudon Bordeaux Blend, Haut-Médoc, Bordeaux is from which vintage?",
      choice: [
        "2019",
        "2022",
        "2023",
        "NV (Non-Vintage)"
      ],
      answer: "2019",
      explanation: "Château Larose-Trintaudon Bordeaux Blend is from the 2019 vintage."
    },
    {
      question: "Michel Tete ‘Cuvée Tradition’ Gamay, Julienas, Beaujolais is from which vintage?",
      choice: [
        "2023",
        "2022",
        "2019",
        "NV (Non-Vintage)"
      ],
      answer: "2023",
      explanation: "Michel Tete ‘Cuvée Tradition’ Gamay, Julienas, Beaujolais is from the 2023 vintage."
    },
    {
      question: "What is the vintage of Vincent Paris Syrah, Crozes-Hermitage, Northern Rhône?",
      choice: [
        "2023",
        "2022",
        "2019",
        "NV (Non-Vintage)"
      ],
      answer: "2023",
      explanation: "Vincent Paris Syrah, Crozes-Hermitage, Northern Rhône is from the 2023 vintage."
    },
    {
      question: "What type of wine is Pierre Sparr Crémant d'Alsace Pinot Blanc/Auxerrois?",
      choice: [
        "Sparkling",
        "White",
        "Rosé",
        "Red"
      ],
      answer: "Sparkling",
      explanation: "Pierre Sparr Crémant d'Alsace is a sparkling wine from Alsace."
    },
    {
      question: "What type of wine is Chateau Chesnaie-Moriniere Muscadet?",
      choice: [
        "White",
        "Red",
        "Sparkling",
        "Rosé"
      ],
      answer: "White",
      explanation: "Muscadet is a white wine from the Loire Valley."
    },
    {
      question: "Hugel Classic Pinot Gris from Alsace is what style of wine?",
      choice: [
        "White",
        "Red",
        "Rosé",
        "Sparkling"
      ],
      answer: "White",
      explanation: "Pinot Gris from Alsace is a white wine."
    },
    {
      question: "What type of wine is Louis Jadot Mâcon-Villages Chardonnay?",
      choice: [
        "White",
        "Red",
        "Rosé",
        "Sparkling"
      ],
      answer: "White",
      explanation: "Mâcon-Villages Chardonnay is a white wine from Burgundy."
    },
    {
      question: "Bandol Domaine Le Galantin (Cinsault, Grenache, Mourvedre) is which type of wine?",
      choice: [
        "Rosé",
        "Red",
        "White",
        "Sparkling"
      ],
      answer: "Rosé",
      explanation: "Bandol Domaine Le Galantin is a rosé wine from Provence."
    },
    {
      question: "Château Larose-Trintaudon Bordeaux Blend from Haut-Médoc is what style of wine?",
      choice: [
        "Red",
        "White",
        "Rosé",
        "Sparkling"
      ],
      answer: "Red",
      explanation: "Château Larose-Trintaudon is a red Bordeaux blend."
    },
    {
      question: "Michel Tete ‘Cuvée Tradition’ Gamay from Julienas, Beaujolais is which type of wine?",
      choice: [
        "Red",
        "White",
        "Rosé",
        "Sparkling"
      ],
      answer: "Red",
      explanation: "Julienas, Beaujolais produces red wines from Gamay."
    },
    {
      question: "Vincent Paris Syrah from Crozes-Hermitage, Northern Rhône is what style of wine?",
      choice: [
        "Red",
        "White",
        "Rosé",
        "Sparkling"
      ],
      answer: "Red",
      explanation: "Crozes-Hermitage in the Northern Rhône is known for its red Syrah wines."
    },

  ],







  WinesBeverage: [
    {
      question: "According to Escoffier (1928), which wine should be paired with red meat?",
      choice: [
        "Burgundy",
        "Champagne",
        "Riesling",
        "Chianti"
      ],
      answer: "Burgundy",
      explanation: "Escoffier recommended classic pairings like red meat and Burgundy."
    },
    {
      question: "Which guide first recommended pairing wines with dishes in the early 20th century?",
      choice: [
        "Michelin Guide",
        "Zagat Guide",
        "Parker Guide",
        "Wine Spectator"
      ],
      answer: "Michelin Guide",
      explanation: "The Michelin Guide began recommending wine pairings in 1931."
    },
    {
      question: "What systematic approach to food and wine pairing was introduced by Pierre Andrieu in 1939?",
      choice: [
        "A method for pairing wine and food based on characteristics and function",
        "The use of only regional wines with local food",
        "Matching wine color to food color",
        "Focusing only on sweet wines for desserts"
      ],
      answer: "A method for pairing wine and food based on characteristics and function",
      explanation: "Pierre Andrieu's systematic approach influences modern pairing."
    },
    {
      question: "Which characteristics of wine are important to consider when pairing with food?",
      choice: [
        "Aroma & flavor, body, texture, acidity, tannins, sweetness, bitterness",
        "Color and price",
        "Alcohol content and label design",
        "Bottle shape and region only"
      ],
      answer: "Aroma & flavor, body, texture, acidity, tannins, sweetness, bitterness",
      explanation: "Pairing depends on multiple sensory and structural aspects of wine."
    },
    {
      question: "Which characteristics of food are important to consider in wine pairing?",
      choice: [
        "Ingredients, preparation method, flavor intensity, acid/fat, spice/salt, texture, progression, accompaniments, purpose",
        "Cooking time and price",
        "Color and portion size",
        "Calories and region"
      ],
      answer: "Ingredients, preparation method, flavor intensity, acid/fat, spice/salt, texture, progression, accompaniments, purpose",
      explanation: "Multiple food factors influence the best wine match."
    },
    {
      question: "What is the difference between complementary and contrasting pairings?",
      choice: [
        "Complementary matches similar flavors or textures; contrasting balances or opposes flavors or textures",
        "Both only match food and wine by color",
        "Complementary uses only white wine; contrasting uses only red wine",
        "Contrasting is never used in modern pairing"
      ],
      answer: "Complementary matches similar flavors or textures; contrasting balances or opposes flavors or textures",
      explanation: "Both strategies are used for effective pairing."
    },
    {
      question: "Which of these is an example of a complementary pairing?",
      choice: [
        "Roasted lobster tail with oaked Chardonnay",
        "Goat cheese with Sauvignon Blanc",
        "Spicy curry with sweet Riesling",
        "Pork belly with Champagne"
      ],
      answer: "Roasted lobster tail with oaked Chardonnay",
      explanation: "Matching richness and flavors is a complementary strategy."
    },
    {
      question: "Which of these is an example of a contrasting pairing?",
      choice: [
        "Goat cheese with Sauvignon Blanc",
        "Lamb with Merlot",
        "Lasagna with Chianti",
        "Oysters with Champagne"
      ],
      answer: "Goat cheese with Sauvignon Blanc",
      explanation: "The acidity in Sauvignon Blanc cuts through the fat of the goat cheese—a classic contrast."
    },
    {
      question: "How does poaching or steaming food affect wine choice?",
      choice: [
        "Requires a light white wine like Chenin Blanc or Pinot Grigio, or a light fruity red",
        "Needs a full-bodied, tannic red",
        "Pairs only with dessert wines",
        "Pairs best with sparkling wines"
      ],
      answer: "Requires a light white wine like Chenin Blanc or Pinot Grigio, or a light fruity red",
      explanation: "Gentle methods pair well with delicate, non-tannic, less acidic wines."
    },
    {
      question: "Which wines are recommended with fried foods and why?",
      choice: [
        "Chardonnay, Riesling, or Pinot Noir for their acidity to cut through oil",
        "High-tannin reds for structure",
        "Sweet wines for balance",
        "Fortified wines to add body"
      ],
      answer: "Chardonnay, Riesling, or Pinot Noir for their acidity to cut through oil",
      explanation: "Acidity in these wines contrasts with fried food’s richness."
    },
    {
      question: "What is a key wine pairing guideline when grilling beef?",
      choice: [
        "Use tannic reds like Barolo or Syrah",
        "Always serve sparkling wine",
        "Pair only with dessert wines",
        "Serve with light-bodied white wines"
      ],
      answer: "Use tannic reds like Barolo or Syrah",
      explanation: "The tannins in these reds balance the fat and flavor of grilled beef."
    },
    {
      question: "How does BBQ sauce affect wine pairing?",
      choice: [
        "Adds sweetness, so pair with less tannic reds like Zinfandel, Merlot, or New World Tempranillo",
        "Makes white wine more acidic",
        "Requires only dry sparkling wine",
        "Always needs a fortified wine"
      ],
      answer: "Adds sweetness, so pair with less tannic reds like Zinfandel, Merlot, or New World Tempranillo",
      explanation: "Too much tannin can clash with the sweetness in BBQ sauces."
    },
    {
      question: "When pairing with dishes containing strong marinades, which wine styles work best?",
      choice: [
        "Bold-flavored wines like NZ Sauvignon Blanc, Chablis, fruity Grenache or Tempranillo",
        "Light rosé only",
        "Sweet dessert wines",
        "Old Bordeaux reds"
      ],
      answer: "Bold-flavored wines like NZ Sauvignon Blanc, Chablis, fruity Grenache or Tempranillo",
      explanation: "Strong flavors need equally bold wines to stand out."
    },
    {
      question: "What is a key consideration when pairing wine with reduction sauces?",
      choice: [
        "Choose a wine that matches the intensity of the sauce; ideally, drink the wine used in the sauce",
        "Use a very sweet wine to balance",
        "Always serve Champagne",
        "Pick any wine regardless of sauce ingredients"
      ],
      answer: "Choose a wine that matches the intensity of the sauce; ideally, drink the wine used in the sauce",
      explanation: "This creates a seamless flavor bridge between sauce and wine."
    },
    {
      question: "What wine style is recommended for stews with beer or stout?",
      choice: [
        "Low tannin reds like Merlot, Beaujolais, or red Burgundy",
        "High-acid white wines",
        "Sweet sparkling wines",
        "Full-bodied, tannic reds"
      ],
      answer: "Low tannin reds like Merlot, Beaujolais, or red Burgundy",
      explanation: "These reds don't overpower the beer flavors in the stew."
    },
    {
      question: "How does sweet food (desserts, chocolate) affect wine?",
      choice: [
        "Can make dry wine taste more acidic and bitter",
        "Enhances wine’s fruitiness",
        "Has no effect",
        "Always improves the wine's tannins"
      ],
      answer: "Can make dry wine taste more acidic and bitter",
      explanation: "Pairing sweeter wines with sweet food avoids this clash."
    },
    {
      question: "What happens when wine is paired with sour foods (citrus, vinegar, pickles)?",
      choice: [
        "Makes the wine taste sweeter if the food has more acid than the wine",
        "Makes wine taste drier",
        "Enhances bitterness",
        "Has no effect"
      ],
      answer: "Makes the wine taste sweeter if the food has more acid than the wine",
      explanation: "Food with higher acidity than the wine makes the wine taste less acidic."
    },
    {
      question: "What is a typical effect of salty foods on wine pairing?",
      choice: [
        "Reduces tannins and can make wine taste sweeter",
        "Always increases bitterness",
        "No effect",
        "Makes the wine taste sour"
      ],
      answer: "Reduces tannins and can make wine taste sweeter",
      explanation: "Salt can soften tannins and highlight sweetness in wine."
    },
    {
      question: "Which food type can make wine taste metallic or more bitter and tannic if not carefully matched?",
      choice: [
        "Umami-rich foods (beef, MSG, shiitake mushrooms)",
        "Grilled vegetables",
        "Sweet desserts",
        "Salty snacks"
      ],
      answer: "Umami-rich foods (beef, MSG, shiitake mushrooms)",
      explanation: "These can clash with tannic or under-acidified wines."
    },
    {
      question: "Which wine would best complement oysters?",
      choice: [
        "Champagne",
        "Cabernet Sauvignon",
        "Chianti",
        "Zinfandel"
      ],
      answer: "Champagne",
      explanation: "The acidity and bubbles of Champagne perfectly complement oysters."
    },
    {
      question: "What is a classic pairing for lamb?",
      choice: [
        "Merlot",
        "Sauvignon Blanc",
        "Riesling",
        "Zinfandel"
      ],
      answer: "Merlot",
      explanation: "The tannins and structure of Merlot pair beautifully with lamb."
    },
    {
      question: "Which wine is traditionally paired with lasagna?",
      choice: [
        "Chianti",
        "Chardonnay",
        "Pinot Grigio",
        "Riesling"
      ],
      answer: "Chianti",
      explanation: "Chianti's acidity and flavor match the richness of lasagna."
    },
    {
      question: "What wine is a classic match for spicy food?",
      choice: [
        "Riesling",
        "Cabernet Sauvignon",
        "Syrah",
        "Chardonnay"
      ],
      answer: "Riesling",
      explanation: "Riesling's sweetness and acidity can balance and complement spicy dishes."
    },
    {
      question: "What are two primary pairing approaches used in food and wine pairing?",
      choice: [
        "Complementary and contrasting",
        "Traditional and modern",
        "Heavy and light",
        "Regional and international"
      ],
      answer: "Complementary and contrasting",
      explanation: "Both approaches are widely used for successful pairings."
    },
    {
      question: "Why is 'progression' important in planning a wine pairing menu?",
      choice: [
        "To ensure each course flows logically, building up from lighter to heavier wines and foods",
        "To serve all wines at the same time",
        "To use only one wine for the entire meal",
        "To avoid using sweet wines"
      ],
      answer: "To ensure each course flows logically, building up from lighter to heavier wines and foods",
      explanation: "Progression maintains interest and balance throughout the meal."
    },

    {
      question: "Wine should be as sweet or sweeter than the dish it is paired with.",
      choice: [
        "True",
        "False",
      ],
      answer: "True",
      explanation: "Wine should be as sweet or sweeter than the dish to avoid making the wine taste sour or bitter.",
    },
    {
      question: "Which pairing makes sense?",
      choice: [
        "Burgundy Pinot Noir with Grilled Salmon",
        "California Zinfandel with Vegetable Ramen",
        "Dry Semillon with Pad Thai",
        "Sauternes with Arugula Salad"
      ],
      answer: "Burgundy Pinot Noir with Grilled Salmon",
      explanation: "Burgundy Pinot Noir has enough acidity and lightness to pair well with grilled salmon, making it a classic match.",
    },
    {
      question: "Which of the following wines will stand up to/match the intensity of a butter-poached Maine lobster roll?",
      choice: [
        "Malbec from Argentina",
        "California Zinfandel",
        "Barrel Fermented Chardonnay",
        "Stainless Steel Riesling"
      ],
      answer: "Barrel Fermented Chardonnay",
      explanation: "Barrel Fermented Chardonnay has enough body and richness to match the intensity of a butter-poached lobster roll.",
    },
    {
      question: "Which of the following Dosage is the sweetest?",
      choice: [
        "Brut",
        "Demi-Sec",
        "Sec",
        "Extra-Dry"
      ],
      answer: "Demi-Sec",
      explanation: "Demi-Sec is a sparkling wine style that is noticeably sweet and sweeter than Brut, Sec, or Extra-Dry.",
    },
    {
      question: "Lactic Acid in wine comes from:",
      choice: [
        "Malolactic Conversion",
        "Vintage",
        "Terroir",
        "Grape Varietal"
      ],
      answer: "Malolactic Conversion",
      explanation: "Malolactic conversion is a process that turns sharper malic acid into softer lactic acid in wine.",
    },
    {
      question: "Which wine would contrast the flavors of Morel Mushroom Risotto?",
      choice: [
        "French Cabernet",
        "Barrel Fermented Chardonnay",
        "Chianti",
        "Oregon Pinot Noir"
      ],
      answer: "Oregon Pinot Noir",
      explanation: "Oregon Pinot Noir's acidity and bright fruit flavors contrast with the creamy, earthy notes of morel mushroom risotto.",
    },
    {
      question: "What is the process where yeast converts sugar in grape juice into alcohol and carbon dioxide?",
      choice: [
        "Fermentation",
        "Maceration",
        "Chaptalization",
        "Saignee",
      ],
      answer: "Fermentation",
      explanation: "Fermentation is a crucial winemaking process where natural or added yeast consumes the sugars in grape juice (must), producing alcohol, carbon dioxide, and heat. This transformation not only creates alcohol but also develops key aromas and flavors unique to each wine.",
    },
    {
      question: "Which term refers to soaking grape skins in juice to extract color, flavor, and tannin?",
      choice: [
        "Vinification",
        "Maceration",
        "Pump Over",
        "Punch Down",
      ],
      answer: "Maceration",
      explanation: "Maceration is the process of soaking the grape skins, seeds, and sometimes stems in the grape juice to extract phenolic compounds—primarily color, tannins, and flavor. The length and technique of maceration greatly influence the wine's structure, mouthfeel, and aging potential, especially in red winemaking.",
    },
    {
      question: "What winemaking technique involves whole grapes fermenting in a carbon dioxide-rich environment, producing fruity, low-tannin wines?",
      choice: [
        "Saignee",
        "Chaptalization",
        "Carbonic Maceration",
        "Cap Management",
      ],
      answer: "Carbonic Maceration",
      explanation: "Carbonic maceration is a unique fermentation method where whole, uncrushed grape clusters are placed in a sealed vessel filled with carbon dioxide. This environment triggers intracellular fermentation within the grape, leading to fresh, intensely fruity wines with low tannins, often associated with Beaujolais Nouveau.",
    },
    {
      question: "What is the overall process of turning grapes into wine called?",
      choice: [
        "Cap Management",
        "Vinification",
        "Malolactic Conversion",
        "Punch Down",
      ],
      answer: "Vinification",
      explanation: "Vinification is the comprehensive term for all winemaking processes, from harvesting grapes to bottling the finished wine. It includes crushing, fermentation, maceration, pressing, aging, and clarification—each step shaping the final character of the wine.",
    },
    {
      question: "Which term describes the set of techniques used to manage the skins, seeds, and stems that rise to the top during red wine fermentation?",
      choice: [
        "Pump Over",
        "Chaptalization",
        "Cap Management",
        "Saignee",
      ],
      answer: "Cap Management",
      explanation: "Cap management refers to a range of techniques—such as punch downs and pump overs—used during red wine fermentation to manage the 'cap' of grape solids that float to the top. Effective cap management maximizes color, flavor, and tannin extraction while preventing spoilage and promoting even fermentation.",
    },
    {
      question: "What is the winemaking process of pumping juice or wine from the bottom of the tank over the top of the cap?",
      choice: [
        "Punch Down",
        "Pump Over",
        "Saignee",
        "Maceration",
      ],
      answer: "Pump Over",
      explanation: "Pump over, or 'remontage,' is a technique where fermenting juice is drawn from the bottom of the fermentation vessel and pumped over the floating cap of skins and solids. This process helps ensure thorough extraction of color, flavor, and tannins, and helps regulate temperature and oxygen exposure during fermentation.",
    },
    {
      question: "What technique involves physically pushing the floating grape skins back down into the fermenting juice?",
      choice: [
        "Punch Down",
        "Pump Over",
        "Cap Management",
        "Chaptalization",
      ],
      answer: "Punch Down",
      explanation: "Punch down, or 'pigeage,' is a manual or mechanical process of submerging the cap of grape skins, seeds, and stems back into the fermenting must. This helps to enhance extraction and prevent the cap from drying out or developing unwanted microbial growth.",
    },
    {
      question: "What is the process of adding sugar to grape juice before or during fermentation to increase the final alcohol level?",
      choice: [
        "Chaptalization",
        "Malolactic Conversion",
        "Saignee",
        "Maceration",
      ],
      answer: "Chaptalization",
      explanation: "Chaptalization is the controlled addition of sugar to unfermented grape must to boost alcohol levels in the finished wine, typically used in cooler wine regions where grapes may not fully ripen. This practice is regulated or restricted in some regions to preserve authenticity and balance in the wine.",
    },
    {
      question: "Which process converts sharper malic acid into softer lactic acid, making the wine taste creamier?",
      choice: [
        "Maceration",
        "Fermentation",
        "Malolactic Conversion",
        "Vinification",
      ],
      answer: "Malolactic Conversion",
      explanation: "Malolactic conversion (MLF) is a secondary bacterial fermentation where lactic acid bacteria transform tart malic acid into softer lactic acid. This process decreases acidity, softens mouthfeel, and adds complexity—often contributing buttery or creamy notes to wines like Chardonnay.",
    },
    {
      question: "What is the technique where some juice is 'bled off' from red wine fermentation, often used to make rosé?",
      choice: [
        "Pump Over",
        "Saignee",
        "Carbonic Maceration",
        "Punch Down",
      ],
      answer: "Saignee",
      explanation: "Saignee, meaning 'to bleed' in French, is a method where a portion of juice is drained from a tank of macerating red grapes to concentrate the remaining must and produce a rosé wine. This technique increases color and tannin in the red wine while creating a delicate, dry rosé from the bled juice.",
    },
    {
      question: "What does the term 'diurnal shift' refer to in viticulture?",
      choice: [
        "The difference between day and night temperatures",
        "The amount of sunlight during harvest",
        "Seasonal changes in rainfall",
        "Average wind speed in the vineyard",
      ],
      answer: "The difference between day and night temperatures",
      explanation: "Diurnal shift is the variation between daytime highs and nighttime lows. Large diurnal shifts help grapes ripen with balanced sugar and acidity, as warm days develop sugars and flavors, while cool nights preserve acidity and slow ripening, leading to better-structured wines.",
    },
    {
      question: "Which term describes the combination of soil, climate, topography, and other environmental factors that give wine its unique character?",
      choice: [
        "Brix",
        "Structure",
        "Terroir",
        "Grafting",
      ],
      answer: "Terroir",
      explanation: "Terroir refers to the complete natural environment in which a vine grows, including soil type, climate, elevation, slope, and surrounding vegetation. Terroir influences the flavor profile, aroma, and style of the resulting wine, making wines from the same grape variety taste distinct in different locations.",
    },
    {
      question: "What does 'Brix' measure in viticulture?",
      choice: [
        "Soil pH",
        "Sugar content in grapes",
        "Tannin levels in wine",
        "Water retention in soil",
      ],
      answer: "Sugar content in grapes",
      explanation: "Brix is a scale used to measure the sugar concentration in grape juice. Winemakers use Brix readings to determine harvest time, as sugar levels directly affect potential alcohol and balance in the finished wine. A higher Brix means riper, sweeter grapes and generally more alcohol after fermentation.",
    },
    {
      question: "In wine tasting, what does the term 'structure' refer to?",
      choice: [
        "The shape of the wine bottle",
        "A wine's balance of acidity, tannin, alcohol, and body",
        "The age of the wine",
        "The arrangement of vines in a vineyard",
      ],
      answer: "A wine's balance of acidity, tannin, alcohol, and body",
      explanation: "Structure refers to the overall framework of a wine, determined by key components such as acidity, tannins, alcohol, and body. A well-structured wine feels balanced and harmonious, while poor structure can result in a wine that feels flat, sharp, or disjointed on the palate.",
    },
    {
      question: "What is the main difference between climate and weather in viticulture?",
      choice: [
        "Climate is long-term regional patterns; weather is day-to-day conditions",
        "Climate describes rainfall only; weather describes temperature only",
        "Climate refers to soil temperature; weather refers to air temperature",
        "Climate only affects red grapes; weather only affects white grapes",
      ],
      answer: "Climate is long-term regional patterns; weather is day-to-day conditions",
      explanation: "Climate is the typical pattern of temperature, rainfall, and other weather factors over many years in a wine region. Weather refers to short-term atmospheric conditions that can change daily or even hourly, and can have dramatic effects on a single vintage.",
    },
    {
      question: "What is 'Vitis Vinifera'?",
      choice: [
        "A grapevine disease",
        "The most important species of wine grapevine",
        "A rootstock for American vineyards",
        "A method of canopy management",
      ],
      answer: "The most important species of wine grapevine",
      explanation: "Vitis Vinifera is the primary species of grapevine used for most quality wine production worldwide. Classic varieties like Cabernet Sauvignon, Chardonnay, and Pinot Noir all belong to this species, prized for its versatility and ability to produce a wide range of wine styles.",
    },
    {
      question: "What is Phylloxera?",
      choice: [
        "A soil nutrient",
        "A grapevine pest that attacks the roots",
        "A style of pruning",
        "A natural yeast used in fermentation",
      ],
      answer: "A grapevine pest that attacks the roots",
      explanation: "Phylloxera is a microscopic insect that feeds on the roots of grapevines, causing vine death and devastating vineyards. Native to North America, it nearly destroyed European vineyards in the 19th century, and is controlled today by grafting Vitis Vinifera vines onto resistant rootstocks.",
    },
    {
      question: "Why is grafting used in modern viticulture?",
      choice: [
        "To increase grape yield",
        "To enhance sugar content in grapes",
        "To protect vines from pests like Phylloxera",
        "To accelerate fermentation",
      ],
      answer: "To protect vines from pests like Phylloxera",
      explanation: "Grafting is the process of joining a Vitis Vinifera grapevine (the scion) onto the rootstock of a different, often American, vine species that is resistant to soil pests like Phylloxera. This method allows winemakers to grow classic grape varieties in soils threatened by these pests.",
    },
    {
      question: "Which white grape variety is known for producing wines with a light, crisp style and is sometimes called 'Pinot Grigio' in Italy?",
      choice: [
        "Pinot Gris",
        "Chardonnay",
        "Sauvignon Blanc",
        "Riesling",
      ],
      answer: "Pinot Gris",
      explanation: "Pinot Gris, called Pinot Grigio in Italy, is a white grape that produces wines ranging from light and crisp to richer, spiced styles. In Alsace, it's more full-bodied, while Italian versions are often light, fresh, and citrusy. It's valued for its versatility and food-friendliness.",
    },
    {
      question: "Which grape is Austria's most important white variety, known for producing dry, food-friendly wines with white pepper and citrus notes?",
      choice: [
        "Gruner Veltliner",
        "Chenin Blanc",
        "Chardonnay",
        "Gewurztraminer",
      ],
      answer: "Gruner Veltliner",
      explanation: "Gruner Veltliner is Austria’s signature white grape, known for its lively acidity, green apple, citrus, and distinctive white pepper flavors. It’s especially versatile with food, handling everything from salads to spicy Asian cuisine, and is a staple of Austrian wine culture.",
    },
    {
      question: "Which aromatic white grape is famous for its intensely floral, spicy, and lychee-scented wines, often with a pinkish skin?",
      choice: [
        "Gewurztraminer",
        "Riesling",
        "Pinot Gris",
        "Chardonnay",
      ],
      answer: "Gewurztraminer",
      explanation: "Gewurztraminer is easily recognized for its perfumed aromas of rose petal, lychee, and spice, often with a hint of sweetness. Its pinkish skins contribute to a deeper color in the wine. The grape excels in Alsace, France, and is ideal for lovers of bold, aromatic white wines.",
    },
    {
      question: "Which white grape is planted worldwide and can produce a range of wine styles, from lean and crisp to rich and buttery, often showing flavors of apple, citrus, or tropical fruit?",
      choice: [
        "Chardonnay",
        "Sauvignon Blanc",
        "Pinot Gris",
        "Chenin Blanc",
      ],
      answer: "Chardonnay",
      explanation: "Chardonnay is one of the world’s most widely planted white grapes. It is extremely adaptable, thriving in many climates. Styles range from crisp and mineral-driven in Chablis to full-bodied and oaky in California or Burgundy. Chardonnay is the main white grape in Champagne as well.",
    },
    {
      question: "Which white grape is famous for high acidity, floral and mineral aromas, and can produce wines that range from bone dry to lusciously sweet, especially in Germany?",
      choice: [
        "Riesling",
        "Gewurztraminer",
        "Chardonnay",
        "Pinot Gris",
      ],
      answer: "Riesling",
      explanation: "Riesling is highly regarded for its ability to express terroir, with naturally high acidity, floral, and mineral notes. It is made in a variety of styles from dry to sweet, with top examples from Germany, Alsace, and Austria. Riesling ages exceptionally well thanks to its acidity.",
    },
    {
      question: "Which white grape is associated with bright acidity, aromas of grass, citrus, and gooseberry, and is a key variety in New Zealand’s Marlborough region and France’s Loire Valley?",
      choice: [
        "Sauvignon Blanc",
        "Chenin Blanc",
        "Gruner Veltliner",
        "Chardonnay",
      ],
      answer: "Sauvignon Blanc",
      explanation: "Sauvignon Blanc is known for its zesty acidity and pronounced aromas of green herbs, lime, and gooseberry. It thrives in cool climates like New Zealand’s Marlborough and France’s Loire Valley (Sancerre, Pouilly-Fumé), making refreshing, aromatic wines that pair well with seafood and salads.",
    },
    {
      question: "Which versatile French white grape is the basis for Vouvray and can produce sparkling, dry, and sweet wines, often showing notes of quince, honey, and apple with naturally high acidity?",
      choice: [
        "Chenin Blanc",
        "Pinot Gris",
        "Chardonnay",
        "Riesling",
      ],
      answer: "Chenin Blanc",
      explanation: "Chenin Blanc is most famous in the Loire Valley, France, particularly for Vouvray. Its high acidity allows it to be made in a variety of styles—sparkling, dry, off-dry, and dessert wines. Chenin Blanc often displays flavors of apple, quince, and honey, and can age beautifully.",
    },
    {
      question: "Which thin-skinned red grape is known for light color, delicate tannins, and flavors of red cherry and earth, especially from Burgundy and Oregon?",
      choice: [
        "Pinot Noir",
        "Cabernet Sauvignon",
        "Syrah",
        "Merlot",
      ],
      answer: "Pinot Noir",
      explanation: "Pinot Noir produces elegant, light- to medium-bodied wines with bright acidity, soft tannins, and flavors of red cherry, raspberry, and earth. It's challenging to grow but highly prized, especially in Burgundy, Oregon, and New Zealand.",
    },
    {
      question: "Which grape is the world's most widely planted red variety, known for producing full-bodied wines with firm tannins, high acidity, and notes of blackcurrant, cedar, and sometimes green bell pepper?",
      choice: [
        "Cabernet Sauvignon",
        "Malbec",
        "Zinfandel",
        "Carmenere",
      ],
      answer: "Cabernet Sauvignon",
      explanation: "Cabernet Sauvignon is famous for its structure, longevity, and black fruit flavors. Originating from Bordeaux, it is also dominant in Napa Valley and other top wine regions. Its thick skins contribute to deep color and strong tannins.",
    },
    {
      question: "Which red grape is prized for its soft tannins, plummy fruit, and velvety texture, and is a major blending partner in Bordeaux?",
      choice: [
        "Merlot",
        "Cabernet Franc",
        "Syrah",
        "Nebbiolo",
      ],
      answer: "Merlot",
      explanation: "Merlot makes round, supple wines with flavors of plum, black cherry, and chocolate. Its soft tannins and approachable style make it a key grape in Bordeaux blends and popular worldwide.",
    },
    {
      question: "Which grape is a parent of Cabernet Sauvignon, known for its lighter body, herbal notes, and red fruit flavors, and is a key component in Bordeaux blends?",
      choice: [
        "Cabernet Franc",
        "Pinot Noir",
        "Sangiovese",
        "Zinfandel",
      ],
      answer: "Cabernet Franc",
      explanation: "Cabernet Franc offers fresh acidity, red currant and herbal notes, and softer tannins compared to Cabernet Sauvignon. It's essential in Bordeaux and excels in the Loire Valley, producing elegant and food-friendly reds.",
    },
    {
      question: "Which red grape, once mistaken for Merlot, is a specialty of Chile, producing wines with deep color, soft tannins, and flavors of green pepper, spice, and dark fruit?",
      choice: [
        "Carmenere",
        "Malbec",
        "Syrah",
        "Gamay",
      ],
      answer: "Carmenere",
      explanation: "Carmenere, originally from Bordeaux but now most widely grown in Chile, produces wines with rich dark fruit, gentle tannins, and distinctive green, peppery, or smoky notes due to pyrazines.",
    },
    {
      question: "Which grape, originally from France but now synonymous with Argentina, is famous for deep color, bold structure, and flavors of black plum, blackberry, and cocoa?",
      choice: [
        "Malbec",
        "Cabernet Sauvignon",
        "Merlot",
        "Syrah",
      ],
      answer: "Malbec",
      explanation: "Malbec thrives in Argentina's Mendoza region, making powerful, deeply colored wines with velvety tannins and ripe black fruit. In France, it is known as Cot and is one of the main grapes in Cahors.",
    },
    {
      question: "Which Italian red grape is the primary variety in Chianti, known for high acidity, firm tannins, and flavors of cherry, dried herbs, and sometimes leather?",
      choice: [
        "Sangiovese",
        "Nebbiolo",
        "Gamay",
        "Zinfandel",
      ],
      answer: "Sangiovese",
      explanation: "Sangiovese is Italy’s most widely planted red grape, central to Chianti and Brunello di Montalcino. Its wines are bright and savory, with tart cherry, herbal, and earthy notes.",
    },
    {
      question: "Which Italian grape is behind Barolo and Barbaresco, known for high tannin, high acidity, and complex aromas of tar, rose, and red fruit?",
      choice: [
        "Nebbiolo",
        "Sangiovese",
        "Merlot",
        "Cabernet Franc",
      ],
      answer: "Nebbiolo",
      explanation: "Nebbiolo is the noble grape of Piedmont, Italy, producing legendary, age-worthy wines such as Barolo and Barbaresco, with aromas of rose, tar, and red berries, and a reputation for firm tannins and longevity.",
    },
    {
      question: "Which bold red grape is famous in California, making high-alcohol, jammy wines with notes of blackberry, black pepper, and sometimes spice or raisin?",
      choice: [
        "Zinfandel",
        "Syrah",
        "Malbec",
        "Pinot Noir",
      ],
      answer: "Zinfandel",
      explanation: "Zinfandel, thought to be genetically identical to Primitivo from Italy, is California's signature grape, making spicy, fruit-forward, and often powerful wines with high alcohol and a distinct jammy character.",
    },
    {
      question: "Which grape is also called Shiraz in Australia and is known for producing deeply colored, full-bodied wines with flavors of dark berries, black pepper, and sometimes smoky or meaty notes?",
      choice: [
        "Syrah",
        "Cabernet Sauvignon",
        "Gamay",
        "Carmenere",
      ],
      answer: "Syrah",
      explanation: "Syrah, known as Shiraz in Australia, is a major variety in the Rhône Valley and produces wines that are rich and spicy, often with notes of black fruit, pepper, and savory or gamey undertones.",
    },
    {
      question: "Which light-bodied red grape is used for Beaujolais wines, known for vibrant acidity, low tannin, and juicy red fruit flavors?",
      choice: [
        "Gamay",
        "Pinot Noir",
        "Nebbiolo",
        "Zinfandel",
      ],
      answer: "Gamay",
      explanation: "Gamay is the star grape of France's Beaujolais region. It produces lively, fruity reds meant for early drinking, with flavors of raspberry, cherry, and sometimes banana from carbonic maceration.",
    },
    {
      question: "Which type of climate generally produces wines with a fuller body?",
      choice: [
        "Warmer climate",
        "Cooler climate",

      ],
      answer: "Warmer climate",
      explanation: "Grapes from warmer climates develop more sugar and ripeness, resulting in fuller-bodied wines.",
    },
    {
      question: "Wines from which climate are likely to have a lighter color?",
      choice: [
        "Cooler climate",
        "Warmer climate",

      ],
      answer: "Cooler climate",
      explanation: "Cooler climates result in less pigment development in grape skins, so wines are typically lighter in color.",
    },
    {
      question: "More intense flavors in wine are generally the result of grapes grown in which climate?",
      choice: [
        "Warmer climate",
        "Cooler climate",

      ],
      answer: "Warmer climate",
      explanation: "Warm climates produce riper, more concentrated flavors in grapes, leading to intense wine flavors.",
    },
    {
      question: "Wines from which climate typically have lower alcohol?",
      choice: [
        "Cooler climate",
        "Warmer climate",

      ],
      answer: "Cooler climate",
      explanation: "Cool climates slow down sugar production in grapes, so finished wines have lower alcohol content.",
    },
    {
      question: "Higher alcohol content in wine usually indicates grapes grown in what type of climate?",
      choice: [
        "Warmer climate",
        "Cooler climate",

      ],
      answer: "Warmer climate",
      explanation: "Warmer climates increase sugar accumulation, which leads to higher alcohol after fermentation.",
    },
    {
      question: "Darker colored wines are typically a result of grapes grown in which climate?",
      choice: [
        "Warmer climate",
        "Cooler climate",

      ],
      answer: "Warmer climate",
      explanation: "Warmer climates allow for greater pigment development in grapes, making red wines darker.",
    },
    {
      question: "More delicate flavors in wine are usually associated with grapes from which climate?",
      choice: [
        "Cooler climate",
        "Warmer climate",

      ],
      answer: "Cooler climate",
      explanation: "Cooler climates preserve subtle aromatics and restrained fruit, resulting in more delicate flavors.",
    },
    {
      question: "Which climate produces wines with a lighter body?",
      choice: [
        "Cooler climate",
        "Warmer climate",

      ],
      answer: "Cooler climate",
      explanation: "Cooler climates result in less sugar and alcohol, making wines feel lighter in body.",
    },
    {
      question: "Higher acidity is generally found in wines from which type of climate?",
      choice: [
        "Cooler climate",
        "Warmer climate",

      ],
      answer: "Cooler climate",
      explanation: "Cool climates preserve more natural acidity in grapes, leading to fresher-tasting wines.",
    },
    {
      question: "Thicker grape skins, which can lead to higher tannin and color in red wines, are most often found in grapes grown in what climate?",
      choice: [
        "Warmer climate",
        "Cooler climate",

      ],
      answer: "Warmer climate",
      explanation: "Warm climates cause grapes to develop thicker skins to protect from sun and dehydration.",
    },
    {
      question: "Which grape variety is considered a classic cool climate grape?",
      choice: [
        "Pinot Noir",
        "Cabernet Sauvignon",
        "Zinfandel",
        "Syrah",
      ],
      answer: "Pinot Noir",
      explanation: "Pinot Noir is known for thriving in cool climates and producing elegant, high-acid wines.",
    },
    {
      question: "Which climate is typically best for producing sparkling wine?",
      choice: [
        "Cool climate",
        "Warm climate",
        "Arid climate",
        "Tropical climate",
      ],
      answer: "Cool climate",
      explanation: "Cool climates preserve acidity in grapes, which is ideal for high-quality sparkling wine.",
    },
    {
      question: "Which type of grape is most commonly used in classic European wines?",
      choice: [
        "Vitis Vinifera",
        "Vitis Riparia",
        "Hybrid",
        "Labrusca",
      ],
      answer: "Vitis Vinifera",
      explanation: "Vitis Vinifera is the species responsible for most traditional European wines.",
    },
    {
      question: "What is the primary function of rootstock in viticulture?",
      choice: [
        "Disease resistance",
        "Flavor enhancement",
        "Color preservation",
        "Sugar accumulation",
      ],
      answer: "Disease resistance",
      explanation: "Rootstock, such as Vitis Riparia, is often used for its resistance to pests and diseases like phylloxera.",
    },
    {
      question: "Which climate is Cabernet Sauvignon most associated with for optimal ripeness?",
      choice: [
        "Warm climate",
        "Cool climate",
        "Wet climate",
        "Mountain climate",
      ],
      answer: "Warm climate",
      explanation: "Cabernet Sauvignon ripens best and achieves fuller body and flavor in warmer climates.",
    },
    {
      question: "Which type of grapevine is most resistant to cold, making it suitable as a rootstock in cooler regions?",
      choice: [
        "Vitis Riparia",
        "Vitis Vinifera",
        "Concord",
        "Zinfandel",
      ],
      answer: "Vitis Riparia",
      explanation: "Vitis Riparia is valued for its resistance to cold and is often used as rootstock in cool climates.",
    },
    {
      question: "A crossing of two grape species results in what kind of vine?",
      choice: [
        "Hybrid",
        "Varietal",
        "Clone",
        "Mutation",
      ],
      answer: "Hybrid",
      explanation: "A hybrid grape is a crossing between two different grape species, often for disease resistance or cold hardiness.",
    },
    {
      question: "Which wine style is most often associated with earth-driven flavors?",
      choice: [
        "Red wines",
        "Rosé wines",
        "White wines",
        "Sparkling wines",
      ],
      answer: "Red wines",
      explanation: "Earth-driven flavors such as mushroom, forest floor, and mineral notes are commonly found in red wines.",
    },
    {
      question: "Which vineyard condition is most associated with improved water drainage for vines?",
      choice: [
        "Rocky soils",
        "Clay soils",
        "Windy conditions",
        "Close proximity to water",
      ],
      answer: "Rocky soils",
      explanation: "Rocky soils allow excess water to drain away, preventing waterlogging and encouraging deep root growth.",
    },
    {
      question: "Which vineyard condition typically causes grape skins to become thicker?",
      choice: [
        "Windy conditions",
        "Rocky soils",
        "Close proximity to water",
        "High rainfall",
      ],
      answer: "Windy conditions",
      explanation: "Windy conditions stress the grapevines, resulting in grapes with thicker skins for protection.",
    },
    {
      question: "Which type of soil is known for its water retention properties?",
      choice: [
        "Clay soils",
        "Rocky soils",
        "Sandy soils",
        "Volcanic soils",
      ],
      answer: "Clay soils",
      explanation: "Clay soils retain water, which can be beneficial in drier climates but problematic in wetter ones.",
    },
    {
      question: "What is a typical climatic effect of higher altitude vineyards?",
      choice: [
        "Cooler temperature but more sunlight",
        "Warmer temperatures",
        "High humidity",
        "More rainfall",
      ],
      answer: "Cooler temperature but more sunlight",
      explanation: "Higher altitudes have cooler temperatures, but the thinner atmosphere means grapes get more intense sunlight.",
    },
    {
      question: "What is a key result of close proximity to water for a vineyard?",
      choice: [
        "Temperature moderation",
        "Increased disease pressure",
        "Water drainage",
        "Thicker grape skins",
      ],
      answer: "Temperature moderation",
      explanation: "Large bodies of water moderate the surrounding temperature, reducing extreme heat or cold in vineyards nearby.",
    },
    {
      question: "What is the major result from Phylloxera?",
      choice: [
        "Early grape maturation",
        "Most vineyards are grafted",
        "Superior plant DNA",
        "Prevention of mildew",
      ],
      answer: "Most vineyards are grafted",
      explanation: "Phylloxera is a pest that attacks grapevine roots. To protect vines, most vineyards now use grafted plants with resistant rootstocks.",
    },
    {
      question: "In the Northern Hemisphere, which month does grape harvest typically occur?",
      choice: [
        "September",
        "May",
        "February",
        "March",
      ],
      answer: "September",
      explanation: "Harvest in the Northern Hemisphere usually happens in September, marking the end of the growing season.",
    },
    {
      question: "During which month does flowering typically happen in Northern Hemisphere vineyards?",
      choice: [
        "May",
        "July",
        "March",
        "February",
      ],
      answer: "May",
      explanation: "Flowering occurs in late spring, typically in May in the Northern Hemisphere, as the vines begin to form clusters.",
    },
    {
      question: "Which month is most associated with pruning in Northern Hemisphere vineyards?",
      choice: [
        "February",
        "July",
        "September",
        "May",
      ],
      answer: "February",
      explanation: "Pruning is usually done in February while the vines are dormant, before the start of the new growing season.",
    },
    {
      question: "Budbreak, when the first green shoots appear, generally occurs in which month in the Northern Hemisphere?",
      choice: [
        "March",
        "May",
        "February",
        "September",
      ],
      answer: "March",
      explanation: "Budbreak takes place in March, when warmer weather awakens the vines from dormancy.",
    },
    {
      question: "In the vineyard calendar, véraison, when grapes begin to ripen and change color, happens in which month in the Northern Hemisphere?",
      choice: [
        "July",
        "May",
        "February",
        "March",
      ],
      answer: "July",
      explanation: "Véraison occurs in July, marking the onset of ripening as grapes change color and soften.",
    },
    {
      question: "Which winemaking technique is used to increase acidity in wine?",
      choice: [
        "Acidification",
        "Bâtonnage",
        "Malolactic Conversion",
        "Chaptalization",
      ],
      answer: "Acidification",
      explanation: "Acidification involves adding acid (usually tartaric) to the must or wine to increase its acidity, often in warm climates where natural acidity can be low.",
    },
    {
      question: "Which technique makes red wine more fruity and low in tannin?",
      choice: [
        "Carbonic Maceration",
        "Saignée",
        "Bâtonnage",
        "Punch down",
      ],
      answer: "Carbonic Maceration",
      explanation: "Carbonic maceration ferments whole grapes in a CO₂-rich environment, producing fruity, low-tannin red wines like Beaujolais Nouveau.",
    },
    {
      question: "Which winemaking method is used to lower tannins in red wines and increase skin-to-juice ratio?",
      choice: [
        "Saignée",
        "Malolactic Conversion",
        "Punch down",
        "Late Harvest",
      ],
      answer: "Saignée",
      explanation: "Saignée, or 'bleeding,' removes some juice from the must early in fermentation, concentrating the remaining wine and reducing tannin extraction.",
    },
    {
      question: "What technique increases sugar content in grape must and is associated with higher potential alcohol?",
      choice: [
        "Late Harvest",
        "Chaptalization",
        "Bâtonnage",
        "Acidification",
      ],
      answer: "Late Harvest",
      explanation: "Late Harvest refers to grapes picked late in the season when they are riper and have more sugar, leading to sweeter or more alcoholic wines.",
    },
    {
      question: "Which technique is responsible for creating a creamy texture in wines, especially whites?",
      choice: [
        "Bâtonnage",
        "Malolactic Conversion",
        "Chaptalization",
        "Saignée",
      ],
      answer: "Bâtonnage",
      explanation: "Bâtonnage is the process of stirring lees in barrel-aged wines, giving a creamy, rich mouthfeel.",
    },
    {
      question: "Which winemaking process is specifically used to increase the potential alcohol in wine?",
      choice: [
        "Chaptalization",
        "Late Harvest",
        "Carbonic Maceration",
        "Punch down",
      ],
      answer: "Chaptalization",
      explanation: "Chaptalization is the addition of sugar to grape must to increase the potential alcohol content of the final wine.",
    },
    {
      question: "Which technique is responsible for creating buttery flavors in white wines and lowering overall acidity?",
      choice: [
        "Malolactic Conversion",
        "Bâtonnage",
        "Saignée",
        "Carbonic Maceration",
      ],
      answer: "Malolactic Conversion",
      explanation: "Malolactic conversion transforms malic acid into lactic acid, softening acidity and often adding a buttery note to white wines.",
    },
    {
      question: "Which winemaking technique keeps the 'cap' moist and extracts color, flavor, and structure during fermentation?",
      choice: [
        "Punch down or Pump-over",
        "Saignée",
        "Bâtonnage",
        "Late Harvest",
      ],
      answer: "Punch down or Pump-over",
      explanation: "Punching down or pumping over submerges or circulates the cap of skins, seeds, and stems during red wine fermentation, extracting color, flavor, and structure.",
    },
    {
      question: "Which combination will impart the most oak flavor to a wine?",
      choice: [
        "large, old, high-toast barrel aging for 18 months",
        "large, old, low-toast barrel for 24 months",
        "old, small, low-toast barrel for 16 months",
        "small, new, high-toast barrel aging for 12 months",
      ],
      answer: "small, new, high-toast barrel aging for 12 months",
      explanation: "Small, new, high-toast barrels expose the wine to more fresh oak surface area and intense toasty flavors, resulting in the most pronounced oak influence.",
    },


  ],






  FOH: [


    {
      question: "Which of the following is a responsibility of the Maitre’d or Host upon a guest’s arrival?",
      choice: [
        "Offers coat or bag check services",
        "Takes food orders",
        "Prepares desserts",
        "Pours wine"
      ],
      answer: "Offers coat or bag check services",
      explanation: "Offering coat or bag check services is one of the first responsibilities when greeting guests."
    },
    {
      question: "What should the host do when guests arrive for dinner?",
      choice: [
        "Check in guests and confirm party size",
        "Bring water to the table",
        "Serve the amuse-bouche",
        "Clear dirty plates"
      ],
      answer: "Check in guests and confirm party size",
      explanation: "The host is responsible for checking in guests and confirming their party size."
    },
    {
      question: "If a reservation changes in size or arrival time, who should be informed?",
      choice: [
        "The Chef",
        "The Dishwasher",
        "The Bartender",
        "The Valet"
      ],
      answer: "The Chef",
      explanation: "The Chef should be informed of any changes to reservations, including party size or arrival time."
    },
    {
      question: "What tool is used by the host to maintain and update table status?",
      choice: [
        "OpenTable",
        "POS System",
        "Guest Book",
        "Kitchen Display System"
      ],
      answer: "OpenTable",
      explanation: "OpenTable is used to check in guests, update reservations, and track table status."
    },
    {
      question: "After seating the last reservation, what should the host do?",
      choice: [
        "Inform the Chef and indicate which tables are waiting to order",
        "Go home for the night",
        "Help in the kitchen",
        "Restock the bar"
      ],
      answer: "Inform the Chef and indicate which tables are waiting to order",
      explanation: "The host must inform the Chef when the last reservation is seated and which tables are waiting to order."
    },
    {
      question: "Which task is part of closing sidework for the Maitre’d or Host?",
      choice: [
        "Perform station breakdown and inventory",
        "Prepare appetizers",
        "Create a new menu",
        "Order produce"
      ],
      answer: "Perform station breakdown and inventory",
      explanation: "Station breakdown and inventory are part of closing responsibilities for the Maitre’d or Host."
    },
    {
      question: "How does the host help floor teams with upcoming reservations?",
      choice: [
        "Ensures tables are reset for the correct number of guests and accommodations",
        "Prepares the daily special",
        "Manages the wine cellar",
        "Conducts pre-shift meetings"
      ],
      answer: "Ensures tables are reset for the correct number of guests and accommodations",
      explanation: "The host ensures floor teams reset tables to match the needs of upcoming reservations."
    },
    {
      question: "Once all reservations are seated, how does the host support the floor?",
      choice: [
        "Aids the floor team with ongoing service",
        "Takes inventory of the wine cellar",
        "Writes the daily schedule",
        "Performs table-side flambé"
      ],
      answer: "Aids the floor team with ongoing service",
      explanation: "Once all guests are seated, the host helps support the floor as needed."
    },
    {
      question: "What is the standard time in which a Front Server should greet a newly seated table?",
      choice: [
        "Within 30 seconds",
        "Within 2 minutes",
        "After drinks are served",
        "After the first course is fired"
      ],
      answer: "Within 30 seconds",
      explanation: "Promptly greeting guests within 30 seconds helps set a welcoming tone for service."
    },
    {
      question: "Which of the following is NOT a correct first step for a Front Server during initial guest contact?",
      choice: [
        "Immediately confirming allergies and dietary restrictions",
        "Checking if there are any special occasions",
        "Entering the order in MICROS before greeting the table",
        "Introducing themselves by name"
      ],
      answer: "Entering the order in MICROS before greeting the table",
      explanation: "Orders should never be entered before greeting guests and confirming details like allergies."
    },
    {
      question: "How does a Front Server best ensure guest safety regarding food allergies?",
      choice: [
        "Ask detailed questions about allergies and communicate them to the Chef",
        "Recommend all signature dishes regardless of allergies",
        "Allow the guest to make all decisions without guidance",
        "Only check with the guest about allergies if they mention a concern"
      ],
      answer: "Ask detailed questions about allergies and communicate them to the Chef",
      explanation: "Proactive communication and detail are essential to allergy-safe service."
    },
    {
      question: "When a guest requests a modification to a dish due to a dietary restriction, what is the correct procedure?",
      choice: [
        "Confirm the request and communicate it directly to the Chef",
        "Simply write the request on a guest check",
        "Ask another server to tell the kitchen",
        "Advise the guest that no modifications are allowed"
      ],
      answer: "Confirm the request and communicate it directly to the Chef",
      explanation: "Direct, accurate communication with the Chef is required for any special requests."
    },
    {
      question: "What is the correct method for entering guest food and beverage orders?",
      choice: [
        "Use the MICROS system at the earliest opportunity",
        "Keep mental notes and enter later",
        "Ask the bartender to enter it",
        "Write it down on a napkin for the kitchen"
      ],
      answer: "Use the MICROS system at the earliest opportunity",
      explanation: "Orders must be entered in the MICROS system promptly for accuracy and timing."
    },
    {
      question: "How are upcoming courses properly paced and sent to the kitchen?",
      choice: [
        "Firing courses through the MICROS POS system at the appropriate time",
        "Yelling to the kitchen from the dining room",
        "Waiting until the guest asks for the next course",
        "Asking the Back Server to fire the course when convenient"
      ],
      answer: "Firing courses through the MICROS POS system at the appropriate time",
      explanation: "Correct course pacing is achieved by firing courses via the POS at the right moment."
    },
    {
      question: "When a guest requests a refill or additional beverage, what should the Front Server do?",
      choice: [
        "Enter the order into MICROS and confirm with the bar or service team",
        "Make the drink themselves without entering it",
        "Suggest the guest order at the bar",
        "Tell the Back Server to remember the order"
      ],
      answer: "Enter the order into MICROS and confirm with the bar or service team",
      explanation: "All beverage orders and refills must be entered into the POS to maintain checks and service flow."
    },
    {
      question: "How should a Front Server work with the Back Server for the best guest experience?",
      choice: [
        "Delegate and support tasks based on need and current service flow",
        "Avoid giving any instructions to avoid confusion",
        "Perform all duties themselves to ensure quality",
        "Let the Back Server manage the floor independently"
      ],
      answer: "Delegate and support tasks based on need and current service flow",
      explanation: "Delegating and supporting as needed helps the entire team succeed."
    },
    {
      question: "What percentage of time should the Front Server maintain presence on the floor during service?",
      choice: [
        "Approximately 85%",
        "100% at the service station",
        "As little as possible",
        "Only during peak seating times"
      ],
      answer: "Approximately 85%",
      explanation: "Front Servers are expected to be present and available for guests most of the time."
    },
    {
      question: "Which of the following is the best way for a Front Server to support their team during service?",
      choice: [
        "Actively assist with clearing, running food, and communicating guest needs",
        "Only focus on their assigned section",
        "Wait until a manager asks for help",
        "Leave the floor for extended breaks"
      ],
      answer: "Actively assist with clearing, running food, and communicating guest needs",
      explanation: "Teamwork and proactive help are vital for smooth service."
    },
    {
      question: "Which closing responsibility is specifically required for the Front Server?",
      choice: [
        "Perform station breakdown and complete inventory according to closing sidework",
        "Design the next day's specials",
        "Count cash tips at the host stand",
        "Prepare marketing emails for the restaurant"
      ],
      answer: "Perform station breakdown and complete inventory according to closing sidework",
      explanation: "Thorough station breakdown and inventory is a critical closing duty for Front Servers."
    },
    {
      question: "After the Front Server greets a table, what is the Back Server’s next responsibility?",
      choice: [
        "Provide water service to the new table",
        "Take the food order immediately",
        "Introduce themselves to the table",
        "Fire the first course in MICROS"
      ],
      answer: "Provide water service to the new table",
      explanation: "The Back Server is responsible for timely water service after the initial greeting."
    },
    {
      question: "Which task is essential for proper course sequencing and guest experience?",
      choice: [
        "Prepare table markings for each course and table",
        "Fold napkins at the host stand",
        "Check reservations in OpenTable",
        "Select the wine pairing"
      ],
      answer: "Prepare table markings for each course and table",
      explanation: "Marking the table ensures guests have the correct utensils for each course."
    },
    {
      question: "When a guest requests another beverage, what should the Back Server do?",
      choice: [
        "Retrieve and serve the beverage order as needed",
        "Ask the guest to find the bartender",
        "Wait until the Front Server is free",
        "Ignore the request if busy"
      ],
      answer: "Retrieve and serve the beverage order as needed",
      explanation: "Back Servers assist with beverage service to maintain smooth and attentive hospitality."
    },
    {
      question: "What is the correct procedure if a guest requests something that must be entered into MICROS?",
      choice: [
        "Communicate all guest requests to the Front Waiter for MICROS entry",
        "Enter the order directly without confirmation",
        "Tell the guest to wait until the manager comes by",
        "Only tell the kitchen"
      ],
      answer: "Communicate all guest requests to the Front Waiter for MICROS entry",
      explanation: "Only the Front Waiter should enter guest requests in the MICROS unless otherwise instructed."
    },
    {
      question: "Which of the following is a core responsibility of the Back Server during service?",
      choice: [
        "Take the lead on table maintenance throughout the meal",
        "Only run food when asked",
        "Present the check to the table",
        "Prepare all cocktails at the bar"
      ],
      answer: "Take the lead on table maintenance throughout the meal",
      explanation: "Back Servers are responsible for ongoing maintenance such as clearing and resetting."
    },
    {
      question: "Which of these tasks may the Back Server be responsible for, depending on house policy?",
      choice: [
        "Enter orders into the MICROS when directed",
        "Create new menu items",
        "Change the music playlist",
        "Greet guests at the front door"
      ],
      answer: "Enter orders into the MICROS when directed",
      explanation: "Some houses allow Back Servers to enter orders if authorized by management."
    },
    {
      question: "What table tasks does the Back Server lead to ensure cleanliness and readiness for each course?",
      choice: [
        "Clearing, crumbing, and marking tables",
        "Only serving bread and butter",
        "Selecting dessert for the table",
        "Choosing the guest’s wine"
      ],
      answer: "Clearing, crumbing, and marking tables",
      explanation: "These tasks keep the table presentable and ready for each course."
    },
    {
      question: "What is the proper protocol if a Back Server needs to leave the dining floor during service?",
      choice: [
        "Communicate with the Front Server regarding leaving the floor and any support or table updates",
        "Leave quietly without telling anyone",
        "Ask a guest to notify the Front Server",
        "Wait until the end of service to leave"
      ],
      answer: "Communicate with the Front Server regarding leaving the floor and any support or table updates",
      explanation: "Proper communication ensures seamless service and team awareness."
    },
    {
      question: "How should the Back Server interact with other team members during service?",
      choice: [
        "Aid in supporting team members during service",
        "Only perform their own tasks",
        "Supervise the Front Server",
        "Manage reservations"
      ],
      answer: "Aid in supporting team members during service",
      explanation: "Support and teamwork are key to a smooth guest experience."
    },
    {
      question: "Which closing duty is required of the Back Server at the end of the shift?",
      choice: [
        "Perform station breakdown and inventory according to closing sidework guidelines",
        "Lock the wine cellar",
        "Create the seating chart for the next night",
        "Schedule social media posts"
      ],
      answer: "Perform station breakdown and inventory according to closing sidework guidelines",
      explanation: "Closing sidework and inventory are essential for a successful end of shift."
    },
    {
      question: "What is the primary responsibility of a Food Runner during service?",
      choice: [
        "Takes lead on running food to guests",
        "Seats new tables",
        "Takes all guest orders",
        "Manages reservation entries"
      ],
      answer: "Takes lead on running food to guests",
      explanation: "Food Runners are responsible for ensuring dishes reach the correct guests promptly and accurately."
    },
    {
      question: "If a large order needs to be delivered to a table, what should the Food Runner do?",
      choice: [
        "Collect additional team members to help run food",
        "Attempt to deliver all plates alone",
        "Ask the kitchen staff to help serve",
        "Wait until the table has fewer guests"
      ],
      answer: "Collect additional team members to help run food",
      explanation: "Collaboration ensures accurate and efficient food delivery, especially with large orders."
    },
    {
      question: "In between food runs, what additional responsibility might the Food Runner have?",
      choice: [
        "Aid in running beverage orders between food runs",
        "Greet guests at the front door",
        "Create wine pairings for each dish",
        "Update the daily specials board"
      ],
      answer: "Aid in running beverage orders between food runs",
      explanation: "Food Runners support beverage service to keep the flow of service efficient."
    },
    {
      question: "When a guest asks for an additional beverage, what is the best action for the Food Runner?",
      choice: [
        "Retrieve and serve the beverage order as needed",
        "Direct the guest to the bar",
        "Inform the Back Server only",
        "Decline the request if busy"
      ],
      answer: "Retrieve and serve the beverage order as needed",
      explanation: "Assisting with beverage service is part of the Food Runner's support role."
    },
    {
      question: "Which of the following is NOT typically a Food Runner responsibility?",
      choice: [
        "Performs all table maintenance independently with no team communication",
        "Aids in performing table maintenance and clearing as needed",
        "Clears plates between courses",
        "Crumbs and marks tables for upcoming courses"
      ],
      answer: "Performs all table maintenance independently with no team communication",
      explanation: "Table maintenance is a shared responsibility and requires teamwork."
    },
    {
      question: "When should the Food Runner communicate table status updates to the Chef?",
      choice: [
        "On request and as needed",
        "At the end of service only",
        "Only if a table complains",
        "Never; it's not their role"
      ],
      answer: "On request and as needed",
      explanation: "Timely updates to the Chef are essential for smooth kitchen operations."
    },
    {
      question: "Who is responsible for maintaining bread and butter supplies during service?",
      choice: [
        "The Food Runner takes the lead",
        "The Host",
        "The Front Server",
        "The Pastry Chef"
      ],
      answer: "The Food Runner takes the lead",
      explanation: "Food Runners ensure bread and butter are available for guests as needed."
    },
    {
      question: "How should the Food Runner use downtime during service?",
      choice: [
        "Support fellow team members in any area that needs help",
        "Take extended breaks in the back",
        "Focus solely on food running",
        "Begin closing sidework early"
      ],
      answer: "Support fellow team members in any area that needs help",
      explanation: "Food Runners should always be ready to assist the team when not actively running food."
    },
    {
      question: "What table tasks does the Food Runner often help lead?",
      choice: [
        "Clearing, crumbing, and marking tables",
        "Greeting all new guests",
        "Managing reservations",
        "Creating the wine list"
      ],
      answer: "Clearing, crumbing, and marking tables",
      explanation: "Food Runners help ensure tables are kept clean and properly set for each course."
    },
    {
      question: "At the end of service, what closing duty must the Food Runner complete?",
      choice: [
        "Perform station breakdown and inventory according to closing sidework guidelines",
        "Update staff schedule",
        "Create the menu for the next service",
        "Lock the front door"
      ],
      answer: "Perform station breakdown and inventory according to closing sidework guidelines",
      explanation: "Station breakdown and inventory are essential for a smooth transition to the next service."
    },
    {
      question: "What is the primary responsibility of the Pantry during beverage service?",
      choice: [
        "Prepares all Hot & Iced Tea, Coffee, Espresso, and Bottled Water orders",
        "Greets guests at the entry door",
        "Creates daily wine pairings",
        "Seating new guests as they arrive"
      ],
      answer: "Prepares all Hot & Iced Tea, Coffee, Espresso, and Bottled Water orders",
      explanation: "The Pantry is responsible for preparing all hot and cold non-alcoholic beverage orders."
    },
    {
      question: "If multiple hot drinks need to be delivered at once, what is the best Pantry protocol?",
      choice: [
        "Run Hot & Iced Tea, Coffee, Espresso, and Bottled Water orders as often as possible—collecting runners when necessary",
        "Serve only one drink at a time to avoid spills",
        "Wait for a manager to deliver drinks",
        "Have the guests pick up their drinks at the counter"
      ],
      answer: "Run Hot & Iced Tea, Coffee, Espresso, and Bottled Water orders as often as possible—collecting runners when necessary",
      explanation: "Using teamwork and delivering beverages promptly ensures efficient service."
    },
    {
      question: "How can the Pantry team best support the overall food service during a busy shift?",
      choice: [
        "Aid in running food orders when available",
        "Focus only on beverage service",
        "Supervise the front door",
        "Spend downtime in the break room"
      ],
      answer: "Aid in running food orders when available",
      explanation: "Helping run food when not busy with beverages supports the entire team."
    },
    {
      question: "What is an essential Pantry duty related to equipment and ingredients?",
      choice: [
        "Maintain equipment and ingredient pars throughout service",
        "Check guest allergies for every table",
        "Create the dessert menu",
        "Assign sections to servers"
      ],
      answer: "Maintain equipment and ingredient pars throughout service",
      explanation: "Ensuring equipment and ingredients are stocked and functioning keeps the Pantry running smoothly."
    },
    {
      question: "Which task is essential for upholding sanitation standards at the Pantry station?",
      choice: [
        "Cleans and sanitizes trays, wooden boards, and specialty utensils/dishware throughout service",
        "Sweep the dining room floor",
        "Refill ice bins in the bar",
        "Change all table linens"
      ],
      answer: "Cleans and sanitizes trays, wooden boards, and specialty utensils/dishware throughout service",
      explanation: "Proper sanitation of serving items is critical to food safety and guest satisfaction."
    },
    {
      question: "How should the Pantry station be kept throughout the shift?",
      choice: [
        "Maintain a clean and organized station at all times",
        "Leave used items out for cleaning at the end",
        "Focus on speed over cleanliness",
        "Store items on guest tables temporarily"
      ],
      answer: "Maintain a clean and organized station at all times",
      explanation: "Cleanliness and organization improve workflow and safety."
    },
    {
      question: "What closing duties are required of the Pantry at the end of service?",
      choice: [
        "Perform station breakdown and inventory according to closing sidework guidelines",
        "Assign closing tasks to other staff",
        "Turn off the kitchen lights",
        "Set tables for breakfast"
      ],
      answer: "Perform station breakdown and inventory according to closing sidework guidelines",
      explanation: "A thorough station breakdown and inventory are crucial for readiness and accountability."
    },
    {
      question: "How should the Pantry use any downtime during service?",
      choice: [
        "Support runners and the floor team as needed",
        "Prepare extra drinks for staff",
        "Organize only their own workspace",
        "Leave for unscheduled breaks"
      ],
      answer: "Support runners and the floor team as needed",
      explanation: "Assisting other stations when possible supports team efficiency and guest experience."
    },
    {
      question: "What is the expected time frame for a Front Server to greet a new table?",
      choice: [
        "Within 30 seconds",
        "After the appetizer course is served",
        "Within 5 minutes",
        "Once the host notifies the kitchen"
      ],
      answer: "Within 30 seconds",
      explanation: "Prompt greeting within 30 seconds sets a professional and welcoming tone."
    },
    {
      question: "Which of the following is an example of an appropriate greeting?",
      choice: [
        "\"Good evening, welcome to [Restaurant Name]\"",
        "\"Hey guys, what's up?\"",
        "\"Your server will be with you soon\"",
        "\"Hope you're hungry, let's get started!\""
      ],
      answer: "\"Good evening, welcome to [Restaurant Name]\"",
      explanation: "A time-appropriate and professional greeting is essential."
    },
    {
      question: "Why is it important to reinforce the name of the restaurant during the greeting?",
      choice: [
        "It reinforces brand identity and professionalism",
        "It helps guests remember the menu items",
        "It is required by local health code",
        "It is only necessary for large groups"
      ],
      answer: "It reinforces brand identity and professionalism",
      explanation: "Reinforcing the restaurant name helps establish a positive, professional impression."
    },
    {
      question: "Which detail about the restaurant should the Front Server mention in the greeting?",
      choice: [
        "The restaurant’s mission or concept",
        "Personal stories about the chef",
        "The names of all staff members",
        "The Wi-Fi password"
      ],
      answer: "The restaurant’s mission or concept",
      explanation: "Sharing the restaurant's mission sets guest expectations and demonstrates pride in the concept."
    },
    {
      question: "How should the Front Server explain the menu?",
      choice: [
        "Describe the menu style, courses, any 86’d items or specials",
        "Only mention the dessert options",
        "Read the entire menu word-for-word",
        "Skip the explanation and ask for orders immediately"
      ],
      answer: "Describe the menu style, courses, any 86’d items or specials",
      explanation: "Clear, concise menu explanations help guests understand their choices and any limitations."
    },
    {
      question: "When presenting the beverage menu, what should the Front Server highlight?",
      choice: [
        "Specialty cocktails, wines by the glass, beers, and digital wine list",
        "The most expensive bottles only",
        "Only non-alcoholic beverages",
        "Any items that are unavailable"
      ],
      answer: "Specialty cocktails, wines by the glass, beers, and digital wine list",
      explanation: "Drawing attention to featured beverages increases engagement and guest satisfaction."
    },
    {
      question: "Which is the most complete way to inquire about allergies?",
      choice: [
        "Ask about allergies, mention the 8 major allergens, and ask follow-up questions",
        "Only ask if anyone is allergic to nuts",
        "Hand guests an allergy information card without discussion",
        "Ask if anyone \"has any weird preferences\""
      ],
      answer: "Ask about allergies, mention the 8 major allergens, and ask follow-up questions",
      explanation: "A thorough allergy inquiry protects guests and the restaurant."
    },
    {
      question: "What is the best practice when offering water service?",
      choice: [
        "Offer a choice of bottled, still, or sparkling water and specify the type",
        "Automatically bring tap water for everyone",
        "Skip water service unless requested",
        "Ask if anyone wants hot chocolate"
      ],
      answer: "Offer a choice of bottled, still, or sparkling water and specify the type",
      explanation: "Offering and specifying water types demonstrates attention to detail and guest care."
    },
    {
      question: "Which of the following should be avoided when speaking to guests?",
      choice: [
        "Speaking too quickly or unclearly",
        "Speaking slowly and clearly",
        "Using appropriate energy and friendliness",
        "Explaining the menu in a welcoming tone"
      ],
      answer: "Speaking too quickly or unclearly",
      explanation: "Clear and paced speech ensures guests understand and feel comfortable."
    },
    {
      question: "What is the ideal tone and demeanor for a Front Server during the greeting?",
      choice: [
        "Friendly and professional, not overly familiar",
        "Overly casual and joking",
        "Strictly formal and distant",
        "Loud and energetic regardless of guest mood"
      ],
      answer: "Friendly and professional, not overly familiar",
      explanation: "A balanced, professional tone creates a welcoming environment."
    },
    {
      question: "When should water service be performed by the Back Server?",
      choice: [
        "Immediately after the initial greet",
        "After the appetizer is served",
        "Once the check is presented",
        "After dessert is ordered"
      ],
      answer: "Immediately after the initial greet",
      explanation: "Timely water service is expected right after the Front Server greets the table."
    },
    {
      question: "What should be placed on the table for bottled water service?",
      choice: [
        "A white rimless coaster",
        "A red napkin",
        "A small bread plate",
        "A wine coaster"
      ],
      answer: "A white rimless coaster",
      explanation: "A white rimless coaster signals that bottled water service is being provided."
    },
    {
      question: "If a guest orders sparkling water, what should be done with the glassware?",
      choice: [
        "Replace still water glasses with rocks glasses",
        "Leave the original glasses in place",
        "Provide only wine glasses",
        "Use only plastic cups"
      ],
      answer: "Replace still water glasses with rocks glasses",
      explanation: "Sparkling water is typically served in rocks glasses for better presentation and carbonation."
    },
    {
      question: "How full should filtered water (still or sparkling) be poured?",
      choice: [
        "80% full",
        "100% full",
        "50% full",
        "Just enough to cover the bottom"
      ],
      answer: "80% full",
      explanation: "Filtered water is poured to 80% to minimize spills and allow for easy refilling."
    },
    {
      question: "For bottled water (still or sparkling), what is the correct fill level?",
      choice: [
        "60% full",
        "80% full",
        "Completely full",
        "Barely any"
      ],
      answer: "60% full",
      explanation: "Bottled water should be poured to 60% to preserve carbonation and leave room for subsequent pours."
    },
    {
      question: "Which technique should always be used for serving water?",
      choice: [
        "Open hand service",
        "Quickly dropping glasses on the table",
        "Serving with the left hand only",
        "Passing glasses across guests"
      ],
      answer: "Open hand service",
      explanation: "Open hand service is the professional standard for serving at the table."
    },
    {
      question: "What are the '3R’s' to follow when taking a beverage order?",
      choice: [
        "Write, Repeat (Echo), Review",
        "Read, React, Respond",
        "Ready, Record, Relay",
        "Remind, Request, Recall"
      ],
      answer: "Write, Repeat (Echo), Review",
      explanation: "The 3R’s ensure accuracy and guest satisfaction during the order process."
    },
    {
      question: "What is the benefit of echoing a guest’s order back to them?",
      choice: [
        "It allows the guest to confirm accuracy",
        "It impresses the manager",
        "It helps memorize other tables’ orders",
        "It is only necessary with VIP guests"
      ],
      answer: "It allows the guest to confirm accuracy",
      explanation: "Repeating or echoing the order lets guests correct any mistakes before the order is sent."
    },
    {
      question: "Why should you ask follow-up questions during the beverage order?",
      choice: [
        "To clarify guest preferences and ensure accurate service",
        "To fill time while waiting for the bar",
        "To up-sell desserts",
        "To speed up the order process"
      ],
      answer: "To clarify guest preferences and ensure accurate service",
      explanation: "Asking follow-ups ensures you meet the guest’s expectations and avoid errors."
    },
    {
      question: "After taking a beverage order, what is the next immediate step?",
      choice: [
        "Go directly to the computer to place the order",
        "Wait until you have more orders",
        "Tell the host",
        "Discuss the order with the chef"
      ],
      answer: "Go directly to the computer to place the order",
      explanation: "Immediate entry reduces delays and the chance of mistakes."
    },
    {
      question: "When marking the table for beverages, what should the Front Server always use?",
      choice: [
        "A tray to carry all glassware",
        "Bare hands for efficiency",
        "Place glasses anywhere on the table",
        "Only use a tray for wine glasses"
      ],
      answer: "A tray to carry all glassware",
      explanation: "Using a tray is the standard for safety, professionalism, and sanitation."
    },
    {
      question: "How should glassware be handled when serving beverages?",
      choice: [
        "Hold all glassware by the stem or base",
        "Grip the rim for a secure hold",
        "Stack glasses for efficiency",
        "Carry glasses by the bowl"
      ],
      answer: "Hold all glassware by the stem or base",
      explanation: "Holding glassware by the stem or base maintains cleanliness and presentation."
    },
    {
      question: "Which technique should be used when serving beverages at the table?",
      choice: [
        "Open hand service",
        "Overhand throw",
        "Use both hands to pass across guests",
        "Slide glasses across the table"
      ],
      answer: "Open hand service",
      explanation: "Open hand service is the professional, guest-focused standard."
    },
    {
      question: "Where should the beverage glass be placed in relation to the water glass?",
      choice: [
        "To the right, in the 2 o’clock position",
        "Directly in front of the guest",
        "To the left, near the bread plate",
        "Behind the water glass"
      ],
      answer: "To the right, in the 2 o’clock position",
      explanation: "Proper placement shows attention to detail and keeps the table organized."
    },
    {
      question: "When placing a glass with an etched logo, how should it be positioned?",
      choice: [
        "Etching at the 6 o’clock position, facing the guest",
        "Logo facing the server",
        "Anywhere on the table",
        "Etching away from the guest for privacy"
      ],
      answer: "Etching at the 6 o’clock position, facing the guest",
      explanation: "Etching at 6 o’clock ensures the logo or design is visible and upright for the guest."
    },
    {
      question: "If time is limited, how should the glassware marking be handled?",
      choice: [
        "Inform your back server or mark the table yourself if you have time",
        "Skip the marking for efficiency",
        "Ask the bartender to mark the table",
        "Let the guests mark their own seats"
      ],
      answer: "Inform your back server or mark the table yourself if you have time",
      explanation: "Communication and teamwork ensure proper glassware marking even when service is busy."
    },
    {
      question: "What is the expected time frame for serving beverages after the order is placed?",
      choice: [
        "Within 2-3 minutes",
        "Within 10 minutes",
        "After appetizers are served",
        "Anytime during the meal"
      ],
      answer: "Within 2-3 minutes",
      explanation: "Prompt beverage service ensures a smooth guest experience."
    },
    {
      question: "What must always be used when carrying beverages to the table?",
      choice: [
        "A tray",
        "Bare hands",
        "A bus tub",
        "Napkins only"
      ],
      answer: "A tray",
      explanation: "Using a tray is required for safety, professionalism, and presentation."
    },
    {
      question: "How should beverages be set down in front of guests?",
      choice: [
        "Using open hand service",
        "Reaching across other guests",
        "With a quick toss",
        "Placing from the left side only"
      ],
      answer: "Using open hand service",
      explanation: "Open hand service is the standard for hospitality and guest comfort."
    },
    {
      question: "Where should a server hold glassware when serving beverages?",
      choice: [
        "By the stem or base",
        "By the rim",
        "With two hands on the bowl",
        "Using a towel"
      ],
      answer: "By the stem or base",
      explanation: "Holding glassware by the stem or base maintains cleanliness and appearance."
    },
    {
      question: "Which of the following is key when placing beverages for guests?",
      choice: [
        "Use grace and care",
        "Move as quickly as possible",
        "Place glasses in any empty space",
        "Stack glasses to save time"
      ],
      answer: "Use grace and care",
      explanation: "Graceful and careful placement ensures professionalism and guest comfort."
    },
    {
      question: "How should bottled beverages (such as wine or water) be poured at the table?",
      choice: [
        "Pour with the product label facing the guest",
        "Pour with label away from the guest",
        "Lift the guest’s glass for pouring",
        "Rest the bottle on the glass rim"
      ],
      answer: "Pour with the product label facing the guest",
      explanation: "Label facing the guest is a professional touch and part of standard service."
    },
    {
      question: "When pouring bottled items, which action should be avoided?",
      choice: [
        "Lifting the guest’s glass",
        "Leaving the bottle on the table",
        "Placing a napkin under the glass",
        "Pouring slowly"
      ],
      answer: "Lifting the guest’s glass",
      explanation: "Do not lift the glass; pour with the glass on the table for stability and elegance."
    },
    {
      question: "What is the correct fill level for water when serving?",
      choice: [
        "Pour until water is 1 inch from the top (80% full)",
        "Fill completely to the rim",
        "Half full only",
        "Pour just enough to wet the bottom"
      ],
      answer: "Pour until water is 1 inch from the top (80% full)",
      explanation: "80% full minimizes spills and allows for comfortable drinking."
    },
    {
      question: "How should wine by the glass be served tableside?",
      choice: [
        "Poured into the preset glass at the table",
        "Pre-poured in the service station",
        "Poured into a decanter first",
        "Served in a water glass"
      ],
      answer: "Poured into the preset glass at the table",
      explanation: "Wine by the glass is poured tableside for proper presentation."
    },
    {
      question: "What items should be included with iced tea service?",
      choice: [
        "Lemon in a small vessel, simple syrup in a small pitcher, and an iced teaspoon on the right side",
        "Just a glass of tea and a straw",
        "Lemon wedge in the glass, sugar packets on the table",
        "Mint and orange slices only"
      ],
      answer: "Lemon in a small vessel, simple syrup in a small pitcher, and an iced teaspoon on the right side",
      explanation: "These accoutrements are part of proper iced tea service."
    },
    {
      question: "When should the food order be taken by the Front Server?",
      choice: [
        "Immediately after delivering beverages",
        "Before guests are seated",
        "After appetizers are served",
        "Once the kitchen calls for it"
      ],
      answer: "Immediately after delivering beverages",
      explanation: "Taking the food order promptly keeps service efficient and organized."
    },
    {
      question: "What are the '3R’s' to use when taking a food order?",
      choice: [
        "Write, Repeat (Echo), Review",
        "Read, Record, React",
        "Recall, Request, Relay",
        "Request, Return, Ready"
      ],
      answer: "Write, Repeat (Echo), Review",
      explanation: "The 3R’s are essential for ensuring order accuracy and guest confidence."
    },
    {
      question: "What should you confirm for all protein orders when applicable?",
      choice: [
        "Cooking temperature preference",
        "Price of the protein",
        "Origin of the protein",
        "Whether the guest wants bread"
      ],
      answer: "Cooking temperature preference",
      explanation: "Confirming temperature ensures the protein is cooked to the guest’s liking."
    },
    {
      question: "When taking orders around the table, what is the correct procedure?",
      choice: [
        "Move clockwise and ensure seat numbers are accurate",
        "Start with the oldest guest and move counterclockwise",
        "Take everyone’s order at once",
        "Allow guests to write their own orders"
      ],
      answer: "Move clockwise and ensure seat numbers are accurate",
      explanation: "Moving clockwise and tracking seat numbers prevents confusion during service."
    },
    {
      question: "How should the Front Server give attention during the order process?",
      choice: [
        "Focus fully on one person at a time",
        "Take all orders at once for speed",
        "Ask the table to pass orders to you",
        "Only write down what the first guest says"
      ],
      answer: "Focus fully on one person at a time",
      explanation: "Giving each guest individual attention shows professionalism and care."
    },
    {
      question: "What should be done with menus during the order-taking process?",
      choice: [
        "Remove menus as you complete each person’s order",
        "Collect menus at the start",
        "Leave menus until the check is presented",
        "Let guests keep menus throughout the meal"
      ],
      answer: "Remove menus as you complete each person’s order",
      explanation: "Removing menus helps clear the table and signals to the kitchen that orders are complete."
    },
    {
      question: "If a guest makes a special request or wants an extra course, what should you do?",
      choice: [
        "Check with the Chef regarding special requests or additional courses",
        "Promise anything without checking",
        "Ignore the request until later",
        "Let the Back Server handle it"
      ],
      answer: "Check with the Chef regarding special requests or additional courses",
      explanation: "Verifying special requests ensures kitchen coordination and guest satisfaction."
    },
    {
      question: "What should you do with the beverage/wine list if beverages are ordered with food?",
      choice: [
        "Remove the beverage/wine list before leaving the table",
        "Leave the list until dessert",
        "Ask guests to keep the list",
        "Give it to the next table"
      ],
      answer: "Remove the beverage/wine list before leaving the table",
      explanation: "Clearing unneeded lists keeps the table tidy and service organized."
    },
    {
      question: "What should be done with the dupe after taking the order?",
      choice: [
        "Immediately provide the Back Server with their copy",
        "Hold onto both copies",
        "Place the dupe on the host stand",
        "Wait to give it to the Back Server until service slows down"
      ],
      answer: "Immediately provide the Back Server with their copy",
      explanation: "Promptly providing the dupe keeps service flowing and everyone informed."
    },
    {
      question: "What must the Front Server do before entering the order into the computer?",
      choice: [
        "Ensure seat numbers and allergy markings are accurate for every course",
        "Ask guests to double-check each order again",
        "Re-read the specials aloud",
        "Add extra items to the order"
      ],
      answer: "Ensure seat numbers and allergy markings are accurate for every course",
      explanation: "Accurate seat and allergy info prevents mistakes and protects guests."
    },
    {
      question: "How should special occasions be handled during the ordering process?",
      choice: [
        "Mark special occasions on desserts",
        "Announce them to the entire dining room",
        "Ignore them unless asked",
        "Only acknowledge birthdays"
      ],
      answer: "Mark special occasions on desserts",
      explanation: "Noting special occasions ensures guests receive personalized attention."
    },
    {
      question: "When marking the table for the next course, where should the required silverware be placed?",
      choice: [
        "On the outer edges of the placemat",
        "Stacked in the center of the table",
        "Directly on the plate",
        "Wrapped in a napkin on the bread plate"
      ],
      answer: "On the outer edges of the placemat",
      explanation: "Silverware should be placed on the outer edges to set the table properly for each course."
    },
    {
      question: "How should flatware be handled when marking the table?",
      choice: [
        "By the neck and carried in a silver transport plate (STP)",
        "By the bowl or tines for stability",
        "By holding all pieces in one hand",
        "With bare hands only"
      ],
      answer: "By the neck and carried in a silver transport plate (STP)",
      explanation: "Handling flatware by the neck and using an STP keeps utensils sanitary and organized."
    },
    {
      question: "Where is the soup spoon placed when marking the table?",
      choice: [
        "To the right of the knife",
        "To the left of the fork",
        "Above the plate",
        "On the bread plate"
      ],
      answer: "To the right of the knife",
      explanation: "The soup spoon is placed to the right of the knife for proper table setting."
    },
    {
      question: "Which side should the fork be placed on when marking the table?",
      choice: [
        "Left",
        "Right",
        "Above the plate",
        "On the bread plate"
      ],
      answer: "Left",
      explanation: "Forks are always placed to the left of the place setting."
    },
    {
      question: "Which side should the knife be placed on when marking the table?",
      choice: [
        "Right",
        "Left",
        "Above the plate",
        "On the bread plate"
      ],
      answer: "Right",
      explanation: "Knives are always placed to the right of the place setting."
    },
    {
      question: "How is bread service performed according to proper style?",
      choice: [
        "Served Russian style onto the bread plate, circling the table counter-clockwise",
        "Served French style, placed in the center of the table",
        "Guests serve themselves from a communal basket",
        "Pre-set on the table before guests arrive"
      ],
      answer: "Served Russian style onto the bread plate, circling the table counter-clockwise",
      explanation: "Russian style means the server serves bread to each guest’s plate, moving counter-clockwise."
    },
    {
      question: "When serving bread and butter, what must the Back Server do?",
      choice: [
        "Serve each guest individually onto their bread plate",
        "Leave the bread basket for guests to serve themselves",
        "Serve butter only if requested",
        "Serve bread after the main course"
      ],
      answer: "Serve each guest individually onto their bread plate",
      explanation: "Bread is served to each guest individually to provide attentive service."
    },
    {
      question: "What must be present at the table for proper wine service setup?",
      choice: [
        "Appropriate glassware and markings, coaster for red, ice bucket for white/Champagne, gueridon and decanter for older reds",
        "Just wine glasses",
        "Dessert forks and extra napkins",
        "Menu and water glasses only"
      ],
      answer: "Appropriate glassware and markings, coaster for red, ice bucket for white/Champagne, gueridon and decanter for older reds",
      explanation: "Proper mise en place includes specific items based on the wine being served."
    },
    {
      question: "How should you carry the wine bottle when approaching the table for service?",
      choice: [
        "By the base, in the crook of your arm, with a folded serviette to back the bottle",
        "By the neck, swinging gently",
        "Horizontally, resting on both palms",
        "With both hands wrapped around the label"
      ],
      answer: "By the base, in the crook of your arm, with a folded serviette to back the bottle",
      explanation: "This method is the professional standard and supports both safety and presentation."
    },
    {
      question: "When presenting the wine to the guest, what information should be stated?",
      choice: [
        "Year, producer, and product or grape",
        "Just the producer",
        "Only the grape variety",
        "Vintage and price"
      ],
      answer: "Year, producer, and product or grape",
      explanation: "Presenting the year, producer, and grape ensures the correct wine is served."
    },
    {
      question: "What should you do with the cork after removing it from a bottle of wine?",
      choice: [
        "Place it in front of the guest with the logo facing them, then carry on with service",
        "Hand it directly to the guest for inspection and wait for approval",
        "Throw it away immediately",
        "Leave it on the gueridon for the manager"
      ],
      answer: "Place it in front of the guest with the logo facing them, then carry on with service",
      explanation: "The cork is placed for the guest to inspect at their discretion, but service should continue."
    },
    {
      question: "How is wine poured at the table after being accepted by the taster?",
      choice: [
        "Pour from the right, with the back label in the palm of your hand, 3 oz at the widest part of the glass, host last",
        "Start with the host and pour from the left, filling each glass to the rim",
        "Pour all glasses at once with two bottles",
        "Let guests pour for themselves after opening"
      ],
      answer: "Pour from the right, with the back label in the palm of your hand, 3 oz at the widest part of the glass, host last",
      explanation: "Pouring properly maintains service standards and presentation."
    },
    {
      question: "What should you do if a second different wine is ordered for the table?",
      choice: [
        "Place the new glass to the left of the first wine glass",
        "Remove the first glass and replace it",
        "Use the same glass for both wines",
        "Clear all wine glasses and start over"
      ],
      answer: "Place the new glass to the left of the first wine glass",
      explanation: "Each wine should have its own glass, arranged in tasting order."
    },
    {
      question: "If a cork breaks during opening, what is the best solution?",
      choice: [
        "Place the first half of the cork on the table as usual, then remove the second half and place it also",
        "Push the rest of the cork into the wine and serve immediately",
        "Apologize and bring a new bottle without explanation",
        "Try to hide the broken cork from the guest"
      ],
      answer: "Place the first half of the cork on the table as usual, then remove the second half and place it also",
      explanation: "Transparency and continued professional service are important with wine mishaps."
    },
    {
      question: "What should you do if wine drips run down the outside of the glass?",
      choice: [
        "Set the bottle down, lift the glass, and dab the drips with a serviette",
        "Ignore the drips and continue service",
        "Quickly wipe the tablecloth with your hand",
        "Ask the guest to clean it"
      ],
      answer: "Set the bottle down, lift the glass, and dab the drips with a serviette",
      explanation: "Promptly and discretely correcting the drip maintains professionalism."
    },
    {
      question: "If a guest claims the wine is corked, what is the correct response?",
      choice: [
        "Remove the bottle, have the manager taste, and replace it with the same wine",
        "Tell the guest it's normal and leave the bottle",
        "Pour a new glass from the same bottle",
        "Offer to swap the wine for a cocktail"
      ],
      answer: "Remove the bottle, have the manager taste, and replace it with the same wine",
      explanation: "Proper procedure is to verify and resolve quality issues promptly."
    },
    {
      question: "If pieces of cork fall into the guest’s glass, what should you do?",
      choice: [
        "Bring the guest a new glass and transfer the wine, rotating the old glass so the cork sticks to the sides",
        "Fish the cork pieces out with your fingers",
        "Ask the guest to accept the cork pieces",
        "Ignore the cork and continue serving"
      ],
      answer: "Bring the guest a new glass and transfer the wine, rotating the old glass so the cork sticks to the sides",
      explanation: "This solution removes cork pieces without wasting wine or disrupting the guest experience."
    },
    {
      question: "If the cork is pushed inside the bottle, how should the wine be served?",
      choice: [
        "Decant and serve from the decanter",
        "Pour directly from the bottle regardless",
        "Serve with the cork floating in the glass",
        "Open a new bottle and discard the old one"
      ],
      answer: "Decant and serve from the decanter",
      explanation: "Decanting separates the wine from the cork pieces and maintains presentation."
    },
    {
      question: "What is the standard technique for serving food at the table?",
      choice: [
        "Serve open-handed from the right with the right hand, unless awkward, then from the left with the left hand",
        "Serve with both hands from behind the guest",
        "Place dishes over guests’ heads from the center",
        "Pass plates around the table for guests to serve themselves"
      ],
      answer: "Serve open-handed from the right with the right hand, unless awkward, then from the left with the left hand",
      explanation: "Proper technique ensures guest comfort and professionalism."
    },
    {
      question: "How should servers handle which seat’s dish is in which hand?",
      choice: [
        "Be mindful in the kitchen and adjust to avoid backhanding at the table",
        "Pick up plates randomly and decide at the table",
        "Ask guests to identify their orders",
        "Let the Back Server decide for each service"
      ],
      answer: "Be mindful in the kitchen and adjust to avoid backhanding at the table",
      explanation: "Planning ahead prevents awkward or unprofessional movements."
    },
    {
      question: "What is the correct way to deliver food to guests?",
      choice: [
        "Serve by seat number, never auctioning off food",
        "Auction off each dish as you arrive at the table",
        "Hand all plates to the closest guest to distribute",
        "Call out dish names and wait for guests to raise their hands"
      ],
      answer: "Serve by seat number, never auctioning off food",
      explanation: "Serving by seat number maintains elegance and accuracy."
    },
    {
      question: "What is important to remember about posture and placement when serving food?",
      choice: [
        "Use grace and care, approach from waist level, bend knees if needed",
        "Serve quickly from above head height",
        "Toss plates onto the table from a standing position",
        "Reach across guests for efficiency"
      ],
      answer: "Use grace and care, approach from waist level, bend knees if needed",
      explanation: "Graceful, careful service ensures safety and a refined guest experience."
    },
    {
      question: "Who is responsible for presenting or calling out the dishes to guests?",
      choice: [
        "Whomever places the food for the lowest seat number at the table",
        "The chef from the kitchen",
        "The guest who ordered first",
        "Any team member passing by"
      ],
      answer: "Whomever places the food for the lowest seat number at the table",
      explanation: "This practice creates consistency and clear communication at the table."
    },
    {
      question: "When should the first check back occur after serving a dish?",
      choice: [
        "After the guest has had 1 or 2 bites",
        "Immediately after dropping the plate",
        "Only at the end of the meal",
        "Once dessert is served"
      ],
      answer: "After the guest has had 1 or 2 bites",
      explanation: "Checking back early ensures any issues are caught before the guest finishes their dish."
    },
    {
      question: "What form must the first check back take?",
      choice: [
        "It must be verbal",
        "It can be a silent wave",
        "It is not necessary",
        "It should be a written note"
      ],
      answer: "It must be verbal",
      explanation: "A verbal check back confirms satisfaction and allows the guest to voice concerns."
    },
    {
      question: "Which of the following is an appropriate verbal check back question?",
      choice: [
        "\"Is the meat/fish prepared to your liking?\"",
        "\"Why haven’t you finished yet?\"",
        "\"Do you want dessert now?\"",
        "\"Would you like to see the kitchen?\""
      ],
      answer: "\"Is the meat/fish prepared to your liking?\"",
      explanation: "Polite, open-ended questions ensure the dish meets the guest’s expectations."
    },
    {
      question: "What is considered best practice for subsequent check backs after the initial verbal check?",
      choice: [
        "Use non-verbal methods such as eye contact, pouring beverages, or smiling",
        "Ask detailed questions about every bite",
        "Stand at the table until the guest finishes",
        "Avoid all further contact until the check is presented"
      ],
      answer: "Use non-verbal methods such as eye contact, pouring beverages, or smiling",
      explanation: "Non-verbal check backs maintain presence without interrupting the meal."
    },
    {
      question: "If a guest appears dissatisfied or there is a visible problem, what is the correct action?",
      choice: [
        "Verbally address it immediately, apologize, remove the plate, and go directly to the instructor/expediter/chef",
        "Wait until the end of the meal to ask",
        "Tell the guest it's too late to fix anything",
        "Ignore the issue unless the guest complains twice"
      ],
      answer: "Verbally address it immediately, apologize, remove the plate, and go directly to the instructor/expediter/chef",
      explanation: "Promptly addressing issues maintains guest trust and ensures problems are fixed."
    },
    {
      question: "During non-verbal check backs, what should the front server avoid?",
      choice: [
        "Asking the guest for an assessment of the meal",
        "Making eye contact",
        "Pouring water or wine",
        "Smiling and being present"
      ],
      answer: "Asking the guest for an assessment of the meal",
      explanation: "Non-verbal check backs should not interrupt the guest or put them on the spot."
    },
    {
      question: "When should water be refilled for guests?",
      choice: [
        "When the glass is half full",
        "Only when requested",
        "After dessert is served",
        "At the end of the meal"
      ],
      answer: "When the glass is half full",
      explanation: "Refilling at half full ensures guests never run out and maintains attentive service."
    },
    {
      question: "At what beverage level should the back server offer to replace a drink?",
      choice: [
        "When the beverage is 1/4 full",
        "Only when empty",
        "After the main course",
        "At any random time"
      ],
      answer: "When the beverage is 1/4 full",
      explanation: "Offering to replace beverages proactively improves guest satisfaction."
    },
    {
      question: "What is the proper technique for pouring wine throughout the meal?",
      choice: [
        "Pour to the widest part of the glass and keep wine levels even for all guests",
        "Fill the glass to the top each time",
        "Pour only for the host",
        "Let guests pour their own wine"
      ],
      answer: "Pour to the widest part of the glass and keep wine levels even for all guests",
      explanation: "Consistent pouring is professional and creates a refined dining experience."
    },
    {
      question: "How should empty glasses be removed from the table?",
      choice: [
        "By the stem or base",
        "By grabbing the rim",
        "Stacking glasses together",
        "With a napkin"
      ],
      answer: "By the stem or base",
      explanation: "Removing glasses by the stem or base avoids fingerprints and maintains cleanliness."
    },
    {
      question: "What is the best way for a back server to maintain presence during table service?",
      choice: [
        "Make quick and invisible passes without hovering",
        "Stand near the table and watch closely",
        "Hover at the edge of the table",
        "Visit the table every two minutes"
      ],
      answer: "Make quick and invisible passes without hovering",
      explanation: "Being discreet ensures guests feel comfortable and well-cared for."
    },
    {
      question: "If a guest temporarily leaves the table, how should their napkin be handled?",
      choice: [
        "Fold the napkin and place it to the left of the guest",
        "Place the napkin on their chair",
        "Take the napkin to the kitchen",
        "Leave the napkin where it is"
      ],
      answer: "Fold the napkin and place it to the left of the guest",
      explanation: "Proper napkin placement signals to staff and maintains table appearance."
    },
    {
      question: "What should be done if a guest leaves the table permanently?",
      choice: [
        "Remove everything from that place setting",
        "Leave all items as they are",
        "Move the items to another guest’s setting",
        "Stack dishes in the middle of the table"
      ],
      answer: "Remove everything from that place setting",
      explanation: "Clearing the setting resets the table for new guests or maintains cleanliness."
    },
    {
      question: "If a napkin is dirty when a guest returns, what should the back server do?",
      choice: [
        "Replace the napkin with a clean one",
        "Ignore the dirty napkin",
        "Ask the guest to clean it themselves",
        "Remove the napkin and leave none"
      ],
      answer: "Replace the napkin with a clean one",
      explanation: "Providing a clean napkin maintains standards of hygiene and comfort."
    },
    {
      question: "When should the Front Server fire the main course in the computer?",
      choice: [
        "Just before clearing the previous course",
        "When the guest is seated",
        "After the dessert order is taken",
        "At the beginning of the meal"
      ],
      answer: "Just before clearing the previous course",
      explanation: "Firing the main course at this time ensures proper pacing and kitchen readiness."
    },
    {
      question: "Who is responsible for firing the first course?",
      choice: [
        "Chef automatically fires the first course when the order is received",
        "Front Server always fires every course",
        "Back Server must fire the first course",
        "Manager fires the first course"
      ],
      answer: "Chef automatically fires the first course when the order is received",
      explanation: "The first course is fired by the kitchen as soon as the order is placed."
    },
    {
      question: "How is dessert fired in the POS/computer system?",
      choice: [
        "Use the DESSERT FIRE button",
        "Add it to the main course order",
        "Verbally tell the expediter only",
        "Write it on a notepad"
      ],
      answer: "Use the DESSERT FIRE button",
      explanation: "Dessert orders must be specifically fired using the designated button in the system."
    },
    {
      question: "What is the standard amount of time between courses in a fine dining service?",
      choice: [
        "5–7 minutes",
        "1–2 minutes",
        "15–20 minutes",
        "10–15 minutes"
      ],
      answer: "5–7 minutes",
      explanation: "5–7 minutes between courses provides ideal pacing for most fine dining experiences."
    },
    {
      question: "How long should guests typically wait for the next course to arrive after firing?",
      choice: [
        "7–10 minutes",
        "2–3 minutes",
        "20 minutes",
        "Immediately after clearing"
      ],
      answer: "7–10 minutes",
      explanation: "A 7–10-minute window after firing is standard for course arrival, depending on the kitchen and flow."
    },
    {
      question: "When should the back server begin clearing plates from the table?",
      choice: [
        "When everyone at the table is finished",
        "Immediately after the first guest finishes",
        "When the kitchen calls for it",
        "As soon as the main course is fired"
      ],
      answer: "When everyone at the table is finished",
      explanation: "Clearing only after all guests finish prevents anyone from feeling rushed."
    },
    {
      question: "If unsure whether a guest is finished, what should the back server do?",
      choice: [
        "Politely ask, 'May I take your plate?'",
        "Remove the plate without comment",
        "Ignore the guest and clear others first",
        "Wait for the host’s signal"
      ],
      answer: "Politely ask, 'May I take your plate?'",
      explanation: "This approach ensures guests are not interrupted or rushed."
    },
    {
      question: "What is the correct clearing technique for plates and silverware?",
      choice: [
        "Clear clockwise from the right with your right hand and pick up all silverware from the previous course",
        "Clear from the left with your left hand and stack plates on top of each other",
        "Remove only the host’s plate first",
        "Clear haphazardly as you can"
      ],
      answer: "Clear clockwise from the right with your right hand and pick up all silverware from the previous course",
      explanation: "Consistent, correct clearing creates a seamless guest experience."
    },
    {
      question: "What should you do if reaching over a guest is unavoidable?",
      choice: [
        "Say 'Pardon me' before reaching over",
        "Clear without saying anything",
        "Wait until the guest leaves the table",
        "Ask another server to do it"
      ],
      answer: "Say 'Pardon me' before reaching over",
      explanation: "Politeness maintains professionalism and guest comfort."
    },
    {
      question: "What should NOT be done when clearing plates?",
      choice: [
        "Scrape and stack plates in front of guests",
        "Secure silverware before moving plates",
        "Clear each place setting fully after entrees",
        "Carry cleared items discreetly"
      ],
      answer: "Scrape and stack plates in front of guests",
      explanation: "Scraping and stacking should be done out of sight, not at the table."
    },
    {
      question: "How should resetting for the next course be handled?",
      choice: [
        "Clear and reset as one task for each guest",
        "Clear the whole table, then return later to reset",
        "Reset only after dessert is ordered",
        "Let guests set their own places"
      ],
      answer: "Clear and reset as one task for each guest",
      explanation: "Combining tasks is efficient and maintains flow of service."
    },
    {
      question: "How should clean flatware be carried when resetting a table?",
      choice: [
        "In a silver transport plate (STP) box",
        "By hand for quickness",
        "In apron pockets",
        "On a tray with used dishes"
      ],
      answer: "In a silver transport plate (STP) box",
      explanation: "Using an STP ensures sanitation and organization."
    },
    {
      question: "How should plates be prepared for the dishwasher?",
      choice: [
        "Scrape and stack carefully, being considerate of the dishwasher",
        "Leave all leftovers on plates",
        "Send everything back as-is",
        "Have guests scrape their own plates"
      ],
      answer: "Scrape and stack carefully, being considerate of the dishwasher",
      explanation: "Proper preparation helps the dish area run smoothly and quickly."
    },
    {
      question: "What tool should be used for de-crumbing the table?",
      choice: [
        "A de-crumbing plate with napkin",
        "A glass of water",
        "A guest’s bread plate",
        "A dessert spoon"
      ],
      answer: "A de-crumbing plate with napkin",
      explanation: "This tool allows for discreet and effective crumb removal."
    },
    {
      question: "What should be removed when de-crumbing is complete?",
      choice: [
        "Salt and pepper shakers",
        "Bread and butter plates",
        "Wine glasses",
        "All flatware"
      ],
      answer: "Salt and pepper shakers",
      explanation: "Salt and pepper are removed after de-crumbing to prepare for the next course."
    },
    {
      question: "Where should salt, pepper, and the de-crumbing plate be taken after de-crumbing?",
      choice: [
        "Return them to the side station",
        "Leave them on the table",
        "Bring them to the bar",
        "Set them on a nearby chair"
      ],
      answer: "Return them to the side station",
      explanation: "Items not needed should be promptly removed to keep the table clear and organized."
    },
    {
      question: "When taking an after-dinner coffee order, what accompaniments should you offer?",
      choice: [
        "Cream, milk, and sugar",
        "Only sugar",
        "Lemon and honey",
        "No accompaniments unless asked"
      ],
      answer: "Cream, milk, and sugar",
      explanation: "Guests should be offered all common additions for coffee."
    },
    {
      question: "What should you offer when a guest orders an espresso beverage?",
      choice: [
        "Sugar",
        "Cream and milk",
        "Lemon wedge",
        "Green or black tea"
      ],
      answer: "Sugar",
      explanation: "Sugar is the standard accompaniment for espresso-based drinks."
    },
    {
      question: "Which options should be presented when a guest orders tea?",
      choice: [
        "Green, black, or herbal tea; offer milk, lemon, or honey",
        "Only black tea and sugar",
        "Just a tea bag and hot water",
        "Tea and espresso"
      ],
      answer: "Green, black, or herbal tea; offer milk, lemon, or honey",
      explanation: "Offering type of tea and suitable accompaniments ensures guest satisfaction."
    },
    {
      question: "After taking an after-dinner drink order, what is the correct next step?",
      choice: [
        "Go directly to the computer to enter the order",
        "Finish clearing all dishes before entering the order",
        "Ask the host to enter the order",
        "Wait until all desserts are finished"
      ],
      answer: "Go directly to the computer to enter the order",
      explanation: "Prompt entry helps ensure timely and accurate service."
    },
    {
      question: "When clearing dessert, which item should NOT be removed until the guests leave?",
      choice: [
        "Water glasses",
        "Coffee spoons",
        "Bread plates",
        "Salt and pepper shakers"
      ],
      answer: "Water glasses",
      explanation: "Water glasses remain on the table until guests depart, providing refreshment throughout."
    },
    {
      question: "When may cappuccino and espresso cups be removed from the table?",
      choice: [
        "As soon as the guest finishes the drink",
        "After the main course is cleared",
        "Before dessert is served",
        "After dessert is ordered"
      ],
      answer: "As soon as the guest finishes the drink",
      explanation: "Cappuccino and espresso cups can be cleared once the guest has finished the beverage."
    },
    {
      question: "When can empty coffee cups be removed?",
      choice: [
        "After a second offering has been made",
        "As soon as dessert is delivered",
        "At the same time as the dessert plates",
        "Never, leave them until the table is reset"
      ],
      answer: "After a second offering has been made",
      explanation: "Guests should be offered a second cup before clearing empty coffee cups."
    },
    {
      question: "When a guest requests the check, what should the server do?",
      choice: [
        "Bring it immediately and place it in the center of the table unless someone specifically requested it",
        "Wait until all guests have left the table",
        "Bring the check after clearing water glasses",
        "Place the check only at the host’s seat regardless of request"
      ],
      answer: "Bring it immediately and place it in the center of the table unless someone specifically requested it",
      explanation: "Prompt and appropriate check presentation demonstrates respect for the guest’s time."
    },
    {
      question: "If the check is not requested, when is it appropriate to present it?",
      choice: [
        "With mignardise after dessert plates are cleared, letting guests know they may take their time",
        "At the start of the meal",
        "After the main course is served",
        "As soon as the last beverage is poured"
      ],
      answer: "With mignardise after dessert plates are cleared, letting guests know they may take their time",
      explanation: "This balances hospitality with efficiency, without rushing the guests."
    },
    {
      question: "What is essential when processing payment at the table?",
      choice: [
        "Make eye contact, thank the guest, and retrieve the signed receipt before the guest leaves",
        "Collect payment silently and leave immediately",
        "Let the guest take the receipt home to sign",
        "Only thank the host, not the entire table"
      ],
      answer: "Make eye contact, thank the guest, and retrieve the signed receipt before the guest leaves",
      explanation: "A genuine thank you and ensuring the receipt is signed are crucial for professionalism."
    },
    {
      question: "If a guest offers extra cash as a tip in this class, how should the server respond?",
      choice: [
        "Explain tips are not accepted but offer the option to contribute to the student fund",
        "Accept the cash discreetly",
        "Refuse the tip and leave abruptly",
        "Suggest they leave the cash on the table anyway"
      ],
      answer: "Explain tips are not accepted but offer the option to contribute to the student fund",
      explanation: "Transparency about tipping policy and the student fund maintains integrity and supports the program."
    },
    {
      question: "What is the appropriate way to end the guest’s dining experience?",
      choice: [
        "Give a fond and genuine farewell, remaining attentive until the guest leaves",
        "Leave the table as soon as payment is complete",
        "Thank only the host",
        "Let guests leave without acknowledgment"
      ],
      answer: "Give a fond and genuine farewell, remaining attentive until the guest leaves",
      explanation: "A fond farewell ensures the last impression is as strong as the first."
    },
    {
      question: "What is the correct way to bus a table during the reset process?",
      choice: [
        "Use a tray and avoid placing the tray on the table",
        "Place the tray directly on the table for convenience",
        "Carry items by hand to save time",
        "Use a linen napkin as a tray"
      ],
      answer: "Use a tray and avoid placing the tray on the table",
      explanation: "Proper tray usage maintains cleanliness and professionalism."
    },
    {
      question: "What extra detail should be attended to when resetting a table?",
      choice: [
        "Dust the chairs before seating new guests",
        "Only clean the table top",
        "Adjust lighting but ignore chairs",
        "Wipe the floor instead of the table"
      ],
      answer: "Dust the chairs before seating new guests",
      explanation: "Dusting chairs ensures every aspect of the guest's experience is clean and comfortable."
    },
    {
      question: "What is the proper method for cleaning tables during reset?",
      choice: [
        "Spray cleaning solution onto a paper towel in the service stand, then wipe the table down",
        "Spray cleaning solution directly on the table in front of guests",
        "Use water only",
        "Wait until the next shift to clean the table"
      ],
      answer: "Spray cleaning solution onto a paper towel in the service stand, then wipe the table down",
      explanation: "Cleaning products should never be sprayed at the table or in view of guests."
    },
    {
      question: "Where should spray cleaner bottles be kept during service?",
      choice: [
        "Discreetly stored out of guests' view",
        "Placed on each table for easy access",
        "On the floor by the host stand",
        "Displayed on the bar"
      ],
      answer: "Discreetly stored out of guests' view",
      explanation: "Cleaning products should be hidden from sight to maintain a polished dining room appearance."
    },
    {
      question: "How should clean wares be brought to the table for reset?",
      choice: [
        "Always use a tray, but do not place the tray on the table",
        "Carry each piece individually by hand",
        "Place the tray on the table for easier unloading",
        "Stack wares on an empty chair"
      ],
      answer: "Always use a tray, but do not place the tray on the table",
      explanation: "Trays should never touch the tabletop to avoid contaminating clean surfaces."
    },
    {
      question: "What is meant by 'mirror the reset of opposite position'?",
      choice: [
        "Set each place to create definite lines and symmetry across the table",
        "Copy the previous guest’s mess",
        "Randomly set silverware for variety",
        "Place all settings on one side of the table"
      ],
      answer: "Set each place to create definite lines and symmetry across the table",
      explanation: "Mirroring and symmetry ensure the table looks polished and professional."
    },
    {
      question: "Hospitality is made up of which two main types of skills?",
      choice: [
        "Hard skills and soft skills",
        "Technical skills and computer skills",
        "Physical skills and mental skills",
        "Only soft skills"
      ],
      answer: "Hard skills and soft skills",
      explanation: "Hospitality requires both technical (hard) skills and interpersonal (soft) skills."
    },
    {
      question: "Which of the following best defines soft skills in hospitality?",
      choice: [
        "Characteristics and behaviors that promote engagement and foster positive relationships",
        "Technical abilities related to cooking and cleaning",
        "Skills learned only in school",
        "Memorizing the menu"
      ],
      answer: "Characteristics and behaviors that promote engagement and foster positive relationships",
      explanation: "Soft skills focus on how we interact with and engage others."
    },
    {
      question: "Which of these is NOT a verbal soft skill?",
      choice: [
        "Body placement/grace",
        "Engagement",
        "Empathy",
        "Gratitude"
      ],
      answer: "Body placement/grace",
      explanation: "Body placement/grace is a non-verbal soft skill."
    },
    {
      question: "What are some key elements of verbal soft skills?",
      choice: [
        "Engagement, empathy, and gratitude",
        "Typing speed and accuracy",
        "Physical stamina and posture",
        "Menu memorization"
      ],
      answer: "Engagement, empathy, and gratitude",
      explanation: "These are central to verbal communication in hospitality."
    },
    {
      question: "Which of the following are elements of engagement as a soft skill?",
      choice: [
        "Personalization, conversation, consistency, openness",
        "Speed, multitasking, endurance, strength",
        "Silence, ignoring, waiting, observing",
        "Delegation, supervision, leadership, management"
      ],
      answer: "Personalization, conversation, consistency, openness",
      explanation: "These qualities help build positive relationships with guests."
    },
    {
      question: "Empathy as a soft skill involves:",
      choice: [
        "Identifying commonalities, providing full attention, considering perspective, and acting",
        "Giving orders, being strict, and working alone",
        "Only smiling at guests",
        "Ignoring guests' needs"
      ],
      answer: "Identifying commonalities, providing full attention, considering perspective, and acting",
      explanation: "Empathy requires putting yourself in the guest’s shoes and responding appropriately."
    },
    {
      question: "Gratitude can be shown verbally by:",
      choice: [
        "Words of appreciation, affirmation, and apologies",
        "Staying silent during service",
        "Only providing the check",
        "Ignoring guest feedback"
      ],
      answer: "Words of appreciation, affirmation, and apologies",
      explanation: "Expressing gratitude verbally fosters guest loyalty."
    },
    {
      question: "Which of the following is a non-verbal soft skill?",
      choice: [
        "Body language",
        "Making jokes",
        "Reading the menu aloud",
        "Taking orders by memory"
      ],
      answer: "Body language",
      explanation: "Non-verbal skills like body language are key for guest engagement."
    },
    {
      question: "Which of the following are considered elements of tone as a non-verbal soft skill?",
      choice: [
        "Inflection, volume, pace, and verbiage",
        "Memory, strength, and energy",
        "Physical fitness, technical skills, and balance",
        "Taking orders quickly"
      ],
      answer: "Inflection, volume, pace, and verbiage",
      explanation: "How you say something matters as much as what you say."
    },
    {
      question: "What are important elements of body language in hospitality?",
      choice: [
        "Smile, eye contact, active listening, posture, body placement/grace",
        "Frowning, looking away, and slouching",
        "Yelling, waving, and ignoring",
        "Speed, strength, and endurance"
      ],
      answer: "Smile, eye contact, active listening, posture, body placement/grace",
      explanation: "These non-verbal cues help guests feel welcomed and understood."
    },
    {
      question: "How does emotional engagement affect guest experience in hospitality?",
      choice: [
        "Emotion is the #1 contributor to customer loyalty in most industries",
        "It has little impact compared to price",
        "Only affects large group dining",
        "Is only relevant for managers"
      ],
      answer: "Emotion is the #1 contributor to customer loyalty in most industries",
      explanation: "Emotional engagement increases loyalty, sales, and guest retention."
    },
    {
      question: "What are some benefits of optimizing a guest’s emotional journey?",
      choice: [
        "Higher sales growth and gross margin compared to competitors",
        "Faster table turns only",
        "Less staff training required",
        "Lower food costs"
      ],
      answer: "Higher sales growth and gross margin compared to competitors",
      explanation: "Emotionally engaged guests spend more and are more loyal."
    },
    {
      question: "Which statement is TRUE about emotionally engaged guests?",
      choice: [
        "They are more likely to recommend, re-purchase, and are less price sensitive",
        "They are more difficult to serve",
        "They always require discounts",
        "They never provide feedback"
      ],
      answer: "They are more likely to recommend, re-purchase, and are less price sensitive",
      explanation: "Emotional engagement directly influences guest behavior and loyalty."
    },
    {
      question: "Which soft skill is key for all FOH roles, from host to manager?",
      choice: [
        "Emotional intelligence, engagement, and empathy",
        "Knife skills",
        "Financial reporting",
        "Menu engineering"
      ],
      answer: "Emotional intelligence, engagement, and empathy",
      explanation: "Soft skills are critical in every guest-facing hospitality role."
    },
    {
      question: "What is the first step in demonstrating empathy as a soft skill?",
      choice: [
        "Identify commonalities",
        "Ask for payment",
        "Recite the wine list",
        "Present the menu"
      ],
      answer: "Identify commonalities",
      explanation: "Connecting over shared experiences builds rapport with guests."
    },
    {
      question: "How can a server show gratitude non-verbally?",
      choice: [
        "Through actions, small gifts, and positive energy",
        "By ignoring the table",
        "Only saying 'thank you' at the end",
        "By serving quickly and leaving"
      ],
      answer: "Through actions, small gifts, and positive energy",
      explanation: "Gratitude isn’t just words—it’s shown through behavior and attitude."
    },
    {
      question: "Which of the following best describes 'active listening' in hospitality?",
      choice: [
        "Focusing fully on the guest, showing understanding through body language and feedback",
        "Hearing the guest while checking your phone",
        "Letting the guest repeat themselves",
        "Listening only to managers"
      ],
      answer: "Focusing fully on the guest, showing understanding through body language and feedback",
      explanation: "Active listening helps you better serve and connect with guests."
    },
    {
      question: "Why is consistency important as a soft skill?",
      choice: [
        "It builds trust and reliability with guests",
        "It speeds up table turnover",
        "It lets you skip steps in service",
        "It is only needed for the kitchen team"
      ],
      answer: "It builds trust and reliability with guests",
      explanation: "Consistent service leads to repeat business and stronger relationships."
    },
    {
      question: "Which aspect of tone is most important when engaging with guests?",
      choice: [
        "Speaking at an appropriate volume and pace",
        "Speaking as quickly as possible",
        "Being monotone at all times",
        "Ignoring guest responses"
      ],
      answer: "Speaking at an appropriate volume and pace",
      explanation: "Tone helps set the mood and ensures guests feel comfortable."
    },
    {
      question: "What is 'personalization' in the context of soft skills?",
      choice: [
        "Tailoring service and conversation to individual guests",
        "Treating every guest the same way, no exceptions",
        "Only using guest names when taking payment",
        "Ignoring guests' preferences"
      ],
      answer: "Tailoring service and conversation to individual guests",
      explanation: "Personalization makes the guest feel valued and unique."
    },
    {
      question: "What is the correct ice-to-water ratio for preparing a wine bucket for chilling wine?",
      choice: [
        "Two parts ice to one part water",
        "All ice, no water",
        "Equal parts ice and water",
        "Three parts water to one part ice"
      ],
      answer: "Two parts ice to one part water",
      explanation: "This mixture chills the wine efficiently and evenly."
    },
    {
      question: "What is the main reason red wines are decanted at the table?",
      choice: [
        "To separate the wine from sediment and aerate the wine",
        "To chill the wine further",
        "To remove alcohol",
        "To allow guests to pour for themselves"
      ],
      answer: "To separate the wine from sediment and aerate the wine",
      explanation: "Sediment in older red wines is removed, and decanting also helps the wine breathe."
    },
    {
      question: "When removing a red wine bottle from storage for decanting, how should it be handled?",
      choice: [
        "Lift it gently, keeping the label facing up as it was in the rack",
        "Stand it upright immediately",
        "Shake the bottle to mix the sediment",
        "Lay it flat on the table"
      ],
      answer: "Lift it gently, keeping the label facing up as it was in the rack",
      explanation: "This keeps sediment undisturbed until decanting."
    },
    {
      question: "During decanting, what tool is commonly used to see sediment as you pour?",
      choice: [
        "A candle or electric light",
        "A magnifying glass",
        "A thermometer",
        "A wine basket"
      ],
      answer: "A candle or electric light",
      explanation: "Light helps you see the sediment as it nears the neck."
    },
    {
      question: "What should be done if a restaurant does not allow open flames for decanting?",
      choice: [
        "Use a small electric light",
        "Skip the decanting process",
        "Use a match",
        "Ask the guest to bring their own candle"
      ],
      answer: "Use a small electric light",
      explanation: "An electric light is a safe and effective alternative."
    },
    {
      question: "What are wine baskets used for in decanting service?",
      choice: [
        "To carry fragile or older wines to the table and keep the bottle in position",
        "To store ice for the wine bucket",
        "To hold corkscrews",
        "To serve bread"
      ],
      answer: "To carry fragile or older wines to the table and keep the bottle in position",
      explanation: "Wine baskets help prevent sediment from mixing back into the wine."
    },
    {
      question: "When presenting a bottle to a guest, what three pieces of information should be pointed out?",
      choice: [
        "Vintage, name, and producer",
        "Region, grape, and price",
        "Importer, vintage, and temperature",
        "Producer, price, and alcohol content"
      ],
      answer: "Vintage, name, and producer",
      explanation: "These are the key details for confirming the guest's selection."
    },
    {
      question: "What is the correct technique for opening sparkling wine?",
      choice: [
        "Twist the bottle while holding the cork steady, allowing the cork to come out slowly with a quiet 'shhh' sound",
        "Twist the cork while holding the bottle still, letting it pop loudly",
        "Open it quickly for a showy pop",
        "Open with the bottle standing straight up on the table"
      ],
      answer: "Twist the bottle while holding the cork steady, allowing the cork to come out slowly with a quiet 'shhh' sound",
      explanation: "This prevents spills and is the professional standard for sparkling wine service."
    },
    {
      question: "When pouring sparkling wine, how much should you pour in the glass initially?",
      choice: [
        "About an ounce, letting the foam subside before pouring more",
        "Fill the glass to the top immediately",
        "Pour the entire bottle into the first glass",
        "Pour half the glass in one go"
      ],
      answer: "About an ounce, letting the foam subside before pouring more",
      explanation: "This controls foaming and ensures a clean pour."
    },
    {
      question: "What is the purpose of presenting the cork to the host?",
      choice: [
        "To confirm the cork matches the bottle and check the cork's condition",
        "So the guest can keep it as a souvenir",
        "To smell for bouquet",
        "To check for sugar content"
      ],
      answer: "To confirm the cork matches the bottle and check the cork's condition",
      explanation: "A wet or dry cork gives information about storage and wine quality."
    },
    {
      question: "If the cork breaks during opening but doesn’t fall into the bottle, what should you do?",
      choice: [
        "Remove the broken piece and reinsert the corkscrew to remove the rest",
        "Push the cork into the bottle",
        "Stop service and request a new bottle",
        "Serve without removing the cork"
      ],
      answer: "Remove the broken piece and reinsert the corkscrew to remove the rest",
      explanation: "This is the safest way to finish removing the cork."
    },
    {
      question: "If the wine or sparkling wine is rejected by the guest due to a fault, what should you do?",
      choice: [
        "Remove the bottle, offer a replacement, and possibly consult the manager or wine steward",
        "Argue that the wine is fine",
        "Pour the rejected wine by the glass for other guests",
        "Ignore the guest's complaint"
      ],
      answer: "Remove the bottle, offer a replacement, and possibly consult the manager or wine steward",
      explanation: "Prompt action ensures guest satisfaction and professionalism."
    },
    {
      question: "What is the standard pour for wine at the table?",
      choice: [
        "About 3 ounces, never filling more than half the glass",
        "Fill the glass to the rim",
        "Pour 8 ounces for every guest",
        "Pour according to the guest's age"
      ],
      answer: "About 3 ounces, never filling more than half the glass",
      explanation: "Leaving space allows the wine to be swirled and appreciated."
    },
    {
      question: "After pouring wine for all guests, what should you do with the cork?",
      choice: [
        "Remove it from the table",
        "Leave it next to the host",
        "Throw it in the wine bucket",
        "Hand it to the youngest guest"
      ],
      answer: "Remove it from the table",
      explanation: "Once pouring is finished, the cork is no longer needed."
    },
    {
      question: "What should you do before pouring a new wine for a new course?",
      choice: [
        "Pour the new wine before removing the previous glass",
        "Clear all wine glasses first",
        "Ask the guest to pour for themselves",
        "Pour both wines in the same glass"
      ],
      answer: "Pour the new wine before removing the previous glass",
      explanation: "This allows guests to compare wines if they wish."
    },
    {
      question: "What should you always do to avoid wine drips when pouring?",
      choice: [
        "Lift and twist the mouth of the bottle at the end of each pour",
        "Wipe the bottle on the tablecloth",
        "Let it drip into the guest's glass",
        "Pour quickly to minimize contact"
      ],
      answer: "Lift and twist the mouth of the bottle at the end of each pour",
      explanation: "This classic technique prevents unsightly drips on the table or label."
    },
    {
      question: "Which of these is a key skill for remarkable wine service?",
      choice: [
        "Understanding the wine list, using wine tools, and setting correct glassware",
        "Memorizing all guest birthdays",
        "Always pouring full glasses",
        "Arguing with guests about faults"
      ],
      answer: "Understanding the wine list, using wine tools, and setting correct glassware",
      explanation: "Knowledge and proper tools ensure a professional, smooth wine service."
    },




  ],
};
