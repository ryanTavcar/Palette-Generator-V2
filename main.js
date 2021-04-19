
// Color constructor
function Color(name, rgb, hex) {
    this.name = name;
    this.rgb  = rgb;
    this.hex  = hex;
};

// UI constructor
function UI() {};

// Get an array of colors from redColors / greenColors / blueColors function 
Color.prototype.randomColorObject = (rawColorData) => {

    const ColorArray = [];

    rawColorData().forEach( color => ColorArray.push(color));

    return ColorArray;
};

// Create 12 Color objects and return them in an array
Color.prototype.createColorObjectArray = (colorObject) => {

    //const gridSquare = document.getElementsByClassName('grid-sqr');

    const colorObjectArray = []
    
    for (let i = 0; i < colorObject.length; i++) {

        const ColorName = colorObject[i].name;
        const ColorRGB  = colorObject[i].rgb;
        const ColorHex  = colorObject[i].hex;
        
        colorObjectArray.push(new Color(ColorName, ColorRGB, ColorHex))

    };    

    return colorObjectArray

};

// Change the UI table from the array of Color objects
UI.prototype.generateColors = (colorObject) => {

    const gridSquare = document.getElementsByClassName('grid-sqr');

    let colorRGB = []
    colorObject.forEach( color => colorRGB.push(color.rgb) )

    Array.from(gridSquare).forEach( cell => {

        cell.style.backgroundColor = getRandomElement(colorRGB);
    });
};

// Function That stores all red colors
function redColors() {

    const red = [
        { name: 'lightsalmon'   , rgb: 'rgb(255,160,122)', hex: '#FFA07A' },
        { name: 'salmon'        , rgb: 'rgb(250,128,114)', hex: '#FA8072' },
        { name: 'darksalmon'    , rgb: 'rgb(233,150,122)', hex: '#E9967A' },
        { name: 'lightcoral'    , rgb: 'rgb(240,128,128)', hex: '#F08080' },
        { name: 'indianred'     , rgb: 'rgb(205,92,92)'  , hex: '#CD5C5C' },
        { name: 'crimson'       , rgb: 'rgb(220,20,60)'  , hex: '#DC143C' },
        { name: 'firebrick'     , rgb: 'rgb(178,34,34)'  , hex: '#B22222' },
        { name: 'red'           , rgb: 'rgb(255,0,0)'    , hex: '#FF0000' },
        { name: 'darkred'       , rgb: 'rgb(139,0,0)'    , hex: '#8B0000' },
        { name: 'maroon'        , rgb: 'rgb(128,0,0)'    , hex: '#800000' },
        { name: 'tomato'        , rgb: 'rgb(255,99,71)'  , hex: '#FF6347' },
        { name: 'orangered'     , rgb: 'rgb(255,69,0)'   , hex: '#FF4500' },
        { name: 'palevioletred' , rgb: 'rgb(219,112,147)', hex: '#DB7093' }
    ];

    return red;
};

// Function That stores all green colors
function greenColors() {

    const green = [
        { name: 'lawngreen'        , rgb: 'rgb(124,252,0)'  , hex: '#7CFC00' },
        { name: 'chartreuse'       , rgb: 'rgb(127,255,0)'  , hex: '#7FFF00' },
        { name: 'limegreen'        , rgb: 'rgb(50,205,50)'  , hex: '#32CD32' },
        { name: 'lime'             , rgb: 'rgb(0.255.0)'    , hex: '#00FF00' },
        { name: 'forestgreen'      , rgb: 'rgb(34,139,34)'  , hex: '#228B22' },
        { name: 'green'            , rgb: 'rgb(0,128,0)'    , hex: '#008000' },
        { name: 'darkgreen'        , rgb: 'rgb(0,100,0)'    , hex: '#006400' },
        { name: 'greenyellow'      , rgb: 'rgb(173,255,47)' , hex: '#ADFF2F' },
        { name: 'yellowgreen'      , rgb: 'rgb(154,205,50)' , hex: '#9ACD32' },
        { name: 'springgreen'      , rgb: 'rgb(0,255,127)'  , hex: '#00FF7F' },
        { name: 'mediumspringgreen', rgb: 'rgb(0,250,154)'  , hex: '#00FA9A' },
        { name: 'lightgreen'       , rgb: 'rgb(144,238,144)', hex: '#90EE90' },
        { name: 'palegreen'        , rgb: 'rgb(152,251,152)', hex: '#98FB98' },
        { name: 'darkseagreen'     , rgb: 'rgb(143,188,143)', hex: '#8FBC8F' },
        { name: 'mediumseagreen'   , rgb: 'rgb(60,179,113)' , hex: '#3CB371' },
        { name: 'lightseagreen'    , rgb: 'rgb(32,178,170)' , hex: '#20B2AA' },
        { name: 'seagreen'         , rgb: 'rgb(46,139,87)'  , hex: '#2E8B57' },
        { name: 'olive'            , rgb: 'rgb(128,128,0)'  , hex: '#808000' },
        { name: 'darkolivegreen'   , rgb: 'rgb(85,107,47)'  , hex: '#556B2F' },
        { name: 'olivedrab'        , rgb: 'rgb(107,142,35)' , hex: '#6B8E23' }
    ];

    return green;
};

