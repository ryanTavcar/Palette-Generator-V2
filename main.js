import {redColors, greenColors, blueColors} from './raw_data.js';


// Color constructor
function Color(name, rgb, hex) {
    this.name = name;
    this.rgb  = rgb;
    this.hex  = hex;
};

// UI constructor
function UI() {};

// Get an array of colors from redColors / greenColors / blueColors function 
UI.prototype.randomColorObject = (rawColorData) => {

    const ColorArray = [];

    rawColorData().forEach( color => ColorArray.push(color));

    return ColorArray;
};

// Create 12 Color objects and return them in an array
UI.prototype.createColorObjectArray = (colorObject) => {

    //const gridSquare = document.getElementsByClassName('grid-sqr');

    const colorObjectArray = []
    
    for (let i = 0; i < colorObject.length; i++) {

        const ColorName = colorObject[i].name.charAt(0).toUpperCase() + colorObject[i].name.substring(1);
        const ColorRGB  = colorObject[i].rgb.toUpperCase();
        const ColorHex  = colorObject[i].hex;
        
        colorObjectArray.push(new Color(ColorName, ColorRGB, ColorHex))

    };    

    // return an array of objects
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

//creating li element and transferring color object names to color-swatch-list ul.
UI.prototype.createColorSwatchList = (createColorObjectArray) => {
    
    let str = ''

    createColorObjectArray.forEach( item => {

        str += `<li class='item-list'>${item.name} ${item.rgb} ${item.hex}</li>`
    }); 


    return document.getElementById("color-swatch-list").innerHTML = str;
};

// Get random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Event listener for the red button
document.getElementById('button-red').addEventListener('click', (e) => {
   
    e.preventDefault();

    // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: redColors()  : Array
    // Return   : Array
    const rawColorData = ui.randomColorObject(redColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: rawColorData : Array
    // Return   : Array of objects
    const createColorObjectArray = ui.createColorObjectArray(rawColorData);

    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray);

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray);

    //creating li element and transferring color object names to color-swatch-list ul.
    ui.createColorSwatchList(createColorObjectArray);
    

});



// Event listener for the green button
document.getElementById('button-green').addEventListener('click', (e) => {
   
    e.preventDefault();

     // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: greenColors() : Array
    // Return   : Array
    const rawColorData = ui.randomColorObject(greenColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: rawColorData : Array
    // Return   : Array of objects
    const createColorObjectArray = ui.createColorObjectArray(rawColorData);

    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray)

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray)

    //creating li element and transferring color object names to color-swatch-list ul.
    ui.createColorSwatchList(createColorObjectArray);
});


// Event listener for the blue button
document.getElementById('button-blue').addEventListener('click', (e) => {
   
    e.preventDefault();

    // Instantiate UI constructor
    const ui = new UI();

    // Get random redColor object from raw color data
    // Parameter: greenColors() : Array
    // Return   : Array
    const rawColorData = ui.randomColorObject(blueColors);

    // Create 12 Color objects and return them in createColorObjectArray
    // Parameter: rawColorData : Array
    // Return   : Array of objects
    const createColorObjectArray = ui.createColorObjectArray(rawColorData);
    
    // Change background color of the 12 cell grids
    ui.generateColors(createColorObjectArray)

    // Console.log the Color objects used to color the 12 cell grids
    console.log(createColorObjectArray)

    //creating li element and transferring color object names to color-swatch-list ul.
    ui.createColorSwatchList(createColorObjectArray);
});

