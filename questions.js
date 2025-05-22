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

  ],



  WinesBeverage: [
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



  ],
};