// Function That stores all blue colors
function blueColors() {

    const blue = [
        { name: 'aliceblue'      , rgb: 'rgb(240,248,255)', hex: '#F0F8FF' },
        { name: 'lavender'       , rgb: 'rgb(230,230,250)', hex: '#E6E6FA' },
        { name: 'powderblue'     , rgb: 'rgb(176,224,230)', hex: '#B0E0E6' },
        { name: 'lightblue'      , rgb: 'rgb(173,216,230)', hex: '#ADD8E6' },
        { name: 'lightskyblue'   , rgb: 'rgb(135,206,250)', hex: '#87CEFA' },
        { name: 'skyblue'        , rgb: 'rgb(135,206,235)', hex: '#87CEEB' },
        { name: 'deepskyblue'    , rgb: 'rgb(0,191,255)'  , hex: '#00BFFF' },
        { name: 'lightsteelblue' , rgb: 'rgb(176,196,222)', hex: '#B0C4DE' },
        { name: 'dodgerblue'     , rgb: 'rgb(30,144,255)' , hex: '#1E90FF' },
        { name: 'cornflowerblue' , rgb: 'rgb(100,149,237)', hex: '#6495ED' },
        { name: 'steelblue'      , rgb: 'rgb(70,130,180)' , hex: '#4682B4' },
        { name: 'cadetblue'      , rgb: 'rgb(95,158,160)' , hex: '#5F9EA0' },
        { name: 'mediumslateblue', rgb: 'rgb(123,104,238)', hex: '#7B68EE' },
        { name: 'slateblue'      , rgb: 'rgb(106,90,205)' , hex: '#6A5ACD' },
        { name: 'darkslateblue'  , rgb: 'rgb(72,61,139)'  , hex: '#483D8B' },
        { name: 'royalblue'      , rgb: 'rgb(65,105,225)' , hex: '#4169E1' },
        { name: 'blue'           , rgb: 'rgb(0,0,255)'    , hex: '#0000FF' },
        { name: 'mediumblue'     , rgb: 'rgb(0,0,205)'    , hex: '#0000CD' },
        { name: 'darkblue'       , rgb: 'rgb(0,0,139)'    , hex: '#00008B' },
        { name: 'navy'           , rgb: 'rgb(0,0,128)'    , hex: '#000080' },
        { name: 'midnightblue'   , rgb: 'rgb(25,25,112)'  , hex: '#191970' },
        { name: 'blueviolet'     , rgb: 'rgb(138,43,226)' , hex: '#8A2BE2' },
        { name: 'indigo'         , rgb: 'rgb(75,0,130)'   , hex: '#4B0082' }
    ];

    return blue;
};

// Get random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Event listener for the red button
document.getElementById('button-red').addEventListener('click', (e) => {
   
    e.preventDefault();

    // Instantiate Color constructor
    const color = new Color();

    // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: redColors()  : Array
    // Return   : Array
    const randomColorObject = color.randomColorObject(redColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: randomColorObject : Array
    // Return   : Array
    const createColorObjectArray = color.createColorObjectArray(randomColorObject);

    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray)

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray)





    // Failed attempt at creating li element and transferring color object names.
    const swatch = document.getElementById("color-swatch-list");
    const li = document.createElement('li');
    let swatchArray = []

    createColorObjectArray.map( element => swatchArray.push(element.name));
    const objectArray = Object.values(swatchArray);

    
    console.log(objectArray);
    console.log(typeof objectArray);

    li.innerHTML = `<li>${objectArray}</li>`; 

    swatch.appendChild(li);
    
    

});



// Event listener for the green button
document.getElementById('button-green').addEventListener('click', (e) => {
   
    e.preventDefault();

    // Instantiate Color constructor
    const color = new Color();

     // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: greenColors() : Array
    // Return   : Array
    const randomColorObject = color.randomColorObject(greenColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: randomColorObject : Array
    // Return   : Array
    const createColorObjectArray = color.createColorObjectArray(randomColorObject);

    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray)

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray)
});


// Event listener for the blue button
document.getElementById('button-blue').addEventListener('click', (e) => {
   
    e.preventDefault();

    // Instantiate Color constructor
    const color = new Color();

    // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: greenColors() : Array
    // Return   : Array
    const randomColorObject = color.randomColorObject(blueColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: randomColorObject : Array
    // Return   : Array
    const createColorObjectArray = color.createColorObjectArray(randomColorObject);
    
    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray)

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray)
});

